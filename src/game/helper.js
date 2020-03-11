

export const findTile=(logictable,id)=>{
    for(let i=0;i<8; i++){
	for( let k = 0; k < 8; k++) {
	    if ( logictable[i][k] !== null && logictable[i][k].id === id ){
		return { x: i, y: k };
	    }
	}
    }
    return null;
}


export const getNeighbours=(x,y,logictable)=>{
    /* this is hash with vaules up,down,left,righ and it is filed with 1 ( filled ) or 0 (free ) */
    let neighbours = [];

    neighbours['up'] = 0;
    neighbours['down'] = 0;
    neighbours['left'] = 0;
    neighbours['right'] = 0;

    if ( x === 0 ) {
	neighbours['left'] = 1;
    }

    if ( x === 7 ) {
	neighbours['right'] = 1;
    }

    if ( y === 0 ) {
	neighbours['up'] = 1;
    }

    if ( y === 7 ) {
	neighbours['down'] = 1;
    }

    if ( y !== 0 && logictable[x][y-1] !== null && logictable[x][y-1] !== 6 ) {
	neighbours['up'] = 1;
    }

    if ( y !== 7 && logictable[x][y+1] !== null && logictable[x][y+1] !== 2 ) {
	neighbours['down'] = 1;
    }

    if ( x !== 0 && logictable[x-1][y] !== null && logictable[x-1][y] !== 4 ) {
	neighbours['left'] = 1;
    }

    if ( x !== 7 && logictable[x+1][y] !== null && logictable[x+1][y] !== 0 ) {
	neighbours['right'] = 1;
    }
    return neighbours;
    
}

export const getNewAngle=(angle,rotation)=>{
    let newAngle = angle+1*rotation;
        console.log("NEW ANGLE pre",newAngle);
        newAngle = newAngle % 7
    if( newAngle < 0 ) {
	newAngle = 8 + newAngle;
    }
    console.log("NEW ANGLE",newAngle);
    return newAngle;
}


export const isOnTable=(tile,logictable)=>{
    return findTile(logictable,tile.id) === null  ?  false : true
}

export const isValidPlacement=(logictable,x,y,angle)=>{
    if([1,3,4,7].includes(angle)) return true;
    if(allowedAngles(x,y,logictable).size === 0 ) return true;
    return false;
}
export const isAllowedOnTable=(x,y,logictable,angle)=>{
    return allowedAngles(x,y,logictable).includes(getNewAngle(angle,0));
}
export const isAllowed=(tile,logictable,rotation)=>{
    if ( isOnTable(tile,logictable) === false ) {
	return true;
    }
    const {x,y} = findTile(logictable,tile.id);
    
    return allowedAngles(x,y,logictable).includes(getNewAngle(tile.angle,rotation));
}

const remove=(arr,ele)=>{
    const index = arr.indexOf(ele);
    arr.splice(index,1);
}

export const allowedAngles=(x,y,logictable)=>{
    let allowed = [0,1,2,3,4,5,6,7];
    const neighbours = getNeighbours(x,y,logictable);
    console.log("NEIGH",neighbours);
    if ( neighbours['up'] === 1 ){
	remove(allowed,1);
	remove(allowed,3);
	remove(allowed,5);
    }
    if ( neighbours['down'] === 1 ){
	remove(allowed,1);
	remove(allowed,5);
	remove(allowed,7);
    }

    if ( neighbours['left'] === 1 ){
	remove(allowed,1);
	remove(allowed,3);
	remove(allowed,7);
    }

    if ( neighbours['right'] === 1 ){
	remove(allowed,3);
	remove(allowed,5);
	remove(allowed,7);
    }
    return allowed;
}

export const selectedTile=(table)=>{
    const selected = table.tiles.filter( (tile)=> tile.selected === 1 );
    if (selected.length > 0){
	return selected[0];
    }
    return null;
}
