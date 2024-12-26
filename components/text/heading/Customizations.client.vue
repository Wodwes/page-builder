<script setup>
defineProps({ level: { type: Number, required: true }, text: { type: String, required: true } });
</script>
<template>
  <Teleport to="#teleports">
    <UInput placeholder="Search..." />
  </Teleport>
</template>
