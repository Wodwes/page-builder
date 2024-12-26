<script setup>
defineProps(['data']);
</script>
<template>
  <Teleport to="#teleports">
    <UInput v-model="data.text" class="w-full" placeholder="Text" />
  </Teleport>
</template>
