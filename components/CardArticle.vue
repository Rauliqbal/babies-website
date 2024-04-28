<script setup>
defineProps({
  title: String,
  thumbnail: String,
  author: String,
  background: String,
  url: String,
});
</script>
<template>
  <NuxtLink :to="url">
    <div
      :class="
        background +
        ' flex flex-col items-center p-2 md:p-4 rounded-xl overflow-hidden'
      "
    >
      <img :src="thumbnail" :alt="'Thumbnail' + title" class="rounded-lg" />

      <h4
        class="text-[8px] sm:text-sm mt-1 md:mt-4 md:text-base text-center font-semibold capitalize line-clamp-2"
      >
        {{ title }}
      </h4>
      <p class="text-center text-[8px] md:text-sm text-gray-500 mt-1 md:mt-4">
        {{ author }}
      </p>
    </div>
  </NuxtLink>
</template>
