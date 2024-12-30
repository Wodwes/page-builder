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
    <div>
      <h3 class="mb-1 text-sm">Weight</h3>
      <USelect v-model="data.weight" :items="textWeights" placeholder="Weight" class="w-full" />
    </div>
    <div>
      <h3 class="mb-1 text-sm">display</h3>
      <USelect v-model="data.display" :items="buttonDispaly" placeholder="display" class="w-full" />
    </div>
    <div>
      <h3 class="mb-1 text-sm">Alignment</h3>
      <USelect v-model="data.alignment" :items="textAlignment" placeholder="Alignment" class="w-full" />
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <div>
      <h3 class="mb-1 text-sm">Title</h3>
      <UInput v-model="data.title" class="w-full" placeholder="Text" />
    </div>
    <div>
      <h3 class="mb-1 text-sm">login/Signup Title</h3>
      <UInput v-model="data.loginSignupTitle" class="w-full" placeholder="Text" />
    </div>
    <div>
      <h3 class="mb-1 text-sm">Error Title</h3>
      <UInput v-model="data.error" class="w-full" placeholder="Text" />
    </div>

    <div>
      <h3 class="mb-1 text-sm">Submit Button</h3>
      <UInput v-model="data.submit" class="w-full" placeholder="Text" />
    </div>
  </div>
</template>

<script setup>
defineProps(['data']);

const { textSizes, textStyles, textWeights, buttonDispaly, textAlignment } = staticData();
</script>
