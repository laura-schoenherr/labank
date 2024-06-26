// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/fonts.css'],
  plugins: [
    '~/plugins/axios.js',
  ],
});