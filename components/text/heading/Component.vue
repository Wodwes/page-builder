<script setup>
defineProps({ level: { type: Number, required: true }, text: { type: String, required: true }, class: { type: String, required: false } });
</script>
<template>
  <component :class="class" :is="'h' + level">{{ text }}</component>
</template>
