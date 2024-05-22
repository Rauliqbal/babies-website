<script setup>
const nuxtApp = useNuxtApp();
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  let article = queryContent().where({ _path: path }).findOne();
  let surround = queryContent().findSurround(path);

  return {
    article: await article,
    surround: await surround,
  };
});
useHead({
  title: data.value.article.title,
});
</script>
<template>
  <main>
    <img class="w-full blur-md h-[28rem]" src="/images/background.png" alt="" />
    <section class="container relative">
      <header class="absolute z-10 -top-[30rem] inset-x-0">
        <div>
          <img
            class="rounded-2xl z-50 h-80 w-full object-cover"
            src="/images/background.png"
            alt=""
          />

          <h2 class="text-4xl text-white font-bold mt-4">
            {{ data.article.title }}
          </h2>
          <p class="desc text-white font-semibold">{{ data.article.desc }}</p>
        </div>
      </header>

      <DisqusComments class="mt-10" :identifier="'/diskusi/' + path" />
    </section>
  </main>
</template>
