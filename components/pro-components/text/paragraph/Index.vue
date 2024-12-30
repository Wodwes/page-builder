<script setup>
defineProps(['data']);
</script>
<template>
  <p :class="[data.size, data.style, data.weight]">{{ data.text }}</p>
</template>
