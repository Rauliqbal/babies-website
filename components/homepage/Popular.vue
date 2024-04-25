<script setup>
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

    <Swiper
      class="!hidden md:!block"
      :modules="[SwiperPagination]"
      :slides-per-view="1"
      :space-between="24"
      :pagination="true"
      :breakpoints="{
        425: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }"
    >
      <SwiperSlide v-for="slide in 5" :key="slide" class="pb-10">
        <LazyCardArticle />
      </SwiperSlide>
    </Swiper>

    <div class="grid grid-cols-2 gap-4 md:hidden">
      <LazyCardArticle v-for="slide in 4" :key="slide" />
    </div>
  </section>
</template>
<style>
.swiper-pagination-bullet-active {
  background-color: #f86aba;
}
</style>
