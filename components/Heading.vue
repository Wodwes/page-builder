<script setup>
defineProps({ level: { type: Number, required: true }, text: { type: String, required: true } });
</script>
<template>
  <component :is="'h' + level">{{ text }}</component>
</template>
