<script setup>
import { ref } from 'vue';

// State for toggling the dropdown
const showHeading = ref(false);

// Function to toggle dropdown visibility
const toggleHeading = () => {
  showHeading.value = !showHeading.value;
};
</script>

<template>
  <div class="relative">
    <!-- Dropdown Toggle Button -->
    <button class="w-full rounded-md border border-gray-300 bg-white p-3 text-left font-semibold text-gray-700 shadow-sm transition-colors duration-300 hover:bg-gray-50 hover:text-green-400 focus:outline-none" @click="toggleHeading">Headings</button>

    <!-- Dropdown Content -->
    <div v-if="showHeading" class="mt-2 grid w-full grid-cols-3 items-center justify-between gap-2 rounded-md border border-gray-300 bg-white p-2 shadow-lg">
      <!-- H1 -->
      <div class="rounded-md border p-2 text-center text-4xl font-semibold text-black transition-colors duration-300 hover:text-green-400">H1</div>
      <!-- H2 -->
      <div class="rounded-md border p-2 text-center text-3xl font-semibold text-black transition-colors duration-300 hover:text-green-400">H2</div>
      <!-- H3 -->
      <div class="rounded-md border p-2 text-center text-2xl font-semibold text-black transition-colors duration-300 hover:text-green-400">H3</div>
      <!-- H4 -->
      <div class="rounded-md border p-2 text-center text-xl font-semibold text-black transition-colors duration-300 hover:text-green-400">H4</div>
      <!-- H5 -->
      <div class="rounded-md border p-2 text-center text-lg font-semibold text-black transition-colors duration-300 hover:text-green-400">H5</div>
      <!-- H6 -->
      <div class="rounded-md border p-2 text-center text-base font-semibold text-black transition-colors duration-300 hover:text-green-400">H6</div>
    </div>
  </div>
</template>
