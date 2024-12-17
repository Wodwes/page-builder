<script setup>
const paraDropdown = ref(false);
const paraToggle = () => {
  paraDropdown.value = !paraDropdown.value;
};
</script>
<template>
  <div class="relative">
    <!-- Dropdown Toggle Button -->
    <button class="w-full rounded-md border border-gray-300 bg-white p-3 text-left font-semibold text-gray-500 shadow-sm transition-colors duration-300 hover:bg-gray-50 hover:text-green-400 focus:outline-none" @click="paraToggle">Pargraphs</button>

    <!-- Dropdown Content -->
    <div v-if="paraDropdown" class="mt-2 grid w-full grid-cols-1 items-center justify-between gap-2 rounded-md border border-gray-300 bg-white p-2 shadow-lg">
      <!-- Pargraph -->
      <div class="rounded-md border p-2 text-center text-base font-semibold text-black transition-colors duration-300 hover:text-green-400">Pargraph</div>
    </div>
  </div>
</template>
