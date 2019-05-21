import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _4adbbe0b = () => interopDefault(import('..\\pages\\actividades.vue' /* webpackChunkName: "pages_actividades" */))
const _cd7213d6 = () => interopDefault(import('..\\pages\\callback.vue' /* webpackChunkName: "pages_callback" */))
const _3336a4f9 = () => interopDefault(import('..\\pages\\indicee.vue' /* webpackChunkName: "pages_indicee" */))
const _c6e9fb96 = () => interopDefault(import('..\\pages\\inicio.vue' /* webpackChunkName: "pages_inicio" */))
const _2d6e92c9 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _d3352ba2 = () => interopDefault(import('..\\pages\\menu.vue' /* webpackChunkName: "pages_menu" */))
const _5998321c = () => interopDefault(import('..\\pages\\perfil.vue' /* webpackChunkName: "pages_perfil" */))
const _517b9cbe = () => interopDefault(import('..\\pages\\prueba.vue' /* webpackChunkName: "pages_prueba" */))
const _5cb2e439 = () => interopDefault(import('..\\pages\\public.vue' /* webpackChunkName: "pages_public" */))
const _6a3d41fa = () => interopDefault(import('..\\pages\\registro.vue' /* webpackChunkName: "pages_registro" */))
const _48b95647 = () => interopDefault(import('..\\pages\\secure.vue' /* webpackChunkName: "pages_secure" */))
const _63c6efb2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/actividades",
      component: _4adbbe0b,
      name: "actividades"
    }, {
      path: "/callback",
      component: _cd7213d6,
      name: "callback"
    }, {
      path: "/indicee",
      component: _3336a4f9,
      name: "indicee"
    }, {
      path: "/inicio",
      component: _c6e9fb96,
      name: "inicio"
    }, {
      path: "/login",
      component: _2d6e92c9,
      name: "login"
    }, {
      path: "/menu",
      component: _d3352ba2,
      name: "menu"
    }, {
      path: "/perfil",
      component: _5998321c,
      name: "perfil"
    }, {
      path: "/prueba",
      component: _517b9cbe,
      name: "prueba"
    }, {
      path: "/public",
      component: _5cb2e439,
      name: "public"
    }, {
      path: "/registro",
      component: _6a3d41fa,
      name: "registro"
    }, {
      path: "/secure",
      component: _48b95647,
      name: "secure"
    }, {
      path: "/",
      component: _63c6efb2,
      name: "index"
    }],

    fallback: false
  })
}
