<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});
const selected = ref(false);
</script>
<template>
  <!-- Auto Play  -->
  <div class="flex flex-row items-center justify-between py-1">
    <label for="autoPlay" class="text-xs font-normal text-gray-500">{{ label }}</label>
    <UToggle v-model="selected" id="autoPlay" />
  </div>
</template>
