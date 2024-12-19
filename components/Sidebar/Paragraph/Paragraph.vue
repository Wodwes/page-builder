<script setup>
const paraDropdown = ref(false);
const paraToggle = () => {
  paraDropdown.value = !paraDropdown.value;
};
</script>
<template>
  <div class="relative">
    <!-- Dropdown Toggle Button -->
    <button class="w-full rounded-md border bg-white p-3 text-left font-semibold text-gray-500 transition-colors duration-300 hover:text-green-400 focus:outline-none" @click="paraToggle">Pargraphs</button>

    <!-- Dropdown Content -->
    <div v-if="paraDropdown" class="mt-2 grid w-full grid-cols-1 items-center justify-between gap-2 rounded-md bg-white p-2">
      <!-- Pargraph -->
      <div class="rounded-md border p-2 text-center text-base font-semibold text-gray-500 transition-colors duration-300 hover:text-green-400">Pargraph</div>
    </div>
  </div>
</template>
