import React from 'react';

export default function jockerx(card,h,w){
    switch (card){
    case "1J":
	return (
		<svg xmlns="http://www.w3.org/2000/svg"  className="card" face="1J" height={h+'in'} preserveAspectRatio="none" viewBox="-120 -168 240 336" width={w+'in'}><symbol id="J11" preserveAspectRatio="none" viewBox="0 0 1300 2000"><path fill="#FC4" d="M1095,1000A445,445 0 0 1 650,1445 445,445 0 0 1 205,1000 445,445 0 0 1 650,555 445,445 0 0 1 1095,1000Z"></path></symbol><symbol id="J12" preserveAspectRatio="none" viewBox="0 0 1300 2000"><path fill="red" d="M317.05664,1294.416 100,1620l220,-60 40,240 140,-200 160,200 40,-200 180,180 60,-220 260,60 -236.67969,-304.3027A445,445 0 0 1 650,1445 445,445 0 0 1 317.05664,1294.416ZM831.71484,249.10742C687.94378,262.65874 542.4812,256.33752 420,520 369.08062,331.38331 278.61481,370.61289 187.77148,412.01367a75,75 0 0 1 2.52344,19.12695 75,75 0 0 1 -16.78515,47.19532c66.827,55.25537 117.57478,127.8247 155.77539,213.90429A445,445 0 0 1 650,555 445,445 0 0 1 924.33984,650.26562c42.39917,-50.4556 91.60026,-93.34711 167.51176,-106.5332a75,75 0 0 1 -0.6524,-9.14258 75,75 0 0 1 14.6172,-44.3457C1026.3517,437.47479 931.12146,446.83238 840,440 761.98041,388.07638 804.10248,338.17898 853.51758,288.4043a75,75 0 0 1 -21.80274,-39.29688z"></path></symbol><symbol id="J13" preserveAspectRatio="none" viewBox="0 0 1300 2000"><path fill="#44F" d="M879.65521,937.6026a40,40 0 0 1 -40,40 40,40 0 0 1 -40,-40 40,40 0 0 1 40,-40 40,40 0 0 1 40,40zm-379.31039,0a40,40 0 0 1 -40,40 40,40 0 0 1 -40,-40 40,40 0 0 1 40,-40 40,40 0 0 1 40,40z"></path></symbol><symbol id="J14" preserveAspectRatio="none" viewBox="0 0 1300 2000"><path stroke="#44F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" fill="none" d="M317.05664,1294.416 100,1620l220,-60 40,240 140,-200 160,200 40,-200 180,180 60,-220 260,60 -236.67969,-304.3027M1241.1987,534.58948a75,75 0 0 1 -75,75 75,75 0 0 1 -75,-75 75,75 0 0 1 75,-75 75,75 0 0 1 75,75zM980.11493,234.09686a75,75 0 0 1 -75,75 75,75 0 0 1 -75,-75 75,75 0 0 1 75,-75 75,75 0 0 1 75,75zM190.29556,431.1412a75,75 0 0 1 -75,75 75,75 0 0 1 -74.999997,-75 75,75 0 0 1 74.999997,-75 75,75 0 0 1 75,75zM924.3457,650.27148c42.40088,-50.45397 91.5936,-93.35356 167.5059,-106.53906 -0.4037,-3.03138 -0.6215,-6.0846 -0.6524,-9.14258 0.03,-15.96068 5.1503,-31.4957 14.6172,-44.3457C1026.3517,437.47479 931.12146,446.83238 840,440 761.98041,388.07638 804.10248,338.17898 853.51758,288.4043 842.40414,277.84182 834.79487,264.12701 831.71484,249.10742 687.94378,262.65874 542.4812,256.33752 420,520 369.08062,331.38331 278.61481,370.61289 187.77148,412.01367c1.66108,6.24042 2.50924,12.66925 2.52344,19.12695 -0.0209,17.1896 -5.94587,33.85038 -16.7832,47.19336 66.82714,55.25532 117.5686,127.8306 155.76953,213.91016M384.88867,1140c51.89013,98.343 153.91815,159.9189 265.11133,160 111.19809,-0.076 213.23257,-61.6527 265.125,-160M1095,1000A445,445 0 0 1 650,1445 445,445 0 0 1 205,1000 445,445 0 0 1 650,555 445,445 0 0 1 1095,1000Z"></path></symbol><rect width="239" height="335" x="-119.5" y="-167.5" rx="12" ry="12" fill="white" stroke="black"></rect><use width="202.8" height="312" x="-101.4" y="-156" xlinkHref="#J11"></use><use width="202.8" height="312" x="-101.4" y="-156" xlinkHref="#J12"></use><use width="202.8" height="312" x="-101.4" y="-156" xlinkHref="#J13"></use><use width="202.8" height="312" x="-101.4" y="-156" xlinkHref="#J14"></use></svg>
	    );
	case "2J":
	    return(<svg xmlns="http://www.w3.org/2000/svg" className="card" face="2J" height={h+'in'} preserveAspectRatio="none" viewBox="-120 -168 240 336" width={w+'in'}><symbol id="J21" preserveAspectRatio="none" viewBox="0 0 1300 2000"><path fill="black" d="M879.65521,937.6026a40,40 0 0 1 -40,40 40,40 0 0 1 -40,-40 40,40 0 0 1 40,-40 40,40 0 0 1 40,40zm-379.31039,0a40,40 0 0 1 -40,40 40,40 0 0 1 -40,-40 40,40 0 0 1 40,-40 40,40 0 0 1 40,40z"></path></symbol><symbol id="J22" preserveAspectRatio="none" viewBox="0 0 1300 2000"><path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" fill="none" d="M317.05664,1294.416 100,1620l220,-60 40,240 140,-200 160,200 40,-200 180,180 60,-220 260,60 -236.67969,-304.3027M1241.1987,534.58948a75,75 0 0 1 -75,75 75,75 0 0 1 -75,-75 75,75 0 0 1 75,-75 75,75 0 0 1 75,75zM980.11493,234.09686a75,75 0 0 1 -75,75 75,75 0 0 1 -75,-75 75,75 0 0 1 75,-75 75,75 0 0 1 75,75zM190.29556,431.1412a75,75 0 0 1 -75,75 75,75 0 0 1 -74.999997,-75 75,75 0 0 1 74.999997,-75 75,75 0 0 1 75,75zM924.3457,650.27148c42.40088,-50.45397 91.5936,-93.35356 167.5059,-106.53906 -0.4037,-3.03138 -0.6215,-6.0846 -0.6524,-9.14258 0.03,-15.96068 5.1503,-31.4957 14.6172,-44.3457C1026.3517,437.47479 931.12146,446.83238 840,440 761.98041,388.07638 804.10248,338.17898 853.51758,288.4043 842.40414,277.84182 834.79487,264.12701 831.71484,249.10742 687.94378,262.65874 542.4812,256.33752 420,520 369.08062,331.38331 278.61481,370.61289 187.77148,412.01367c1.66108,6.24042 2.50924,12.66925 2.52344,19.12695 -0.0209,17.1896 -5.94587,33.85038 -16.7832,47.19336 66.82714,55.25532 117.5686,127.8306 155.76953,213.91016M384.88867,1140c51.89013,98.343 153.91815,159.9189 265.11133,160 111.19809,-0.076 213.23257,-61.6527 265.125,-160M1095,1000A445,445 0 0 1 650,1445 445,445 0 0 1 205,1000 445,445 0 0 1 650,555 445,445 0 0 1 1095,1000Z"></path></symbol><rect width="239" height="335" x="-119.5" y="-167.5" rx="12" ry="12" fill="white" stroke="black"></rect><use width="202.8" height="312" x="-101.4" y="-156" xlinkHref="#J21"></use><use width="202.8" height="312" x="-101.4" y="-156" xlinkHref="#J22"></use></svg>);


    }
    
}
