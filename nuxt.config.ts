// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/content',
  ],
  content: {
    experimental: {
      db: false,
      clientDB: false
    }
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})
