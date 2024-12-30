<script setup>
defineProps(['data']);
</script>
<template>
  <p :class="[data.size, data.style, data.weight, , data.alignment]">{{ data.text }}</p>
</template>
