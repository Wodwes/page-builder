<script setup>
const page = ref({
  heading: {
    level: 1,
    size: '',
    text: 'Hello world',
  },
});
</script>
<template>
  <div class="p-4">
    <TextHeading :data="page.heading" />

    <!-- raw data -->
    <!-- <div>{{ page }}</div> -->
  </div>
</template>
