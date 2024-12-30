<script setup>
import imageUrl from '~/assets/images/pods.png';
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 500);
});
</script>

<template>
  <div class="container mx-auto px-4 py-8 transition-opacity duration-1000" :class="{ 'opacity-0': !isVisible, 'opacity-100': isVisible }">
    <div class="overflow-hidden rounded-lg border border-gray-300 shadow-lg">
      <div class="relative grid grid-cols-1 md:grid-cols-2">
        <!-- Left Section -->
        <div class="flex flex-col items-start justify-center rounded-t-lg bg-gradient-to-br from-[#f4c5c1] to-[#f4c5c1]/80 p-8 md:rounded-l-lg md:rounded-tr-none">
          <h2 class="text-3xl font-bold text-white md:text-4xl lg:text-5xl">Explore Our Pod</h2>
          <p class="mt-4 max-w-md text-lg text-white/90">Experience the future of living with our sleek and modern pod, designed for comfort and efficiency.</p>
          <UButton class="mt-6 rounded-full bg-white px-6 py-2 font-semibold text-[#f4c5c1] shadow-md transition-all hover:bg-blue-50 hover:shadow-lg focus:ring-2 focus:ring-[#f4c5c1] focus:ring-offset-2 focus:outline-none"> Learn More </UButton>
        </div>

        <!-- Right Section -->
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-b from-[#f4c5c1]/85 to-transparent md:bg-gradient-to-r" aria-hidden="true"></div>
          <img :src="imageUrl" alt="Modern living pod exterior" class="w-full rounded-br-lg object-cover md:rounded-bl-none" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradient-animation {
  background-size: 200% 200%;
  animation: gradientShift 15s ease infinite;
}
</style>
