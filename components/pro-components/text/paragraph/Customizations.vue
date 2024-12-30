<template>
  <div class="mb-2 grid grid-cols-2 gap-2">
    <div>
      <h3 class="mb-1 text-sm">Size</h3>
      <USelect v-model="data.size" :items="textSizes" placeholder="Size" class="w-full" />
    </div>
    <div>
      <h3 class="mb-1 text-sm">Style</h3>
      <USelect v-model="data.style" :items="textStyles" placeholder="Style" class="w-full" />
    </div>
    <div class="">
      <h3 class="mb-1 text-sm">Weight</h3>
      <USelect v-model="data.weight" :items="textWeights" placeholder="Weight" class="w-full" />
    </div>
  </div>
  <div>
    <h3 class="mb-1 text-sm">Title</h3>
    <UInput v-model="data.text" class="w-full" placeholder="Text" />
  </div>
</template>

<script setup>
defineProps(['data']);

const { textSizes, textStyles, textWeights } = staticData();
</script>
