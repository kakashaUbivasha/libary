// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    apiSecret: ''
  },
  css:[
    '~/assets/scss/global.scss',
    'animate.css',
    'aos/dist/aos.css'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_vars.scss" as *;',
        }
      }
    }
  },

  modules: ['nuxt-swiper']
})