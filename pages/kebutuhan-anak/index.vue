<script setup>
let activeTab = ref("tab1");

useHead({
  title: "Kebutuhan Bayi & Anak",
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
            Produk dan Perlengkapan Terbaik untuk Orang Tua
          </h3>
          <div class="w-full h-1 bg-primary my-8"></div>
        </div>

        <p class="paragraph font-medium text-center">
          Memilih produk perawatan kulit yang cocok untuk kulit bayi Anda dapat
          membuat perbedaan besar dalam mencapai kulit yang sehat, terawat, dan
          berkilau.
        </p>
      </header>

      <div class="mt-8">
        <div class="flex justify-center gap-2 md:gap-6 font-semibold">
          <button
            class="uppercase font-semibold text-[8px] sm:text-sm md:text-base tracking-wide transition-all ease-out duration-200 text-gray-800 before:transition-all before:duration-200 relative before:w-0 hover:before:w-full before:h-[2px] before:bottom-0 before:block before:absolute before:bg-primary"
            @click="activeTab = 'tab1'"
          >
            Makanan & Minuman
          </button>
          <button
            class="uppercase font-semibold text-[8px] sm:text-sm md:text-base tracking-wide transition-all ease-out duration-200 text-gray-800 before:transition-all before:duration-200 relative before:w-0 hover:before:w-full before:h-[2px] before:bottom-0 before:block before:absolute before:bg-primary"
            @click="activeTab = 'tab2'"
          >
            Perawatan
          </button>
          <button
            class="uppercase font-semibold text-[8px] sm:text-sm md:text-base tracking-wide transition-all ease-out duration-200 text-gray-800 before:transition-all before:duration-200 relative before:w-0 hover:before:w-full before:h-[2px] before:bottom-0 before:block before:absolute before:bg-primary"
            @click="activeTab = 'tab3'"
          >
            Kesehatan
          </button>
          <button
            class="uppercase font-semibold text-[8px] sm:text-sm md:text-base tracking-wide transition-all ease-out duration-200 text-gray-800 before:transition-all before:duration-200 relative before:w-0 hover:before:w-full before:h-[2px] before:bottom-0 before:block before:absolute before:bg-primary"
            @click="activeTab = 'tab4'"
          >
            Mainan
          </button>
          <button
            class="uppercase font-semibold text-[8px] sm:text-sm md:text-base tracking-wide transition-all ease-out duration-200 text-gray-800 before:transition-all before:duration-200 relative before:w-0 hover:before:w-full before:h-[2px] before:bottom-0 before:block before:absolute before:bg-primary"
            @click="activeTab = 'tab5'"
          >
            Buku
          </button>
        </div>

        <div class="mt-10">
          <!-- Makanan & Minuman Content Here -->
          <div v-if="activeTab === 'tab1'">
            <Swiper
              :modules="[SwiperPagination]"
              :slides-per-view="2"
              :space-between="24"
              :pagination="true"
              :breakpoints="{
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }"
            >
              <SwiperSlide
                v-for="item in MAKANMINUM"
                :key="item"
                class="px-1 pt-1 pb-10"
              >
                <CardProduct
                  :name="item.name"
                  :image="item.image"
                  :size="item.size"
                  :url="'makan-minum/' + item.id"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <!-- Perawatan Content Here -->
          <div v-if="activeTab === 'tab2'">
            <Swiper
              :modules="[SwiperPagination]"
              :slides-per-view="2"
              :space-between="24"
              :pagination="true"
              :breakpoints="{
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }"
            >
              <SwiperSlide
                v-for="item in PERAWATAN"
                :key="item"
                class="px-1 pt-1 pb-10"
              >
                <CardProduct
                  :name="item.name"
                  :image="item.image"
                  :size="item.size"
                  :url="'perawatan/' + item.id"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <!-- Kesehatan Content Here -->
          <div v-if="activeTab === 'tab3'">
            <Swiper
              :modules="[SwiperPagination]"
              :slides-per-view="2"
              :space-between="24"
              :pagination="true"
              :breakpoints="{
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }"
            >
              <SwiperSlide
                v-for="item in KESEHATAN"
                :key="item"
                class="px-1 pt-1 pb-10"
              >
                <CardProduct
                  :name="item.name"
                  :image="item.image"
                  :size="item.size"
                  :url="'kesehatan/' + item.id"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <!-- Mainan Content Here -->
          <div v-if="activeTab === 'tab4'">
            <Swiper
              :modules="[SwiperPagination]"
              :slides-per-view="2"
              :space-between="24"
              :pagination="true"
              :breakpoints="{
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }"
            >
              <SwiperSlide
                v-for="item in MAINAN"
                :key="item"
                class="px-1 pt-1 pb-10"
              >
                <CardProduct
                  :name="item.name"
                  :image="item.image"
                  :size="item.size"
                  :url="'mainan/' + item.id"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <!-- Buku Content Here -->
          <div v-if="activeTab === 'tab5'">
            <Swiper
              :modules="[SwiperPagination]"
              :slides-per-view="2"
              :space-between="24"
              :pagination="true"
              :breakpoints="{
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }"
            >
              <SwiperSlide
                v-for="item in BUKU"
                :key="item"
                class="px-1 pt-1 pb-10"
              >
                <CardProduct
                  :name="item.name"
                  :image="item.image"
                  :size="item.size"
                  :url="'buku/' + item.id"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
