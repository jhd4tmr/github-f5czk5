// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  hooks: {
    'pages:extend'(pages) {
      console.log(pages);
    },
  },
});
