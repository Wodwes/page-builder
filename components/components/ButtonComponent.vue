<script setup>
const props = defineProps(['title']);
</script>

<template>
  <div>
    <button class="w-full rounded-md border bg-white py-2 text-center">{{ title }}</button>
  </div>
</template>
