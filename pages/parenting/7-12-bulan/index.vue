<script setup>
const { data: parenting } = await useAsyncData("parenting", () =>
  queryContent("/parenting/7-12-bulan").sort({ publishedAt: -1 }).find()
);

useHead({
  title: "Parenting",
});
</script>
<template>
  <main>
    <section class="container">
      <header>
        <h3
          class="uppercase text-2xl lg:text-5xl font-bold text-primary text-center"
        >
          yuk belajar memahami si kecil
        </h3>

        <p class="paragraph font-medium text-center mt-8">
          Ayo, mulai hari ini kita belajar parenting bersama! Menjadi seorang
          orang tua yang baik membutuhkan pemahaman dan keterampilan yang tepat.
          Dengan belajar, kita dapat memahami perkembangan anak secara lebih
          baik, mengatasi tantangan yang muncul, dan membangun hubungan yang
          harmonis dengan mereka. Dampak positifnya pun akan terasa pada anak,
          di mana mereka akan tumbuh dengan lebih percaya diri, berkomunikasi
          dengan baik, dan memiliki hubungan yang kuat dengan kita sebagai orang
          tua. Jadi, mari belajar parenting untuk menciptakan keluarga yang
          bahagia dan penuh cinta!
        </p>

        <div class="w-full h-1 bg-primary my-8"></div>
      </header>

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
        <SwiperSlide v-for="item in parenting" class="pb-10">
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
          v-for="item in parenting"
          :url="item._path"
          :key="item.id"
          :thumbnail="item.featureImage"
          :title="item.title"
          :author="item.author.name"
          :background="item.background"
        />
      </div>
    </section>
  </main>
</template>
