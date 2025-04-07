// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // compatibilityDate: '2024-11-01',
  modules: ["usebootstrap", "@pinia/nuxt"],

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css",
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/flickity@2/dist/flickity.min.css",
        },
      ],
      script: [
        {
          src: "https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js", // External script URL
          async: true,
          defer: true,
        },
     
      ],
    },
  },

  // devtools: { enabled: true },
  ssr: true,

  css: [
    "@/assets/styles/main.css",
    // "@/assets/styles/main.scss",
    // "@/assets/styles/custom.css",
  ],
  compatibilityDate: "2025-03-19",
});

