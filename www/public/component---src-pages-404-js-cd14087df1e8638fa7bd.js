webpackJsonp([0x9427c64ab85d],{5:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function a(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==a.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;e.exports=a()?Object.assign:function(e,t){for(var a,o,u=n(e),s=1;s<arguments.length;s++){a=Object(arguments[s]);for(var i in a)l.call(a,i)&&(u[i]=a[i]);if(r){o=r(a);for(var f=0;f<o.length;f++)c.call(a,o[f])&&(u[o[f]]=a[o[f]])}}return u}},185:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),l=a(r),c=n(65),o=function(){return l.default.createElement("div",{className:"page page--404"},l.default.createElement(c.Banner,null),l.default.createElement("h1",null,"NOT FOUND"),l.default.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))};t.default=o,e.exports=t.default},60:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){if(null==e)throw new TypeError("Cannot destructure undefined")}t.__esModule=!0;var l=n(2),c=a(l),o=n(6);a(o);n(89);var u={},s={},i=function(e){return r(e),c.default.createElement("div",{className:"banner"},c.default.createElement("div",{className:"banner__inner"},c.default.createElement("h1",{className:"banner__title"},"International Sanctions Advice"),c.default.createElement("p",{className:"banner__subtitle"},". Stockholm .")))};i.propTypes=u,i.defaultProps=s,t.default=i,e.exports=t.default},89:function(e,t){},61:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),l=a(r),c=n(6),o=a(c),u={to:o.default.string},s={to:""},i=function(e){var t=e.to;return l.default.createElement("a",{className:"mail-to",href:"mailto:"+t},t)};i.propTypes=u,i.defaultProps=s,t.default=i,e.exports=t.default},62:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){if(null==e)throw new TypeError("Cannot destructure undefined")}t.__esModule=!0;var l=n(2),c=a(l),o=n(6),u=(a(o),n(61)),s=a(u);n(90);var i={},f={},d=function(e){return r(e),c.default.createElement("div",{className:"contact"},c.default.createElement("h3",{className:"contact__title"},"Contact"),c.default.createElement("div",{className:"contact__row contact__row--info"},c.default.createElement("i",{className:"material-icons"},"contact_mail"),c.default.createElement(s.default,{to:"contact@international-sanctions.com"})),c.default.createElement("div",{className:"contact__row contact__row--text"},"Or contact Christoffer Berg directly"),c.default.createElement("div",{className:"contact__row contact__row--info"},c.default.createElement("i",{className:"material-icons"},"call"),"+46 70 37 89 600"),c.default.createElement("div",{className:"contact__row contact__row--info"},c.default.createElement("i",{className:"material-icons"},"contact_mail"),c.default.createElement(s.default,{to:"christoffer.berg@international-sanctions.com"})))};d.propTypes=i,d.defaultProps=f,t.default=d,e.exports=t.default},90:function(e,t){},63:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),l=a(r),c=n(6),o=a(c),u={text:o.default.string,icon:o.default.string},s={text:"",icon:""},i=function(e){var t=e.text,n=e.icon;return l.default.createElement("li",{className:"service-item"},l.default.createElement("i",{className:"material-icons"},n),t)};i.propTypes=u,i.defaultProps=s,t.default=i,e.exports=t.default},64:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){if(null==e)throw new TypeError("Cannot destructure undefined")}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c=n(2),o=a(c),u=n(6),s=(a(u),n(63)),i=a(s),f={},d={},m=[{icon:"update",text:"Up to date legal counsel on EU and US sanctions"},{icon:"live_help",text:"Advice on legal recourse"},{icon:"data_usage",text:"Analysis of political processes and geopolitical frameworks with regard to sanctions"},{icon:"get_app",text:"Access to related services"}],p=function(e){return r(e),o.default.createElement("div",{className:"services"},o.default.createElement("h3",null,"International Sanctions offers:"),o.default.createElement("ul",{className:"services__list"},m.map(function(e,t){return o.default.createElement(i.default,l({key:t},e))})))};p.propTypes=f,p.defaultProps=d,t.default=p,e.exports=t.default},65:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(60);Object.defineProperty(t,"Banner",{enumerable:!0,get:function(){return a(r).default}});var l=n(64);Object.defineProperty(t,"Services",{enumerable:!0,get:function(){return a(l).default}});var c=n(62);Object.defineProperty(t,"Contact",{enumerable:!0,get:function(){return a(c).default}})}});
//# sourceMappingURL=component---src-pages-404-js-cd14087df1e8638fa7bd.js.map