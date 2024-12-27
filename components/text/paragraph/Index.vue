<script setup>
defineProps(['data']);
</script>
<template>
  <p :class="[data.size, data.style]">{{ data.text }}</p>
</template>
