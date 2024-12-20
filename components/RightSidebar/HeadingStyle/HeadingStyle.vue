placeholder="0"
<script setup>
import { Icon } from '@iconify/vue';
import FontFamily from '~/components/Reusable/FontFamily.vue';
import FontSize from '~/components/Reusable/FontSize.vue';
import LineHeight from '~/components/Reusable/LineHeight.vue';
import TextColorComponent from '~/components/Reusable/TextColorComponent.vue';
import LinkComponent from '../AccordionStyle/LinkComponent.vue';
import FontWeight from '~/components/Reusable/FontWeight.vue';
const items = [[{ label: 'Roboto' }, { label: 'Open Sans' }, { label: 'Poppins' }, { label: 'Inter' }, { label: 'Lato' }, { label: 'Merriweather' }, { label: 'Playfair Display' }, { label: 'Source Code Pro' }, { label: 'Courier New' }, { label: 'Georgia' }]];
const FontFamilyDropdown = ref(false);
defineShortcuts({ o: () => (open.value = !open.value) });

const FontWeightItems = [[{ label: '100 (Thin)' }, { label: '200 (extralight)' }, { label: '300 (light)' }, { label: '400 (normal)' }, { label: '500 (medium)' }, { label: '600 (semibold)' }, { label: '700 (bold)' }, { label: '800 (extrabold)' }, { label: '900 (black)' }]];
const FontWeightDropdown = ref(false);

const TranformItems = [[{ label: 'Uppercase' }, { label: 'Lowercase' }, { label: 'Capitalize' }, { label: 'Normal' }]];
const TranformDropdown = ref(false);

const TextStyleItems = [[{ label: 'Normal' }, { label: 'Italic' }]];
const TextStyleDropdown = ref(false);

const DecorationItems = [[{ label: 'Underline' }, { label: 'Overline' }, { label: 'Line Through' }, { label: 'None' }]];
const DecorationDropdown = ref(false);

// Define an array of alignment options
const alignments = [
  { icon: 'mingcute:align-left-line', label: 'Align Left' },
  { icon: 'mingcute:align-center-line', label: 'Align Center' },
  { icon: 'mingcute:align-right-line', label: 'Align Right' },
  { icon: 'mingcute:align-justify-line', label: 'Align Justify' },
];
const FontSizeValidate = (event) => {
  const input = event.target;
  const value = parseInt(input.value, 10);

  // Enforce min and max values
  if (value < 0) {
    input.value = 0;
  } else if (value > 200) {
    input.value = 200;
  }
};
const LineHeightValidate = (event) => {
  const input = event.target;
  const value = parseInt(input.value, 10);

  // Enforce min and max values
  if (value < 0) {
    input.value = 0;
  } else if (value > 88) {
    input.value = 88;
  }
};
const MarginValidate = (event) => {
  const input = event.target;
  const value = parseInt(input.value, 10);

  // Enforce min and max values
  if (value < 0) {
    input.value = 0;
  }
};
const PaddingValidate = (event) => {
  const input = event.target;
  const value = parseInt(input.value, 10);

  // Enforce min and max values
  if (value < 0) {
    input.value = 0;
  }
};
</script>

<template>
  <div class="max-w-80 overflow-hidden p-4">
    <h1 class="mb-2 text-sm font-bold text-gray-800">Accordion</h1>
    <!-- Alignment Section -->
    <div class="flex w-full flex-row items-center justify-between gap-6 border-b pb-3">
      <p class="text-xs text-gray-500">Alignment:</p>
      <div class="flex flex-row items-center justify-evenly divide-x rounded-md border">
        <template v-for="(alignment, index) in alignments" :key="index">
          <button>
            <Icon :icon="alignment.icon" width="24" height="24" class="p-0.5 text-gray-500 hover:bg-gray-100" :class="{ 'border-r': index < alignments.length - 1 }" />
          </button>
        </template>
      </div>
    </div>

    <!-- Font Family section  -->
    <FontFamily />

    <!-- Font Weight  -->
    <FontWeight />
    <!-- text transform  -->
    <div class="flex w-full flex-row items-center justify-between gap-6 border-b py-2">
      <p class="text-xs text-gray-500">Text Transform:</p>
      <div class="flex flex-row items-center justify-end rounded-md border">
        <UDropdown v-model:open="TranformDropdown" :items="TranformItems" :popper="{ placement: 'bottom-start' }">
          <UButton color="white" label="Default" trailing-icon="i-heroicons-chevron-down-20-solid" class="text-xs text-gray-500" />
          <template #item="{ item }">
            <div class="cursor-pointer px-3 py-1 text-xs hover:bg-gray-100">
              {{ item.label }}
            </div>
          </template>
        </UDropdown>
      </div>
    </div>
    <!-- Text Style  -->
    <div class="flex w-full flex-row items-center justify-between gap-6 border-b py-2">
      <p class="text-xs text-gray-500">Text Style:</p>
      <div class="flex flex-row items-center justify-end rounded-md border">
        <UDropdown v-model:open="TextStyleDropdown" :items="TextStyleItems" :popper="{ placement: 'bottom-start' }">
          <UButton color="white" label="Default" trailing-icon="i-heroicons-chevron-down-20-solid" class="text-xs text-gray-500" />
          <template #item="{ item }">
            <div class="cursor-pointer px-3 py-1 text-xs hover:bg-gray-100">
              {{ item.label }}
            </div>
          </template>
        </UDropdown>
      </div>
    </div>
    <!-- Text Decoration  -->
    <div class="flex w-full flex-row items-center justify-between gap-6 border-b py-2">
      <p class="text-xs text-gray-500">Text Decoration:</p>
      <div class="flex flex-row items-center justify-end rounded-md border">
        <UDropdown v-model:open="DecorationDropdown" :items="DecorationItems" :popper="{ placement: 'bottom-start' }">
          <UButton color="white" label="Default" trailing-icon="i-heroicons-chevron-down-20-solid" class="text-xs text-gray-500" />
          <template #item="{ item }">
            <div class="cursor-pointer px-3 py-1 text-xs hover:bg-gray-100">
              {{ item.label }}
            </div>
          </template>
        </UDropdown>
      </div>
    </div>

    <!-- Font Size  -->
    <FontSize />
    <!-- Line Height  -->
    <LineHeight />
    <!-- Text Color  -->
    <TextColorComponent />

    <!-- Link Section -->
    <LinkComponent />

    <!-- margin  -->
    <PaddingMarginComponent label="Margin" />

    <!-- Padding  -->
    <PaddingMarginComponent label="Padding" />

    <!-- Border  -->
    <PaddingMarginComponent label="border" />

    <!-- Border radius  -->
    <PaddingMarginComponent label="Border radius" />

    <!-- main div end  -->
  </div>
</template>
