(this.webpackJsonpelectronic=this.webpackJsonpelectronic||[]).push([[18,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],Array(67).concat([function(t,e,a){"use strict";a.r(e);var c=a(187),n=a.n(c),r=a(4),i=a(188),s=a(16),u=a(0),o=a.n(u),p=a(50),d=a(18),f=a(19),l=a(17);e.default=Object(d.b)(null,(function(t){return{onAddToCart:function(e){return t(Object(f.addToCart)(e))}}}))((function(t){var e=Object(u.useState)([]),a=Object(s.a)(e,2),c=a[0],d=a[1],f=Object(u.useState)([]),m=Object(s.a)(f,2),g=m[0],j=m[1],b=Object(u.useState)([]),h=Object(s.a)(b,2),y=h[0],O=h[1],v=t.id,E=t.qtyDetail,N=function(){var t=Object(i.a)(n.a.mark((function t(){var e,a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],a=[],t.next=4,l.db.collection("cart").get().then((function(t){return t.docs.map((function(t){return e.push(Object(r.a)(Object(r.a)({},t.data()),{},{id:t.id})),a.push(t.id),!0}))}));case 4:e.length>0?O([].concat(e)):O([]);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.useEffect)((function(){(function(){var t=Object(i.a)(n.a.mark((function t(){var e,a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],a=[],t.next=4,l.db.collection("products").get().then((function(t){return t.docs.map((function(t){return e.push(Object(r.a)(Object(r.a)({},t.data()),{},{id:t.id})),!0}))}));case 4:e.filter((function(t){return t.id===v&&a.push(Object(r.a)({},t)),!0})),a.length>0?d([].concat(a)):d([]);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[v]),Object(u.useEffect)((function(){(function(){var t=Object(i.a)(n.a.mark((function t(){var e,a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],a=[],t.next=4,l.db.collection("products").get().then((function(t){return t.docs.map((function(t){return e.push(Object(r.a)(Object(r.a)({},t.data()),{},{id:t.id})),!0}))}));case 4:e.filter((function(t){return t.id===v&&a.push(Object(r.a)({},t)),!0})),a.length>0?d([].concat(a)):d([]);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[E,v]),Object(u.useEffect)((function(){N()}),[g]),o.a.createElement("div",{className:"add-to-cart"},o.a.createElement("button",{className:"add-to-cart-btn",style:{outline:"none"},onClick:function(){var e={idProduct:c[0].id,name:c[0].name,img:c[0].img,newPrice:c[0].newPrice,oldPrice:c[0].oldPrice,status:"unpaid",discount:c[0].discount,qty:t.qtyDetail?t.qtyDetail:1,total:c[0].newPrice},a=function(t,e){var a=-1;if(c.length>0&&t.length>0)for(var n=0;n<t.length;n++)if(t[n].idProduct===e.idProduct){if("unpaid"===t[n].status)return n;a=-1}else a=-1;return a}(y,e);if(-1!==a){var n=y[a].id;l.db.collection("cart").doc(n).update(Object(r.a)(Object(r.a)({},e),{},{id:y[a].id,qty:t.qtyDetail?y[a].qty+parseInt(t.qtyDetail):y[a].qty+1,total:(y[a].qty+1)*y[a].newPrice})),j(Object(r.a)({},e))}else l.db.collection("cart").add(Object(r.a)({},e)),j(Object(r.a)({},e));t.onAddToCart(Object(r.a)({},e)),p.NotificationManager.success("Add to cart successfully")}},o.a.createElement("i",{className:"fa fa-shopping-cart"})," add to cart"))}))},,,,,,,,,,,function(t,e,a){"use strict";a.r(e);var c=a(187),n=a.n(c),r=a(4),i=a(188),s=a(16),u=a(0),o=a.n(u),p=a(207),d=a.n(p),f=a(2),l=a(3),m=a(67),g=a(17);e.default=Object(l.g)((function(t){var e=Object(u.useState)([]),c=Object(s.a)(e,2),p=c[0],l=c[1],j=Object(u.useState)([]),b=Object(s.a)(j,2),h=b[0],y=b[1];Object(u.useEffect)((function(){(function(){var e=Object(i.a)(n.a.mark((function e(){var a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],c=[],e.next=4,g.db.collection("products").get().then((function(t){return t.docs.map((function(t){return a.push(Object(r.a)(Object(r.a)({},t.data()),{},{id:t.id})),!0}))}));case 4:a.filter((function(e){return e.id===t.match.params.id&&c.push(Object(r.a)({},e)),!0})),y(c[0].category);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.match.params.id]),Object(u.useEffect)((function(){(function(){var t=Object(i.a)(n.a.mark((function t(){var e,a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],a=[],t.next=4,g.db.collection("products").get().then((function(t){return t.docs.map((function(t){return e.push(Object(r.a)(Object(r.a)({},t.data()),{},{id:t.id})),!0}))}));case 4:e.filter((function(t){return t.category===h&&a.push(Object(r.a)({},t)),!0})),a.length>0?l([].concat(a)):l([]);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[h]);var O={infinite:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!0,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:990,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]};return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 mt-5"},o.a.createElement("div",{className:"section-title text-center"},o.a.createElement("h3",{className:"title text-uppercase",style:{fontWeight:600}},"Related Products"))),o.a.createElement(d.a,O,p.map((function(t,e){var c=t.oldPrice?"$".concat(t.oldPrice):"",n=""===t.discount?"":o.a.createElement("span",{className:"sale"},"-".concat(t.discount,"%"));return o.a.createElement("div",{className:"",key:e},o.a.createElement("div",{className:"product"},o.a.createElement("div",{className:"product-img"},o.a.createElement("img",{src:a(189)("./".concat(t.img)).default,alt:""}),o.a.createElement("div",{className:"product-label"},n)),o.a.createElement("div",{className:"product-body"},o.a.createElement("p",{className:"product-category"},"Category"),o.a.createElement("h3",{className:"product-name text-uppercase",style:{fontSize:"1rem",fontWeight:600}},o.a.createElement(f.b,{to:"/detail/".concat(t.id)},t.name)),o.a.createElement("h4",{className:"product-price"},"$",t.newPrice," ",o.a.createElement("del",{className:"product-old-price"},c)),o.a.createElement("div",{className:"product-rating"}),o.a.createElement("div",{className:"product-btns"},o.a.createElement("button",{className:"add-to-compare"},o.a.createElement("i",{className:"fas fa-exchange-alt"}),o.a.createElement("span",{className:"tooltipp"},"add to compare")),o.a.createElement("button",{className:"quick-view"},o.a.createElement("i",{className:"fa fa-eye"}),o.a.createElement("span",{className:"tooltipp"},"quick view")))),o.a.createElement(m.default,{id:t.id})))})))))}))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/acess1.9bd01254.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/acess2.5da5810b.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/acess3.df48b375.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/acess4.0b09d76c.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/camera1.78f474df.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/camera2.61568732.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/camera3.67843e77.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/camera4.90f1d0ec.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/camerasony1.1b71e231.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/camerasony2.08314e7a.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/camerasony3.c7604ff5.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/camerasony4.08314e7a.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/dell.1400ed09.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/headphonesony1.c25b12e1.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/headphonesony1.d0c24cec.png"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/headphonesony2.216cb526.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/headphonesony3.b1f58643.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/headphonesony4.faa89a06.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/hotdeal.a9359af3.png"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/iphone11a.003fe2fc.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/iphone11b.3db16d25.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/iphone11c.58f76b0b.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/iphone11d.c4621956.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/iphone11max.8ef16ed7.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/iphone11pro.b00f835e.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/iphoneSE.5eceb972.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/iphonexs.b619dcc7.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/macbookpro1.f258eb68.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/macbookpro2.db3c6590.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/macbookpro3.42935c00.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/macbookpro4.1bb85962.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/product01.4097d193.png"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/product02.70190c90.png"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/product03.9efd2f21.png"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/product04.f70b9f51.png"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/product05.a891f648.png"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/product06.61d4d19c.png"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/product07.7498c028.png"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/product08.8f0b6715.png"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/product09.c8102ebc.png"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/samsung.3b0bdefe.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/samsunga.f073d02e.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/samsungb.623f4415.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/samsungc.cd2b3018.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/samsungd.54d6c761.jpg"},function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/sonyheadphone.4f0799d9.jpg"},,,,,,,,,,,,function(t,e,a){var c={"./acess1.jpg":132,"./acess2.jpg":133,"./acess3.jpg":134,"./acess4.jpg":135,"./camera1.jpg":136,"./camera2.jpg":137,"./camera3.jpg":138,"./camera4.jpg":139,"./camerasony1.jpg":140,"./camerasony2.jpg":141,"./camerasony3.jpg":142,"./camerasony4.jpg":143,"./dell.jpg":144,"./headphonesony1.jpg":145,"./headphonesony1.png":146,"./headphonesony2.jpg":147,"./headphonesony3.jpg":148,"./headphonesony4.jpg":149,"./hotdeal.png":150,"./iphone11a.jpg":151,"./iphone11b.jpg":152,"./iphone11c.jpg":153,"./iphone11d.jpg":154,"./iphone11max.jpg":155,"./iphone11pro.jpg":156,"./iphoneSE.jpg":157,"./iphonexs.jpg":158,"./logo.png":38,"./macbookpro1.jpg":159,"./macbookpro2.jpg":160,"./macbookpro3.jpg":161,"./macbookpro4.jpg":162,"./product01.png":163,"./product02.png":164,"./product03.png":165,"./product04.png":166,"./product05.png":167,"./product06.png":168,"./product07.png":169,"./product08.png":170,"./product09.png":171,"./samsung.jpg":172,"./samsunga.jpg":173,"./samsungb.jpg":174,"./samsungc.jpg":175,"./samsungd.jpg":176,"./shop01.png":46,"./shop02.png":48,"./shop03.png":47,"./shop04.jpg":49,"./sonyheadphone.jpg":177};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(c,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return c[t]}n.keys=function(){return Object.keys(c)},n.resolve=r,t.exports=n,n.id=189}])]);
//# sourceMappingURL=18.87297119.chunk.js.map