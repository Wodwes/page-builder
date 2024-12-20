<script setup>
import { Icon } from '@iconify/vue';
import FontSize from '~/components/Reusable/FontSize.vue';
import LineHeight from '~/components/Reusable/LineHeight.vue';
import PaddingMarginComponent from '~/components/Reusable/PaddingMarginComponent.vue';
import TextColorComponent from '~/components/Reusable/TextColorComponent.vue';
import LinkComponent from '../AccordionStyle/LinkComponent.vue';
import HeadingText from '~/components/Reusable/HeadingText.vue';
import DropdownComponent from '~/components/Reusable/DropdownComponent.vue';

defineShortcuts({ o: () => (open.value = !open.value) });
const FontWeightItems = [[{ label: '100 (Thin)' }, { label: '200 (extralight)' }, { label: '300 (light)' }, { label: '400 (normal)' }, { label: '500 (medium)' }, { label: '600 (semibold)' }, { label: '700 (bold)' }, { label: '800 (extrabold)' }, { label: '900 (black)' }]];

const Fontitems = [[{ label: 'Roboto' }, { label: 'Open Sans' }, { label: 'Poppins' }, { label: 'Inter' }, { label: 'Lato' }, { label: 'Merriweather' }, { label: 'Playfair Display' }, { label: 'Source Code Pro' }, { label: 'Courier New' }, { label: 'Georgia' }]];

const TranformItems = [[{ label: 'Uppercase' }, { label: 'Lowercase' }, { label: 'Capitalize' }, { label: 'Normal' }]];

const TextStyleItems = [[{ label: 'Normal' }, { label: 'Italic' }]];

const DecorationItems = [[{ label: 'Underline' }, { label: 'Overline' }, { label: 'Line Through' }, { label: 'None' }]];

// Define an array of alignment options
const alignments = [
  { icon: 'mingcute:align-left-line', label: 'Align Left' },
  { icon: 'mingcute:align-center-line', label: 'Align Center' },
  { icon: 'mingcute:align-right-line', label: 'Align Right' },
  { icon: 'mingcute:align-justify-line', label: 'Align Justify' },
];
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

    <!-- Heading Text section  -->
    <HeadingText />
    <!-- Link Section -->
    <LinkComponent label="Link" />
    <!-- Font Size  -->
    <FontSize />

    <!-- Font Family section  -->
    <DropdownComponent label="Font Family" :DropdownItems="Fontitems" />

    <!-- Font Weight  -->
    <DropdownComponent label="Font Weight" :DropdownItems="FontWeightItems" />

    <!-- text transform  -->
    <DropdownComponent label="text transform" :DropdownItems="TranformItems" />

    <!-- Text Style  -->

    <DropdownComponent label="Text Style" :DropdownItems="TextStyleItems" />

    <!-- Text Decoration  -->
    <DropdownComponent label="Text Decoration" :DropdownItems="DecorationItems" />

    <!-- Line Height  -->
    <LineHeight />
    <!-- Text Color  -->
    <TextColorComponent />
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
