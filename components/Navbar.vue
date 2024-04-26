<script setup>
function showHide() {
  document.getElementById("hamburger").checked = false;
}
</script>

<template>
  <header class="fixed inset-x-0 z-30 bg-white transition-all">
    <div class="container">
      <div class="flex items-center justify-center md:justify-between">
        <div class="py-2 flex gap-8">
          <!-- Logo -->
          <NuxtLink class="hidden md:block" to="/">
            <img src="~/assets/images/logo-babies.svg" alt="Babies Buddies" />
          </NuxtLink>
          <!-- Navigation Lik -->
          <div class="flex items-center">
            <input
              type="checkbox"
              class="peer hidden"
              name="hamburger"
              id="hamburger"
            />
            <label
              for="hamburger"
              class="relative peer-checked:hamburger z-30 block cursor-pointer lg:hidden"
            >
              <span
                class="duration-200 inline-block w-7 focus:w-0 h-1 bg-black after:bg-black before:bg-black rounded-xl after:rounded-xl before:rounded-xl"
              ></span>
            </label>
            <div
              @click="showHide"
              class="absolute inset-0 h-screen bg-gray-900/30 opacity-0 hidden peer-checked:opacity-100 peer-checked:block transition-all duration-300 lg:peer-checked:hidden"
            ></div>
            <div
              class="peer-checked:translate-x-0 w-72 sm:w-96 fixed top-0 right-0 bottom-0 translate-x-full transition duration-300 lg:w-auto lg:static lg:translate-x-0 z-20 ease-out"
            >
              <div class="flex flex-col lg:items-center lg:flex-row h-full">
                <ul
                  class="bg-white dark:md:bg-transparent lg:bg-transparent flex items-center lg:py-0 pt-20 pb-[38rem] lg:gap-8 flex-col lg:flex-row"
                >
                  <!-- Parenting Link -->
                  <li class="relative">
                    <div
                      class="peer py-4 md:py-6 uppercase font-semibold tracking-wide transition-all ease-out duration-200 text-gray-800 before:transition-all before:duration-200 relative before:w-0 md:hover:before:w-full before:h-[2px] before:bottom-5 before:block before:absolute before:bg-primary"
                    >
                      <div class="flex items-center gap-1">
                        <p>Parenting</p>
                        <!-- Icon Dropdown -->
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 4.78261V0L5.2381 4.34783L0 0V5.21739L5.2381 10L10 4.78261Z"
                            fill="#F86ABA"
                          />
                        </svg>
                      </div>
                    </div>
                    <ul
                      class="hidden z-10 -left-20 md:-left-6 top-10 md:top-16 text-sm absolute items-center peer-hover:flex hover:flex w-[160px] flex-col rounded overflow-hidden bg-[#FFE2F4] shadow-md"
                    >
                      <li class="group px-4 py-3">
                        <NuxtLink
                          class="group-hover:underline group-hover:rounded-full"
                          @click="showHide"
                          to="/parenting/0-6-bulan"
                          >0-6 BULAN</NuxtLink
                        >
                      </li>
                      <li class="group px-4 py-3">
                        <NuxtLink
                          class="group-hover:underline group-hover:rounded-full"
                          @click="showHide"
                          to="/parenting/7-12-bulan"
                          >7-12 BULAN</NuxtLink
                        >
                      </li>
                      <li class="group px-4 py-3">
                        <NuxtLink
                          class="group-hover:underline group-hover:rounded-full"
                          @click="showHide"
                          to="/parenting/1-3-tahun"
                          >1-3 Tahun</NuxtLink
                        >
                      </li>
                      <li class="group px-4 py-3">
                        <NuxtLink
                          class="group-hover:underline group-hover:rounded-full"
                          @click="showHide"
                          to="/parenting/4-6-tahun"
                          >4-6 Tahun</NuxtLink
                        >
                      </li>
                    </ul>
                  </li>

                  <!-- Kebutuhan Anak Link -->
                  <li class="relative">
                    <div
                      class="peer py-4 md:py-6 uppercase font-semibold tracking-wide transition-all ease-out duration-200 text-gray-800 before:transition-all before:duration-200 relative before:w-0 md:hover:before:w-full before:h-[2px] before:bottom-5 before:block before:absolute before:bg-primary"
                    >
                      <div class="flex items-center gap-1">
                        <p>Kebutuhan bayi & anak</p>
                        <!-- Icon Dropdown -->
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 4.78261V0L5.2381 4.34783L0 0V5.21739L5.2381 10L10 4.78261Z"
                            fill="#F86ABA"
                          />
                        </svg>
                      </div>
                    </div>
                    <ul
                      class="hidden z-10 -left-20 md:-left-6 top-10 md:top-16 text-sm absolute items-center peer-hover:flex hover:flex w-[160px] flex-col rounded overflow-hidden bg-[#FFE2F4] shadow-md"
                    >
                      <li class="group px-4 py-3">
                        <NuxtLink
                          class="group-hover:underline group-hover:rounded-full"
                          @click="showHide"
                          to="/parenting/0-6-bulan"
                          >0-6 BULAN</NuxtLink
                        >
                      </li>
                      <li class="group px-4 py-3">
                        <NuxtLink
                          class="group-hover:underline group-hover:rounded-full"
                          @click="showHide"
                          to="/parenting/7-12-bulan"
                          >7-12 BULAN</NuxtLink
                        >
                      </li>
                      <li class="group px-4 py-3">
                        <NuxtLink
                          class="group-hover:underline group-hover:rounded-full"
                          @click="showHide"
                          to="/parenting/1-3-tahun"
                          >1-3 Tahun</NuxtLink
                        >
                      </li>
                      <li class="group px-4 py-3">
                        <NuxtLink
                          class="group-hover:underline group-hover:rounded-full"
                          @click="showHide"
                          to="/parenting/4-6-tahun"
                          >4-6 Tahun</NuxtLink
                        >
                      </li>
                    </ul>
                  </li>

                  <!-- Tempat Anak Link -->
                  <li>
                    <NuxtLink
                      class="peer py-4 md:py-6 uppercase font-semibold tracking-wide transition-all ease-out duration-200 text-gray-800 before:transition-all before:duration-200 relative before:w-0 md:hover:before:w-full before:h-[2px] before:bottom-5 before:block before:absolute before:bg-primary"
                      @click="showHide"
                      to="/tempat-anak"
                      >Tempat Anak</NuxtLink
                    >
                  </li>

                  <!-- Konsultasi Dokter Link -->
                  <li>
                    <NuxtLink
                      class="peer py-4 md:py-6 uppercase font-semibold tracking-wide transition-all ease-out duration-200 text-gray-800 before:transition-all before:duration-200 relative before:w-0 md:hover:before:w-full before:h-[2px] before:bottom-5 before:block before:absolute before:bg-primary"
                      @click="showHide"
                      to="/konsultasi"
                      >Konsultasi Dokter</NuxtLink
                    >
                  </li>
                  <!-- Diskusi Link -->
                  <li>
                    <NuxtLink
                      class="peer py-4 md:py-6 uppercase font-semibold tracking-wide transition-all ease-out duration-200 text-gray-800 before:transition-all before:duration-200 relative before:w-0 md:hover:before:w-full before:h-[2px] before:bottom-5 before:block before:absolute before:bg-primary"
                      @click="showHide"
                      to="/diskusi"
                      >Diskusi</NuxtLink
                    >
                  </li>
                  <!-- Tentang kami link -->
                  <li>
                    <NuxtLink
                      class="peer py-4 md:py-6 uppercase font-semibold tracking-wide transition-all ease-out duration-200 text-gray-800 before:transition-all before:duration-200 relative before:w-0 md:hover:before:w-full before:h-[2px] before:bottom-5 before:block before:absolute before:bg-primary"
                      @click="showHide"
                      to="/tentang-kami"
                      >Tentang Kami</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Logo -->
        <NuxtLink class="md:hidden mx-auto" to="/">
          <img src="~/assets/images/logo-babies.svg" alt="Babies Buddies" />
        </NuxtLink>

        <!-- Login/Search -->
        <div class="flex items-center gap-4">
          <NuxtLink to="#"><i class="ai-search text-2xl"></i></NuxtLink>
          <NuxtLink to="#"><i class="ai-person text-2xl"></i></NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
#hamburger ~ label span::after,
#hamburger ~ label span::before {
  right: 0;
  transition-delay: 0.2s, 0s;
  transition-duration: 0.1s;
  transition-property: margin, transform;
  content: "";
  position: absolute;
  width: 20px;
  height: 4px;
}

#hamburger ~ label span::after {
  margin-top: 10px;
}

#hamburger ~ label span::before {
  margin-top: -10px;
}

#hamburger:checked ~ label span {
  background-color: transparent;
}

#hamburger:checked ~ label span:before,
#hamburger:checked ~ label span:after {
  transition-delay: 0s, 0.2s;
  margin-top: 0;
}

#hamburger:checked ~ label span:before {
  transform: rotate(45deg);
}

#hamburger:checked ~ label span:after {
  transform: rotate(-45deg);
}
</style>
