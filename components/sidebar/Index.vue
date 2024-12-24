<script setup>
import { ref } from 'vue';

// Tracks the currently open dropdown
const activeDropdown = ref(true);

const toggleDropdown = (section) => {
  activeDropdown.value = activeDropdown.value === section ? null : section;
};
</script>

<template>
  <div class="h-auto space-y-2 border-b border-gray-500 px-4 py-2">
    <!-- Components Section -->
    <div class="b rounded-md border border-gray-500 text-sm text-gray-500 transition-all duration-300 ease-in-out">
      <div class="group flex cursor-pointer flex-row items-center gap-1 p-2" @click="toggleDropdown('Components')">
        <UIcon name="material-symbols:library-books-outline" class="h-5 w-5 text-gray-400 transition-all duration-300 ease-in-out group-hover:text-gray-700" />
        <h1 class="text-sm font-medium transition-all duration-300 ease-in-out group-hover:text-green-400">Components</h1>
      </div>

      <!-- Show components when 'Components' is active -->
      <div v-if="activeDropdown === 'Components'" class="flex flex-col gap-2 rounded p-3 text-gray-600">
        <!-- <HeadingMain />
        <Paragraph />
        <ComponentsMain /> -->
      </div>
    </div>

    <!-- Pages Section -->
    <div class="rounded-md border border-gray-500 text-sm text-gray-500 transition-all duration-300 ease-in-out">
      <div class="group flex cursor-pointer flex-row items-center gap-1 p-2" @click="toggleDropdown('Pages')">
        <UIcon name="material-symbols:library-books-outline" class="h-5 w-5 text-gray-500 transition-all duration-300 ease-in-out group-hover:text-gray-700" />
        <h1 class="text-sm font-medium transition-all duration-300 ease-in-out group-hover:text-green-400">Pages</h1>
      </div>
      <!-- Dropdown content for Pages -->
      <div v-if="activeDropdown === 'Pages'" class="mt-2 rounded p-3 text-gray-600">
        <p>Pages components</p>
      </div>
    </div>
    <!-- Settings Section -->
    <div class="rounded-md border border-gray-500 text-sm text-gray-500 transition-all duration-300 ease-in-out">
      <div class="group flex cursor-pointer flex-row items-center gap-1 p-2" @click="toggleDropdown('Settings')">
        <UIcon name="i-heroicons-cog-6-tooth" class="h-5 w-5 text-gray-400 transition-all duration-300 ease-in-out group-hover:text-gray-700" />
        <h1 class="text-sm font-medium transition-all duration-300 ease-in-out group-hover:text-green-400">Settings</h1>
      </div>
      <!-- Dropdown content for Pages -->
      <div v-if="activeDropdown === 'Settings'" class="mt-2 rounded p-3 text-gray-600">
        <p>Settings components</p>
      </div>
    </div>
  </div>

  <!-- Help Section -->
  <div class="mt-2 px-4">
    <div class="rounded-md border border-gray-500 text-sm text-gray-500 transition-all duration-300 ease-in-out">
      <div class="group flex cursor-pointer flex-row items-center gap-1 p-2" @click="toggleDropdown('Help')">
        <UIcon name="i-heroicons-question-mark-circle" class="h-5 w-5 text-gray-400 transition-all duration-300 ease-in-out group-hover:text-gray-700" />
        <h1 class="text-sm font-medium transition-all duration-300 ease-in-out group-hover:text-green-400">Help</h1>
      </div>
      <!-- Dropdown content for Help -->
      <div v-if="activeDropdown === 'Help'" class="mt-2 rounded p-3 text-gray-600">
        <p>Help components</p>
      </div>
    </div>
  </div>
</template>
