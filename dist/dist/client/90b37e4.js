(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{424:function(t,e,o){"use strict";o.d(e,"a",(function(){return d})),o.d(e,"b",(function(){return f}));var r=o(425),n=o(0),c=Object(n.i)("v-card__actions"),l=Object(n.i)("v-card__subtitle"),d=Object(n.i)("v-card__text"),f=Object(n.i)("v-card__title");r.a},446:function(t,e,o){var content=o(452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("dcad17c8",content,!0,{sourceMap:!1})},451:function(t,e,o){"use strict";o(446)},452:function(t,e,o){var r=o(20)((function(i){return i[1]}));r.push([t.i,".enlace[data-v-094550fc]{color:#fff;-webkit-text-decoration:none;text-decoration:none}.enlace[data-v-094550fc]:hover{color:#dadada}.enlace.enlace-modelo[data-v-094550fc]:hover{color:#48bef5;font-size:20px;transition:font-size .5s,color .5s}",""]),r.locals={},t.exports=r},456:function(t,e,o){"use strict";o.r(e);var r=o(425),n=o(424),c=o(438),l=o(28),d=(o(96),o(47),o(5),{props:{parte:{type:Object,required:!0}},data:function(){return{modelo:null}},methods:{fetchModelo:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000"+"/modelos/".concat(t.parte.idModelo));case 3:if((o=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch modelo");case 6:return e.next=8,o.json();case 8:t.modelo=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},capitalizeFirst:function(text){return text?text.charAt(0).toUpperCase()+text.slice(1).toLowerCase():""}},computed:{isPartesRoute:function(){return"/partes"===this.$route.path}},created:function(){this.isPartesRoute&&this.fetchModelo()}}),f=(o(451),o(78)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{cols:"4"}},[e(r.a,{staticClass:"pa-4"},[e("router-link",{staticClass:"enlace",attrs:{to:"/partes/"+t.parte.id}},[t.parte.imagen?e("img",{staticStyle:{width:"100%"},attrs:{src:"/images/".concat(t.parte.imagen)}}):t._e(),t._v(" "),e(n.b,{staticClass:"no-underline pa-0"},[t._v("\n                "+t._s(t.capitalizeFirst(t.parte.nombre))+"\n            ")]),t._v(" "),t.isPartesRoute&&t.modelo?e("router-link",{staticClass:"enlace enlace-modelo",attrs:{to:"/modelos/"+t.parte.idModelo}},[t._v("\n                "+t._s(t.capitalizeFirst(t.modelo.nombre))+"\n            ")]):t._e()],1)],1)],1)}),[],!1,null,"094550fc",null);e.default=component.exports}}]);