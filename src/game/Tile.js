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

const createPath=(tile,size)=>{


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




const getStyle=(tile,selected)=>{
   return {
       fill: colors[tile.color],
       stroke: strokes[tile.color],
       strokeWidth: selected === 0  ? 1 : 3
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
    const {tile,clickTile,size,selected} = props;

    var old_angle;
    var old_x;
    var old_y;
    
    var angle;
    var x;
    var y;

    if(tile.position.onTable==false){
	console.log(false);
	x = 410*tile.color+ size * Math.random(size);
	y = 300 + size*Math.random(size);
	angle = tile.color;

	old_x = size * Math.random(size);
	old_y = tile.color + size*Math.random(size);
	old_angle = tile.color+1;
	
    } else {
	x = size * Math.random(size);
	y = 300 + size*Math.random(size);
	angle = tile.color;

	old_x = size * Math.random(size);
	old_y = tile.color + size*Math.random(size);
	old_angle = tile.color+1;
    }
    return (
	<Motion
	  defaultStyle={ {angle: old_angle ,
	                  x: old_x,
			  y: old_y,
	  size: size} }
	style={ {size: size,
		 angle: spring(angle,springConfigRot),
		   x: spring(x,springConfig),
	  y: spring(y,springConfig)  } }
        >
	  {style => 
	      (
		  <g onClick={(e)=>clickTile(x-e.nativeEvent.offsetX+size,tile)} className={classes.g}  
		    transform = {  getTranslate(style) } 
		    >
		    <path style={getStyle(tile,selected)}
			  d ={createPath(tile,size)}  />
		  </g>    
	      )
	  }
	</Motion> 
	);
}
export default GCard;
