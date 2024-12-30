<template>
  <div class="mb-2 grid grid-cols-2 gap-2">
    <div>
      <h3 class="mb-1 text-sm">Button Heading</h3>
      <USelect v-model="data.level" :items="headings" placeholder="Heading" class="w-full" />
    </div>

    <div>
      <h3 class="mb-1 text-sm">Size</h3>
      <USelect v-model="data.size" :items="textSizes" placeholder="Size" class="w-full" />
    </div>

    <USelect v-model="data.style" :items="textStyles" placeholder="Style" class="w-full" />
    <USelect v-model="data.weight" :items="textWeights" placeholder="Weight" class="w-full" />
  </div>

  <UInput v-model="data.text" class="w-full" placeholder="Text" />
</template>

<script setup>
defineProps(['data']);

const { textSizes, textStyles, headings, textWeights } = staticData();
</script>
