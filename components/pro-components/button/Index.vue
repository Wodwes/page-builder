<script setup>
defineProps(['data']);
</script>
<template>
  <component :class="[data.size, data.style, data.weight, data.display, data.textAlignment]">{{ data.text }}</component>
</template>
