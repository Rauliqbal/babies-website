<script setup>
useHead({
  title: "Visi & Misi",
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
            VISI DAN MISI
          </h3>
          <div class="w-full h-1 bg-primary my-8"></div>
        </div>
      </header>

      <div
        class="flex flex-col md:flex-row items-center relative mx-auto mt-10"
      >
        <img
          class="md:absolute left-0 -mb-20 md:mb-0 z-10 w-40 md:w-auto"
          src="/images/visi.png"
          alt=""
        />
        <div
          class="bg-secondary rounded-3xl pl-4 md:rounded-[75px] w-full pt-20 md:pt-0 py-8 md:h-[200px] md:ml-[8%] pr-4 md:pr-8 flex items-center"
        >
          <div class="md:pl-36">
            <h5 class="text-3xl font-semibold">VISI:</h5>
            <p class="desc md:text-xl mt-2 sm:text-sm">
              Menjadi sumber informasi terpercaya bagi orang tua mengenai
              pertumbuhan Dan perkembangan anak secara optimal.
            </p>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col md:flex-row items-center relative mt-16 mx-auto"
      >
        <img
          class="md:absolute left-0 -mb-20 md:mb-0 z-10 w-40 md:w-auto"
          src="/images/misi.png"
          alt=""
        />
        <div
          class="bg-secondary rounded-3xl pl-4 md:rounded-[75px] w-full pt-20 md:pt-0 py-8 md:h-[200px] md:ml-[8%] pr-4 md:pr-8 flex items-center"
        >
          <div class="md:pl-36">
            <h5 class="text-3xl font-semibold">VISI:</h5>
            <ul class="list-disc">
              <li class="desc md:text-xl mt-2 ml-8 sm:text-sm">
                Menyediakan konten informatif dan edukatif yang relevan dengan
                kebutuhan orang tua
              </li>
              <li class="desc md:text-xl mt-2 ml-8 sm:text-sm">
                Menawarkan produk berkualitas untuk kebutuhan bayi dan
                anak-anak.
              </li>
              <li class="desc md:text-xl mt-2 ml-8 sm:text-sm">
                Membangun komunitas yang mendukung orang tua dalam peranannya.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
