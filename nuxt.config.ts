import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  alias: {
    '~/*': './*',
  },
  modules: [
    ['@nuxtjs/axios',{proxyHeaders:false}],
  ],
  axios: {
    baseURL: 'http://127.0.0.1:7000/api',
  },
  buildModules: [
    [
      'unplugin-icons/nuxt',
      {
        defaultClass: 'w-7 h-7 inline-block',
      },
    ],
  ],
  publicRuntimeConfig: {
    publicUrl: process.env.PUBLIC_URL,
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
    axios: {
      baseURL: 'http://127.0.0.1:7000/api'
    }
  },
  privateRuntimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY
  },
  srcDir: './',
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
