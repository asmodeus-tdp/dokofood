this.wp=this.wp||{},this.wp.viewport=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=392)}({0:function(t,e){!function(){t.exports=this.wp.element}()},13:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(37);var o=n(29),i=n(38);function c(t,e){return Object(r.a)(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,e)||Object(o.a)(t,e)||Object(i.a)()}},2:function(t,e){!function(){t.exports=this.lodash}()},26:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},29:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(26);function o(t,e){if(t){if("string"==typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},37:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return r}))},38:function(t,e,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(e,"a",(function(){return r}))},392:function(t,e,n){"use strict";n.r(e),n.d(e,"ifViewportMatches",(function(){return v})),n.d(e,"withViewportMatch",(function(){return h}));var r={};n.r(r),n.d(r,"setIsMatching",(function(){return u}));var o={};n.r(o),n.d(o,"isViewportMatch",(function(){return a}));var i=n(4);var c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_IS_MATCHING":return e.values}return t};function u(t){return{type:"SET_IS_MATCHING",values:t}}function a(t,e){return-1===e.indexOf(" ")&&(e=">= "+e),!!t[e]}Object(i.registerStore)("core/viewport",{reducer:c,actions:r,selectors:o});var f=n(2),s=function(t,e){var n=Object(f.debounce)((function(){var t=Object(f.mapValues)(r,(function(t){return t.matches}));Object(i.dispatch)("core/viewport").setIsMatching(t)}),{leading:!0}),r=Object(f.reduce)(t,(function(t,r,o){return Object(f.forEach)(e,(function(e,i){var c=window.matchMedia("(".concat(e,": ").concat(r,"px)"));c.addListener(n);var u=[i,o].join(" ");t[u]=c})),t}),{});window.addEventListener("orientationchange",n),n(),n.flush()},l=n(9),p=n(8),d=n(13),b=n(0),h=function(t){return Object(l.createHigherOrderComponent)((function(e){return Object(l.pure)((function(n){var r=Object(f.mapValues)(t,(function(t){var e=t.split(" "),n=Object(d.a)(e,2),r=n[0],o=n[1];return void 0===o&&(o=r,r=">="),Object(l.useViewportMatch)(o,r)}));return Object(b.createElement)(e,Object(p.a)({},n,r))}))}),"withViewportMatch")},v=function(t){return Object(l.createHigherOrderComponent)(Object(l.compose)([h({isViewportMatch:t}),Object(l.ifCondition)((function(t){return t.isViewportMatch}))]),"ifViewportMatches")};s({huge:1440,wide:1280,large:960,medium:782,small:600,mobile:480},{"<":"max-width",">=":"min-width"})},4:function(t,e){!function(){t.exports=this.wp.data}()},8:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},9:function(t,e){!function(){t.exports=this.wp.compose}()}});