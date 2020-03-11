import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Route,Switch} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import AppHeaderMU from './common/AppHeaderMU';
import Home from './home/Home';
import Profile from './user/profile/Profile';
import OAuth2RedirectHandler from './user/oauth2/OAuth2RedirectHandler';
import NotFound from './common/NotFound';
import LoadingIndicator from './common/LoadingIndicator';
import { getCurrentUser } from './util/APIUtils';
import { getMyGame} from './util/APIUtils';
import { ACCESS_TOKEN } from './constants';
import {Stomp} from '@stomp/stompjs';
import PrivateRoute from './common/PrivateRoute';
import 'typeface-roboto';


const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
  }
}));



export default function App(props){
    
    const classes=useStyles();
    const [stompClient,setStompClient] = useState(null);
    const [chatMessages,setChatMessages] = useState([]);
    const [game,setGame] = useState({});

    
    const sendChatMessage=(message)=>{
	var chatMessage = {
            sender: mainState.currentUser.name,
            content: message,
            type: 'CHAT',
	    imageUrl: mainState.currentUser.imageUrl
        };
	stompClient.send("/app/chat.sendMessage", {},
				    JSON.stringify(chatMessage));
    };
    
    const [mainState,setMainState]=useState({
	authenticated: false,
	currentUser:null,
	loading:false});



    
    const onChatMessage=(message)=>{
	setChatMessages((chatMessages)=>{
	    var k = chatMessages.length;
	    if(k>4) k = 4;
	    return [message,...chatMessages.slice(0,k)];
	}
		       );
    };
    const onMessageReceived=(payload)=>{
	var message = JSON.parse(payload.body);
	switch(message.type){
	case "CHAT":
	    onChatMessage(message);
	    break;
	default:
	    alert("Invalid type");
	}
    };
    const onConnect=(stompC,useremail)=>{
	stompC.subscribe('/topic/public', onMessageReceived);
	console.log(useremail);
	stompC.subscribe('/queue/'+useremail, onMessageReceived);
	setStompClient(stompC);
    };
    
    const loadCurrentlyLoggedInUser = ()=> {
	setMainState({...mainState,loading: true});
	
	getCurrentUser()
	    .then(response => {
		var stompC = Stomp.client('ws://localhost:8080/looping?access_token='+localStorage.getItem(ACCESS_TOKEN));
		setMainState({
		    currentUser: response,
		    stompClient:stompC,
		    authenticated: true,
		    loading: false
		});
		stompC.connect({} 
			       , ()=>onConnect(stompC,response.email),
		 		    ()=>{alert("error conn")});


	    }).catch(error => {
		setMainState({...mainState,loading: false});
	    });    
    };
    
    
    const handleLogout=()=>{
	localStorage.removeItem(ACCESS_TOKEN);
	setMainState({...mainState,authenticated: false, currentUser: null});
	alert("You're safely logged out!");
    };

    useEffect(()=>loadCurrentlyLoggedInUser(),[]);
    
    return (
	mainState.loading  ?
	    <LoadingIndicator /> :
	    <div className={classes.root}>
	    <Container maxWidth ="lg" >
	    <AppHeaderMU currentUser={mainState.currentUser}  authenticated={mainState.authenticated} onLogout={handleLogout} />
          <Switch>

            <Route exact path="/" render={(props)=>
					  <Home {...props}
					  sendMessage={sendChatMessage}
					  chatMessages={chatMessages}
					  />}/>

            <PrivateRoute path="/profile" authenticated={mainState.authenticated} currentUser={mainState.currentUser}
			  component={Profile}></PrivateRoute>
	    
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>  
            <Route component={NotFound}></Route>
          </Switch>
	    </Container>
	   </div>
    );
};



