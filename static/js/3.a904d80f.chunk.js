(this.webpackJsonpelectronic=this.webpackJsonpelectronic||[]).push([[3,23,35,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],Array(67).concat([function(t,e,n){"use strict";n.r(e);var a=n(187),r=n.n(a),c=n(4),i=n(188),o=n(16),s=n(0),u=n.n(s),p=n(50),f=n(18),l=n(19),d=n(17);e.default=Object(f.b)(null,(function(t){return{onAddToCart:function(e){return t(Object(l.addToCart)(e))}}}))((function(t){var e=Object(s.useState)([]),n=Object(o.a)(e,2),a=n[0],f=n[1],l=Object(s.useState)([]),m=Object(o.a)(l,2),h=m[0],g=m[1],y=Object(s.useState)([]),v=Object(o.a)(y,2),j=v[0],b=v[1],E=t.id,w=t.qtyDetail,O=function(){var t=Object(i.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],n=[],t.next=4,d.db.collection("cart").get().then((function(t){return t.docs.map((function(t){return e.push(Object(c.a)(Object(c.a)({},t.data()),{},{id:t.id})),n.push(t.id),!0}))}));case 4:e.length>0?b([].concat(e)):b([]);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){(function(){var t=Object(i.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],n=[],t.next=4,d.db.collection("products").get().then((function(t){return t.docs.map((function(t){return e.push(Object(c.a)(Object(c.a)({},t.data()),{},{id:t.id})),!0}))}));case 4:e.filter((function(t){return t.id===E&&n.push(Object(c.a)({},t)),!0})),n.length>0?f([].concat(n)):f([]);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[E]),Object(s.useEffect)((function(){(function(){var t=Object(i.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],n=[],t.next=4,d.db.collection("products").get().then((function(t){return t.docs.map((function(t){return e.push(Object(c.a)(Object(c.a)({},t.data()),{},{id:t.id})),!0}))}));case 4:e.filter((function(t){return t.id===E&&n.push(Object(c.a)({},t)),!0})),n.length>0?f([].concat(n)):f([]);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[w,E]),Object(s.useEffect)((function(){O()}),[h]),u.a.createElement("div",{className:"add-to-cart"},u.a.createElement("button",{className:"add-to-cart-btn",style:{outline:"none"},onClick:function(){var e={idProduct:a[0].id,name:a[0].name,img:a[0].img,newPrice:a[0].newPrice,oldPrice:a[0].oldPrice,status:"unpaid",discount:a[0].discount,qty:t.qtyDetail?t.qtyDetail:1,total:a[0].newPrice},n=function(t,e){var n=-1;if(a.length>0&&t.length>0)for(var r=0;r<t.length;r++)if(t[r].idProduct===e.idProduct){if("unpaid"===t[r].status)return r;n=-1}else n=-1;return n}(j,e);if(-1!==n){var r=j[n].id;d.db.collection("cart").doc(r).update(Object(c.a)(Object(c.a)({},e),{},{id:j[n].id,qty:t.qtyDetail?j[n].qty+parseInt(t.qtyDetail):j[n].qty+1,total:(j[n].qty+1)*j[n].newPrice})),g(Object(c.a)({},e))}else d.db.collection("cart").add(Object(c.a)({},e)),g(Object(c.a)({},e));t.onAddToCart(Object(c.a)({},e)),p.NotificationManager.success("Add to cart successfully")}},u.a.createElement("i",{className:"fa fa-shopping-cart"})," add to cart"))}))},,function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a);e.default=function(t){var e=Math.ceil(t.data.length/t._limit);return e<=1?"":r.a.createElement("div",{style:{width:"180px",marginLeft:"auto"}},r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",{className:"page-item"},r.a.createElement("button",{className:"page-link",disabled:1>=t.currentPage,onClick:function(){return t.prePage(t.currentPage)}},"Previous")),r.a.createElement("li",{className:"page-item"},r.a.createElement("button",{className:"page-link"},t.currentPage)),r.a.createElement("li",{disabled:e<=t.currentPage,className:"page-item"},r.a.createElement("button",{className:"page-link",disabled:e<=t.currentPage,onClick:function(){return t.nextPage(t.currentPage)}},"Next"))))}},,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(187),r=n.n(a),c=n(4),i=n(188),o=n(16),s=n(0),u=n.n(s),p=n(2),f=n(69),l=n(21),d=n(67),m=n(17);e.default=function(t){var e=Object(s.useState)(1),a=Object(o.a)(e,2),h=a[0],g=a[1],y=Object(s.useState)(0),v=Object(o.a)(y,2),j=v[0],b=v[1],E=Object(s.useState)([]),w=Object(o.a)(E,2),O=w[0],x=w[1];Object(s.useEffect)((function(){(function(){var t=Object(i.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],t.next=3,m.db.collection("products").get().then((function(t){return t.docs.map((function(t){return e.push(Object(c.a)(Object(c.a)({},t.data()),{},{id:t.id})),!0}))}));case 3:n=[],e.filter((function(t){return!0===t.hotdeal&&n.push(t),!0})),n.length>0?(x([].concat(n)),b(0),g(1)):x([]);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var N=function(){var t=[];if(!(O.length<=0)){var e=j+6>=O.length?O.length:j+6;if(1===O.length)return O;for(var n=j;n<e;n++)t.push(O[n]);return t}};return O.length?u.a.createElement("div",{className:"row"},N()&&N().map((function(t,e){var a=t.oldPrice?"$".concat(t.oldPrice):"",r=""===t.discount?"":u.a.createElement("span",{className:"sale"},"-".concat(t.discount,"%"));return u.a.createElement("div",{className:"col-lg-4 col-md-6 col-12",key:e},u.a.createElement("div",{className:"product"},u.a.createElement("div",{className:"product-img"},u.a.createElement("img",{src:n(189)("./".concat(t.img)).default,alt:""}),u.a.createElement("div",{className:"product-label"},r)),u.a.createElement("div",{className:"product-body"},u.a.createElement("p",{className:"product-category"},"Category"),u.a.createElement("h3",{className:"product-name"},u.a.createElement(p.b,{to:"/detail/".concat(t.id)},t.name)),u.a.createElement("h4",{className:"product-price"},"$",t.newPrice,u.a.createElement("del",{className:"product-old-price ml-2"},a)),u.a.createElement("div",{className:"product-rating"},u.a.createElement("i",{className:"fas fa-star"}),u.a.createElement("i",{className:"fas fa-star"}),u.a.createElement("i",{className:"fas fa-star"}),u.a.createElement("i",{className:"fas fa-star"}),u.a.createElement("i",{className:"fas fa-star"})),u.a.createElement("div",{className:"product-btns"},u.a.createElement("button",{className:"add-to-compare"},u.a.createElement("i",{className:"fas fa-exchange-alt"}),u.a.createElement("span",{className:"tooltipp"},"add to compare")),u.a.createElement("button",{className:"quick-view"},u.a.createElement("i",{className:"fa fa-eye"}),u.a.createElement("span",{className:"tooltipp"},"quick view")))),u.a.createElement(d.default,{id:t.id})))})),u.a.createElement("div",{className:"container mt-5"},u.a.createElement(f.default,{nextPage:function(t){b(6*t),g(h+1)},prePage:function(t){b(6*(t-2)),g(h-1)},data:O,_limit:6,currentPage:h}))):u.a.createElement(l.default,{custom:{position:"relative",top:"-50px"}})}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/acess1.9bd01254.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/acess2.5da5810b.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/acess3.df48b375.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/acess4.0b09d76c.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/camera1.78f474df.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/camera2.61568732.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/camera3.67843e77.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/camera4.90f1d0ec.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/camerasony1.1b71e231.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/camerasony2.08314e7a.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/camerasony3.c7604ff5.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/camerasony4.08314e7a.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/dell.1400ed09.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/headphonesony1.c25b12e1.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/headphonesony1.d0c24cec.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/headphonesony2.216cb526.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/headphonesony3.b1f58643.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/headphonesony4.faa89a06.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/hotdeal.a9359af3.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/iphone11a.003fe2fc.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/iphone11b.3db16d25.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/iphone11c.58f76b0b.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/iphone11d.c4621956.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/iphone11max.8ef16ed7.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/iphone11pro.b00f835e.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/iphoneSE.5eceb972.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/iphonexs.b619dcc7.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/macbookpro1.f258eb68.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/macbookpro2.db3c6590.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/macbookpro3.42935c00.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/macbookpro4.1bb85962.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/product01.4097d193.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/product02.70190c90.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/product03.9efd2f21.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/product04.f70b9f51.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/product05.a891f648.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/product06.61d4d19c.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/product07.7498c028.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/product08.8f0b6715.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/product09.c8102ebc.png"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/samsung.3b0bdefe.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/samsunga.f073d02e.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/samsungb.623f4415.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/samsungc.cd2b3018.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/samsungd.54d6c761.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/sonyheadphone.4f0799d9.jpg"},,,,,,,,,,function(t,e,n){t.exports=n(190)},function(t,e,n){"use strict";function a(t,e,n,a,r,c,i){try{var o=t[c](i),s=o.value}catch(u){return void n(u)}o.done?e(s):Promise.resolve(s).then(a,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,c){var i=t.apply(e,n);function o(t){a(i,r,c,o,s,"next",t)}function s(t){a(i,r,c,o,s,"throw",t)}o(void 0)}))}}n.d(e,"a",(function(){return r}))},function(t,e,n){var a={"./acess1.jpg":132,"./acess2.jpg":133,"./acess3.jpg":134,"./acess4.jpg":135,"./camera1.jpg":136,"./camera2.jpg":137,"./camera3.jpg":138,"./camera4.jpg":139,"./camerasony1.jpg":140,"./camerasony2.jpg":141,"./camerasony3.jpg":142,"./camerasony4.jpg":143,"./dell.jpg":144,"./headphonesony1.jpg":145,"./headphonesony1.png":146,"./headphonesony2.jpg":147,"./headphonesony3.jpg":148,"./headphonesony4.jpg":149,"./hotdeal.png":150,"./iphone11a.jpg":151,"./iphone11b.jpg":152,"./iphone11c.jpg":153,"./iphone11d.jpg":154,"./iphone11max.jpg":155,"./iphone11pro.jpg":156,"./iphoneSE.jpg":157,"./iphonexs.jpg":158,"./logo.png":38,"./macbookpro1.jpg":159,"./macbookpro2.jpg":160,"./macbookpro3.jpg":161,"./macbookpro4.jpg":162,"./product01.png":163,"./product02.png":164,"./product03.png":165,"./product04.png":166,"./product05.png":167,"./product06.png":168,"./product07.png":169,"./product08.png":170,"./product09.png":171,"./samsung.jpg":172,"./samsunga.jpg":173,"./samsungb.jpg":174,"./samsungc.jpg":175,"./samsungd.jpg":176,"./shop01.png":46,"./shop02.png":48,"./shop03.png":47,"./shop04.jpg":49,"./sonyheadphone.jpg":177};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=c,t.exports=r,r.id=189},function(t,e,n){var a=function(t){"use strict";var e,n=Object.prototype,a=n.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},c=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function s(t,e,n,a){var r=e&&e.prototype instanceof h?e:h,c=Object.create(r.prototype),i=new P(a||[]);return c._invoke=function(t,e,n){var a=p;return function(r,c){if(a===l)throw new Error("Generator is already running");if(a===d){if("throw"===r)throw c;return _()}for(n.method=r,n.arg=c;;){var i=n.delegate;if(i){var o=x(i,n);if(o){if(o===m)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=l;var s=u(t,e,n);if("normal"===s.type){if(a=n.done?d:f,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=d,n.method="throw",n.arg=s.arg)}}}(t,n,i),c}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(a){return{type:"throw",arg:a}}}t.wrap=s;var p="suspendedStart",f="suspendedYield",l="executing",d="completed",m={};function h(){}function g(){}function y(){}var v={};v[c]=function(){return this};var j=Object.getPrototypeOf,b=j&&j(j(L([])));b&&b!==n&&a.call(b,c)&&(v=b);var E=y.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t,e){function n(r,c,i,o){var s=u(t[r],t,c);if("throw"!==s.type){var p=s.arg,f=p.value;return f&&"object"===typeof f&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,o)}),(function(t){n("throw",t,i,o)})):e.resolve(f).then((function(t){p.value=t,i(p)}),(function(t){return n("throw",t,i,o)}))}o(s.arg)}var r;this._invoke=function(t,a){function c(){return new e((function(e,r){n(t,a,e,r)}))}return r=r?r.then(c,c):c()}}function x(t,n){var a=t.iterator[n.method];if(a===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,x(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=u(a,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,m;var c=r.arg;return c?c.done?(n[t.resultName]=c.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function L(t){if(t){var n=t[c];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(a.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:_}}function _(){return{value:e,done:!0}}return g.prototype=E.constructor=y,y.constructor=g,y[o]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,o in t||(t[o]="GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},w(O.prototype),O.prototype[i]=function(){return this},t.AsyncIterator=O,t.async=function(e,n,a,r,c){void 0===c&&(c=Promise);var i=new O(s(e,n,a,r),c);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(E),E[o]="Generator",E[c]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var a=e.pop();if(a in t)return n.value=a,n.done=!1,n}return n.done=!0,n}},t.values=L,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(a,r){return o.type="throw",o.arg=t,n.next=a,r&&(n.method="next",n.arg=e),!!r}for(var c=this.tryEntries.length-1;c>=0;--c){var i=this.tryEntries[c],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var c=r;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var i=c?c.completion:{};return i.type=t,i.arg=e,c?(this.method="next",this.next=c.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var r=a.arg;k(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,a){return this.delegate={iterator:L(t),resultName:n,nextLoc:a},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=a}catch(r){Function("r","regeneratorRuntime = r")(a)}}])]);
//# sourceMappingURL=3.a904d80f.chunk.js.map