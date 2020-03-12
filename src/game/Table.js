import React,{useState,useReducer,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import PlayTable from './PlayTable';
import tileReducer from './tileReducer';
import {isAllowed,selectedTile,isAllowedOnTable} from './helper';
import {createTiles,tableReducer,initialTableState} from './tableReducer';
import {gameReducer} from './gameReducer';
import {sendTileClick,getMyGame} from '../util/APIUtils';






const useStyles = makeStyles(theme => ({
    table: {
	border: "1px solid green",
	backgroundColor: "red",
	flexGrow: 0,
	justify: 'center',
	padding: '3px',
	spacing: 2
    },
    cent:{
	border: "2px solid gold"
    },
    
    player:{
	border: "6px solid blue",
	justify: 'center',
    }
    }));
    

 

function Table(){
    const classes= useStyles();
    const [game,dispatchGame] = useReducer(gameReducer,{loading: true,
							game: {},
							error:""
						       });

    useEffect(()=>{
	getMyGame().then((response)=>
			 dispatchGame({type:'FETCH_SUCCESS',
				       payload: response}))
	    .catch((err)=>
		   dispatchGame({type:'FETCH_ERROR',
				 payload: err}));

    },[]);
    

    const clickTile=(x,tile)=>{
	alert(tile.id);
	alert(x);
	sendTileClick(tile.id).then((response)=>
			     dispatchGame({type:'TILE_CLICKED',
					   payload:response}));
			     
    };
    
    return(
	<div>
	{ game.loading ? <div >Loading</div>:
	    <Grid container className={classes.table} >
		  <Grid item xs={2} className={classes.player} >
		       <Avatar src={game.data.white.imageUrl}/>
		     </Grid>
		      <Grid item xs={8} className={classes.cent}>
			   <PlayTable 	  tiles={game.data.tiles}
					      table={game.data.table}
					      selectedTileId={game.data.selectedTileId}
					      clickTile={clickTile}    
					  size={40}  />
	             </Grid>
			 <Grid item xs={2} className={classes.player}>
		      <Avatar src={game.data.black.imageUrl}/>
		</Grid> 
	    </Grid> }
	</div>
    );

}

export default React.memo(Table);
