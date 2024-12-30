<script setup>
defineProps(['data']);
</script>
<template>
  <component :class="[data.size, data.style, data.weight]">{{ data.text }}</component>
</template>
