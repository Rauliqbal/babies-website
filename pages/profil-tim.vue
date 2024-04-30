<script setup>
useHead({
  title: "Profil Tim",
});
</script>
<template>
  <main>
    <section class="container">
      <header class="md:flex gap-6 items-center">
        <div>
          <h3
            class="uppercase text-2xl lg:text-5xl font-bold text-primary text-center md:text-left"
          >
            PROFIL TIM
          </h3>
          <div class="w-full h-1 bg-primary my-8"></div>
        </div>
      </header>

      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <div class="flex items-center flex-col" v-for="profil in PERSON">
          <img :src="'/images/' + profil.image" alt="" />
          <div
            class="px-6 py-2 bg-primary rounded-2xl text-white capitalize w-64 mt-4"
          >
            <p class="font-semibold text-center text-xl">{{ profil.name }}</p>
            <p class="font-semibold text-center mt-1">
              {{ profil.nim }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
