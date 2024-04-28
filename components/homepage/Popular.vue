<script setup>
const { data: articles } = await useAsyncData("articles", () =>
  queryContent("/parenting").sort({ publishedAt: -1 }).find()
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
      <SwiperSlide v-for="item in articles.slice(0, 8)" class="pb-10">
        <LazyCardArticle
          :url="item._path"
          :key="item.id"
          :thumbnail="item.featureImage"
          :title="item.title"
          :author="item.author.name"
          :background="item.background"
        />
      </SwiperSlide>
    </Swiper>

    <div class="grid grid-cols-2 gap-4 md:hidden">
      <LazyCardArticle
        v-for="item in articles.slice(0, 8)"
        :url="item._path"
        :key="item.id"
        :thumbnail="item.featureImage"
        :title="item.title"
        :author="item.author.name"
        :background="item.background"
      />
    </div>
  </section>
</template>
<style>
.swiper-pagination-bullet-active {
  background-color: #f86aba;
}
</style>
