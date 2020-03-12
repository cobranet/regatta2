import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper,Button,Grid } from '@material-ui/core';
import Tile from './Tile';
import {  isAllowed } from './helper';

const create_grid_path = (x,y,size)=>{
	    var d = "M " + x + " " + y + "  " + 
	    "L "  + x + " " + (y+size) + " " +
	    "L "  + (x +size) + " " + (y+size) + " " +
		"L " +(x+size) + " " + y + " " +
		"L " + x + " " +  y;
	    return d;
};




const useStyles = makeStyles(theme => ({
    table: {
	width: 500,
	height: 500,
	backgroundColor: 'darkgray'
    },
    line:{
	strokeWidth: 1,
	fill: "lightgray",
	stroke: "black"
    }
}));


function PlayTable(props){
    
    const classes=useStyles();
    const {
	clickTile,
	clickTable,
	tiles,
	selectedTileId,
	table,
	size
    } = props;
    
    const tsize = size;
    
    
    return (
	<Grid item>
	    <svg id="tiles" className={classes.table}  >
		{ table.map((t,i)=> {
		    return t.map((b,k)=> {
		      return <g key={i*8+k}
				onClick={()=>clickTable(i,k)}>
		                <path className={classes.line} key={i*8+k} d={create_grid_path(2*tsize + tsize*i, 2*tsize + tsize*k,tsize)}  />
	                  </g>;
	              });
		  })
	      }

		  {   tiles.map((tile) => 
				      <Tile key={tile.id}
						tile ={tile}
						clickTile={clickTile}
						size={size}
						selected={tile.id === selectedTileId ? 1:0  }
					    clickTile={clickTile}
						/>
				     )
		  }

	</svg>
	    </Grid>

	);

};
				  
export default PlayTable;
