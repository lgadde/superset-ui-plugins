(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1488:function(e,t,n){"use strict";n.d(t,"b",(function(){return V})),n.d(t,"c",(function(){return M})),n.d(t,"d",(function(){return H})),n.d(t,"a",(function(){return J}));var r=n(1),a=n.n(r),i=n(0),o=n.n(i),s=n(2),c=n.n(s),l=(n(521),n(977),n(167),n(979),n(232),n(233),n(169)),u=n(970),f=n(980),d=n(64),h=n(971),p=n(972),m=n(973),b=n(65),k=n(974),y=n(975),g=(n(319),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e});function v(e){var t=e.top,n=void 0===t?0:t,r=e.left,i=void 0===r?0:r,o=e.transform,s=e.className,l=e.children,u=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["top","left","transform","className","children"]);return a.a.createElement("g",g({className:c()("vx-group",s),transform:o||"translate("+i+", "+n+")"},u),l)}var x=n(25);n(108),n(54);function O(e,t){return Object.keys(e).reduce((function(n,r){return n[r]=function(e,t){return"function"==typeof e?e(t):e}(e[r],t),n}),{})}var w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n};function C(e){var t=e.from,n=void 0===t?new x.Point({x:0,y:0}):t,r=e.to,i=void 0===r?new x.Point({x:1,y:1}):r,o=e.stroke,s=void 0===o?"black":o,l=e.strokeWidth,u=void 0===l?1:l,f=e.strokeDasharray,d=void 0===f?"":f,h=e.transform,p=void 0===h?"":h,m=e.className,b=void 0===m?"":m,k=e.data,y=e.innerRef,g=P(e,["from","to","stroke","strokeWidth","strokeDasharray","transform","className","data","innerRef"]);return a.a.createElement("line",w({ref:y,className:c()("vx-line",b),x1:n.x,y1:n.y,x2:i.x,y2:i.y,stroke:s,strokeWidth:u,strokeDasharray:d,transform:p},O(g,k)))}function T(e){var t=e.className,n=e.innerRef,r=e.data,i=e.x,o=void 0===i?0:i,s=e.y,l=void 0===s?0:s,u=e.width,f=e.height,d=e.rx,h=e.ry,p=e.fill,m=void 0===p?"steelblue":p,b=e.fillOpacity,k=e.stroke,y=e.strokeWidth,g=e.strokeDasharray,v=e.strokeLinecap,x=e.strokeLinejoin,C=e.strokeMiterlimit,T=e.strokeOpacity,_=P(e,["className","innerRef","data","x","y","width","height","rx","ry","fill","fillOpacity","stroke","strokeWidth","strokeDasharray","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity"]);return a.a.createElement("rect",w({ref:n,className:c()("vx-bar",t),x:o,y:l,width:u,height:f,rx:d,ry:h,fill:m,fillOpacity:b,stroke:k,strokeWidth:y,strokeDasharray:g,strokeLinecap:v,strokeLinejoin:x,strokeMiterlimit:C,strokeOpacity:T},O(_,r)))}C.propTypes={innerRef:o.a.func},o.a.func,o.a.func,o.a.func,o.a.array,o.a.func,o.a.func,o.a.func,o.a.string,o.a.number,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.array,o.a.func,o.a.oneOfType([o.a.string,o.a.bool,o.a.object,o.a.array]),o.a.func,o.a.string,o.a.number,o.a.string,o.a.string,o.a.func,o.a.func,T.propTypes={innerRef:o.a.func},o.a.array.isRequired,o.a.func.isRequired,o.a.func.isRequired,o.a.func.isRequired,o.a.func.isRequired,o.a.func.isRequired,o.a.array.isRequired,o.a.number.isRequired,o.a.string,o.a.number,o.a.number,o.a.array.isRequired,o.a.func.isRequired,o.a.func.isRequired,o.a.func.isRequired,o.a.func.isRequired,o.a.func.isRequired,o.a.array.isRequired,o.a.number.isRequired,o.a.string,o.a.number,o.a.number,o.a.array.isRequired,o.a.func.isRequired,o.a.func.isRequired,o.a.func.isRequired,o.a.func.isRequired,o.a.array.isRequired,o.a.string,o.a.number,o.a.number,o.a.array.isRequired,o.a.func.isRequired,o.a.func.isRequired,o.a.func.isRequired,o.a.func.isRequired,o.a.array.isRequired,o.a.string,o.a.number,o.a.number;var _={ascending:l.a,descending:u.a,insideout:f.a,none:d.a,reverse:h.a};Object.keys(_);var N={expand:p.a,diverging:m.a,none:b.a,silhouette:k.a,wiggle:y.a};Object.keys(N);o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.number,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.number,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.number,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.number,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.number,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,o.a.func,function(e){var t=e.sides,n=e.size,r=void 0===n?25:n,i=e.center,o=void 0===i?new x.Point({x:0,y:0}):i,s=e.rotate,c=void 0===s?0:s,l=e.className,u=(e.clickHandler,e.fill),f=(e.strokeDasharray,e.strokeWidth,e.stroke,P(e,["sides","size","center","rotate","className","clickHandler","fill","strokeDasharray","strokeWidth","stroke"])),d=function(e){var t=e.sides,n=e.size,r=e.center,a=e.rotate;return[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(Array(t).keys())).map((function(e){return function(e){var t=e.sides,n=e.size,r=e.center,a=e.rotate,i=e.side,o=function(e){return Math.PI/180*e}(360/t*i-a);return new x.Point({x:r.x+n*Math.cos(o),y:r.y+n*Math.sin(o)})}({sides:t,size:n,center:r,rotate:a,side:e})}))}({sides:t,size:r,center:o,rotate:c}).map((function(e){return e.toArray()})).join(" ");return a.a.createElement("polygon",w({points:d,className:l,fill:u},f))}.propTypes={sides:o.a.number.isRequired,size:o.a.number.isRequired,className:o.a.string,rotate:o.a.number,fill:o.a.string,strokeDasharray:o.a.string,strokeWidth:o.a.number,stroke:o.a.string};var j=n(2161);function L(e){var t=e.bandwidth()/2;return e.round()&&(t=Math.round(t)),function(n){return e(n)+t}}function S(e){return e}var R="top",E="left",F="right",q="bottom";var A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W={axisClassName:o.a.string,axisLineClassName:o.a.string,hideAxisLine:o.a.bool,hideTicks:o.a.bool,hideZero:o.a.bool,label:o.a.string,labelClassName:o.a.string,labelOffset:o.a.number,labelProps:o.a.object,left:o.a.number,numTicks:o.a.number,orientation:o.a.oneOf([R,F,q,E]),rangePadding:o.a.number,scale:o.a.func.isRequired,stroke:o.a.string,strokeWidth:o.a.number,strokeDasharray:o.a.string,tickClassName:o.a.string,tickFormat:o.a.func,tickLabelProps:o.a.func,tickLength:o.a.number,tickStroke:o.a.string,tickTransform:o.a.string,tickValues:o.a.array,tickComponent:o.a.func,top:o.a.number,children:o.a.func};function z(e){var t=e.children,n=e.axisClassName,r=e.axisLineClassName,i=e.hideAxisLine,o=void 0!==i&&i,s=e.hideTicks,l=void 0!==s&&s,u=e.hideZero,f=void 0!==u&&u,d=e.label,h=void 0===d?"":d,p=e.labelClassName,m=e.labelOffset,b=void 0===m?14:m,k=e.labelProps,y=void 0===k?{textAnchor:"middle",fontFamily:"Arial",fontSize:10,fill:"black"}:k,g=e.left,O=void 0===g?0:g,w=e.numTicks,P=void 0===w?10:w,T=e.orientation,_=void 0===T?q:T,N=e.rangePadding,W=void 0===N?0:N,z=e.scale,D=e.stroke,V=void 0===D?"black":D,Z=e.strokeWidth,M=void 0===Z?1:Z,I=e.strokeDasharray,H=e.tickClassName,B=e.tickFormat,J=e.tickLabelProps,$=void 0===J?function(e,t){return{textAnchor:"middle",fontFamily:"Arial",fontSize:10,fill:"black"}}:J,U=e.tickLength,G=void 0===U?8:U,Y=e.tickStroke,X=void 0===Y?"black":Y,K=e.tickTransform,Q=e.tickValues,ee=e.tickComponent,te=e.top,ne=void 0===te?0:te,re=z.ticks?z.ticks(P):z.domain();Q&&(re=Q);var ae=z.tickFormat?z.tickFormat():S;B&&(ae=B);var ie=z.range(),oe=ie[0]+.5-W,se=ie[ie.length-1]+.5+W,ce=_!==E&&_!==F,le=_===R,ue=_===E||le?-1:1,fe=(z.bandwidth?L:S)(z.copy()),de=new x.Point({x:ce?oe:0,y:ce?0:oe}),he=new x.Point({x:ce?se:0,y:ce?0:se}),pe=10;return t?a.a.createElement(v,{className:c()("vx-axis",n),top:ne,left:O},t({axisFromPoint:de,axisToPoint:he,horizontal:ce,tickSign:ue,numTicks:P,label:h,rangePadding:W,tickLength:G,tickFormat:ae,tickPosition:fe,ticks:re.map((function(e,t){return{value:e,index:t,from:new x.Point({x:ce?fe(e):0,y:ce?0:fe(e)}),to:new x.Point({x:ce?fe(e):ue*G,y:ce?G*ue:fe(e)}),formattedValue:ae(e,t)}}))})):a.a.createElement(v,{className:c()("vx-axis",n),top:ne,left:O},re.map((function(e,t){if(f&&0===e)return null;var n=new x.Point({x:ce?fe(e):0,y:ce?0:fe(e)}),r=new x.Point({x:ce?fe(e):ue*G,y:ce?G*ue:fe(e)}),i=$(e,t);return pe=Math.max(pe,i.fontSize||0),a.a.createElement(v,{key:"vx-tick-"+e+"-"+t,className:c()("vx-axis-tick",H),transform:K},!l&&a.a.createElement(C,{from:n,to:r,stroke:X}),ee?ee(A({x:r.x,y:r.y+(ce&&!le?pe:0),formattedValue:ae(e,t)},i)):a.a.createElement(j.a,A({x:r.x,y:r.y+(ce&&!le?pe:0)},i),ae(e,t)))})),!o&&a.a.createElement(C,{className:c()("vx-axis-line",r),from:de,to:he,stroke:V,strokeWidth:M,strokeDasharray:I}),h&&a.a.createElement(j.a,A({className:c()("vx-axis-label",p)},function(e){var t=e.labelOffset,n=e.labelProps,r=e.orientation,a=e.range,i=e.tickLabelFontSize,o=e.tickLength,s=r===E||r===R?-1:1,c=void 0,l=void 0,u=null;return r===R||r===q?(c=(a[0]+a[a.length-1])/2,l=s*(o+t+i+(r===q?n.fontSize:0))):(c=s*((a[0]+a[a.length-1])/2),l=-(o+t),u="rotate("+90*s+")"),{x:c,y:l,transform:u}}({labelOffset:b,labelProps:y,orientation:_,range:ie,tickLabelFontSize:pe,tickLength:G}),y),h))}z.propTypes=W;var D={axisClassName:o.a.string,axisLineClassName:o.a.string,hideAxisLine:o.a.bool,hideTicks:o.a.bool,hideZero:o.a.bool,label:o.a.string,labelClassName:o.a.string,labelOffset:o.a.number,labelProps:o.a.object,left:o.a.number,numTicks:o.a.number,rangePadding:o.a.number,scale:o.a.func.isRequired,stroke:o.a.string,strokeWidth:o.a.number,strokeDasharray:o.a.string,tickClassName:o.a.string,tickFormat:o.a.func,tickLabelProps:o.a.func,tickLength:o.a.number,tickStroke:o.a.string,tickTransform:o.a.string,tickValues:o.a.array,tickComponent:o.a.func,top:o.a.number,children:o.a.func};function V(e){var t=e.children,n=e.axisClassName,r=e.axisLineClassName,i=e.hideAxisLine,o=e.hideTicks,s=e.hideZero,l=e.label,u=e.labelClassName,f=e.labelOffset,d=void 0===f?36:f,h=e.labelProps,p=e.left,m=e.numTicks,b=e.rangePadding,k=e.scale,y=e.stroke,g=e.strokeWidth,v=e.strokeDasharray,x=e.tickClassName,O=e.tickFormat,w=e.tickLabelProps,P=void 0===w?function(e){e.tick,e.index;return{dx:"-0.25em",dy:"0.25em",fill:"black",fontFamily:"Arial",fontSize:10,textAnchor:"end"}}:w,C=e.tickLength,T=void 0===C?8:C,_=e.tickStroke,N=e.tickTransform,j=e.tickValues,L=e.tickComponent,S=e.top;return a.a.createElement(z,{axisClassName:c()("vx-axis-left",n),axisLineClassName:r,hideAxisLine:i,hideTicks:o,hideZero:s,label:l,labelClassName:u,labelOffset:d,labelProps:h,left:p,numTicks:m,orientation:E,rangePadding:b,scale:k,stroke:y,strokeWidth:g,strokeDasharray:v,tickClassName:x,tickFormat:O,tickLabelProps:P,tickLength:T,tickStroke:_,tickTransform:N,tickValues:j,tickComponent:L,top:S,children:t})}V.propTypes=D;var Z={axisClassName:o.a.string,axisLineClassName:o.a.string,hideAxisLine:o.a.bool,hideTicks:o.a.bool,hideZero:o.a.bool,label:o.a.string,labelClassName:o.a.string,labelOffset:o.a.number,labelProps:o.a.object,left:o.a.number,numTicks:o.a.number,rangePadding:o.a.number,scale:o.a.func.isRequired,stroke:o.a.string,strokeWidth:o.a.number,strokeDasharray:o.a.string,tickClassName:o.a.string,tickFormat:o.a.func,tickLabelProps:o.a.func,tickLength:o.a.number,tickStroke:o.a.string,tickTransform:o.a.string,tickValues:o.a.array,tickComponent:o.a.func,top:o.a.number,children:o.a.func};function M(e){var t=e.children,n=e.axisClassName,r=e.axisLineClassName,i=e.hideAxisLine,o=e.hideTicks,s=e.hideZero,l=e.label,u=e.labelClassName,f=e.labelOffset,d=void 0===f?36:f,h=e.labelProps,p=e.left,m=e.numTicks,b=e.rangePadding,k=e.scale,y=e.stroke,g=e.strokeWidth,v=e.strokeDasharray,x=e.tickClassName,O=e.tickFormat,w=e.tickLabelProps,P=void 0===w?function(e){e.tick,e.index;return{dx:"0.25em",dy:"0.25em",fill:"black",fontFamily:"Arial",fontSize:10,textAnchor:"start"}}:w,C=e.tickLength,T=void 0===C?8:C,_=e.tickStroke,N=e.tickTransform,j=e.tickValues,L=e.tickComponent,S=e.top;return a.a.createElement(z,{axisClassName:c()("vx-axis-right",n),axisLineClassName:r,hideAxisLine:i,hideTicks:o,hideZero:s,label:l,labelClassName:u,labelOffset:d,labelProps:h,left:p,numTicks:m,orientation:F,rangePadding:b,scale:k,stroke:y,strokeWidth:g,strokeDasharray:v,tickClassName:x,tickFormat:O,tickLabelProps:P,tickLength:T,tickStroke:_,tickTransform:N,tickValues:j,tickComponent:L,top:S,children:t})}M.propTypes=Z;var I={axisClassName:o.a.string,axisLineClassName:o.a.string,hideAxisLine:o.a.bool,hideTicks:o.a.bool,hideZero:o.a.bool,label:o.a.string,labelClassName:o.a.string,labelOffset:o.a.number,labelProps:o.a.object,left:o.a.number,numTicks:o.a.number,rangePadding:o.a.number,scale:o.a.func.isRequired,stroke:o.a.string,strokeWidth:o.a.number,strokeDasharray:o.a.string,tickClassName:o.a.string,tickFormat:o.a.func,tickLabelProps:o.a.func,tickLength:o.a.number,tickStroke:o.a.string,tickTransform:o.a.string,tickValues:o.a.array,tickComponent:o.a.func,top:o.a.number,children:o.a.func};function H(e){var t=e.children,n=e.axisClassName,r=e.axisLineClassName,i=e.hideAxisLine,o=e.hideTicks,s=e.hideZero,l=e.label,u=e.labelClassName,f=e.labelOffset,d=void 0===f?8:f,h=e.labelProps,p=e.left,m=e.numTicks,b=e.rangePadding,k=e.scale,y=e.stroke,g=e.strokeWidth,v=e.strokeDasharray,x=e.tickClassName,O=e.tickFormat,w=e.tickLabelProps,P=void 0===w?function(e){e.tick,e.index;return{dy:"-0.25em",fill:"black",fontFamily:"Arial",fontSize:10,textAnchor:"middle"}}:w,C=e.tickLength,T=void 0===C?8:C,_=e.tickStroke,N=e.tickTransform,j=e.tickValues,L=e.tickComponent,S=e.top;return a.a.createElement(z,{axisClassName:c()("vx-axis-top",n),axisLineClassName:r,hideAxisLine:i,hideTicks:o,hideZero:s,label:l,labelClassName:u,labelOffset:d,labelProps:h,left:p,numTicks:m,orientation:R,rangePadding:b,scale:k,stroke:y,strokeWidth:g,strokeDasharray:v,tickClassName:x,tickFormat:O,tickLabelProps:P,tickLength:T,tickStroke:_,tickTransform:N,tickValues:j,tickComponent:L,top:S,children:t})}H.propTypes=I;var B={axisClassName:o.a.string,axisLineClassName:o.a.string,hideAxisLine:o.a.bool,hideTicks:o.a.bool,hideZero:o.a.bool,label:o.a.string,labelClassName:o.a.string,labelOffset:o.a.number,labelProps:o.a.object,left:o.a.number,numTicks:o.a.number,rangePadding:o.a.number,scale:o.a.func.isRequired,stroke:o.a.string,strokeWidth:o.a.number,strokeDasharray:o.a.string,tickClassName:o.a.string,tickFormat:o.a.func,tickLabelProps:o.a.func,tickLength:o.a.number,tickStroke:o.a.string,tickTransform:o.a.string,tickValues:o.a.array,tickComponent:o.a.func,top:o.a.number,children:o.a.func};function J(e){var t=e.children,n=e.axisClassName,r=e.axisLineClassName,i=e.hideAxisLine,o=e.hideTicks,s=e.hideZero,l=e.label,u=e.labelClassName,f=e.labelOffset,d=void 0===f?8:f,h=e.labelProps,p=e.left,m=e.numTicks,b=e.rangePadding,k=e.scale,y=e.stroke,g=e.strokeWidth,v=e.strokeDasharray,x=e.tickClassName,O=e.tickFormat,w=e.tickLabelProps,P=void 0===w?function(e){e.tick,e.index;return{dy:"0.25em",fill:"black",fontFamily:"Arial",fontSize:10,textAnchor:"middle"}}:w,C=e.tickLength,T=void 0===C?8:C,_=e.tickStroke,N=e.tickTransform,j=e.tickValues,L=e.tickComponent,S=e.top;return a.a.createElement(z,{axisClassName:c()("vx-axis-bottom",n),axisLineClassName:r,hideAxisLine:i,hideTicks:o,hideZero:s,label:l,labelClassName:u,labelOffset:d,labelProps:h,left:p,numTicks:m,orientation:q,rangePadding:b,scale:k,stroke:y,strokeWidth:g,strokeDasharray:v,tickClassName:x,tickFormat:O,tickLabelProps:P,tickLength:T,tickStroke:_,tickTransform:N,tickValues:j,tickComponent:L,top:S,children:t})}J.propTypes=B},2161:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Ne}));var r=n(1),a=n.n(r),i=n(1169),o=n.n(i),s="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function c(e){return function(){return e}}var l=function(){};l.thatReturns=c,l.thatReturnsFalse=c(!1),l.thatReturnsTrue=c(!0),l.thatReturnsNull=c(null),l.thatReturnsThis=function(){return this},l.thatReturnsArgument=function(e){return e};var u=l;var f=function(e,t,n,r,a,i,o,s){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,i,o,s],u=0;(c=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}},d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;function m(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var b="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";var k=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){e.exports=function(){function e(e,t,n,r,a,i){i!==b&&f(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=u,n.PropTypes=n,n}()})),y="object"==typeof s&&s&&s.Object===Object&&s,g="object"==typeof self&&self&&self.Object===Object&&self,v=y||g||Function("return this")(),x=v.Symbol,O=Object.prototype,w=O.hasOwnProperty,P=O.toString,C=x?x.toStringTag:void 0;var T=function(e){var t=w.call(e,C),n=e[C];try{e[C]=void 0}catch(e){}var r=P.call(e);return t?e[C]=n:delete e[C],r},_=Object.prototype.toString;var N=function(e){return _.call(e)},j=x?x.toStringTag:void 0;var L=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":j&&j in Object(e)?T(e):N(e)};var S=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var R,E=function(e){if(!S(e))return!1;var t=L(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},F=v["__core-js_shared__"],q=(R=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var A=function(e){return!!q&&q in e},W=Function.prototype.toString;var z=function(e){if(null!=e){try{return W.call(e)}catch(e){}try{return e+""}catch(e){}}return""},D=/^\[object .+?Constructor\]$/,V=Function.prototype,Z=Object.prototype,M=V.toString,I=Z.hasOwnProperty,H=RegExp("^"+M.call(I).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var B=function(e){return!(!S(e)||A(e))&&(E(e)?H:D).test(z(e))};var J=function(e,t){return null==e?void 0:e[t]};var $=function(e,t){var n=J(e,t);return B(n)?n:void 0},U=$(Object,"create");var G=function(){this.__data__=U?U(null):{},this.size=0};var Y=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},X=Object.prototype.hasOwnProperty;var K=function(e){var t=this.__data__;if(U){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return X.call(t,e)?t[e]:void 0},Q=Object.prototype.hasOwnProperty;var ee=function(e){var t=this.__data__;return U?void 0!==t[e]:Q.call(t,e)};var te=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=U&&void 0===t?"__lodash_hash_undefined__":t,this};function ne(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ne.prototype.clear=G,ne.prototype.delete=Y,ne.prototype.get=K,ne.prototype.has=ee,ne.prototype.set=te;var re=ne;var ae=function(){this.__data__=[],this.size=0};var ie=function(e,t){return e===t||e!=e&&t!=t};var oe=function(e,t){for(var n=e.length;n--;)if(ie(e[n][0],t))return n;return-1},se=Array.prototype.splice;var ce=function(e){var t=this.__data__,n=oe(t,e);return!(n<0)&&(n==t.length-1?t.pop():se.call(t,n,1),--this.size,!0)};var le=function(e){var t=this.__data__,n=oe(t,e);return n<0?void 0:t[n][1]};var ue=function(e){return oe(this.__data__,e)>-1};var fe=function(e,t){var n=this.__data__,r=oe(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function de(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}de.prototype.clear=ae,de.prototype.delete=ce,de.prototype.get=le,de.prototype.has=ue,de.prototype.set=fe;var he=de,pe=$(v,"Map");var me=function(){this.size=0,this.__data__={hash:new re,map:new(pe||he),string:new re}};var be=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var ke=function(e,t){var n=e.__data__;return be(t)?n["string"==typeof t?"string":"hash"]:n.map};var ye=function(e){var t=ke(this,e).delete(e);return this.size-=t?1:0,t};var ge=function(e){return ke(this,e).get(e)};var ve=function(e){return ke(this,e).has(e)};var xe=function(e,t){var n=ke(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Oe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Oe.prototype.clear=me,Oe.prototype.delete=ye,Oe.prototype.get=ge,Oe.prototype.has=ve,Oe.prototype.set=xe;var we=Oe;function Pe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(Pe.Cache||we),n}Pe.Cache=we;var Ce=Pe((function(e,t){try{var n=document.getElementById("__react_svg_text_measurement_id");if(!n){var r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.style.width=0,r.style.height=0,r.style.position="absolute",r.style.top="-100%",r.style.left="-100%",(n=document.createElementNS("http://www.w3.org/2000/svg","text")).setAttribute("id","__react_svg_text_measurement_id"),r.appendChild(n),document.body.appendChild(r)}return Object.assign(n.style,t),n.textContent=e,n.getComputedTextLength()}catch(e){return null}}),(function(e,t){return e+"_"+JSON.stringify(t)})),Te=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ne=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={wordsByLines:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),Te(t,[{key:"componentWillMount",value:function(){this.updateWordsByLines(this.props,!0)}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.children!==e.children||this.props.style!==e.style;this.updateWordsByLines(e,t)}},{key:"updateWordsByLines",value:function(e,t){if(e.width||e.scaleToFit){if(t){var n=e.children?e.children.toString().split(/\s+/):[];this.wordsWithComputedWidth=n.map((function(t){return{word:t,width:Ce(t,e.style)}})),this.spaceWidth=Ce(" ",e.style)}var r=this.calculateWordsByLines(this.wordsWithComputedWidth,this.spaceWidth,e.width);this.setState({wordsByLines:r})}else this.updateWordsWithoutCalculate(e)}},{key:"updateWordsWithoutCalculate",value:function(e){var t=e.children?e.children.toString().split(/\s+/):[];this.setState({wordsByLines:[{words:t}]})}},{key:"calculateWordsByLines",value:function(e,t,n){var r=this.props.scaleToFit;return e.reduce((function(e,a){var i=a.word,o=a.width,s=e[e.length-1];if(s&&(null==n||r||s.width+o+t<n))s.words.push(i),s.width+=o+t;else{var c={words:[i],width:o};e.push(c)}return e}),[])}},{key:"render",value:function(){var e=this.props,t=e.dx,n=e.dy,r=e.textAnchor,i=e.verticalAnchor,s=e.scaleToFit,c=e.angle,l=e.lineHeight,u=e.capHeight,f=e.innerRef,d=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["dx","dy","textAnchor","verticalAnchor","scaleToFit","angle","lineHeight","capHeight","innerRef"]),h=this.state.wordsByLines,p=d.x,m=d.y,b=void 0;switch(i){case"start":b=o()("calc("+u+")");break;case"middle":b=o()("calc("+(h.length-1)/2+" * -"+l+" + ("+u+" / 2))");break;default:b=o()("calc("+(h.length-1)+" * -"+l+")")}var k=[];if(s&&h.length){var y=h[0].width,g=this.props.width/y,v=g,x=p-g*p,O=m-v*m;k.push("matrix("+g+", 0, 0, "+v+", "+x+", "+O+")")}return c&&k.push("rotate("+c+", "+p+", "+m+")"),k.length&&(d.transform=k.join(" ")),a.a.createElement("svg",{ref:f,x:t,y:n,fontSize:d.fontSize,style:{overflow:"visible"}},a.a.createElement("text",_e({},d,{textAnchor:r}),h.map((function(e,t){return a.a.createElement("tspan",{x:p,dy:0===t?b:l,key:t},e.words.join(" "))}))))}}]),t}(r.Component);Ne.defaultProps={x:0,y:0,dx:0,dy:0,lineHeight:"1em",capHeight:"0.71em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end"},Ne.propTypes={scaleToFit:k.bool,angle:k.number,textAnchor:k.oneOf(["start","middle","end","inherit"]),verticalAnchor:k.oneOf(["start","middle","end"]),style:k.object,innerRef:k.func}}).call(this,n(37))},2184:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1),o=n.n(i);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const c={padding:8};class l extends i.PureComponent{render(){const{className:e,children:t}=this.props;return o.a.createElement("div",{className:e,style:c},t)}}s(l,"propTypes",{className:a.a.string,children:a.a.node.isRequired}),s(l,"defaultProps",{className:""}),t.a=l},2185:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),a=n.n(r),i=n(1),o=n.n(i);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l={paddingLeft:8,textAlign:"right"};class u extends i.PureComponent{render(){const{className:e,data:t}=this.props;return o.a.createElement("table",{className:e},o.a.createElement("tbody",null,t.map(e=>{let{key:t,keyColumn:n,keyStyle:r,valueColumn:a,valueStyle:i}=e;return o.a.createElement("tr",{key:t},o.a.createElement("td",{style:r},null!=n?n:t),o.a.createElement("td",{style:i?s({},l,{},i):l},a))})))}}c(u,"propTypes",{className:a.a.string,data:a.a.arrayOf(a.a.shape({key:a.a.oneOfType([a.a.string,a.a.number]).isRequired,keyColumn:a.a.node,keyStyle:a.a.any,valueColumn:a.a.node.isRequired,valueStyle:a.a.any})).isRequired}),c(u,"defaultProps",{className:"",data:[]})},2186:function(e,t,n){"use strict";function r(e,t,n){return void 0===t&&(t=0),void 0===n&&(n=0),Number.isNaN(t)||null===t?n:Number.isNaN(n)||null===n?t:e(t,n)}function a(e,t,n){void 0===e&&(e={}),void 0===t&&(t={}),void 0===n&&(n="expand");const{top:a,left:i,bottom:o,right:s}=e,c="expand"===n?Math.max:Math.min;return{bottom:r(c,o,t.bottom),left:r(c,i,t.left),right:r(c,s,t.right),top:r(c,a,t.top)}}n.d(t,"a",(function(){return a}))},2187:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),a=n.n(r),i=n(1),o=n.n(i),s=n(1002);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return Object(s.a)(e)&&"number"==typeof e}class u extends i.PureComponent{render(){const{contentWidth:e,contentHeight:t,width:n,height:r,renderContent:a}=this.props,i=l(e)&&e>n,s=l(t)&&t>r;return i||s?o.a.createElement("div",{style:{height:r,overflowX:i?"auto":"hidden",overflowY:s?"auto":"hidden",width:n}},a({height:Math.max(null!=t?t:0,r),width:Math.max(null!=e?e:0,n)})):a({height:r,width:n})}}c(u,"propTypes",{contentWidth:a.a.number,contentHeight:a.a.number,height:a.a.number.isRequired,renderContent:a.a.func.isRequired,width:a.a.number.isRequired}),c(u,"defaultProps",{renderContent(){}})},2188:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(1),a=n.n(r),i=n(0),o=n.n(i),s=n(1488),c=n(43);var l={axisStyles:c.b,hideZero:o.a.bool,label:o.a.string,labelOffset:o.a.number,labelProps:o.a.objectOf(o.a.oneOfType([o.a.number,o.a.string])),numTicks:o.a.number,orientation:o.a.oneOf(["bottom","top"]),rangePadding:o.a.number,tickStyles:c.l,tickComponent:o.a.func,tickLabelProps:o.a.func,tickFormat:o.a.func,tickValues:o.a.arrayOf(o.a.oneOfType([o.a.number,o.a.object,o.a.string])),innerHeight:o.a.number,scale:o.a.func},u={axisStyles:{},hideZero:!1,innerHeight:null,label:null,labelOffset:14,labelProps:null,numTicks:null,orientation:"bottom",rangePadding:null,scale:null,tickComponent:null,tickFormat:null,tickLabelProps:null,tickStyles:{},tickValues:void 0},f=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.axisStyles,n=e.innerHeight,r=e.hideZero,i=e.label,o=e.labelOffset,c=e.labelProps,l=e.numTicks,u=e.orientation,f=e.rangePadding,d=e.scale,h=e.tickComponent,p=e.tickFormat,m=e.tickLabelProps,b=e.tickStyles,k=e.tickValues;if(!d||!n)return null;var y="bottom"===u?s.a:s.d,g=m;return g||(g=b.label&&b.label[u]?function(){return b.label[u]}:void 0),a.a.createElement(y,{top:"bottom"===u?n:0,left:0,rangePadding:f,hideTicks:0===l,hideZero:r,label:i,labelOffset:o,labelProps:c||(t.label||{})[u],numTicks:l,scale:d,stroke:t.stroke,strokeWidth:t.strokeWidth,tickComponent:h,tickFormat:p,tickLabelProps:g,tickLength:b.tickLength,tickStroke:b.stroke,tickValues:k})},r}(a.a.PureComponent);f.propTypes=l,f.defaultProps=u,f.displayName="XAxis"},2189:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(1),a=n.n(r),i=n(0),o=n.n(i),s=n(1488),c=n(43);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u={axisStyles:c.b,hideZero:o.a.bool,label:o.a.string,labelProps:o.a.objectOf(o.a.oneOfType([o.a.number,o.a.string])),labelOffset:o.a.number,numTicks:o.a.number,orientation:o.a.oneOf(["left","right"]),rangePadding:o.a.number,tickComponent:o.a.func,tickStyles:c.l,tickLabelProps:o.a.func,tickFormat:o.a.func,tickValues:o.a.arrayOf(o.a.oneOfType([o.a.number,o.a.object,o.a.string])),innerWidth:o.a.number,height:o.a.number,scale:o.a.func},f={axisStyles:{},hideZero:!1,innerWidth:null,height:null,label:null,labelProps:null,labelOffset:void 0,numTicks:null,orientation:"right",rangePadding:null,scale:null,tickComponent:null,tickFormat:null,tickLabelProps:null,tickStyles:{},tickValues:void 0},d=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.axisStyles,n=e.hideZero,r=e.innerWidth,i=e.height,o=e.label,c=e.labelProps,u=e.labelOffset,f=e.numTicks,d=e.orientation,h=e.rangePadding,p=e.scale,m=e.tickComponent,b=e.tickFormat,k=e.tickLabelProps,y=e.tickStyles,g=e.tickValues;if(!p||!r)return null;var v="left"===d?s.b:s.c,x=k;return x||(x=y.label&&y.label[d]?function(){return y.label[d]}:void 0),a.a.createElement(v,{top:0,left:"right"===d?r:0,rangePadding:h,hideTicks:0===f,hideZero:n,label:o,labelProps:l({verticalAnchor:"start",width:Math.max.apply(Math,p.range().concat([i||0]))},c||(t.label||{})[d]),labelOffset:u,numTicks:f,scale:p,stroke:t.stroke,strokeWidth:t.strokeWidth,tickComponent:m,tickFormat:b,tickLabelProps:x,tickLength:y.tickLength,tickStroke:y.stroke,tickValues:g})},r}(a.a.PureComponent);d.propTypes=u,d.defaultProps=f,d.displayName="YAxis"},2190:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),i=n(1),o=n.n(i);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){var t=e.flexDirection,n=void 0===t?"row":t,r=e.alignItems,a=void 0===r?"center":r,i=e.margin,c=void 0===i?"0":i,l=e.display,u=void 0===l?"flex":l,f=e.children,d=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["flexDirection","alignItems","margin","display","children"]);return o.a.createElement("div",s({className:"vx-legend-item",style:{display:u,alignItems:a,flexDirection:n,margin:c}},d),f)}c.propTypes={alignItems:a.a.string,margin:a.a.oneOfType([a.a.string,a.a.number]),children:a.a.node,display:a.a.string}},2191:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),i=n(1),o=n.n(i);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){var t=e.flex,n=void 0===t?"1":t,r=e.label,a=e.margin,i=void 0===a?"5px 0":a,c=e.align,l=void 0===c?"left":c,u=e.children,f=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["flex","label","margin","align","children"]);return o.a.createElement("div",s({className:"vx-legend-label",style:{justifyContent:l,display:"flex",flex:n,margin:i}},f),u||r)}c.propTypes={align:a.a.string,label:a.a.node,flex:a.a.oneOfType([a.a.string,a.a.number]),margin:a.a.oneOfType([a.a.string,a.a.number]),children:a.a.node}},2222:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1),o=n.n(i),s=n(177),c=n.n(s),l=n(340);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){var t,n;function r(t){var n;return d(f(n=e.call(this,t)||this),"animationFrameID",void 0),d(f(n),"resizeObserver",void 0),d(f(n),"target",null),d(f(n),"resize",(function(e){var t=e.width,r=e.height,a=e.top,i=e.left;n.setState((function(){return{width:t,height:r,top:a,left:i}}))})),d(f(n),"setTarget",(function(e){n.target=e})),n.state={width:0,height:0,top:0,left:0},n.resize=c()(n.resize,t.debounceTime),n.animationFrameID=null,n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.componentDidMount=function(){var e=this;this.resizeObserver=new l.a((function(t){void 0===t&&(t=[]),t.forEach((function(t){var n=t.contentRect,r=n.left,a=n.top,i=n.width,o=n.height;e.animationFrameID=window.requestAnimationFrame((function(){e.resize({width:i,height:o,top:a,left:r})}))}))})),this.target&&this.resizeObserver.observe(this.target)},a.componentWillUnmount=function(){this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver&&this.resizeObserver.disconnect()},a.render=function(){var e=this.props,t=e.className,n=e.children,r=(e.debounceTime,e.parentSizeStyles),a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["className","children","debounceTime","parentSizeStyles"]);return o.a.createElement("div",u({style:r,ref:this.setTarget,className:t},a),n(u({},this.state,{ref:this.target,resize:this.resize})))},r}(o.a.Component);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}d(h,"propTypes",{className:a.a.string,debounceTime:a.a.number,children:a.a.func.isRequired}),d(h,"defaultProps",{debounceTime:300,parentSizeStyles:{width:"100%",height:"100%"}});const b={display:"flex",flexGrow:0,flexShrink:0,order:-1},k={flexBasis:"auto",flexGrow:1,flexShrink:1,position:"relative"};class y extends i.PureComponent{getContainerDirection(){const{position:e}=this.props;return"left"===e?"row":"right"===e?"row-reverse":"bottom"===e?"column-reverse":"column"}getLegendJustifyContent(){const{legendJustifyContent:e,position:t}=this.props;return e||("left"===t||"right"===t?"flex-start":"flex-end")}render(){const{className:e,debounceTime:t,width:n,height:r,position:a,renderChart:i,renderLegend:s}=this.props,c="left"===a||"right"===a,l={display:"flex",flexDirection:this.getContainerDirection(),height:r,width:n},u=p({},k);c?u.width=0:u.height=0;const f=c?"column":"row",d=p({},b,{flexDirection:f,justifyContent:this.getLegendJustifyContent()});return o.a.createElement("div",{className:"with-legend "+e,style:l},s&&o.a.createElement("div",{className:"legend-container",style:d},s({direction:f})),o.a.createElement("div",{className:"main-container",style:u},o.a.createElement(h,{debounceTime:t},e=>e.width>0&&e.height>0?i(e):null)))}}m(y,"propTypes",{className:a.a.string.isRequired,debounceTime:a.a.number,width:a.a.oneOfType([a.a.number,a.a.string]).isRequired,height:a.a.oneOfType([a.a.number,a.a.string]).isRequired,legendJustifyContent:a.a.oneOf(["center","flex-start","flex-end"]),position:a.a.oneOf(["top","left","bottom","right"]).isRequired,renderChart:a.a.func.isRequired,renderLegend:a.a.func}),m(y,"defaultProps",{className:"",height:"auto",position:"top",width:"auto"});t.a=y}}]);