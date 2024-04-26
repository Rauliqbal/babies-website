<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  let parenting = queryContent().where({ _path: path }).findOne();
  let surround = queryContent()
    .only(["_path", "title", "description", "image"])
    .findSurround(path);

  return {
    parenting: await parenting,
    surround: await surround,
  };
});

const showFormattedDate = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

// SEO
useHead({
  title: data.value.parenting.title,
});
</script>
<template>
  <main>
    <section class="container">
      <header class="border-b pb-12">
        <h1
          class="text-2xl md:text-5xl font-bold text-primary uppercase leading-relaxed"
        >
          {{ data.parenting.title }}
        </h1>

        <div class="flex flex-col md:flex-row md:items-center gap-1 mt-4">
          <p class="font-semibold text-sm">
            Oleh
            <NuxtLink
              :to="data.parenting.author.profileUrl"
              target="_blank"
              class="hover:underline"
              >{{ data.parenting.author.name }}</NuxtLink
            >
          </p>
          <span class="text-gray-400 text-xl hidden md:block">|</span>

          <p class="text-sm">
            Diterbitkan pada
            <span>{{ showFormattedDate(data.parenting.publishedAt) }}</span>
          </p>
        </div>
      </header>
      <section class="grid grid-cols-1 md:grid-cols-7 gap-6 items-start">
        <aside
          class="col-span-4 md:col-span-2 md:sticky top-28 bg-[#FFE2F4] rounded-2xl"
        >
          <Toc :links="data.parenting.body.toc.links" />
        </aside>
        <article class="col-span-5">
          <img
            class="w-full max-h-96 object-cover rounded-xl"
            :src="data.parenting.featureImage"
            :alt="'Thumbnail ' + data.parenting.title"
          />
          <div class="prose mb-10 max-w-full w-full m-auto">
            <ContentRenderer :value="data.parenting" />
          </div>
        </article>
      </section>
    </section>
  </main>
</template>
