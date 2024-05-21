<script setup>
const { id } = useRoute().params;
const data = PERPUSTAKAAN[id];
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
        <div class="grid grid-cols-2 gap-4 md:gap-5">
          <div class="col-span-2">
            <img
              class="rounded-3xl overflow-hidden"
              src="https://lh3.googleusercontent.com/p/AF1QipOoWYpPuJkBCTsM12y8UNh1kGxmXsDZxa_D6nqx=s680-w680-h510"
              alt=""
            />
          </div>

          <div class="col-span-1">
            <img
              class="rounded-3xl overflow-hidden"
              src="https://lh3.googleusercontent.com/p/AF1QipOoWYpPuJkBCTsM12y8UNh1kGxmXsDZxa_D6nqx=s680-w680-h510"
              alt=""
            />
          </div>
          <div class="col-span-1">
            <img
              class="rounded-3xl overflow-hidden"
              src="https://lh3.googleusercontent.com/p/AF1QipOoWYpPuJkBCTsM12y8UNh1kGxmXsDZxa_D6nqx=s680-w680-h510"
              alt=""
            />
          </div>
        </div>
        <div>
          <NuxtLink
            :to="data.productUrl"
            target="_blank"
            class="md:hidden mb-10 inline-flex w-full justify-center px-10 py-2 text-xl bg-primary text-white font-bold rounded-full"
            >Beli</NuxtLink
          >

          <h5 class="text-2xl font-semibold">Deskripsi:</h5>
          <p class="desc md:text-xl leading-relaxed mt-4">{{ data.desc }}</p>

          <h5 class="text-2xl font-semibold mt-10">Fasilitas:</h5>
          <ul class="list-disc mt-4">
            <li
              class="desc md:text-xl ml-7"
              v-for="item in data.facilities"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>

          <NuxtLink
            :to="data.url"
            target="_blank"
            class="hidden md:mt-10 md:inline-flex w-full md:w-auto justify-center px-10 py-2 text-xl bg-primary text-white font-bold rounded-full"
            >More info</NuxtLink
          >
        </div>
      </div>
    </section>
  </main>
</template>
