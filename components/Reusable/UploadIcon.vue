<script setup>
import { Icon } from '@iconify/vue';
defineProps({
  label: {
    type: String,
    default: 'Icon',
    required: true,
  },
});
</script>
<template>
  <div class="flex w-full flex-row items-center justify-between border-b py-2">
    <!-- Label -->
    <p class="text-start text-xs font-medium text-gray-500">{{ label }}:</p>

    <!-- File Input Wrapper -->
    <div class="relative flex items-center justify-between rounded-md border border-gray-300 bg-gray-100 p-1 text-xs shadow-sm transition-all duration-200 focus-within:ring-2">
      <!-- Input -->
      <input type="file" class="absolute inset-0 h-full w-full cursor-pointer opacity-0" />

      <!-- Upload Icon -->
      <Icon icon="flowbite:upload-outline" width="24" height="24" class="text-gray-500" />
    </div>
  </div>
</template>
