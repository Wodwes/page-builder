<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import SidebarMain from '~/components/SidebarMain.vue';
useSeoMeta({
  title: 'Page Builder | Wodwes',
});

// State for toggling sidebar visibility
const isSidebarVisible = ref(true);

// Toggle sidebar function
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
const isOpen = ref(false);
</script>

<template>
  <div class="flex h-auto min-h-screen">
    <!-- Sidebar -->
    <div v-if="isSidebarVisible" class="hidden w-64 flex-col border-r border-gray-500 md:flex">
      <div class="flex h-16 items-center justify-center border-b border-gray-500">
        <span class="text-center leading-4">
          <span class="text-primary font-bold tracking-widest uppercase">Wodwes</span>
          <br />
          <span class="text-xs">Page Builder</span>
        </span>
      </div>
      <SidebarMain />
    </div>

    <!-- Mobile Sidebar (Slideover from the left) -->
    <div class="block md:hidden">
      <USlideover v-model="isOpen" prevent-close>
        <UCard class="relative left-0 flex flex-1 flex-col" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100  ' }">
          <template #header>
            <div class="flex items-end justify-end">
              <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1 border-gray-500" @click="isOpen = false" />
            </div>
            <SidebarMain />
          </template>
        </UCard>
      </USlideover>
    </div>

    <!-- Main Layout -->
    <div class="flex flex-1 flex-col overflow-y-auto">
      <!-- Top Navigation -->
      <div class="sticky top-0 z-10 flex min-h-16 items-center justify-between border-b border-gray-500 max-md:shadow-sm dark:bg-[#0F172A]">
        <div class="flex items-center px-4">
          <button @click="toggleSidebar" class="z-10 hidden text-gray-500 focus:text-gray-700 focus:outline-none md:block">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div class="block md:hidden">
            <UButton icon="lucide:align-justify" size="sm" class="bg-white text-gray-500" variant="outline" :trailing="false" @click="isOpen = true" />
          </div>
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
        <div class="border-gray-00 hidden h-auto min-h-screen w-80 border-l md:max-w-80 lg:flex">
          <!-- <RightSidebar /> -->
        </div>
      </div>
    </div>
  </div>
</template>
