<script setup>
import ToggleButtonComponent from '~/components/Reusable/ToggleButtonComponent.vue';
import LinkComponent from '../AccordionStyle/LinkComponent.vue';
import DropdownComponent from '~/components/Reusable/DropdownComponent.vue';
import PaddingMarginComponent from '~/components/Reusable/PaddingMarginComponent.vue';
const Items = [[{ label: '1:1' }, { label: '3:2' }, { label: '4:3' }, { label: '16:9' }, { label: '21:9' }, { label: '9:16' }]];
</script>
<template>
  <div class="overflow-hidden p-4">
    <h1 class="mb-2 text-sm font-bold text-gray-800">Video</h1>
    <!-- video Link  -->
    <LinkComponent label="Video link" />
    <!-- label  -->
    <h1 class="mt-1 text-sm font-bold text-gray-800">Video options</h1>
    <!-- Auto Play  -->
    <!-- <input type="checkbox" id="autoPlay" /> -->
    <ToggleButtonComponent label="AutoPlay" />
    <!-- AutoPlay On Mobile -->
    <ToggleButtonComponent label="AutoPlay On Mobile" />
    <!-- Mute -->
    <ToggleButtonComponent label="Mute" />
    <!-- Loop -->
    <ToggleButtonComponent label="Loop" />
    <!-- Player Control -->
    <ToggleButtonComponent label="Player Control" />
    <!-- Aspect ratio Dropdown Component -->
    <DropdownComponent label="Aspect ratio" :DropdownItems="Items" />
    <!-- padding  -->
    <PaddingMarginComponent label="Padding" />
    <!-- Marging  -->
    <PaddingMarginComponent label="Marging" />
    <!-- Border  -->
    <PaddingMarginComponent label="Border" />
    <!-- Border Radius  -->
    <PaddingMarginComponent label="Border Radius" />
  </div>
</template>
