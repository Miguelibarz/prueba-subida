(window.webpackJsonp=window.webpackJsonp||[]).push([[22,5],{455:function(e,o,r){"use strict";r.r(o);var t=r(223),c=r(425),n=r(438),l=r(28),d=(r(96),r(36),r(5),r(68),{props:{color:{type:Object,required:!0}},methods:{eliminarColor:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,fetch("".concat("http://localhost:5000","/colores/").concat(e.color.id),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 3:if(o.sent.ok){o.next=6;break}throw new Error("Error al eliminar el color");case 6:e.$emit("color-eliminado",e.color.id),setTimeout((function(){window.location.reload()}),100),o.next=13;break;case 10:o.prev=10,o.t0=o.catch(0),console.error("Error al eliminar el color:",o.t0);case 13:case"end":return o.stop()}}),o,null,[[0,10]])})))()}}}),h=r(78),component=Object(h.a)(d,(function(){var e,o=this,r=o._self._c;return r(n.a,{attrs:{cols:"4"}},[r(c.a,{staticClass:"pa-4 d-flex"},[r(n.a,{staticClass:"color-square pa-2",style:{backgroundColor:(null===(e=o.color)||void 0===e?void 0:e.codigoHex)+" !important"},attrs:{cols:"4"}}),o._v(" "),r(n.a,{staticClass:"color-detalle",attrs:{cols:"8"}},[r("h2",[o._v(o._s(o.color.nombre))]),o._v(" "),r("p",[o._v("ID: "+o._s(o.color.id))]),o._v(" "),r("p",[o._v("Codigo HEX: "+o._s(o.color.codigoHex))]),o._v(" "),r("p",[o._v("Marca: "+o._s(o.color.marca))]),o._v(" "),r(t.a,{attrs:{color:"red"},on:{click:o.eliminarColor}},[o._v("Eliminar")])],1)],1)],1)}),[],!1,null,"6650130c",null);o.default=component.exports},529:function(e,o,r){"use strict";r.r(o);var t=r(424),c=r(438),n=r(526),l=r(447),d=r(28),h=(r(96),r(5),{components:{ColorDetalle:r(455).default},data:function(){return{colores:[]}},mounted:function(){this.fetchColores()},methods:{fetchColores:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function o(){var r,data;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,fetch("".concat("http://localhost:5000","/colores"));case 3:return r=o.sent,o.next=6,r.json();case 6:data=o.sent,e.colores=data,o.next=13;break;case 10:o.prev=10,o.t0=o.catch(0),console.error("Error fetching colores:",o.t0);case 13:case"end":return o.stop()}}),o,null,[[0,10]])})))()}}}),v=r(78),component=Object(v.a)(h,(function(){var e=this,o=e._self._c;return o("div",[o(l.a,[o(c.a,{attrs:{cols:"12"}},[o(t.b,{staticClass:"text-h4"},[e._v("Lista de Colores")])],1),e._v(" "),o(c.a,[o(n.a,{attrs:{"hide-mode-switch":!1,"swatches-max-height":"400px","show-swatches":"",mode:"hexa"},model:{value:e.color,callback:function(o){e.color=o},expression:"color"}})],1)],1)],1)}),[],!1,null,null,null);o.default=component.exports}}]);