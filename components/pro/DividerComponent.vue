<script setup>
defineProps({
  height: { default: 'h-px' },
  width: { default: 'w-full' },
  color: { default: 'bg-gray-300' },
  margin: { default: 'my-4' },
});
</script>

<template>
  <div :class="[height, width, color, margin]"></div>
</template>
