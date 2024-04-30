<script setup>
defineProps({
  error: Object,
});

const error = useError();
if (error.value.statusCode === 404 || "404") {
  error.value.message = "yah.. masih kosong. tunggu sebentar yaa😔";
}

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div>
    <Navbar />
    <main class="flex flex-col items-center justify-center py-24">
      <img
        class="max-h-[27rem]"
        src="~/assets/images/under-construction.gif"
        alt="Under Costruction"
      />
      <h2
        class="text-2xl md:text-3xl leading-relaxed font-semibold text-center mt-4"
      >
        {{ error.message }}
      </h2>
      <hr />

      <button class="btn-primary mt-8" @click="handleError">
        Back to home
      </button>
    </main>
  </div>
</template>
