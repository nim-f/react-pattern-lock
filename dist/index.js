!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["prop-types","react"],e):"object"==typeof exports?exports.ReactPatternLock=e(require("prop-types"),require("react")):t.ReactPatternLock=e(t.PropTypes,t.React)}(window,function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),i=n(0),a=n.n(i);n(7);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var v=function(t){function e(t){var n,r,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=l(e).call(this,t))||"object"!==s(o)&&"function"!=typeof o?d(r):o).points=[];for(var i=(t.vSize?t.size*t.vSize:Math.pow(t.size,2))-1;i>=0;i-=1)n.points.push({x:0,y:0});var a=t.path.length&&t.freeze;return n.state={height:0,path:a?t.path:[],position:{x:0,y:0},error:!1,isFrozen:a,isLoading:!1},n.unerrorTimeout=0,n.onHold=n.onHold.bind(d(d(n))),n.onRelease=n.onRelease.bind(d(d(n))),n.onMove=n.onMove.bind(d(d(n))),n.left=0,n.top=0,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,r["PureComponent"]),f(e,null,[{key:"getPositionFromEvent",value:function(t){var e=t.clientX,n=t.clientY,r=t.touches;return r&&r.length?{x:r[0].clientX,y:r[0].clientY}:{x:e,y:n}}}]),f(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.vSize?this.wrapper.offsetWidth/this.props.size*this.props.vSize:this.wrapper.offsetWidth;this.setState({height:e},function(){t.updateProperties(),t.forceUpdate()}),this.state.isFrozen&&this.onChange(),window.addEventListener("mouseup",this.onRelease),window.addEventListener("touchend",this.onRelease)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.unerrorTimeout),window.removeEventListener("mouseup",this.onRelease),window.removeEventListener("touchend",this.onRelease)}},{key:"onHold",value:function(t){this.isDisabled||(this.updateProperties(),this.wrapper.addEventListener("mousemove",this.onMove),this.wrapper.addEventListener("touchmove",this.onMove),this.reset(),this.updateMousePositionAndCheckCollision(t,!0))}},{key:"onRelease",value:function(){this.wrapper.removeEventListener("mousemove",this.onMove),this.wrapper.removeEventListener("touchmove",this.onMove),!this.isDisabled&&this.state.path.length>0&&!this.state.error&&this.onChange()}},{key:"onChange",value:function(){var t=this;this.setState({isLoading:!0});var e=this.props.onChange(this.state.path);if("function"!=typeof e.then)throw new Error("The onChange prop must return a promise.");e.then(function(){t.shouldFreezeResult?t.setState({isLoading:!1,isFrozen:!0}):(t.reset(),t.setState({isLoading:!1}))}).catch(function(e){t.error(e),t.setState({isLoading:!1})})}},{key:"onMove",value:function(t){this.updateMousePositionAndCheckCollision(t)}},{key:"getExactPointPosition",value:function(t){var e=t.x,n=t.y,r=Math.floor(this.props.pointActiveSize/2);return{x:e+r,y:n+r-Math.floor(this.props.connectorWidth/2)}}},{key:"getColor",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.state.error&&e?this.props.errorColor:this.state.isFrozen&&e?this.props.freezeColor:this.isDisabled?this.props.disabledColor:t}},{key:"updateMousePositionAndCheckCollision",value:function(t,n){var r=e.getPositionFromEvent(t),o=r.x,i=r.y,a={x:o-this.left,y:i-this.top};this.setState({path:n?[]:this.state.path,position:a},this.detectCollision.bind(this,a))}},{key:"activate",value:function(t){var e=p(this.state.path);this.props.allowJumping||(e=p(e).concat(p(this.checkJumping(this.state.path[this.state.path.length-1],t)))),e.push(t),this.setState({path:e}),this.props.onDotConnect(t)}},{key:"detectCollision",value:function(t){var e=this,n=t.x,r=t.y,o=this.props,i=o.pointActiveSize,a=o.allowOverlapping,s=o.disabledPoints,c=this.state.path;this.points.forEach(function(t,o){(a&&c[c.length-1]!==o||-1===c.indexOf(o))&&n>t.x&&n<t.x+i&&r>t.y&&r<t.y+i&&s.indexOf(o)<0&&e.activate(o)})}},{key:"checkJumping",value:function(t,e){var n=this.props.size,r=this.state.path,o=t%n,i=Math.floor(t/n),a=e%n,s=Math.floor(e/n);if(i===s){var c=Math.abs(o-a);if(c>1){for(var p=[],l=Math.min(o,a),u=1;u<c;u+=1){var f=i*n+u+l;-1===r.indexOf(f)&&p.push(f)}return p}}else if(o===a){var h=Math.abs(i-s);if(h>1){for(var d=[],v=Math.min(i,s),y=1;y<h;y+=1){var m=(y+v)*n+o;-1===r.indexOf(m)&&d.push(m)}return d}}else{var b=Math.abs(o-a),g=Math.abs(i-s);if(b===g&&b>1){for(var w=a-o>0?1:-1,k=s-i>0?1:-1,x=[],_=1;_<g;_+=1){var C=(_*k+i)*n+_*w+o;-1===r.indexOf(C)&&x.push(C)}return x}}return[]}},{key:"updateProperties",value:function(){var t=this.props.pointActiveSize/2,e=this.wrapper.getBoundingClientRect(),n=e.left,r=e.top,o=this.props.size,i=this.props.vSize?this.state.height/this.props.vSize:this.state.height/this.props.size,a=i/2;this.left=n,this.top=r,this.points=this.points.map(function(e,n){return{x:i*(n%o)+a-t,y:i*Math.floor(n/o)+a-t}})}},{key:"error",value:function(){var t=this;this.setState({error:!0}),this.unerrorTimeout=setTimeout(function(){t.reset()},3e3)}},{key:"reset",value:function(){clearTimeout(this.unerrorTimeout),this.setState({error:!1,isFrozen:!1,path:[]})}},{key:"renderConnectors",value:function(){var t=this;return o.a.createElement("div",{className:"react-pattern-lock__connector-wrapper"},this.state.path.map(function(e,n,r){var i=void 0===r[n+1];if(i&&(t.isDisabled||t.state.error||t.state.isFrozen))return null;var a,s,c=t.getExactPointPosition(t.points[e]),p=null;return p=i?{x:t.state.position.x,y:t.state.position.y-t.props.connectorWidth/2}:t.getExactPointPosition(t.points[r[n+1]]),o.a.createElement("div",{className:"react-pattern-lock__connector",key:"".concat(e,"-").concat(r[n+1]),style:{background:t.getColor(t.props.connectorColor),transform:"rotate(".concat((a=c,s=p,Math.atan2(s.y-a.y,s.x-a.x)),"rad)"),width:"".concat(function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}(c,p),"px"),left:"".concat(c.x,"px"),top:"".concat(c.y,"px"),height:t.props.connectorWidth,borderRadius:t.props.connectorRoundedCorners?Math.round(t.props.connectorWidth/2):0}})}))}},{key:"renderPoints",value:function(){var t=this,e=this.props,n=e.pointSize,r=e.pointActiveSize,i=e.pointColor,a=e.size,s=e.vSize;return this.points.map(function(e,c){var p=t.props.disabledPoints.indexOf(c)>=0,l=t.state.path.indexOf(c),u=l>-1,f=u?l+1:null,h=100/a,d=s?100/s:100/a;return o.a.createElement("div",{key:c,className:"react-pattern-lock__point-wrapper ".concat(p?"point--disabled":""),style:{width:"".concat(h,"%"),height:"".concat(d,"%"),flex:"1 0 ".concat(h,"%")}},o.a.createElement("div",{className:"react-pattern-lock__point",style:{width:r,height:r}},o.a.createElement("div",{className:u&&!t.props.noPop?"active":"",style:{minWidth:n,minHeight:n,background:t.getColor(i,u)},"data-order-number":f})))})}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{ref:function(e){t.wrapper=e},className:"react-pattern-lock__pattern-wrapper".concat(this.state.error?" error":"").concat(this.isDisabled?" disabled":""," ").concat(this.props.className),style:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){c(t,e,n[e])})}return t}({},this.props.style,{width:this.props.width,height:this.state.height}),onMouseDown:this.onHold,onTouchStart:this.onHold,role:"presentation"},!this.props.invisible&&this.renderConnectors(),this.renderPoints())}},{key:"isDisabled",get:function(){return this.props.disabled||this.state.isLoading}},{key:"shouldFreezeResult",get:function(){return this.props.freeze}}]),e}();v.displayName="PatternLock",v.propTypes={width:a.a.oneOfType([a.a.string,a.a.number]).isRequired,vSize:a.a.number,path:a.a.array,disabledPoints:a.a.array,onChange:a.a.func,onDotConnect:a.a.func,className:a.a.string,style:a.a.object,errorColor:a.a.string,freezeColor:a.a.string,pointColor:a.a.string,pointSize:a.a.number,pointActiveSize:a.a.number,connectorWidth:a.a.number,connectorColor:a.a.string,connectorRoundedCorners:a.a.bool,disabledColor:a.a.string,invisible:a.a.bool,noPop:a.a.bool,disabled:a.a.bool,freeze:a.a.bool,allowOverlapping:a.a.bool,allowJumping:a.a.bool,size:function(t,e){if(t[e]<2||t[e]>15)return new Error("Size must be between 2 and 15")}},v.defaultProps={size:3,vSize:!1,path:[],onChange:function(){return Promise.resolve()},onDotConnect:function(){},disabledPoints:[],className:"",style:{},errorColor:"#F00",freezeColor:"#779ecb",pointColor:"#FFF",pointSize:10,pointActiveSize:30,connectorWidth:2,connectorColor:"#FFF",connectorRoundedCorners:!1,disabledColor:"#BBB",invisible:!1,noPop:!1,disabled:!1,freeze:!1,allowOverlapping:!1,allowJumping:!1};var y=v;e.default=y},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,p=0,l=[],u=n(3);function f(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function h(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function d(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function y(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),m(e,t.attrs),d(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=p++;n=c||(c=y(e)),r=k.bind(null,n,a,!1),o=k.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),d(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return f(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&f(h(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var g,w=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function k(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".react-pattern-lock__pattern-wrapper * {\n  user-select: none;\n}\n.react-pattern-lock__pattern-wrapper {\n  touch-action: none;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n.react-pattern-lock__pattern-wrapper.disabled .react-pattern-lock__point-wrapper .react-pattern-lock__point {\n  cursor: not-allowed;\n}\n.react-pattern-lock__pattern-wrapper .react-pattern-lock__connector-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  pointer-events: none;\n}\n.react-pattern-lock__pattern-wrapper .react-pattern-lock__connector-wrapper .react-pattern-lock__connector {\n  position: absolute;\n  transform-origin: center left;\n}\n.react-pattern-lock__pattern-wrapper .react-pattern-lock__point-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.react-pattern-lock__pattern-wrapper .react-pattern-lock__point-wrapper .react-pattern-lock__point {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.react-pattern-lock__pattern-wrapper .react-pattern-lock__point-wrapper .react-pattern-lock__point > div {\n  border-radius: 50%;\n}\n.react-pattern-lock__pattern-wrapper .react-pattern-lock__point-wrapper .react-pattern-lock__point > div.active {\n  animation: pop 300ms ease;\n}\n@-moz-keyframes pop {\n  from {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(2);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes pop {\n  from {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(2);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n@-o-keyframes pop {\n  from {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(2);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n@keyframes pop {\n  from {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(2);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n",""])},function(t,e,n){var r=n(6);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(t.exports=r.locals)}])});