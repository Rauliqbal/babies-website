<script setup>
defineProps({
  name: String,
  image: Array,
  location: String,
  background: String,
  rating: String,
  url: String,
});
</script>
<template>
  <NuxtLink :to="'/tempat-anak/' + url">
    <div class="flex flex-col items-center">
      <div class="relative overflow-hidden rounded-3xl">
        <img
          :src="image[0]"
          :alt="'image' + name"
          class="object-cover w-[400px] h-[200px]"
        />
        <div class="absolute w-full h-full top-0 left-0">
          <div
            class="text-[12px] px-4 py-2 bg-slate-100 rounded-full inline-flex absolute left-3 top-3"
          >
            Recommended
          </div>

          <div
            class="text-[12px] p-2 bg-slate-100 rounded-full inline-flex absolute right-3 top-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#ff5a73"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ai ai-Heart"
            >
              <path
                d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div
        :class="
          background + ' flex flex-col  mt-1 md:mt-4 w-full p-2 rounded-2xl'
        "
      >
        <div class="flex items-center justify-between gap-2 p-1">
          <h4
            class="sm:text-sm md:text-base font-semibold capitalize line-clamp-1"
          >
            {{ name }}
          </h4>

          <div class="flex items-center text-sm gap-[2px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#fac917"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ai ai-Star"
            >
              <path
                d="M11.074 2.633c.32-.844 1.531-.844 1.852 0l2.07 5.734c.145.38.514.633.926.633h5.087c.94 0 1.35 1.17.611 1.743L18 14a.968.968 0 0 0-.322 1.092L19 20.695c.322.9-.72 1.673-1.508 1.119l-4.917-3.12a1 1 0 0 0-1.15 0l-4.917 3.12c-.787.554-1.83-.22-1.508-1.119l1.322-5.603A.968.968 0 0 0 6 14l-3.62-3.257C1.64 10.17 2.052 9 2.99 9h5.087a.989.989 0 0 0 .926-.633l2.07-5.734z"
              />
            </svg>
            {{ rating }}
          </div>
        </div>
        <div class="flex items-center justify-between gap-2 p-1">
          <p class="md:text-sm text-gray-500">
            {{ location }}
          </p>
          <NuxtLink
            :to="url"
            class="px-4 py-2 bg-white rounded-full inline-flex text-[10px]"
            >Details</NuxtLink
          >
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
