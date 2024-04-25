<script setup>
import SliderCard from "../SliderCard.vue";
const { data: articles } = await useAsyncData("articles", () =>
  queryContent("/article").sort({ publishedAt: -1 }).find()
);
</script>
<template>
  <section class="container">
    <h2
      class="text-2xl font-semibold relative before:content-[''] before:h-[2px] before:w-full inline-flex uppercase before:bg-primary before:absolute before:bottom-0 mb-8"
    >
      terpopuler
    </h2>

    <SliderCard />
  </section>
</template>
