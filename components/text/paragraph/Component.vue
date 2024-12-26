<script setup>
defineProps({ text: { type: String, required: true }, class: { type: String, required: false } });
</script>
<template>
  <p :class="class">{{ text }}</p>
</template>
