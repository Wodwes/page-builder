<script setup>
defineProps(['data']);
</script>
<template>
  <component :is="'h' + data.level">{{ data.text }}</component>
</template>
