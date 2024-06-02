exports.ids = [1];
exports.modules = {

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(139);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ColorDetalle.vue?vue&type=template&id=6650130c&scoped=true




var ColorDetallevue_type_template_id_6650130c_scoped_true_render = function render() {
  var _vm$color;
  var _vm = this,
    _c = _vm._self._c;
  return _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VCard["a" /* default */], {
    staticClass: "pa-4 d-flex"
  }, [_c(VCol["a" /* default */], {
    staticClass: "color-square pa-2",
    style: {
      backgroundColor: ((_vm$color = _vm.color) === null || _vm$color === void 0 ? void 0 : _vm$color.codigoHex) + ' !important'
    },
    attrs: {
      "cols": "4"
    }
  }), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "color-detalle",
    attrs: {
      "cols": "8"
    }
  }, [_c('h2', [_vm._v(_vm._s(_vm.color.nombre))]), _vm._v(" "), _c('p', [_vm._v("ID: " + _vm._s(_vm.color.id))]), _vm._v(" "), _c('p', [_vm._v("Codigo HEX: " + _vm._s(_vm.color.codigoHex))]), _vm._v(" "), _c('p', [_vm._v("Marca: " + _vm._s(_vm.color.marca))]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "color": "red"
    },
    on: {
      "click": _vm.eliminarColor
    }
  }, [_vm._v("Eliminar")])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ColorDetalle.vue?vue&type=template&id=6650130c&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ColorDetalle.vue?vue&type=script&lang=js
/* harmony default export */ var ColorDetallevue_type_script_lang_js = ({
  props: {
    color: {
      type: Object,
      required: true
    }
  },
  methods: {
    async eliminarColor() {
      try {
        const response = await fetch(`${"http://localhost:5000"}/colores/${this.color.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Error al eliminar el color');
        }
        this.$emit('color-eliminado', this.color.id);

        // Recargar la página después de un breve retraso
        setTimeout(() => {
          window.location.reload();
        }, 100);
      } catch (error) {
        console.error('Error al eliminar el color:', error);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/ColorDetalle.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ColorDetallevue_type_script_lang_js = (ColorDetallevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/ColorDetalle.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ColorDetallevue_type_script_lang_js,
  ColorDetallevue_type_template_id_6650130c_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "6650130c",
  "e070973c"
  
)

/* harmony default export */ var ColorDetalle = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=color-detalle.js.map