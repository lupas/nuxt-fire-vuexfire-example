export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyDG_gasyorLNjDv6eBmeSnV321WHkCODlU',
          authDomain: 'nuxt-fire-vuexfire.firebaseapp.com',
          databaseURL: 'https://nuxt-fire-vuexfire.firebaseio.com',
          projectId: 'nuxt-fire-vuexfire',
          storageBucket: '',
          messagingSenderId: '1048167249658',
          appId: '1:1048167249658:web:d45b765280a64ed4',
        },
        services: {
          firestore: true,
        },
      },
    ],
  ],
}
