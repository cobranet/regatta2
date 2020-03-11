import React from 'react';
import Ax from './ax';
import twox from './twox';
import threex from './threex';
import fourx from './fourx';
import fivex from './fivex';
import jockerx from './jockerx';
import backx  from './backx';
import sixx from './sixx';
import sevenx from './sevenx';
import eightx from './eightx';
import ninex from './ninex';
import tenx from './tenx';
import jacks from './jacks';
import queens from './queens';
import kings from './kings';
function Card(props){
    const svgCard = (card)=>{
	const h = 3.5 * Number(props.size);
	const w = 2.5 * Number(props.size);
	switch(card){
	case "AC":
	case "AD":
	case "AH":
	case "AS":
	    return Ax(card,h,w);
	case "2C":
	case "2D":
	case "2H":
	case "2S":
	    return twox(card,h,w);
	case "3C":
	case "3D":
	case "3H":
	case "3S":
	    return threex(card,h,w);
	case "4C":
	case "4D":
	case "4H":
	case "4S":
	    return fourx(card,h,w);
	case "5C":
	case "5D":
	case "5H":
	case "5S":
	    return fivex(card,h,w);
	case "6C":
	case "6D":
	case "6H":
	case "6S":
	    return sixx(card,h,w);
	case "7C":
	case "7D":
	case "7H":
	case "7S":
	    return sevenx(card,h,w);
	case "8C":
	case "8D":
	case "8H":
	case "8S":
	    return eightx(card,h,w);
	case "9C":
	case "9D":
	case "9H":
	case "9S":
	    return ninex(card,h,w);
	case "TC":
	case "TD":
	case "TH":
	case "TS":
	    return tenx(card,h,w);
	case "JC":
	case "JD":
	case "JH":
	case "JS":
	    return jacks(card,h,w);
	case "QC":
	case "QD":
	case "QH":
	case "QS":
	    return queens(card,h,w);
	case "KC":
	case "KD":
	case "KH":
	case "KS":
	    return kings(card,h,w);

	case "1J":
	case "2J":
	    return jockerx(card,h,w);
	case "1B":
	case "2B":
	    return backx(card,h,w);
	default:
	    return "";
	    
	};
    };

    
    
    var style = {
	position: 'absolute',
	top: props.y+"px",
	left: props.x +"px",
	transform: 'rotate(' +props.deg+'deg)',
	zIndex: props.move,
	transition: 'left 5s, top 5s',
    };
    
    
    return ( <span onClick={()=>props.handleClick(props.id)} style={style}  >{svgCard(props.card)}</span>  );
};

export default React.memo(Card);
