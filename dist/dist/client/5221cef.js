(window.webpackJsonp=window.webpackJsonp||[]).push([[18,8],{424:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return f}));var n=r(425),o=r(0),c=Object(o.i)("v-card__actions"),l=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),f=Object(o.i)("v-card__title");n.a},443:function(t,e,r){var content=r(444);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("951d1426",content,!0,{sourceMap:!1})},444:function(t,e,r){var n=r(20)((function(i){return i[1]}));n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin:0 -1px;max-height:100%;max-width:0;min-height:100%;vertical-align:text-bottom;width:0}.v-divider--vertical.v-divider--inset{margin-top:8px;max-height:calc(100% - 16px);min-height:0}",""]),n.locals={},t.exports=n},446:function(t,e,r){var content=r(452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("dcad17c8",content,!0,{sourceMap:!1})},447:function(t,e,r){"use strict";var n=r(2),o=(r(12),r(36),r(10),r(58),r(282),r(16),r(17),r(9),r(5),r(27),r(79),r(53),r(59),r(283),r(284),r(285),r(286),r(287),r(288),r(289),r(290),r(291),r(292),r(293),r(294),r(295),r(11),r(54),r(213),r(1)),c=r(70),l=r(0);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function m(t,e){return v.reduce((function(r,n){return r[t+Object(l.y)(n)]=e(),r}),{})}var j=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},y=m("align",(function(){return{type:String,default:null,validator:j}})),O=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},x=m("justify",(function(){return{type:String,default:null,validator:O}})),_=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},w=m("alignContent",(function(){return{type:String,default:null,validator:_}})),C={align:Object.keys(y),justify:Object.keys(x),alignContent:Object.keys(w)},P={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,r){var n=P[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var M=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:j}},y),{},{justify:{type:String,default:null,validator:O}},x),{},{alignContent:{type:String,default:null,validator:_}},w),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var d in r)l+=String(r[d]);var f=M.get(l);if(!f){var v;for(v in f=[],C)C[v].forEach((function(t){var e=r[t],n=k(v,t,e);n&&f.push(n)}));f.push(Object(n.a)(Object(n.a)(Object(n.a)({"no-gutters":r.noGutters,"row--dense":r.dense},"align-".concat(r.align),r.align),"justify-".concat(r.justify),r.justify),"align-content-".concat(r.alignContent),r.alignContent)),M.set(l,f)}return t(r.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},448:function(t,e,r){"use strict";r(12),r(10),r(16),r(17),r(9),r(5),r(11);var n=r(2),o=(r(443),r(37));function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},451:function(t,e,r){"use strict";r(446)},452:function(t,e,r){var n=r(20)((function(i){return i[1]}));n.push([t.i,".enlace[data-v-094550fc]{color:#fff;-webkit-text-decoration:none;text-decoration:none}.enlace[data-v-094550fc]:hover{color:#dadada}.enlace.enlace-modelo[data-v-094550fc]:hover{color:#48bef5;font-size:20px;transition:font-size .5s,color .5s}",""]),n.locals={},t.exports=n},456:function(t,e,r){"use strict";r.r(e);var n=r(425),o=r(424),c=r(438),l=r(28),d=(r(96),r(47),r(5),{props:{parte:{type:Object,required:!0}},data:function(){return{modelo:null}},methods:{fetchModelo:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000"+"/modelos/".concat(t.parte.idModelo));case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch modelo");case 6:return e.next=8,r.json();case 8:t.modelo=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},capitalizeFirst:function(text){return text?text.charAt(0).toUpperCase()+text.slice(1).toLowerCase():""}},computed:{isPartesRoute:function(){return"/partes"===this.$route.path}},created:function(){this.isPartesRoute&&this.fetchModelo()}}),f=(r(451),r(78)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{cols:"4"}},[e(n.a,{staticClass:"pa-4"},[e("router-link",{staticClass:"enlace",attrs:{to:"/partes/"+t.parte.id}},[t.parte.imagen?e("img",{staticStyle:{width:"100%"},attrs:{src:"/images/".concat(t.parte.imagen)}}):t._e(),t._v(" "),e(o.b,{staticClass:"no-underline pa-0"},[t._v("\n                "+t._s(t.capitalizeFirst(t.parte.nombre))+"\n            ")]),t._v(" "),t.isPartesRoute&&t.modelo?e("router-link",{staticClass:"enlace enlace-modelo",attrs:{to:"/modelos/"+t.parte.idModelo}},[t._v("\n                "+t._s(t.capitalizeFirst(t.modelo.nombre))+"\n            ")]):t._e()],1)],1)],1)}),[],!1,null,"094550fc",null);e.default=component.exports},538:function(t,e,r){"use strict";r.r(e);var n=r(223),o=r(425),c=r(424),l=r(438),d=r(441),f=r(448),v=r(206),h=r(447),m=r(28),j=(r(96),r(36),r(47),r(5),{components:{TarjetaParte:r(456).default},data:function(){return{modelo:null,partes:[]}},watch:{"$route.params.id":{immediate:!0,handler:function(t){this.getModelo(t)}}},mounted:function(){this.getModelo(this.$route.params.id)},methods:{capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()},getModelo:function(t){var e=this;return Object(m.a)(regeneratorRuntime.mark((function r(){var n,o,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://localhost:5000"+"/modelos/".concat(t));case 3:return n=r.sent,r.next=6,n.json();case 6:return o=r.sent,e.modelo=o,r.next=10,fetch("http://localhost:5000"+"/getPartes/".concat(t));case 10:return c=r.sent,r.next=13,c.json();case 13:l=r.sent,e.partes=l,r.next=20;break;case 17:r.prev=17,r.t0=r.catch(0),console.error("Error fetching modelo:",r.t0);case 20:case"end":return r.stop()}}),r,null,[[0,17]])})))()},deleteCurrentModel:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://localhost:5000","/modelos/").concat(t.modelo.id),{method:"DELETE"});case 3:t.$router.push("/modelos"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("Error al eliminar el modelo:",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}}),y=r(78),component=Object(y.a)(j,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"pa-5"},[e(h.a,[e(l.a,{attrs:{cols:"2"}},[e(o.a,{staticClass:"rounded-lg",staticStyle:{"max-width":"100%",height:"auto"}},[t.modelo&&t.modelo.imagen?e("img",{staticStyle:{width:"100%"},attrs:{src:"/images/".concat(t.modelo.imagen),alt:"Imagen del modelo"}}):t._e()])],1),t._v(" "),e(l.a,{staticClass:"align-center d-flex",attrs:{cols:"7"}},[t.modelo?e(c.b,{staticClass:"text-h2 pa-4"},[t._v(t._s(t.capitalize(t.modelo.nombre))+" ")]):t._e()],1),t._v(" "),t.modelo?e(l.a,{staticClass:"d-flex justify-end align-center pa-6",attrs:{cols:"3"}},[e(n.a,{attrs:{to:"/Modelos",color:"primary"}},[e(v.a,[t._v("mdi-arrow-left")])],1),t._v(" "),e(n.a,{staticClass:"ma-1",attrs:{to:"../Add/parte/".concat(t.modelo.id)}},[e(v.a,[t._v("mdi-plus")])],1),t._v(" "),e(n.a,{staticClass:"ma-1",attrs:{to:"../modify/modelo/".concat(t.modelo.id),color:"info"}},[e(v.a,[t._v("mdi-pencil")])],1),t._v(" "),e(n.a,{staticClass:"ma-1",attrs:{color:"error"},on:{click:t.deleteCurrentModel}},[e(v.a,[t._v("mdi-delete")])],1)],1):t._e()],1),t._v(" "),e(f.a,{staticClass:"border-opacity-75 pa-4"}),t._v(" "),t.modelo?e(c.a,{staticClass:"pa-4"},[t._v("\n    "+t._s(t.capitalize(t.modelo.resumen))+"\n  ")]):t._e(),t._v(" "),e(f.a,{staticClass:"border-opacity-75 pa-4"}),t._v(" "),e(c.a,{staticClass:"pa-4 text-h5"},[t._v("Partes:")]),t._v(" "),e(d.a,{staticClass:"d-flex"},t._l(t.partes,(function(t,r){return e("TarjetaParte",{key:r,attrs:{parte:t}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TarjetaParte:r(456).default})}}]);