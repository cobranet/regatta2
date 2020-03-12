import tileReducer from './tileReducer';



export const createTiles=(tileSize)=>{
    let all = [];
    for (let i=0; i<21; i++){
	let tileBlack = {
	    id: i,
	    x: tileSize * Math.random(tileSize),
	    y: 300+tileSize * Math.random(tileSize) ,
	    angle: 0,
	    size: tileSize,
	    selected: 0,
	    color:0,
	    old : {
		x: tileSize * Math.random(tileSize),
		y :tileSize * Math.random(tileSize) ,
		angle: 1,
		size: tileSize,
		selected: 0,
		color:0,
	    } 
	};

	let tileWhite = {
	    id: i+21,
	    x: 410 + tileSize * Math.random(tileSize),
	    y : 300+tileSize * Math.random(tileSize) ,
	    angle: 1,
	    size: tileSize,
	    selected: 0,
	    color:1,
	    old : {
		x: tileSize * Math.random(tileSize),
		y :tileSize * Math.random(tileSize) ,
		angle: 1,
		size: tileSize,
		selected: 0,
		color:0,
	    } 
	};
	all.push(tileWhite);
	all.push(tileBlack);
    }
    return all;
};


export const initialTableState = {
    tiles: createTiles(40) ,
    size:  8*40,
    onMove: 0,
    activeTile: null,
    mode: "WAIT"
};



export const tableReducer = (state=initialTableState,action)=>{
    console.log(action);
    const {type, payload} = action;
    switch(type){
    case "SELECT_TILE": {
	const newtiles=state.tiles.map((tile)=>tileReducer(tile,action)); 
	return Object.assign({},state,{tiles: newtiles});
    }
    case "ROTATE_TILE" : {
	const newtiles=state.tiles.map((tile)=>tileReducer(tile,action)); 
	return Object.assign({},state,{tiles: newtiles});
    }
    case "PLAY_TILE":{
	// enrich the payload
	const {tile} = payload;
	const newAction = Object.assign({},action);
	const newPayload = Object.assign({},payload);
	const enrichAction = Object.assign(newAction,{ payload: Object.assign(newPayload,{ x: 2*tile.size+payload.x*tile.size, y: 2*tile.size+payload.y*tile.size })});
	const newtiles=state.tiles.map((tile)=>tileReducer(tile,enrichAction)); 
	return Object.assign({},state,{tiles: newtiles});
    }
    default:	
	return state;
    }
};
