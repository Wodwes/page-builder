<script setup>
import { Icon } from '@iconify/vue';
import FontSize from '~/components/Reusable/FontSize.vue';
import LineHeight from '~/components/Reusable/LineHeight.vue';
import PaddingMarginComponent from '~/components/Reusable/PaddingMarginComponent.vue';
import TextColorComponent from '~/components/Reusable/TextColorComponent.vue';
import LinkComponent from '../AccordionStyle/LinkComponent.vue';
import HeadingText from '~/components/Reusable/HeadingText.vue';
import DropdownComponent from '~/components/Reusable/DropdownComponent.vue';
import ButtonText from '~/components/Reusable/ButtonText.vue';
import ToggleButtonComponent from '~/components/Reusable/ToggleButtonComponent.vue';
import UploadIcon from '~/components/Reusable/UploadIcon.vue';

const alertType = [[{ label: 'Info' }, { label: 'Success' }, { label: 'Warning' }, { label: 'Danger' }]];
defineShortcuts({ o: () => (open.value = !open.value) });
// dfaas
const FontWeightItems = [[{ label: '100 (Thin)' }, { label: '200 (extralight)' }, { label: '300 (light)' }, { label: '400 (normal)' }, { label: '500 (medium)' }, { label: '600 (semibold)' }, { label: '700 (bold)' }, { label: '800 (extrabold)' }, { label: '900 (black)' }]];

const fontFamily = [[{ label: 'Roboto' }, { label: 'Open Sans' }, { label: 'Poppins' }, { label: 'Inter' }, { label: 'Lato' }, { label: 'Merriweather' }, { label: 'Playfair Display' }, { label: 'Source Code Pro' }, { label: 'Courier New' }, { label: 'Georgia' }]];

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
    <h1 class="mb-2 text-sm font-bold text-gray-800">Alert</h1>

    <!-- Alert text section  -->
    <ButtonText label="Alert Title" />

    <!-- Content section  -->
    <HeadingText label="Content" />
    <!-- alert type section  -->
    <DropdownComponent label="Alert Type" :DropdownItems="alertType" />

    <!-- Dismiss toggle button  -->
    <ToggleButtonComponent label="Dismiss Icon" />
    <!-- Icon Section -->
    <UploadIcon />
    <!-- Font Family section  -->
    <DropdownComponent label="Font Family" :DropdownItems="Fontitems" />
    <!-- Font Weight  -->
    <DropdownComponent label="Font Weight" :DropdownItems="FontWeightItems" />
    <!-- Text Color  -->
    <TextColorComponent label="Text Color" />
    <!-- bg Color  -->
    <TextColorComponent label="BackGround Color" />
    <!-- margin  -->
    <PaddingMarginComponent label="Margin" />

    <!-- Padding  -->
    <PaddingMarginComponent label="Padding" />
    <!-- Border  -->
    <PaddingMarginComponent label="Border" />

    <!-- Border radius  -->
    <PaddingMarginComponent label="Border radius" />

    <!-- a
    a
    a
    a
    a
    a
    a -->

    <!-- Link Section -->
    <LinkComponent label="Link" />
    <!-- Font Size  -->
    <FontSize />

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

    <!-- main div end  -->
  </div>
</template>
