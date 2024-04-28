<script setup>
defineProps({
  image: String,
  name: String,
  qty: String,
  url: String,
});
</script>
<template>
  <NuxtLink :to="url" target="_blank">
    <div class="inline-flex flex-col items-center gap-4">
      <div
        class="bg-card-1 rounded-3xl overflow-hidden ring-2 ring-black bg-card-2"
      >
        <img class="object-cover" :src="image" alt="" />
      </div>

      <div class="flex flex-col items-center">
        <div class="bg-[#140D62] rounded-full">
          <h4
            class="text-[10px] sm:text-sm font-semibold text-white px-4 py-2 text-center md:line-clamp-2"
          >
            {{ name }}
          </h4>
        </div>

        <div class="bg-[#FD6085] rounded-full mt-1">
          <h4 class="text-sm font-semibold text-white px-4 py-2 text-center">
            {{ qty }}
          </h4>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
