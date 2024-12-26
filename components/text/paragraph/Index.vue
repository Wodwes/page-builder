<script setup>
defineProps({ text: { type: String, required: true }, class: { type: String, required: false } });
</script>
<template>
  <TextHeadingComponent :text="text" />
  <!-- customizer fields -->
  <TextHeadingCustomizations :text="text" />
</template>
