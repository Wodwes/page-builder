<script setup>
defineProps(['data']);
</script>
<template>
  <component :is="'h' + data.level" :class="[data.size, data.style, data.weight, data.alignment]">{{ data.text }}</component>
</template>
