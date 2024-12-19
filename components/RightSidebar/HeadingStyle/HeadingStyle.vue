<script setup>
import { Icon } from '@iconify/vue';

const items = [[{ label: 'Roboto' }, { label: 'Open Sans' }, { label: 'Poppins' }, { label: 'Inter' }, { label: 'Lato' }, { label: 'Merriweather' }, { label: 'Playfair Display' }, { label: 'Source Code Pro' }, { label: 'Courier New' }, { label: 'Georgia' }]];

const FontFamilyDropdown = ref(false);
const FontWeightItems = [[{ label: '100 (Thin)' }, { label: '200 (Extralight)' }, { label: '300 (Light)' }, { label: '400 (Normal)' }, { label: '500 (Medium)' }, { label: '600 (Semibold)' }, { label: '700 (Bold)' }, { label: '800 (Extrabold)' }, { label: '900 (Black)' }]];
const TranformItems = [[{ label: 'Uppercase' }, { label: 'Lowercase' }, { label: 'Capitalize' }, { label: 'Normal' }]];
const TextStyleItems = [[{ label: 'Normal' }, { label: 'Italic' }]];
const DecorationItems = [[{ label: 'Underline' }, { label: 'Overline' }, { label: 'Line Through' }, { label: 'None' }]];

const alignments = [
  { icon: 'mingcute:align-left-line', label: 'Align Left' },
  { icon: 'mingcute:align-center-line', label: 'Align Center' },
  { icon: 'mingcute:align-right-line', label: 'Align Right' },
  { icon: 'mingcute:align-justify-line', label: 'Align Justify' },
];

const FontSizeValidate = (event) => {
  const input = event.target;
  const value = parseInt(input.value, 10);
  input.value = Math.max(0, Math.min(200, value)); // Ensures min and max values
};

const LineHeightValidate = (event) => {
  const input = event.target;
  const value = parseInt(input.value, 10);
  input.value = Math.max(0, Math.min(88, value)); // Ensures min and max values
};

const MarginValidate = (event) => {
  const input = event.target;
  const value = parseInt(input.value, 10);
  input.value = Math.max(0, value); // Ensures min value
};

const PaddingValidate = (event) => {
  const input = event.target;
  const value = parseInt(input.value, 10);
  input.value = Math.max(0, value); // Ensures min value
};
</script>

<template>
  <div class="max-w-80 overflow-hidden p-4">
    <h1 class="mb-2 text-sm font-bold text-gray-800">Heading</h1>

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

    <!-- Dropdown Sections -->
    <div
      v-for="(section, index) in [
        { label: 'Font Family', items: items, dropdown: FontFamilyDropdown },
        { label: 'Font Weight', items: FontWeightItems, dropdown: FontWeightDropdown },
        { label: 'Text Transform', items: TranformItems, dropdown: TranformDropdown },
        { label: 'Text Style', items: TextStyleItems, dropdown: TextStyleDropdown },
        { label: 'Text Decoration', items: DecorationItems, dropdown: DecorationDropdown },
      ]"
      :key="index"
      class="flex w-full flex-row items-center justify-between gap-6 border-b py-2"
    >
      <p class="text-xs text-gray-500">{{ section.label }}:</p>
      <div class="flex flex-row items-center justify-end rounded-md border">
        <UDropdown v-model:open="section.dropdown" :items="section.items" :popper="{ placement: 'bottom-start' }" class="text-xs">
          <UButton color="white" label="Default" trailing-icon="i-heroicons-chevron-down-20-solid" class="text-xs text-gray-500" />
          <template #item="{ item }">
            <div class="cursor-pointer px-3 py-1 text-xs hover:bg-gray-100">
              {{ item.label }}
            </div>
          </template>
        </UDropdown>
      </div>
    </div>

    <!-- Font Size and Line Height Sections -->
    <div
      v-for="(section, index) in [
        { label: 'Font Size', validator: FontSizeValidate, type: 'number', min: 0, max: 200 },
        { label: 'Line Height', validator: LineHeightValidate, type: 'number', min: 0, max: 200 },
        { label: 'Text Color', validator: null, type: 'color' },
      ]"
      :key="index"
      class="flex w-full flex-row items-center justify-between border-b py-2"
    >
      <p class="text-start text-xs text-gray-500">{{ section.label }}:</p>
      <div class="flex flex-row items-center justify-end overflow-hidden rounded-md border text-xs">
        <input v-if="section.type === 'number'" @input="section.validator" type="number" class="w-12 py-1 indent-3 text-xs" :min="section.min" :max="section.max" />
        <input v-else-if="section.type === 'color'" type="color" class="w-6 bg-white p-1 indent-3 text-xs" />
      </div>
    </div>

    <!-- Margin and Padding Sections -->
    <div
      v-for="(section, index) in [
        { label: 'Margin', validator: MarginValidate },
        { label: 'Padding', validator: PaddingValidate },
      ]"
      :key="index"
      class="flex w-full flex-col items-start justify-between gap-2 border-b pb-3 pt-2"
    >
      <p class="text-start text-xs text-gray-500">{{ section.label }}:</p>
      <div class="box-content grid w-full grid-cols-5 items-center gap-2 divide-x rounded-md border text-xs text-gray-500">
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="section.validator" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="section.validator" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="section.validator" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="section.validator" /></div>
        <div class="flex items-center justify-center px-2">PX</div>
      </div>
    </div>
  </div>
</template>
