<script setup>
defineProps(["links"]);

const flattenLinks = (links) => {
  let _links = links
    .map((link) => {
      let _link = [link];
      if (link.children) {
        let flattened = flattenLinks(link.children);
        _link = [link, ...flattened];
      }
      return _link;
    })
    .flat(1);

  return _links;
};
</script>

<template>
  <nav class="p-5 rounded-2xl">
    <h5 class="text-xl font-bold">Dalam Artikel Ini :</h5>
    <ul class="mt-4">
      <!-- render each link with depth class -->
      <li
        v-for="link of flattenLinks(links)"
        :key="link.id"
        :class="`py-1 toc-link _${link.depth}`"
      >
        <a class="prose-a" :href="`#${link.id}`">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.toc-links {
  @apply flex flex-col gap-2 px-2;
}

.toc-link {
  @apply font-medium hover:underline;
}

.toc-link._3 {
  @apply pl-3;
}

.toc-link._4 {
  @apply pl-6;
}

.toc-link._undefined {
  @apply pl-8;
}

:is(.dark .prose-a) {
  color: #c2c2c2;
}
</style>
