(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{535:function(e,o,t){"use strict";t.r(o);var r=t(223),n=t(425),l=t(544),c=t(465),d=t(471),m=t(505),f=t(28),v=(t(96),t(36),t(5),{data:function(){return{modelo:null}},mounted:function(){this.getModelo(this.$route.params.id)},methods:{getModelo:function(e){var o=this;return Object(f.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("http://localhost:5000","/modelos/").concat(e));case 3:return r=t.sent,t.next=6,r.json();case 6:data=t.sent,o.modelo=data,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("Error fetching modelo:",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},actualizarModelo:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,fetch("".concat("http://localhost:5000","/modelos/").concat(e.modelo.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.modelo)});case 3:if(o.sent.ok){o.next=6;break}throw new Error("Error al actualizar el modelo");case 6:e.$router.push("/modelos/".concat(e.modelo.id)),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(0),console.error("Error al actualizar el modelo:",o.t0);case 12:case"end":return o.stop()}}),o,null,[[0,9]])})))()}}}),h=t(78),component=Object(h.a)(v,(function(){var e=this,o=e._self._c;return o(n.a,{staticClass:"pa-5"},[e.modelo?o("h1",[e._v("Modificar Modelo: "+e._s(e.modelo.nombre))]):e._e(),e._v(" "),e.modelo?o(c.a,{on:{submit:function(o){return o.preventDefault(),e.actualizarModelo.apply(null,arguments)}}},[o(d.a,{attrs:{label:"Nombre",required:""},model:{value:e.modelo.nombre,callback:function(o){e.$set(e.modelo,"nombre",o)},expression:"modelo.nombre"}}),e._v(" "),o(d.a,{attrs:{label:"Imprimación"},model:{value:e.modelo.imprimacion,callback:function(o){e.$set(e.modelo,"imprimacion",o)},expression:"modelo.imprimacion"}}),e._v(" "),o(l.a,{attrs:{label:"Visibilidad"},model:{value:e.modelo.visibilidad,callback:function(o){e.$set(e.modelo,"visibilidad",o)},expression:"modelo.visibilidad"}}),e._v(" "),o(m.a,{attrs:{label:"Resumen"},model:{value:e.modelo.resumen,callback:function(o){e.$set(e.modelo,"resumen",o)},expression:"modelo.resumen"}}),e._v(" "),o(r.a,{attrs:{type:"submit",color:"info"}},[e._v("Guardar")])],1):e._e()],1)}),[],!1,null,null,null);o.default=component.exports}}]);