<script setup>
const { data: diskusi } = await useAsyncData("diskusi", () =>
  queryContent("/diskusi").sort({ publishedAt: -1 }).find()
);

useHead({
  title: "Forum Diskusi",
});
</script>
<template>
  <main>
    <section class="container">
      <header class="md:flex gap-6 items-center md:justify-between">
        <div>
          <h3
            class="uppercase text-2xl lg:text-5xl font-bold text-primary text-center md:text-left"
          >
            Forum Diskusi
          </h3>
          <div class="w-full h-1 bg-primary my-8"></div>
        </div>

        <p class="paragraph font-medium text-center">
          Bergabunglah dalam Ruang untuk berbagi informasi, pengalaman, dan tips
          <br />
          seputar tumbuh kembang dan kesehatan anak.
        </p>
      </header>

      <div class="grid md:grid-cols-3 gap-8 mt-10">
        <div
          class="col-span-2 bg-slate-100 flex-col md:flex-row rounded-xl px-6 py-4 md:px-10 md:py-8 flex items-center justify-between"
        >
          <div class="order-last">
            <h5 class="text-2xl md:text-3xl font-semibold mt-4 md:mt-0">
              Selamat Datang di Ruang!
            </h5>
            <p class="desc mt-2">Ikuti ruang untuk menjelajahi minat anda</p>
            <div class="flex flex-col md:flex-row items-center gap-4 mt-8">
              <button
                class="btn-primary flex items-center gap-1 rounded-full w-full justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="ai ai-CirclePlus"
                >
                  <path d="M12 8v4m0 0v4m0-4h4m-4 0H8" />
                  <circle cx="12" cy="12" r="10" /></svg
                >Buat Ruang</button
              ><button
                class="btn-primary flex items-center gap-1 rounded-full w-full justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="ai ai-Send"
                >
                  <path
                    d="M9.912 12H4L2.023 4.135A.662.662 0 0 1 2 3.995c-.022-.721.772-1.221 1.46-.891L22 12 3.46 20.896c-.68.327-1.464-.159-1.46-.867a.66.66 0 0 1 .033-.186L3.5 15"
                  />
                </svg>
                Buat Ruang
              </button>
            </div>
          </div>
          <img
            class="order-first md:order-last"
            src="/images/message.png"
            alt=""
          />
        </div>

        <div class="col-span-2 md:col-span-1 bg-slate-100 rounded-xl">
          <div>
            <h5 class="text-2xl px-6 py-4">Undangan Yang Tertunda</h5>
            <div class="w-full h-[2px] bg-gray-300"></div>

            <div class="flex flex-col items-center my-8 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#bfbfbf"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ai ai-Envelope"
              >
                <path
                  d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z"
                />
                <path d="M2 8l7.501 6.001a4 4 0 0 0 4.998 0L22 8" />
              </svg>
              <p>Tidak ada undangan</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <h5 class="text-3xl font-semibold">Temukan Ruang</h5>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-10 md:gap-4"
        >
          <div
            v-for="item in diskusi"
            :key="item.id"
            :class="
              item.background +
              ' md:p-8 md:px-8 px-4 py-10 rounded-3xl flex flex-col items-center relative'
            "
          >
            <img :src="'/images/' + item.image" :alt="item.title" />
            <h6 class="text-xl font-bold mt-4 text-center">{{ item.title }}</h6>
            <p class="text-center mt-2">{{ item.desc }}</p>
            <NuxtLink
              :to="item._path"
              class="btn-primary absolute -bottom-6 rounded-full text-sm"
            >
              Bergabung
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
