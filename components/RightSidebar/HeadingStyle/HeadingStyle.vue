<script setup>
import { Icon } from '@iconify/vue';
const items = [[{ label: 'Roboto' }, { label: 'Open Sans' }, { label: 'Poppins' }, { label: 'Inter' }, { label: 'Lato' }, { label: 'Merriweather' }, { label: 'Playfair Display' }, { label: 'Source Code Pro' }, { label: 'Courier New' }, { label: 'Georgia' }]];

console.log(items);

const open = ref(false);

defineShortcuts({
  o: () => (open.value = !open.value),
});
</script>

<template>
  <div class="max-w-72 overflow-hidden p-4">
    <h1 class="mb-2 text-sm font-bold text-gray-500">Heading</h1>
    <!-- Alignment Section -->
    <div class="flex w-full flex-row items-center justify-between gap-6 border-b pb-4">
      <p class="text-xs text-gray-500">Alignment:</p>
      <div class="flex flex-row items-center justify-evenly divide-x rounded-md border">
        <Icon icon="mingcute:align-left-line" width="24" height="24" class="border-r p-0.5 hover:bg-gray-100" />
        <Icon icon="mingcute:align-center-line" width="24" height="24" class="border-r p-0.5 hover:bg-gray-100" />
        <Icon icon="mingcute:align-right-line" width="24" height="24" class="border-r p-0.5 hover:bg-gray-100" />
        <Icon icon="mingcute:align-justify-line" width="24" height="24" class="p-0.5 hover:bg-gray-100" />
      </div>
    </div>
    <!-- typography section  -->
    <div class="flex flex-col gap-2">
      <div class="flex w-full flex-row items-center justify-around gap-6 border-b py-4">
        <p class="text-xs text-gray-500">Typography:</p>
        <div class="flex flex-row items-center justify-end rounded-md border">
          <UDropdown v-model:open="open" :items="items" :popper="{ placement: 'bottom-start' }">
            <UButton color="white" label="Option" trailing-icon="i-heroicons-chevron-down-20-solid" />
          </UDropdown>
        </div>
      </div>
      <div class="flex w-full flex-row items-center justify-around gap-6 border-b py-4">
        <p class="text-xs text-gray-500">Font Size</p>
        <div class="flex flex-row items-center justify-end overflow-hidden rounded-md border">
          <input type="number" class="w-12" />
        </div>
      </div>
    </div>
  </div>
</template>
