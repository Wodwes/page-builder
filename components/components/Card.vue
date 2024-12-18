<script setup>
definePageMeta({
  layout: 'main-layout',
});
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    default: null,
  },
});
</script>
<template>
  <div class="overflow-hidden rounded-lg bg-white shadow-lg">
    <!-- Card Header with Demo Data -->
    <div class="mb-4 flex h-8 items-center justify-center">
      <span class="text-lg font-semibold text-gray-700">{{ title }}</span>
    </div>

    <!-- Card Content with Demo Data -->
    <div class="mb-4 flex h-32 items-center justify-center bg-gray-100 p-4 text-gray-600">
      <p class="text-center">{{ content }}</p>
    </div>

    <!-- Card Footer with Demo Data -->
    <div class="mb-4 flex h-8 items-center justify-center">
      <button class="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none">{{ buttonText }}</button>
    </div>
  </div>
</template>
