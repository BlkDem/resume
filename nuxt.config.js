export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Пятков Максим инженер-программист из Анталии',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Пятков Максим -  инженер-программист из Анталии. Фронтэнд, бэкэнд, фуллстэк.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'yandex-verification', content: 'b5601293fe31d239' },
      { name: 'yandex-verification', content: '45656f5f3e3ef9d7' }
      // <meta name="yandex-verification" content="45656f5f3e3ef9d7" />

    ],
    link: [

      {rel: "preconnect", href: "https://fonts.googleapis.com" },
      {rel: "preconnect", href: "https://fonts.gstatic.com"},
      {href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap",
        rel: "stylesheet"},

      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
    '@/plugins/bootstrap-vue',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // '@sidebase/nuxt-pdf',
    '@nuxtjs/dotenv',
    'nuxt-fingerprint2',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
