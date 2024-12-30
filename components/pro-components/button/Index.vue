<script setup>
defineProps(['data']);
</script>
<template>
  <component :class="[data.size, data.style, data.weight, data.border]">{{ data.text }}</component>
</template>
