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
    <button class="w-full rounded-md border bg-white p-3 text-left font-semibold text-gray-500 transition-colors duration-300 hover:text-green-400 focus:outline-none" @click="toggleHeading">Headings</button>

    <!-- Dropdown Content -->
    <div v-if="showHeading" class="gap- mt-2 w-full grid-cols-3 items-center justify-between rounded-md border bg-white p-1">
      <!-- Individual Headings -->
      <div class="p-2 text-start text-2xl font-semibold text-black transition-colors duration-300 hover:rounded-md hover:bg-gray-100 hover:text-green-400">Heading 1</div>
      <div class="p-2 text-start text-xl font-semibold text-black transition-colors duration-300 hover:rounded-md hover:bg-gray-100 hover:text-green-400">Heading</div>
      <div class="p-2 text-start text-lg font-semibold text-black transition-colors duration-300 hover:rounded-md hover:bg-gray-100 hover:text-green-400">Heading 3</div>
      <div class="p-2 text-start text-base font-semibold text-black transition-colors duration-300 hover:rounded-md hover:bg-gray-100 hover:text-green-400">Heading 4</div>
      <div class="p-2 text-start text-sm font-semibold text-black transition-colors duration-300 hover:rounded-md hover:bg-gray-100 hover:text-green-400">Heading 5</div>
      <div class="p-2 text-start text-xs font-semibold text-black transition-colors duration-300 hover:rounded-md hover:bg-gray-100 hover:text-green-400">Heading 6</div>
    </div>
  </div>
</template>
