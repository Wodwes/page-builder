<script setup>
const FontWeightItems = [[{ label: '100 (Thin)' }, { label: '200 (extralight)' }, { label: '300 (light)' }, { label: '400 (normal)' }, { label: '500 (medium)' }, { label: '600 (semibold)' }, { label: '700 (bold)' }, { label: '800 (extrabold)' }, { label: '900 (black)' }]];
const FontWeightDropdown = ref(false);
</script>
<template>
  <div class="flex w-full flex-row items-center justify-between border-b py-2">
    <p class="text-start text-xs text-gray-500">Font Weight:</p>
    <UDropdown v-model:open="FontWeightDropdown" :items="FontWeightItems" :popper="{ placement: 'bottom-start' }" class="text-xs">
      <UButton color="white" label="Default" trailing-icon="i-heroicons-chevron-down-20-solid" class="text-xs text-gray-500" />
      <template #item="{ item }">
        <div class="cursor-pointer px-3 py-1 text-xs hover:bg-gray-100">
          {{ item.label }}
        </div>
      </template>
    </UDropdown>
  </div>
</template>
