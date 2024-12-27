<script setup>
defineProps({ text: { type: String, required: true } });
</script>
<template>
  <Teleport to="#teleports">
    <UInput placeholder="Search..." />
  </Teleport>
</template>
