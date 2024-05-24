import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const instance = axios.create({
    baseURL: 'http://localhost/insert_card.php', // Update this with your actual API base URL
  });

  nuxtApp.provide('axios', instance);
});
