!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.react);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(e=>(()=>{"use strict";var t={156:t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{n.r(o),n.d(o,{default:()=>r});var e=n(156);function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function r(r){var n,o,a=r.text,l=r.className,u=r.style,i=r.timeout,c=void 0===i?50:i,f=(n=(0,e.useState)(""),o=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,l,u=[],i=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{if(!i&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw o}}return u}}(n,o)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=f[0],y=f[1];return(0,e.useEffect)((function(){var e=0,t=setInterval((function(){e<a.length?(y(a.slice(0,e+1)),e++):clearInterval(t)}),c);return function(){return clearInterval(t)}}),[a]),React.createElement("div",{style:u,className:l},s)}})(),o})()));