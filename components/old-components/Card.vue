<script setup>
defineProps({
  title: { default: 'Title' },
  content: { default: 'Content' },
  buttonText: { default: 'Button' },
  customClasses: { default: '' },
});
</script>
<template>
  <UContainer :class="`overflow-hidden rounded-md border bg-white p-4 ${customClasses}`">
    <!-- Card Header with Demo Data -->
    <div class="mb-4 flex items-center justify-center">
      <span class="text-lg font-semibold text-gray-700">{{ title }}</span>
    </div>

    <!-- Card Content with Demo Data -->
    <div class="my-4 flex items-center justify-center bg-gray-100 p-4 py-8 text-gray-600">
      <p class="text-center">{{ content }}</p>
    </div>

    <!-- Card Footer with Demo Data -->
    <div class="flex items-center justify-center">
      <UButton class="bg-primary rounded-md px-4 py-2 text-white">{{ buttonText }}</UButton>
    </div>
  </UContainer>
</template>
