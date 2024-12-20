<script setup>
const items = [[{ label: 'Roboto' }, { label: 'Open Sans' }, { label: 'Poppins' }, { label: 'Inter' }, { label: 'Lato' }, { label: 'Merriweather' }, { label: 'Playfair Display' }, { label: 'Source Code Pro' }, { label: 'Courier New' }, { label: 'Georgia' }]];
const FontFamilyDropdown = ref(false);
defineShortcuts({ o: () => (open.value = !open.value) });
</script>
<template>
  <div class="flex w-full flex-row items-center justify-between gap-6 border-b py-2">
    <p class="text-xs text-gray-500">Font Family:</p>
    <div class="flex flex-row items-center justify-end rounded-md border">
      <UDropdown v-model:open="FontFamilyDropdown" :items="items" :popper="{ placement: 'bottom-start' }" class="text-xs">
        <UButton color="white" label="Default" trailing-icon="i-heroicons-chevron-down-20-solid" class="text-xs text-gray-500" />
        <template #item="{ item }">
          <div class="cursor-pointer px-3 py-1 text-xs hover:bg-gray-100">
            {{ item.label }}
          </div>
        </template>
      </UDropdown>
    </div>
  </div>
</template>
