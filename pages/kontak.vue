<script setup>
const contact = [
  {
    icon: "ai-phone",
    title: "+123-456-7890",
  },
  {
    icon: "ai-instagram-fill",
    title: "@baby.buddies",
  },
  {
    icon: "ai-envelope",
    title: "babybuddies@gmail.com",
  },
  {
    icon: "ai-tiktok-fill",
    title: "@baby.buddies",
  },
];

useHead({
  title: "Kontak Kami",
});
</script>
<template>
  <main>
    <section class="container">
      <header class="md:flex gap-6 items-center">
        <div>
          <h3
            class="uppercase text-2xl lg:text-5xl font-bold text-primary text-center md:text-left"
          >
            kontak & SOCIAL MEDIA
          </h3>
          <div class="w-full h-1 bg-primary my-8"></div>
        </div>
      </header>

      <div class="max-w-5xl mx-auto mt-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            class="flex items-center gap-4"
            v-for="item in contact"
            :key="item"
          >
            <div
              class="flex items-center justify-center bg-[#f7e2f3] w-20 h-20 rounded-full"
            >
              <i :class="item.icon + ' text-3xl'"></i>
            </div>
            <p class="text-2xl">{{ item.title }}</p>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-20">
        <img class="h-20" src="~/assets/images/logo-babies.svg" alt="" />
      </div>
    </section>
  </main>
</template>
