<script setup>
const { id } = useRoute().params;
const data = MAINAN[id];
</script>
<template>
  <main>
    <section class="container">
      <header class="md:flex gap-6 items-center">
        <div>
          <h3
            class="uppercase text-2xl lg:text-5xl font-bold text-primary text-center md:text-left"
          >
            {{ data.name }}
          </h3>
          <div class="w-full h-1 bg-primary my-8"></div>
        </div>
      </header>

      <div class="grid md:grid-cols-2 gap-8 items-center mt-8">
        <img
          class="rounded-2xl object-cover overflow-hidden w-full max-w-[500px]"
          :src="data.image"
          :alt="data.name"
        />
        <div>
          <NuxtLink
            :to="data.productUrl"
            target="_blank"
            class="md:hidden mb-10 inline-flex w-full justify-center px-10 py-2 text-xl bg-primary text-white font-bold rounded-full"
            >Beli</NuxtLink
          >

          <h5 class="text-2xl font-semibold">Deskripsi:</h5>
          <p class="desc md:text-xl leading-relaxed mt-4">{{ data.desc }}</p>

          <h5 class="text-2xl font-semibold mt-10">Ukuran:</h5>
          <p class="desc md:text-xl mt-4">{{ data.size }}</p>

          <NuxtLink
            :to="data.productUrl"
            target="_blank"
            class="hidden md:mt-10 md:inline-flex w-full md:w-auto justify-center px-10 py-2 text-xl bg-primary text-white font-bold rounded-full"
            >Beli</NuxtLink
          >
        </div>
      </div>
    </section>
  </main>
</template>
