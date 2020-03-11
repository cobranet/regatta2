import {getNewAngle,findTile}  from './helper';


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
      }




export const logictableReducer =(state=initialState,action)=>{
    const {type,payload} = action;

    switch (type ){
	    
	    

    case "CHALLENGE_ACCEPTED" :	{
	let newState = Object.assign( state,{black: payload.playerA , white: payload.playerB,appMode:"GAME"}  );
	return newState;
    }

    case "ACCEPT_CHALLENGE" :	{
	let newState = Object.assign( state,{black: payload.playerA , white: payload.playerB,appMode:"GAME"});
	return newState;
    }

    	
	
    case "END_TURN": {
	alert("MOVE + ");
	return state;
    }
	
    case "PLAY_TILE": {
	console.log("PLAY TILE STATE", state);
	const {tile,x,y} =  payload;
	const newTable=[...state.table]
	newTable[x][y] = { olor: tile.color, angle: tile.angle,id: tile.id};
	return Object.assign({},state,{ moveMode: "ROTATE", table: newTable, status: 1, message: "ROTATE OR END", move: [...state.move, { what: "P",
													        id: tile.id,
														x: x,
														y: y}]});
    }
    case "ROTATE_TILE": {
	const {tile,rotation} =  payload;
	if ( findTile(state.table,tile.id) === null ){
	    return state;
	}
	const {x,y} = findTile(state.table,tile.id);
	const newTable=[...state.table]
	newTable[x][y] = {color: tile.color, angle: getNewAngle(tile.angle,rotation)  ,id: tile.id};
	return Object.assign({},state,{ table: newTable, status: 1, message: "ROTATE OR END"});
    }
	
    default: {
	return state;
    }
    }

}

export default logictableReducer;
