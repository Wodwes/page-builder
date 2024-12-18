<script setup>
definePageMeta({
  layout: 'main-layout',
});
defineProps({
  title: {
    type: String,
    default: 'Button',
    Required: true,
  },
});
</script>

<template>
  <div>
    <button class="rounded-md border bg-white px-8 py-2 text-center">{{ title }}</button>
  </div>
</template>
