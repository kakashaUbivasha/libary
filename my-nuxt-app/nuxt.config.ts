import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
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
    },
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },

  modules: ['@pinia/nuxt', 'nuxt-swiper', "nuxt-aos", (_options, nuxt) => {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error
      config.plugins.push(vuetify({ autoImport: true }))
    })
  },]
})