<script setup lang="js">
import { ref } from 'vue';
definePageMeta({
  layout: 'main-layout',
});

// Define the accordion items
const items = [
  {
    label: 'Getting Started',
    icon: 'i-heroicons-information-circle',
    defaultOpen: true,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu.',
  },
  {
    label: 'Installation',
    icon: 'i-heroicons-arrow-down-tray',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu.',
  },
  {
    label: 'Theming',
    icon: 'i-heroicons-eye-dropper',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu.',
  },
  {
    label: 'Layouts',
    icon: 'i-heroicons-rectangle-group',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu.',
  },
  {
    label: 'Components',
    icon: 'i-heroicons-square-3-stack-3d',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu.',
  },
  {
    label: 'Utilities',
    icon: 'i-heroicons-wrench-screwdriver',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu.',
  },
];

// Track the currently open section
const openIndex = ref(items.findIndex((item) => item.defaultOpen) || null);

// Toggle function for sections
const toggleSection = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>

<template>
  <div class="space-y-2">
    <div v-for="(item, index) in items" :key="index" class="border-b last:border-b-0">
      <!-- Accordion Header -->
      <div class="flex items-center justify-between rounded-md bg-gray-100 p-4 transition-colors hover:bg-gray-200" :class="{ 'cursor-not-allowed text-gray-400': item.disabled }" :role="!item.disabled ? 'button' : null" :aria-expanded="openIndex === index" @click="!item.disabled && toggleSection(index)">
        <div class="flex items-center space-x-2">
          <span :class="item.icon" class="text-xl"></span>
          <span class="font-semibold text-gray-700">{{ item.label }}</span>
        </div>
        <span class="text-lg">
          <i :class="openIndex === index ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"></i>
        </span>
      </div>

      <!-- Accordion Content -->
      <div v-if="openIndex === index" class="rounded-b-md bg-gray-50 p-4 text-gray-600">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tailwind manages most styles; additional styling can go here if needed */
</style>
