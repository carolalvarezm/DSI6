parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NkNs":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-alu0100944723/kart_Boo.3d171f05.png";
},{}],"CLy3":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-alu0100944723/kart_Bowser.7e96bd3a.png";
},{}],"lqAh":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-alu0100944723/kart_Huesitos.38988b64.png";
},{}],"zqgI":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-alu0100944723/kart_Peach.3f400ee4.png";
},{}],"eP9K":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-alu0100944723/kart_Toadette.a03daef7.png";
},{}],"hBRt":[function(require,module,exports) {
module.exports="/dsi-p5-mkart-alu0100944723/kart_Yoshi.374480ed.png";
},{}],"HDl6":[function(require,module,exports) {
module.exports={Boo:require("./kart_Boo.png"),Bowser:require("./kart_Bowser.png"),Huesitos:require("./kart_Huesitos.png"),Peach:require("./kart_Peach.png"),Toadette:require("./kart_Toadette.png"),Yoshi:require("./kart_Yoshi.png")};
},{"./kart_Boo.png":"NkNs","./kart_Bowser.png":"CLy3","./kart_Huesitos.png":"lqAh","./kart_Peach.png":"zqgI","./kart_Toadette.png":"eP9K","./kart_Yoshi.png":"hBRt"}],"n1fD":[function(require,module,exports) {
module.exports={};
},{}],"bF3O":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ItemKart=void 0;var t=e(require("../assets/item_*.png"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t){return function(){var e,n=y(t);if(l()){var r=y(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return u(this,e)}}function u(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function f(t){var e="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||!a(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return p(t,arguments,y(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s(n,t)})(t)}function p(t,e,n){return(p=l()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&s(o,n.prototype),o}).apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function a(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=function(t){i(n,f(HTMLElement));var e=o(n);function n(){return r(this,n),e.call(this)}return n}();exports.ItemKart=b;
},{"../assets/item_*.png":"n1fD"}],"ZlrI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.KartPlayer=void 0;var t=require("./ItemKart");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function i(t){return function(){var e,n=h(t);if(f()){var r=h(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return u(this,e)}}function u(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?c(t):n}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||!p(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return l(t,arguments,h(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),y(n,t)})(t)}function l(t,e,n){return(l=f()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&y(o,n.prototype),o}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function p(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){s(r,a(HTMLElement));var e=i(r);function r(t,o){var i;return n(this,r),(i=e.call(this)).name=t,i.y=o.y,i.x=0,i.img=o.image,i.attachShadow({mode:"open"}),i.render(),i}return o(r,[{key:"addToRoad",value:function(t){t.appendChild(this)}},{key:"inc",value:function(){this.x=this.x+this.setSpeed(),this.style.setProperty("--x","".concat(this.x,"px"))}},{key:"setSpeed",value:function(){return 45*Math.random()+5}},{key:"isWinner",value:function(){return this.x>=950}},{key:"win",value:function(){this.classList.add("win")}},{key:"lose",value:function(){this.classList.add("lose")}},{key:"restart",value:function(){this.x=0,this.classList.remove("win"),this.classList.remove("lose"),this.style.setProperty("--x","".concat(this.x,"px"))}},{key:"render",value:function(){this.shadowRoot.innerHTML="\n              <style>".concat(this.styles,'</style>\n              <item-kart></item-kart>\n              <img src="').concat(this.img,'" alt="').concat(this.name,'">\n            ')}},{key:"styles",get:function(){return"\n           :host {\n             position: absolute;\n             display: inline-block;\n             left: 0;\n             top: ".concat(this.y,"px;\n             transform: translateX(var(--x));\n             transition: transform 60/1000s;\n             will-change: transform;\n           }\n           :host(.win) {\n                filter:drop-shadow(0 0 6px yellow);\n                z-index:5;\n            }\n           :host(.lose) {\n                opacity:0.25;\n            }\n         ")}}]),r}();exports.KartPlayer=d;
},{"./ItemKart":"bF3O"}],"QvaY":[function(require,module,exports) {
"use strict";var r=e(require("../assets/kart_*.png")),t=require("./KartPlayer.js");function e(r){return r&&r.__esModule?r:{default:r}}function n(r,t){return c(r)||i(r,t)||a(r,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(r,t){if(r){if("string"==typeof r)return u(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(r,t):void 0}}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function i(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],n=!0,o=!1,a=void 0;try{for(var u,i=r[Symbol.iterator]();!(n=(u=i.next()).done)&&(e.push(u.value),!t||e.length!==t);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return e}}function c(r){if(Array.isArray(r))return r}customElements.define("kart-player",t.KartPlayer);for(var l=document.querySelector(".start"),f=document.querySelector(".restart"),s=document.querySelector(".road"),d=[],y=null,m=0,b=Object.entries(r.default);m<b.length;m++){var h=n(b[m],2),v=h[0],p=h[1],g={image:p,y:64*d.length},S=new t.KartPlayer(v,g);S.addToRoad(s),d.push(S)}var j=function(){y=setInterval(function(){return q()},1e3/60),l.disabled=!0,f.disabled=!0},w=function(){clearInterval(y),d.forEach(function(r){return r.isWinner()?r.win():r.lose()}),f.disabled=!1},A=function(){d.forEach(function(r){return r.restart()}),l.disabled=!1},q=function(){d.forEach(function(r){return r.inc()}),d.some(function(r){return r.isWinner()})&&w()};l.onclick=function(){return j()},f.onclick=function(){return A()};
},{"../assets/kart_*.png":"HDl6","./KartPlayer.js":"ZlrI"}]},{},["QvaY"], null)
//# sourceMappingURL=/dsi-p5-mkart-alu0100944723/js.076f0b45.js.map