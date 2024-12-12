import Lara from "@primevue/themes/lara";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@primevue/nuxt-module"],
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  //  to customize the theme options update from the theme file located in /prime-vue/theme.js
  //  cant update the theme settings directly from the Nuxt config. only one level deep options is working other theme settings are ignored.
  //  to update the theme settings you need to update the theme file located in /prime-vue/theme.js

  primevue: {
    usePrimeVue: true,

    importPT: { as: "customPT", from: "@/prime-vue/passthrough.js" },
    importTheme: { as: "customTheme", from: "@/prime-vue/theme.js" },

    options: { ripple: true, inputVariant: "filled" },
  },
});
