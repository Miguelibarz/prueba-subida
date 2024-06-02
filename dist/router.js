import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c575c39 = () => interopDefault(import('..\\..\\pages\\colores.vue' /* webpackChunkName: "pages/colores" */))
const _79284cd6 = () => interopDefault(import('..\\..\\pages\\Modelos.vue' /* webpackChunkName: "pages/Modelos" */))
const _53958d42 = () => interopDefault(import('..\\..\\pages\\paleta.vue' /* webpackChunkName: "pages/paleta" */))
const _465eb529 = () => interopDefault(import('..\\..\\pages\\partes.vue' /* webpackChunkName: "pages/partes" */))
const _a0ed6162 = () => interopDefault(import('..\\..\\pages\\Add\\modelo.vue' /* webpackChunkName: "pages/Add/modelo" */))
const _08822dd7 = () => interopDefault(import('..\\..\\pages\\users\\[id].vue' /* webpackChunkName: "pages/users/[id]" */))
const _7fa3613a = () => interopDefault(import('..\\..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _066e7211 = () => interopDefault(import('..\\..\\pages\\Add\\parte\\_id.vue' /* webpackChunkName: "pages/Add/parte/_id" */))
const _0ed97374 = () => interopDefault(import('..\\..\\pages\\Add\\paso\\_id.vue' /* webpackChunkName: "pages/Add/paso/_id" */))
const _41c90e02 = () => interopDefault(import('..\\..\\pages\\modify\\modelo\\_id.vue' /* webpackChunkName: "pages/modify/modelo/_id" */))
const _461bb0aa = () => interopDefault(import('..\\..\\pages\\modify\\parte\\_id.vue' /* webpackChunkName: "pages/modify/parte/_id" */))
const _29ad7dbb = () => interopDefault(import('..\\..\\pages\\modify\\paso\\_id.vue' /* webpackChunkName: "pages/modify/paso/_id" */))
const _88bdb256 = () => interopDefault(import('..\\..\\pages\\modelos\\_id.vue' /* webpackChunkName: "pages/modelos/_id" */))
const _f7b9387e = () => interopDefault(import('..\\..\\pages\\Partes\\_id.vue' /* webpackChunkName: "pages/Partes/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/colores",
    component: _6c575c39,
    name: "colores"
  }, {
    path: "/Modelos",
    component: _79284cd6,
    name: "Modelos"
  }, {
    path: "/paleta",
    component: _53958d42,
    name: "paleta"
  }, {
    path: "/partes",
    component: _465eb529,
    name: "partes"
  }, {
    path: "/Add/modelo",
    component: _a0ed6162,
    name: "Add-modelo"
  }, {
    path: "/users/%5Bid%5D",
    component: _08822dd7,
    name: "users-[id]"
  }, {
    path: "/",
    component: _7fa3613a,
    name: "index"
  }, {
    path: "/Add/parte/:id?",
    component: _066e7211,
    name: "Add-parte-id"
  }, {
    path: "/Add/paso/:id?",
    component: _0ed97374,
    name: "Add-paso-id"
  }, {
    path: "/modify/modelo/:id?",
    component: _41c90e02,
    name: "modify-modelo-id"
  }, {
    path: "/modify/parte/:id?",
    component: _461bb0aa,
    name: "modify-parte-id"
  }, {
    path: "/modify/paso/:id?",
    component: _29ad7dbb,
    name: "modify-paso-id"
  }, {
    path: "/modelos/:id?",
    component: _88bdb256,
    name: "modelos-id"
  }, {
    path: "/Partes/:id?",
    component: _f7b9387e,
    name: "Partes-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
