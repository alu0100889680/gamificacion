const pkg = require("./package");
const { resolve } = require("path")

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  serverMiddleware: ['../api/auth'],

  mode: "universal",


  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Pacifico"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.7.0/css/all.css",
        integrity:
          "sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ",
        crossorigin: "anonymous"
      }
    ],
    scripts: [
      { src: "/js/game.js" },
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        integrity:
          "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
        crossorigin: "anonymous"
      },
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"
      },
      {
        src:
          "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
        integrity:
          "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",
        crossorigin: "anonymous"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
        integrity:
          "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",
        crossorigin: "anonymous"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["@/assets/css/style.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~plugins/vue-select", ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  axios: {
    proxy: true
  },
  auth: {
    redirect: {
      callback: '/callback'
    },
    strategies: {
      local: {
        endpoints: {
          login: { propertyName: 'token.accessToken' }
        }
      }

    }
  },

  /*
   ** Build configuration
   */
  build: {
    vendor: ["axios"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  },
  router: {
    middleware: ['auth']
  }
};
