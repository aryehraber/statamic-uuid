!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e);var r,o=new Uint8Array(16);function i(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var a=function(t){return"string"==typeof t&&u.test(t)},s=[],f=0;f<256;++f)s.push((f+256).toString(16).substr(1));var d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[t[e+0]]+s[t[e+1]]+s[t[e+2]]+s[t[e+3]]+"-"+s[t[e+4]]+s[t[e+5]]+"-"+s[t[e+6]]+s[t[e+7]]+"-"+s[t[e+8]]+s[t[e+9]]+"-"+s[t[e+10]]+s[t[e+11]]+s[t[e+12]]+s[t[e+13]]+s[t[e+14]]+s[t[e+15]]).toLowerCase();if(!a(n))throw TypeError("Stringified UUID is invalid");return n};var c=function(t,e,n){var r=(t=t||{}).random||(t.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return d(r)};let p=t=>crypto.getRandomValues(new Uint8Array(t)),l=(t,e=21)=>((t,e,n)=>{let r=(2<<Math.log(t.length-1)/Math.LN2)-1,o=-~(1.6*r*e/t.length);return(i=e)=>{let u="";for(;;){let e=n(o),a=o;for(;a--;)if(u+=t[e[a]&r]||"",u.length===i)return u}}})(t,e,p),y=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let r=63&n[t];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e};var g=function(t,e,n,r,o,i,u,a){var s,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),u?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},f._ssrRegister=s):o&&(s=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(f.functional){f._injectStyles=s;var d=f.render;f.render=function(t,e){return s.call(e),d(t,e)}}else{var c=f.beforeCreate;f.beforeCreate=c?[].concat(c,s):[s]}return{exports:t,options:f}}({mixins:[Fieldtype],computed:{type:function(){return this.config.hidden?"hidden":"text"},readonly:function(){return this.config.read_only||this.config.readonly||!1},prefix:function(){return this.config.id_prefix||""},idType:function(){return this.config.id_type||"uuid"}},methods:{createId:function(){var t="generate"+(this.idType.charAt(0).toUpperCase()+this.idType.slice(1));return this.prefix+this[t]()},generateUuid:function(){return c()},generateNanoid:function(){var t=this.config.alphabet||void 0,e=this.config.size?parseInt(this.config.size):void 0;return(t?l(t):y)(e)}},mounted:function(){var t=this;this.value||setTimeout((function(){return t.update(t.createId())}),100),this.config.hidden&&(this.$parent.$el.style.display="none")}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group"},[n("input",{staticClass:"input-text",attrs:{type:t.type,readonly:t.readonly},domProps:{value:t.value},on:{input:function(e){return t.update(e.target.value)}}})])}),[],!1,null,null,null).exports;Statamic.$components.register("uuid-fieldtype",g)}]);