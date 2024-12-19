<!-- image/ icons/video -->
<script setup>
import { Icon } from '@iconify/vue';
const width = ref(0);
const Weight = ref(0);
const gap = ref(0);
const TranformItems = [[{ label: 'Solid ' }, { label: 'Dotted ' }, { label: 'Dashed ' }, { label: 'Double ' }, { label: 'Groove ' }, { label: 'Ridge ' }, { label: 'Inset ' }, { label: 'Outset ' }]];
const TranformDropdown = ref(false);
// Define an array of alignment options
const alignments = [
  { icon: 'mingcute:align-left-line', label: 'Align Left' },
  { icon: 'mingcute:align-center-line', label: 'Align Center' },
  { icon: 'mingcute:align-right-line', label: 'Align Right' },
];
const FontSizeValidate = (event) => {
  const input = event.target;
  let value = parseInt(input.value, 10);

  // Enforce min and max values
  if (value < -100) {
    input.value = -100;
  } else if (value > 100) {
    input.value = 100;
  }
};
</script>

<template>
  <div class="h-auto w-full max-w-80 overflow-hidden p-4">
    <h1 class="mb-2 text-sm font-bold text-gray-800">Divider</h1>
    <!-- Image Resolution  -->
    <div class="flex w-full flex-row items-center justify-between gap-6 border-b pb-2">
      <p class="text-xs text-gray-500">Style:</p>
      <div class="flex flex-row items-center justify-end rounded-md border">
        <UDropdown v-model:open="TranformDropdown" :items="TranformItems" :popper="{ placement: 'bottom-start' }">
          <UButton color="white" label="Default" trailing-icon="i-heroicons-chevron-down-20-solid" class="text-xs text-gray-500" />
          <template #item="{ item }">
            <div class="py w-full cursor-pointer px-1 text-start text-xs hover:bg-gray-100">
              {{ item.label }}
            </div>
          </template>
        </UDropdown>
      </div>
    </div>
    <!-- Text Color  -->
    <div class="flex w-full flex-row items-center justify-between border-b py-2">
      <p class="text-start text-xs text-gray-500">Divider Color:</p>
      <div class="flex flex-row items-center justify-end overflow-hidden rounded-md border text-xs">
        <input type="color" class="w-6 bg-white p-1 indent-3 text-xs" />
      </div>
    </div>
    <!-- width Section -->
    <div class="grid w-full grid-cols-[20%_1fr] items-center gap-5 border-b py-2">
      <p class="object-fill text-start text-xs text-gray-500">Width:</p>
      <template>
        <URange v-model="width" :min="0" :max="100" color="gray" size="sm" />
      </template>
    </div>
    <!-- Weight Section -->
    <div class="grid w-full grid-cols-[20%_1fr] items-center gap-5 border-b py-2">
      <p class="object-fill text-start text-xs text-gray-500">Weight:</p>
      <template>
        <URange v-model="Weight" :min="0" :max="100" color="gray" size="sm" />
      </template>
    </div>
    <!-- Gap Section -->
    <div class="grid w-full grid-cols-[20%_1fr] items-center gap-5 border-b py-2">
      <p class="object-fill text-start text-xs text-gray-500">Gap:</p>
      <template>
        <URange v-model="gap" :min="0" :max="100" color="gray" size="sm" />
      </template>
    </div>
    <!-- Alignment Section -->
    <div class="flex w-full flex-row items-center justify-between gap-6 border-b py-3">
      <p class="text-xs text-gray-500">Alignment:</p>
      <div class="flex flex-row items-center justify-evenly divide-x rounded-md border">
        <template v-for="(alignment, index) in alignments" :key="index">
          <button>
            <Icon :icon="alignment.icon" width="24" height="24" class="p-0.5 text-gray-500 hover:bg-gray-100" :class="{ 'border-r': index < alignments.length - 1 }" />
          </button>
        </template>
      </div>
    </div>
  </div>
</template>
