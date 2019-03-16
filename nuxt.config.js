const pkg = require('./package')


module.exports = {
  // mode
  // 1.'universal': 同構架構(Isomorphic)，有SSR+CSR(包含 client-side navigation)
  // 2.'spa': 僅有 CSR (包含 client-side navigation)
  mode: 'universal',

  /*
   ** Headers of the page
   */
  // Nuxt 全站套用的 <head> 設定，像 <title>、<meta>、<link>等 meta tag
  // hid 比較特別，vue-meta 互蓋時，會用這唯一id判斷 meta tag 排列順序與覆蓋與否

  head: {
    title: '甜點電商',
    meta: [
      { hid: 'description', name: 'description', content: 'Meta description' },
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'ie=edge'
      },
      {
        property: 'og:title',
        content: '甜點電商'
      },
      {
        property: 'og:description',
        content: '六角學院的甜點電商'
      },
      {
        property: 'og:site_name',
        content: '甜點電商'
      },
      {
        property: 'og:locale',
        content: 'zh_TW'
      }
    ],
    link: [
      {
        rel: 'shortcut icon',
        href: 'assets/img/favicon_48.ico',
        type: 'image/x-icon'
      },
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  // loading: './components/loading.vue',



  /*
   ** Global CSS
  僅載 Nuxt page、layout、document 寫的 style 樣式

   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    './assets/sass/all.sass',
    // './assets/sass/transition.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    // { src: '~/plugins/vue-notifications', ssr: false }

  ],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  },
  // loading: {
  //   color: 'blue',
  //   failedColor: 'yelllow',
  //   height: '10px',
  //   duration: 10000,
  //   rtl: true
  // },

}
