import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root:{
	padding: '10xp',
	minWidth: 260,
	minHeight: 350,
    },
   list: {
       width: '100%',
      maxHeight: 350,
      overflow: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));




export default function Chat(props){
    const classes = useStyles();
    const [myMessage,setMyMessage]=useState("");
    const handleMyMessage=(e)=>{
	setMyMessage(e.target.value);
    };
    const handleKeyDown=(e)=>{
	if (e.key === 'Enter') {
	    props.sendMessage(myMessage);
	    setMyMessage("");
	}
    };

    const renderMessage=(message,i)=>
	  <ListItem key={i} alignItems="flex-start">
	    <ListItemAvatar>
              <Avatar alt={message.email} src={message.imageUrl} />
            </ListItemAvatar>
            <ListItemText
                primary={message.content}
        />
	  
	  </ListItem>;

    
    
    return (
	<Card variant="outlined" className={classes.root}>
	  <CardContent>
	    <Grid container>
	      <Grid item xs={12}>
		<Grid container>
		  <Grid item xs={3}>
		    <Typography className={classes.title} color="textSecondary" gutterBottom>
          Chat
           </Typography>

		  </Grid>
		  <Grid item xs={9}>
		    <input onKeyDown={handleKeyDown} onChange={handleMyMessage} value={myMessage} type="text"></input>
		    </Grid>

		</Grid>
	      </Grid>

	   
	   <Grid item xs={12}>
	  <List className={classes.list}>
	    {props.chatMessages.map((message,i)=>renderMessage(message,i))}
	  </List>
	     </Grid>
	  </Grid>
	  </CardContent>
	</Card>
    );

}
