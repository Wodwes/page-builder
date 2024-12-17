<script setup>
import { ref } from 'vue';

// State for toggling the dropdown
const showHeading = ref(false);

// Array of headings with their respective sizes
const headings = [
  { label: 'H1', size: 'text-2xl' },
  { label: 'H2', size: 'text-xl' },
  { label: 'H3', size: 'text-lg' },
  { label: 'H4', size: 'text-base' },
  { label: 'H5', size: 'text-sm' },
  { label: 'H6', size: 'text-xs' },
];

// Function to toggle dropdown visibility
const toggleHeading = () => {
  showHeading.value = !showHeading.value;
};
</script>

<template>
  <div class="relative">
    <!-- Dropdown Toggle Button -->
    <button class="w-full rounded-md border border-gray-300 bg-white p-3 text-left font-semibold text-gray-500 shadow-sm transition-colors duration-300 hover:bg-gray-50 hover:text-green-400 focus:outline-none" @click="toggleHeading">Headings</button>

    <!-- Dropdown Content -->
    <div v-if="showHeading" class="mt-2 grid w-full grid-cols-3 items-center justify-between gap-2 rounded-md border border-gray-300 bg-white p-2 shadow-lg">
      <!-- Iterate over headings array -->
      <div v-for="(heading, index) in headings" :key="index" class="rounded-md border p-2 text-center font-semibold text-black transition-colors duration-300 hover:text-green-400" :class="heading.size">
        {{ heading.label }}
      </div>
    </div>
  </div>
</template>
