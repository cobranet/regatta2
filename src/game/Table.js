import React,{useState,useReducer} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlayTable from './PlayTable';
import tileReducer from './tileReducer';
import {isAllowed,selectedTile,isAllowedOnTable} from './helper';
import {logictableReducer} from './logictableReducer';
import {tableReducer,initialTableState} from './tableReducer';






const initialState=
      {  table : [
	  [null,null,null,null,null,null,null,null],
	  [null,null,null,null,null,null,null,null],   
	  [null,null,null,null,null,null,null,null],
	  [null,null,null,null,null,null,null,null],
	  [null,null,null,null,null,null,null,null],
	  [null,null,null,null,null,null,null,null],   
	  [null,null,null,null,null,null,null,null],
	  [null,null,null,null,null,null,null,null]
         ],
	 black: {},
	 white: {},
	 status: 0,
	 moveMode: "WAIT",
	 message: "PLACE, PICK OR SLIDE",
	 move: []
      };



const useStyles = makeStyles(theme => ({
    table: {
	border: "1px solid green",
	backgroundColor: "red",
	flexGrow: 1,
    }
    }));
    

 

function Table(){
    const classes= useStyles();
    const [table,dispatch]= useReducer(tableReducer,initialTableState);
    const [lt,dispatchLt] = useReducer(logictableReducer,initialState);

    const clickTable=(x,y)=>{
	const selected = selectedTile(table);
	if( selected && lt.moveMode === "WAIT" && isAllowedOnTable(x,y,lt.table,selected.angle)  ){
	    dispatch({type:"PLAY_TILE",payload: {tile:selected, x: x,y:y}});
	}
    };

    
    const clickTile=(x,tile)=>{
	console.log(table);
	if ( table.mode === "WAIT" && tile.selected === 0 ) {
	    dispatch({ type:"SELECT_TILE",payload: {tile: tile}});
	    return;
	}
	if ( ["ROTATE" , "WAIT"].includes(lt.moveMode) && tile.selected === 1   ) {
	    let rotation = 1;
	    if ( x < tile.x + tile.size / 2 ) {
		rotation = -1;
	    }
	    if( isAllowed(tile,lt.table,rotation)  ) {
		dispatch({ type: "ROTATE_TILE", payload: {tile: tile,rotation}});
	    }
	} 
 };

    
    return( 
	    <div>
	    <PlayTable clickTile={clickTile}
	               clickTable={clickTable}
	               table={table}
	               logictable={initialState.table} />
	    </div>
    );

}

export default React.memo(Table);
