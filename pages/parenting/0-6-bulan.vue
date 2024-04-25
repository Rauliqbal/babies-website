<script setup>
const { data: parenting } = await useAsyncData("parenting", () =>
  queryContent("/parenting").sort({ publishedAt: -1 }).find()
);
</script>
<template>
  <main>
    <section class="container">
      <h3
        class="uppercase text-2xl lg:text-5xl font-bold text-primary text-center"
      >
        yuk belajar memahami si kecil
      </h3>

      <p class="paragraph font-semibold text-center mt-8">
        Ayo, mulai hari ini kita belajar parenting bersama! Menjadi seorang
        orang tua yang baik membutuhkan pemahaman dan keterampilan yang tepat.
        Dengan belajar, kita dapat memahami perkembangan anak secara lebih baik,
        mengatasi tantangan yang muncul, dan membangun hubungan yang harmonis
        dengan mereka. Dampak positifnya pun akan terasa pada anak, di mana
        mereka akan tumbuh dengan lebih percaya diri, berkomunikasi dengan baik,
        dan memiliki hubungan yang kuat dengan kita sebagai orang tua. Jadi,
        mari belajar parenting untuk menciptakan keluarga yang bahagia dan penuh
        cinta!
      </p>

      <div class="w-full h-1 bg-primary my-8"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        <CardArticle
          v-for="item in parenting"
          :url="item._path"
          :key="item.id"
          :thumbnail="item.featureImage"
          :title="item.title"
          :author="item.author.name"
          :background="item.background"
        />

        <!-- {{ parenting }} -->
      </div>
    </section>
  </main>
</template>
