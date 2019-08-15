(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1787:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(1),a=n.n(o),c=n(828),l=n(1803),u=n(1788),d=n(1775),s=n(264);var h=function(e){function t(){return e.apply(this,arguments)||this}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t}(Object(s.a)({channelTypes:{fill:"Color",group:"Text",size:"Numeric",stroke:"Color",tooltip:"Text",x:"X",y:"Y"},defaultEncoding:{fill:{value:"#222"},group:[],size:{value:5},stroke:{value:"none"},tooltip:[],x:{field:"x",type:"quantitative"},y:{field:"y",type:"quantitative"}}})),f=n(936),m=n(1769),p=n(1770),y=n(36);var g=n(938),v=n(940),x=n(937),b=n(939);function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",function(){return O});var L={className:"",margin:f.a,theme:u.a,TooltipRenderer:function(e){var t=e.datum,n=e.encoder.channels,r=n.x,i=n.y,o=n.size,c=n.fill,l=n.stroke,u=[{key:"x",keyColumn:r.getTitle(),valueColumn:r.format(t.data)},{key:"y",keyColumn:i.getTitle(),valueColumn:i.format(t.data)}];return Object(y.a)(c.definition)&&u.push({key:"fill",keyColumn:c.getTitle(),valueColumn:c.format(t.data)}),Object(y.a)(l.definition)&&u.push({key:"stroke",keyColumn:l.getTitle(),valueColumn:l.format(t.data)}),Object(y.a)(o.definition)&&u.push({key:"size",keyColumn:o.getTitle(),valueColumn:o.format(t.data)}),n.group.forEach(function(e){u.push({key:""+e.name,keyColumn:e.getTitle(),valueColumn:e.format(t.data)})}),n.tooltip.forEach(function(e){u.push({key:""+e.name,keyColumn:e.getTitle(),valueColumn:e.format(t.data)})}),a.a.createElement(m.a,null,a.a.createElement(p.a,{data:u}))}},O=function(e){function t(t){var n;return E(k(n=e.call(this,t)||this),"createEncoder",Object(x.a)(h)),E(k(n),"createMargin",Object(f.b)()),n.renderChart=n.renderChart.bind(k(n)),n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var n=t.prototype;return n.renderChart=function(e){var t=e.width,n=e.height,r=this.props,i=r.data,o=r.margin,u=r.theme,d=r.TooltipRenderer,s=this.createEncoder(this.props),h=s.channels;if(void 0!==h.x.scale){var f=h.x.getDomain(i);h.x.scale.setDomain(f)}if(void 0!==h.y.scale){var m=h.y.getDomain(i);h.y.scale.setDomain(m)}if(Object(y.d)(h.size.definition)&&"quantitative"===h.size.definition.type){var p=h.size.getDomain(i),x=p[0],b=p[1],k=[Math.min(x||0,0),Math.max(b||1,1)];h.size.scale.setDomain(k)}var E=i.map(function(e){return{x:h.x.get(e),y:h.y.get(e),size:h.size.encode(e),fill:h.fill.encode(e),stroke:h.stroke.encode(e),data:e}}),L=Object(v.a)({width:t,height:n,margin:this.createMargin(o),theme:u,xEncoder:h.x,yEncoder:h.y});return L.renderChartWithFrame(function(e){return a.a.createElement(c.a,{width:e.width,height:e.height,ariaLabel:"BoxPlot",margin:L.margin,renderTooltip:function(e){var t=e.datum;return a.a.createElement(d,{datum:t,encoder:s})},showYGrid:!0,theme:u,xScale:Object(g.a)(h.x.scale.config),yScale:Object(g.a)(h.y.scale.config)},L.renderXAxis(),L.renderYAxis(),a.a.createElement(l.a,{key:h.x.definition.field,data:E,fill:function(e){return e.fill},fillOpacity:.5,stroke:function(e){return e.stroke},size:function(e){return e.size}}))})},n.render=function(){var e=this.props,t=e.className,n=e.data,r=e.width,i=e.height,o=this.createEncoder(this.props);return a.a.createElement(d.a,{className:"superset-chart-scatter-plot "+t,width:r,height:i,position:"top",renderLegend:Object(b.a)(o,n,this.props),renderChart:this.renderChart})},t}(o.PureComponent);E(O,"propTypes",{className:i.a.string,width:i.a.oneOfType([i.a.string,i.a.number]).isRequired,height:i.a.oneOfType([i.a.string,i.a.number]).isRequired,margin:i.a.any,data:i.a.any.isRequired,theme:i.a.any,TooltipRenderer:i.a.func}),E(O,"defaultProps",L)},936:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var r=n(102),i={bottom:16,left:16,right:16,top:16};function o(e){return void 0===e&&(e=i),Object(r.a)(function(e){return e.bottom},function(e){return e.left},function(e){return e.right},function(e){return e.top},function(t,n,r,i){return void 0===t&&(t=e.bottom),void 0===n&&(n=e.left),void 0===r&&(r=e.right),void 0===i&&(i=e.top),{bottom:t,left:n,right:r,top:i}})}},937:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(102);function i(e){return Object(r.a)(function(e){return e.encoding},function(e){return e.options},function(t,n){return new e({encoding:t,options:n})})}},938:function(e,t,n){"use strict";function r(e){return void 0!==e&&0<e.length&&("string"==typeof e[0]||"number"==typeof e[0])}function i(e){var t,n=e.type,i=e.domain,o=e.range,a=e.nice,c=e.paddingInner,l=e.paddingOuter;if("linear"===n||"time"===n||"band"===n)t=n;else{if("utc"!==n)throw new Error("Unsupported scale type: "+n);t="timeUtc"}var u={type:t};return r(i)&&(u.domain=i),r(o)&&(u.range=o),void 0!==a&&(u.nice=a),void 0!==c&&(u.paddingInner=c),void 0!==l&&(u.paddingOuter=l),u}n.d(t,"a",function(){return i})},939:function(e,t,n){"use strict";var r=n(1),i=n.n(r),o=n(968),a=8,c={display:"inline-block"};function l(e){var t=e.item,n=e.MarkRenderer,r=e.LabelRenderer;return i.a.createElement(o.a,{key:"legend-item-"+t.field+"-"+t.value,margin:"0 5px"},void 0===n?i.a.createElement("svg",{width:a,height:a,style:c},i.a.createElement("circle",{fill:t.encodedValues.color||t.encodedValues.stroke||t.encodedValues.fill||"#ccc",stroke:t.encodedValues.stroke||"none",r:a/2,cx:a/2,cy:a/2})):i.a.createElement(n,{item:t}),void 0===r?i.a.createElement(o.b,{align:"left",margin:"0 0 0 4px"},t.value):i.a.createElement(r,{item:t}))}function u(){return(u=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}var d={display:"flex",flexBasis:"auto",flexDirection:"row",flexGrow:1,flexShrink:1,flexWrap:"wrap",fontSize:"0.8em",justifyContent:"flex-end",padding:8};function s(e){var t=e.items,n=e.ItemRenderer,r=void 0===n?l:n,o=e.ItemMarkRenderer,a=e.ItemLabelRenderer,c=e.style,s=void 0===c?d:u({},d,{},c);return i.a.createElement("div",{style:s},t.map(function(e){return i.a.createElement(r,{key:"legend-item-"+e.field+"-"+e.value,item:e,MarkRenderer:o,LabelRenderer:a})}))}function h(){return(h=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}var f={display:"flex",flexBasis:"auto",flexGrow:1,flexShrink:1,maxHeight:100,overflowY:"auto",position:"relative"},m=function(e){function t(){return e.apply(this,arguments)||this}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e),t.prototype.render=function(){var e=this.props,t=e.groups,n=e.LegendGroupRenderer,r=void 0===n?s:n,o=e.LegendItemRenderer,a=e.LegendItemMarkRenderer,c=e.LegendItemLabelRenderer,l=e.style,u=void 0===l?f:h({},f,{},l);return i.a.createElement("div",{style:u},t.map(function(e){return i.a.createElement(r,{key:e[0].field,items:e,ItemRenderer:o,ItemMarkRenderer:a,ItemLabelRenderer:c})}))},t}(r.PureComponent);function p(e,t,n){if(e.hasLegend()){var r=n.LegendRenderer,o=void 0===r?m:r,a=n.LegendGroupRenderer,c=n.LegendItemRenderer,l=n.LegendItemLabelRenderer,u=n.LegendItemMarkRenderer;return function(){return i.a.createElement(o,{groups:e.getLegendInfos(t),LegendGroupRenderer:a,LegendItemRenderer:c,LegendItemMarkRenderer:u,LegendItemLabelRenderer:l})}}}n.d(t,"a",function(){return p})},940:function(e,t,n){"use strict";var r=n(1),i=n.n(r),o=n(1773),a=n(1774),c=n(1771),l=n(1772);function u(){return(u=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(i[n]=e[n]);return i}function s(e){var t=e.axisWidth,n=e.labelAngle,r=e.labelFlush,o=e.labelOverlap,a=e.orient,c=e.tickLabels,l=e.tickLabelDimensions,s=e.tickTextAnchor,h=void 0===s?"middle":s;if("rotate"===o&&0!==n){var f=0<n?-6:6;"top"===a&&(f=0);var m="top"===a?-3:0;return function(e){var t=e.x,r=e.y,o=(e.dy,e.formattedValue),a=void 0===o?"":o,c=d(e,["x","y","dy","formattedValue"]);return i.a.createElement("g",{transform:"translate("+(t+f)+", "+(r+m)+")"},i.a.createElement("text",u({transform:"rotate("+n+")"},c,{textAnchor:h}),a))}}if(!0===r||"number"==typeof r){var p=new Map;return c.forEach(function(e,t){p.set(e,l[t])}),function(e){var n=e.x,o=e.y,a=(e.dy,e.formattedValue),c=void 0===a?"":a,l=d(e,["x","y","dy","formattedValue"]),s=p.get(c),f=void 0===s?0:s.width,m=h,y=0;return 0>n-f/2?(m="start","number"==typeof r&&(y-=r)):n+f/2>t&&(m="end","number"==typeof r&&(y+=r)),i.a.createElement("text",u({x:n+y,y:o},l,{textAnchor:m}),c)}}return null}var h=n(259);function f(){return(f=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=8,y=function(){function e(e){m(this,"chartWidth",void 0),m(this,"chartHeight",void 0),m(this,"containerWidth",void 0),m(this,"containerHeight",void 0),m(this,"margin",void 0),m(this,"xEncoder",void 0),m(this,"xLayout",void 0),m(this,"yEncoder",void 0),m(this,"yLayout",void 0);var t=e.width,n=e.height,r=e.minContentWidth,i=void 0===r?0:r,o=e.minContentHeight,a=void 0===o?0:o,l=e.margin,u=e.xEncoder,d=e.xTickSize,s=e.xTickTextStyle,h=e.autoAdjustXMargin,f=e.yEncoder,y=e.yTickSize,g=e.yTickTextStyle,v=e.autoAdjustYMargin;this.xEncoder=u,this.yEncoder=f,void 0!==f.axis&&(this.yLayout=f.axis.computeLayout({axisWidth:Math.max(n-l.top-l.bottom),tickSize:f.axis.config.tickSize||y,tickTextStyle:g}));var x=this.yLayout&&(void 0===v||v)?Object(c.a)(l,this.yLayout.minMargin):l,b=Math.max(t-x.left-x.right,i);void 0!==u.axis&&(this.xLayout=u.axis.computeLayout({axisWidth:b,labelAngle:this.recommendXLabelAngle(u.axis.config.orient),tickSize:u.axis.config.tickSize||d,tickTextStyle:s}));var k=this.xLayout&&(void 0===h||h)?Object(c.a)(x,this.xLayout.minMargin):x,E=Math.max(n-k.top-k.bottom,a),L=Math.round(b+k.left+k.right),O=Math.round(E+k.top+k.bottom),T=L>t,w=O>n;T&&(k.bottom+=p),w&&(k.right+=p),this.chartWidth=T?L+p:L,this.chartHeight=w?O+p:O,this.containerWidth=t,this.containerHeight=n,this.margin=k}var t=e.prototype;return t.recommendXLabelAngle=function(e){void 0===e&&(e="bottom");var t=this.yEncoder.axis;return!this.yLayout||void 0!==t&&("right"===t.config.orient&&"bottom"===e||"left"===t.config.orient&&"top"===e)?h.a:-h.a},t.renderChartWithFrame=function(e){return i.a.createElement(l.a,{width:this.containerWidth,height:this.containerHeight,contentWidth:this.chartWidth,contentHeight:this.chartHeight,renderContent:e})},t.renderXAxis=function(e){var t=this.xEncoder.axis;return t&&this.xLayout?i.a.createElement(o.a,f({label:t.getTitle(),labelOffset:this.xLayout.labelOffset,numTicks:t.config.tickCount,orientation:t.config.orient,tickComponent:s(this.xLayout),tickFormat:t.getFormat()},e)):null},t.renderYAxis=function(e){var t=this.yEncoder.axis;return t&&this.yLayout?i.a.createElement(a.a,f({label:t.getTitle(),labelOffset:this.yLayout.labelOffset,numTicks:t.config.tickCount,orientation:t.config.orient,tickFormat:t.getFormat()},e)):null},e}();function g(e){var t=e.width,n=e.height,r=e.minContentWidth,i=e.minContentHeight,o=e.margin,a=e.xEncoder,c=e.yEncoder,l=e.theme;return new y({height:n,margin:o,minContentHeight:i,minContentWidth:r,width:t,xEncoder:a,xTickSize:l.xTickStyles.length||l.xTickStyles.tickLength,xTickTextStyle:l.xTickStyles.label.bottom||l.xTickStyles.label.top,yEncoder:c,yTickSize:l.yTickStyles.length||l.yTickStyles.tickLength,yTickTextStyle:l.yTickStyles.label.left||l.yTickStyles.label.right})}n.d(t,"a",function(){return g})}}]);