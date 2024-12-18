<script setup>
import { ref } from 'vue';
import RightSidebar from '../components/RightSidebar/RightSidebar.vue';

useSeoMeta({
  title: 'Page Builder | Wodwes',
});

// State for toggling sidebar visibility
const isSidebarVisible = ref(true);

// Toggle sidebar function
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
</script>

<template>
  <div class="flex h-auto min-h-screen">
    <!-- Sidebar -->
    <div v-if="isSidebarVisible" class="hidden w-64 flex-col border-r md:flex dark:border-gray-800">
      <div class="flex h-16 items-center justify-center border-b dark:border-gray-800">
        <span class="text-center leading-4">
          <span class="text-primary font-bold uppercase tracking-widest">Wodwes</span>
          <br />
          <span class="text-xs">Page Builder</span>
        </span>
      </div>
      <SidebarMain />
    </div>

    <!-- Main Layout -->
    <div class="flex flex-1 flex-col overflow-y-auto">
      <!-- Top Navigation -->
      <div class="max-md:shadow-sm sticky top-0 z-10 flex min-h-16 items-center justify-between border-b bg-white dark:border-gray-800 dark:bg-[#0F172A]">
        <div class="flex items-center px-4">
          <button @click="toggleSidebar" class="text-gray-500 focus:text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div class="flex items-center pr-4">
          <UAvatar icon="i-heroicons-photo" size="sm" />
        </div>
      </div>

      <!-- Page Content -->
      <div class="flex h-auto">
        <div class="w-full p-4">
          <slot />
        </div>
        <!-- Right Sidebar -->
        <div class="border-gray-9 hidden h-screen w-72 border-l md:max-w-72 lg:flex dark:bg-gray-900">
          <RightSidebar />
        </div>
      </div>
    </div>
  </div>
</template>
