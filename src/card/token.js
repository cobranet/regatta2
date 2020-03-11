import React from 'react';
export default function Token(props){
    var style = {
	position: 'absolute',
	top: props.y+"px",
	left: props.x +"px",
	zIndex: props.move,
	maxWidth: props.size,
	minWidth: props.size,
	transition: 'left 1s, top 1s',
    };



    var color1 = 'green';
    var color2 = 'green';
    var color3 = 'yellow';
    var color4 = 'gold';

    if(props.player == 1 ) {
	color1 = 'blue';
	color2 = 'blue';
	color3 = 'yellow';
	color4 = 'gold';
    }
	
    return (<span style={style}>
	    	    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	    viewBox="0 0 56 56" style={{enableBackground:'new 0 0 56 56'}} xmlSpace="preserve">
<g>
	    <circle style={{fill:color1}} cx="28" cy="28" r="28"/>
	    <path style={{fill:color3}} d="M28,14c2.465,0,4.818,0.47,7,1.289V0.882C32.763,0.306,30.417,0,28,0s-4.763,0.306-7,0.882v14.407
		C23.182,14.47,25.535,14,28,14z"/>
	    <path style={{fill:color3}} d="M28,42c-2.465,0-4.818-0.47-7-1.289v14.407C23.237,55.694,25.583,56,28,56s4.763-0.306,7-0.882
		V40.711C32.818,41.53,30.465,42,28,42z"/>
	    <path style={{fill:color3}} d="M42,28c0,2.465-0.47,4.818-1.289,7h14.407C55.694,32.763,56,30.417,56,28s-0.306-4.763-0.882-7
		H40.711C41.53,23.182,42,25.535,42,28z"/>
	    <path style={{fill:color3}} d="M14,28c0-2.465,0.47-4.818,1.289-7H0.882C0.306,23.237,0,25.583,0,28c0,2.417,0.306,4.763,0.882,7
		h14.407C14.47,32.818,14,30.465,14,28z"/>
	    <path style={{fill:color2}} d="M28,49C16.42,49,7,39.58,7,28S16.42,7,28,7s21,9.42,21,21S39.58,49,28,49z"/>
	    <path style={{fill:color4}} d="M31.109,25.011c0.244-0.517,0.391-1.089,0.391-1.698c0-2.209-1.791-4-4-4s-4,1.791-4,4
		c0,0.61,0.147,1.181,0.391,1.698C21.734,25.07,20,26.828,20,29c0,2.209,1.791,4,4,4c0.968,0,1.843-0.358,2.535-0.929
		c-0.009,0.796-0.157,2.114-0.976,3.045c-0.662,0.753-1.691,1.135-3.059,1.135c-0.553,0-1,0.447-1,1s0.447,1,1,1
		c1.975,0,3.513-0.614,4.571-1.826c1.206-1.38,1.445-3.184,1.464-4.295C29.217,32.666,30.065,33,31,33c2.209,0,4-1.791,4-4
		C35,26.828,33.266,25.07,31.109,25.011z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
	    </span>
    );
}
