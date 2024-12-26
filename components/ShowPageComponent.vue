<script setup>
defineProps({ component: { type: String, required: true }, data: { type: Object, required: true } });
</script>

<template>
  <TextHeading v-if="component === 'heading'" :data="data" />
</template>
