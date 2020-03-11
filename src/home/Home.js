import React,{useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Chat from '../util/Chat';
import Table from '../game/Table';
import {createGame} from '../util/APIUtils';
const useStyles = makeStyles(theme => ({
    root: {
	flexGrow: 1,
    },
    actions:{
	padding: "10px",
    },
    table: {
	border: "1px solid green",
	backgroundColor: "gray",
	flexGrow: 1,
	minHeight: "650px",
	maxWidth: "900px",
    },
    year1932: {
	marginRight: theme.spacing(2),
    },
}));


export default function Home(props) {
   
    const classes= useStyles();
    return (
    <React.Fragment>
      <Container maxWidth="lg">
	<Grid container>
	  <Grid className={classes.actions} item xs={12} >

	    <Button onClick={()=>{alert("test")}} variant="contained" color="primary">TEST</Button>
	  </Grid>
	  <Grid item xs={12}>
	    <Grid container>
	      <Grid item xs={10}>
	      <Table/>
	</Grid>
	    <Grid item xs={2}>
	    
	    <Chat sendMessage ={props.sendMessage} chatMessages={props.chatMessages}   />
	    </Grid>
	    </Grid>
	    </Grid>
</Grid>
      </Container>
    </React.Fragment>
  );
}

