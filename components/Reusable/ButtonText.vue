<script setup>
defineProps({
  label: {
    type: String,
    default: 'Button Text ',
  },
});
</script>
<template>
  <div class="flex w-full flex-col gap-2 border-b py-2">
    <p class="object-fill text-start text-xs text-gray-500">{{ label }}:</p>
    <div class="flex flex-row items-center justify-end overflow-hidden rounded-md border text-xs">
      <input type="text" class="w-full py-1 indent-3 text-xs focus:outline-none" placeholder="Text" />
    </div>
  </div>
</template>
