<script setup>
defineProps({
  height: { type: String, default: 'h-px' },
  width: { type: String, default: 'w-full' },
  color: { type: String, default: 'bg-gray-300' },
  margin: { type: String, default: 'my-4' },
});
</script>

<template>
  <div :class="[height, width, color, margin]"></div>
</template>
