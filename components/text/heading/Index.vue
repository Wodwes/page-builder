<script setup>
defineProps(['data']);
</script>
<template>
  <TextHeadingComponent :data="data" />
  <!-- customizer fields -->
  <TextHeadingCustomizations :data="data" />
</template>
