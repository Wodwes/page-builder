<script setup>
const range = ref(0);
defineProps({
  label: {
    type: String,
    required: true,
    default: 'Undefined',
  },
});
</script>
<template>
  <div>
    <div class="grid w-full grid-cols-[20%_1fr] items-center gap-5 border-b py-2">
      <p class="object-fill text-start text-xs text-gray-500">{{ label }}:</p>
      <template>
        <URange v-model="range" :min="0" :max="100" color="gray" size="sm" />
      </template>
    </div>
  </div>
</template>
