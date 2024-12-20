<script setup>
import { Icon } from '@iconify/vue';
import FontFamily from '~/components/Reusable/FontFamily.vue';
import FontSize from '~/components/Reusable/FontSize.vue';
import PaddingMarginComponent from '~/components/Reusable/PaddingMarginComponent.vue';
import TextColorComponent from '~/components/Reusable/TextColorComponent.vue';
import LinkComponent from '../AccordionStyle/LinkComponent.vue';
import FontWeight from '~/components/Reusable/FontWeight.vue';
import ButtonText from '~/components/Reusable/ButtonText.vue';
import DropdownComponent from '~/components/Reusable/DropdownComponent.vue';
import UploadIcon from '~/components/Reusable/UploadIcon.vue';

// Define an array of alignment options
const alignments = [
  { icon: 'humbleicons:align-objects-left', label: 'Align Left' },
  { icon: 'mdi:format-horizontal-align-center', label: 'Align Center' },
  { icon: 'mdi:format-horizontal-align-right', label: 'Align Right' },
  { icon: 'gravity-ui:chevrons-expand-from-line', label: 'Align Justify' },
];
const Fontitems = [[{ label: 'Roboto' }, { label: 'Open Sans' }, { label: 'Poppins' }, { label: 'Inter' }, { label: 'Lato' }, { label: 'Merriweather' }, { label: 'Playfair Display' }, { label: 'Source Code Pro' }, { label: 'Courier New' }, { label: 'Georgia' }]];
defineShortcuts({ o: () => (open.value = !open.value) });

const FontWeightItems = [[{ label: '100 (Thin)' }, { label: '200 (extralight)' }, { label: '300 (light)' }, { label: '400 (normal)' }, { label: '500 (medium)' }, { label: '600 (semibold)' }, { label: '700 (bold)' }, { label: '800 (extrabold)' }, { label: '900 (black)' }]];

const TranformItems = [[{ label: 'Uppercase' }, { label: 'Lowercase' }, { label: 'Capitalize' }, { label: 'Normal' }]];

const TextStyleItems = [[{ label: 'Normal' }, { label: 'Italic' }]];

const DecorationItems = [[{ label: 'Underline' }, { label: 'Overline' }, { label: 'Line Through' }, { label: 'None' }]];
const DecorationDropdown = ref(false);

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

  // Enforce min  values
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
  <div class="h-auto min-h-screen w-full max-w-80 overflow-hidden p-4">
    <h1 class="mb-2 text-sm font-bold text-gray-800">Button</h1>
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

    <!-- Button Text Section -->
    <ButtonText />
    <!-- Button Link Section -->
    <LinkComponent label="Button Link" />
    <!-- upload icon  -->
    <UploadIcon />

    <!-- Font Size  -->
    <FontSize />
    <!-- Link Section -->
    <LinkComponent label="link" />
    <!-- Font Family section  -->
    <DropdownComponent label="Font Family" :DropdownItems="Fontitems" />

    <!-- Font Weight  -->
    <DropdownComponent label="Font Weight" :DropdownItems="FontWeightItems" />

    <!-- text transform  -->
    <DropdownComponent label="Text Transform" :DropdownItems="TranformItems" />

    <!-- Text Style  -->
    <DropdownComponent label="Text Style" :DropdownItems="TextStyleItems" />

    <!-- Text Color  -->
    <TextColorComponent />

    <!-- Background Color  -->
    <TextColorComponent label="Background Color" />
    <!-- margin  -->
    <PaddingMarginComponent label="Margin" />

    <!-- Padding  -->
    <PaddingMarginComponent label="Padding" />
    <!-- Border  -->
    <PaddingMarginComponent label="Border" />

    <!-- Border radius  -->
    <PaddingMarginComponent label="Border radius" />

    <!-- main div end  -->
  </div>
</template>
