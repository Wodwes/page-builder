<!-- image/ icons/video -->
<script setup>
import { Icon } from '@iconify/vue';
import DropdownComponent from '~/components/Reusable/DropdownComponent.vue';
import RangeComponent from '~/components/Reusable/RangeComponent.vue';
import TextColorComponent from '~/components/Reusable/TextColorComponent.vue';
const width = ref(0);
const Weight = ref(0);
const gap = ref(0);
const styleItems = [[{ label: 'Solid ' }, { label: 'Dotted ' }, { label: 'Dashed ' }, { label: 'Double ' }, { label: 'Groove ' }, { label: 'Ridge ' }, { label: 'Inset ' }, { label: 'Outset ' }]];
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

    <DropdownComponent label="Style" :DropdownItems="styleItems" />

    <!-- Text Color  -->
    <TextColorComponent label="Text Color" />

    <!-- width Section -->
    <RangeComponent label="Width" />
    <!-- Weight Section -->
    <RangeComponent label="Weight" />

    <!-- Gap Section -->
    <RangeComponent label="Gap" />

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
