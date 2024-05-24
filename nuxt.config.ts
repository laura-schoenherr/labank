// https://nuxt.com/docs/api/configuration/nuxt-config
export default 

defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/fonts.css'],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    // Replace with your backend API URL
    baseURL: 'http://localhost/path_to_your_php_script',
  },
}
)


