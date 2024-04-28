// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      meta: [
        {
          name: "title",
          content: "Babies Buddies",
        },
        {
          name: "description",
          content:
            "platform online yang didedikasikan untuk para orang tua, terutama dalam fase penting merawat dan mendidik anak-anak mereka, khususnya untuk bayi dan balita dengan rentang usia 0-6 tahun.",
        },
        {
          name: "og:title",
          content: "Babies Buddies",
        },
        {
          name: "og:description",
          content:
            "platform online yang didedikasikan untuk para orang tua, terutama dalam fase penting merawat dan mendidik anak-anak mereka, khususnya untuk bayi dan balita dengan rentang usia 0-6 tahun.",
        },
      ],
      script: [{ src: "https://unpkg.com/akar-icons-fonts" }],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        },
      ],
    },
  },
  modules: ["nuxt-swiper", "@nuxt/content"],
});
