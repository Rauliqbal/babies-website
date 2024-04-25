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
  <NuxtLink
    :to="url"
    :class="'bg-[' + background + '] rounded-xl overflow-hidden'"
  >
    <div class="flex flex-col items-center p-4">
      <img :src="thumbnail" :alt="'Thumbnail' + title" class="rounded-lg" />

      <h4
        class="text-sm mt-1 md:mt-4 md:text-base text-center font-semibold capitalize"
      >
        {{ title }}
      </h4>
      <p class="text-center text-sm text-gray-500 mt-4">{{ author }}</p>
    </div>
  </NuxtLink>
</template>
