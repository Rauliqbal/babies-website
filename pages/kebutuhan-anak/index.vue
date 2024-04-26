<script setup>
let activeTab = ref("tab2");
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
          <div v-if="activeTab === 'tab1'">Makan & Minum</div>
          <div v-if="activeTab === 'tab2'">
            <!-- Perawatan Content Here -->
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
              <SwiperSlide v-for="slide in 5" :key="slide" class="pt-1 pb-10">
                <CardProduct />
              </SwiperSlide>
            </Swiper>
          </div>
          <div v-if="activeTab === 'tab3'">Kesehatan Content Here</div>
          <div v-if="activeTab === 'tab4'">Mainan Content Here</div>
          <div v-if="activeTab === 'tab5'">Buku Content Here</div>
        </div>
      </div>
    </section>
  </main>
</template>
