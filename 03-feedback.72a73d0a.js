!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function b(e,t,n){var o,i,a,u,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function S(e){return c=e,f=setTimeout(O,t),s?b(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function O(){var e=p();if(h(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-l);return m?g(n,a-(e-c)):n}(e))}function T(e){return f=void 0,d&&o?b(e):(o=i=void 0,u)}function w(){var e=p(),n=h(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(m)return f=setTimeout(O,t),b(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},w.flush=function(){return void 0===f?u:T(p())},w}function y(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=u.test(e);return r||f.test(e)?l(e.slice(2),r?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};var S="feedback-form-state",h={feedbackForm:document.querySelector(".feedback-form"),emailInput:document.querySelector('[name="email"]'),messageInput:document.querySelector('[name="message"]')};h.feedbackForm.addEventListener("input",n((function(e){O[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(O))}),500)),h.feedbackForm.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(S),console.log(O),O.email="",O.message=""}));var O={email:"",message:""};console.log(O),function(){try{var e=localStorage.getItem(S);if(e){var t=JSON.parse(e);h.emailInput.value=t.email,h.messageInput.value=t.message,O.email=t.email,O.message=t.message}}catch(e){console.log(e.name),console.log(e.message)}}()}();
//# sourceMappingURL=03-feedback.72a73d0a.js.map