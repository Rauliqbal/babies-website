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
            Tempat bermain anak seru dan menyenangkan
          </h3>
          <div class="w-full h-1 bg-primary my-8"></div>
        </div>

        <p class="paragraph font-medium text-center">
          Temukan tempat bermain yang menghibur dan aman untuk anak-anak anda.
          Dengan tempat bermain yang tepat, Anak-anak dapat belajar, berkembang,
          dan Bersosialisasi dengan lebih baik.
        </p>
      </header>

      <div class="mt-8">
        <div class="flex justify-center gap-2 md:gap-6 font-semibold">
          <button
            class="uppercase font-semibold text-[8px] sm:text-sm md:text-base tracking-wide transition-all ease-out duration-200 text-gray-800 before:transition-all before:duration-200 relative before:w-0 hover:before:w-full before:h-[2px] before:bottom-0 before:block before:absolute before:bg-primary"
            @click="activeTab = 'tab1'"
          >
            Daycare
          </button>
          <button
            class="uppercase font-semibold text-[8px] sm:text-sm md:text-base tracking-wide transition-all ease-out duration-200 text-gray-800 before:transition-all before:duration-200 relative before:w-0 hover:before:w-full before:h-[2px] before:bottom-0 before:block before:absolute before:bg-primary"
            @click="activeTab = 'tab2'"
          >
            Taman bermain
          </button>
          <button
            class="uppercase font-semibold text-[8px] sm:text-sm md:text-base tracking-wide transition-all ease-out duration-200 text-gray-800 before:transition-all before:duration-200 relative before:w-0 hover:before:w-full before:h-[2px] before:bottom-0 before:block before:absolute before:bg-primary"
            @click="activeTab = 'tab3'"
          >
            perpustakaan anak
          </button>
        </div>

        <div class="mt-10">
          <!-- Daycare Content Here -->
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

          <!-- Taman Bermain Content Here -->
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

          <!-- Perpustakaan Anak Content Here -->
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
        </div>
      </div>
    </section>
  </main>
</template>
