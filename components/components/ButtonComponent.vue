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
    <button class="w-full rounded-md border bg-white py-2 text-center">{{ title }}</button>
  </div>
</template>
