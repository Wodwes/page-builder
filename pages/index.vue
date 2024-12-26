<script setup>
const page = ref({
  heading: {
    level: 6,
    text: 'Hello world',
  },
});
</script>
<template>
  <div class="p-4">
    <div>conponents</div>

    <TextHeading :data="page.heading" />

    <!-- raw data -->
    <!-- <div>{{ page }}</div> -->
  </div>
</template>
