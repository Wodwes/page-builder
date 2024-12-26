<script setup>
defineProps({ level: { type: Number, required: true }, text: { type: String, required: true }, class: { type: String, required: false } });
</script>
<template>
  <TextHeadingComponent :level="level" :text="text" />
  <!-- customizer fields -->
  <TextHeadingCustomizations :level="level" :text="text" />
</template>
