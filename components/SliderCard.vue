<script setup>
defineProps({
  slide: String,
});
</script>
<template>
  <Swiper
    :modules="[SwiperPagination]"
    :slides-per-view="4"
    :space-between="24"
    :pagination="true"
  >
    <SwiperSlide :v-for="slide in " :key="slide" class="pb-10">
      <slot />
    </SwiperSlide>
  </Swiper>
</template>
<style>
.swiper-pagination-bullet-active {
  background-color: #f86aba;
}
</style>
