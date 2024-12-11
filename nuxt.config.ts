import Lara from "@primevue/themes/lara";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@primevue/nuxt-module"],
  primevue: {
    components: {
      prefix: "PV",
    },
    directives: {
      prefix: "PV",
    },

    importPT: { as: "customPT", from: "@/prime-vue/passthrough.js" },
    importTheme: { as: "customTheme", from: "@/prime-vue/theme.js" },

    options: {
      ripple: true,
      inputVariant: "filled",
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: false,
          cssLayer: true,
        },
      },
    },
  },
});
