<script setup>
import { ref } from 'vue';

// Tracks the currently open dropdown
const activeDropdown = ref(true);

const toggleDropdown = (section) => {
  activeDropdown.value = activeDropdown.value === section ? null : section;
};

const items = [
  {
    label: 'Components',
    icon: 'i-material-symbols:library-books-outline',
    slot: 'components',
  },
  {
    label: 'Pages',
    icon: 'i-material-symbols:library-books-outline',
    slot: 'pages',
  },
  {
    label: 'Settings',
    icon: 'i-heroicons-cog-6-tooth',
    slot: 'settings',
  },
];
</script>

<template>
  <UAccordion :items="items">
    <template #colors="{ item }">
      <p class="pb-3.5 text-sm text-[var(--ui-primary)]">
        {{ item.content }}
      </p>
    </template>
  </UAccordion>

  <!-- <div class="h-auto space-y-2 border-b border-gray-500 px-4 py-2"> -->
  <!-- Components Section -->

  <!-- </div> -->
</template>
