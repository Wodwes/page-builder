import Lara from '@primevue/themes/lara';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    rootId: '__Wodwes-page-builder',
    rootTag: 'main',
    head: {
      title: 'Wodwes Page Builder',
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [
        { rel: 'icon', type: 'image/svg', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap' },
      ],
      // script: [{ src: '', async: true }],
    },
  },

  modules: ['@primevue/nuxt-module', '@vueuse/nuxt'],
  css: ['~/assets/css/main.css', '~/assets/primeicons/primeicons.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // imports: {
  //   dirs: ['composables/*'],
  // },

  //  to customize the theme options update from the theme file located in /prime-vue/theme.js
  //  cant update the theme settings directly from the Nuxt config. only one level deep options is working other theme settings are ignored.
  //  to update the theme settings you need to update the theme file located in /prime-vue/theme.js

  primevue: {
    usePrimeVue: true,

    importPT: { as: 'customPT', from: '@/prime-vue/passthrough.js' },
    importTheme: { as: 'customTheme', from: '@/prime-vue/theme.js' },

    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: { preset: Lara, options: { cssLayer: true } },
    },
  },
});
