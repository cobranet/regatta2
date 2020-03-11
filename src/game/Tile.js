import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Motion,spring } from 'react-motion';
import { withStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    g: {
	position: 'relative'
    }
}));

const colors = [ "black","white"];
const strokes = ["gold", "blue" ];

const createPath=(tile)=>{

    const {size} = tile;

    var d = "M " + 0 + " " + 0 + " " +
	"C " + (size/3) + " " + (0+2*size/3) + " " +
	(0+size/3) + " " + (0+size-size/3)  + " " +
	0 + " " + (0+size) + " " + 
	"L " + (0 + size) + " " + (0+size) + " " +
	"C " + (0+size) + " " + (0 + size/10) + " " +
	(0+size) + " " + (0 + size/10) + " " +
	0 + " " + 0;
    return d;
};




const getStyle=(tile)=>{
   return {
       fill: colors[tile.color],
       stroke: strokes[tile.color],
       strokeWidth: tile.selected === 0  ? 1 : 3
   };
};


const springConfig = {
  stiffness: 440,
  damping: 88,
    
};

const springConfigRot = {
  stiffness: 440,
  damping: 88,
    
};


const getTranslate=(style,tile)=>{
    const {x,y,angle,size} = style;
    
    return 'translate(' + x + ',' + y + ')' +
	" rotate(" + angle*45 + "," + size/2 + "," + size/2+")"  ;    
};



function GCard(props){
    const classes=useStyles();
    const {tile,clickTile} = props;
    return (
	<Motion
	  defaultStyle={ {angle: tile.old.angle ,
	                  x: tile.old.x,
			  y: tile.old.y,
	  size: tile.old.size} }
	  style={ {size: tile.size,angle: spring(tile.angle,springConfigRot),
		   x: spring(tile.x,springConfig),
	  y: spring(tile.y,springConfig)  } }
        >
	  {style => 
	      (
		  <g onClick={(e)=>clickTile(e.nativeEvent.offsetX,tile)} className={classes.g}  
		    transform = {  getTranslate(style) } 
		    >
		      <path style={getStyle(tile)} d ={createPath(tile)}  />
		  </g>    
	      )
	  }
	</Motion> 
	);
}
export default GCard;
