<template>
  <div class="mb-2 grid grid-cols-2 gap-2">
    <USelect v-model="data.size" :items="textSizes" placeholder="Size" class="w-full" />
    <USelect v-model="data.style" :items="textStyles" placeholder="Style" class="w-full" />
  </div>

  <UInput v-model="data.text" class="w-full" placeholder="Text" />
</template>

<script setup>
defineProps(['data']);

const { textSizes, textStyles } = staticData();
</script>
