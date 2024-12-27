<script setup>
const range = ref(0);
defineProps({ label: { default: 'Range label pass props' }, customclasses: { default: '' } });
</script>
<template>
  <div>
    <div :class="`${customclasses} w-full items-center space-y-4 p-4`">
      <p class="object-fill text-start text-xs text-gray-500">{{ label }}</p>
      <div>
        <USlider v-model="range" color="primary" :min="0" :max="100" size="sm" />
      </div>
    </div>
  </div>
</template>
