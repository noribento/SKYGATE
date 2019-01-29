const pkg = require('./package')

module.exports = {
  head: {
    title: 'skygate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      {
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/css?family=Josefin+Sans:400,700'
      },
      {
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/css?family=Noto+Sans+JP:400,700'
      }
    ]
  },
  mode: 'universal',
  globalName: 'skygate',
  loading: '~/components/Loading.vue',
  css: ['normalize.css', '@fortawesome/fontawesome-free/css/all.css'],
  plugins: ['~plugins/gsap'],
  modules: [],
  router: {
    base: '/~ec180797/'
  },
  build: {
    publicPath: 'http://www.kisc.meiji.ac.jp/~ec180797/',
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
