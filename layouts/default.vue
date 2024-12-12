<template>
    <div class="flex h-screen dark:bg-[#0F172A]">
      <!-- sidebar -->
      <div class="hidden w-64 flex-col border-r md:flex dark:border-gray-800">
        <div class="flex h-16 items-center justify-center border-b dark:border-gray-800">
          <span class="text-center leading-4"><span class="text-primary font-bold uppercase tracking-widest">Wodwes</span> <br /><span class="text-xs">Page Builder</span></span>
        </div>
        <Sidebar />
      </div>
      <!-- Main layout -->
      <div class="flex flex-1 flex-col overflow-y-auto">
        <div class="border-gray-9 sticky top-0 z-10 flex min-h-16 items-center justify-between border-b bg-white max-md:shadow-sm dark:border-gray-800 dark:bg-[#0F172A]">
          <div class="flex items-center px-4">
            <button class="text-gray-500 focus:text-gray-700 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div class="flex items-center pr-4">
            <UAvatar icon="i-heroicons-photo" size="sm" />
          </div>
        </div>
        <div class="p-4">
          <!-- pages -->
          <slot />
        </div>
      </div>
    </div>
  </template>
  <script setup>
  useSeoMeta({
    title: 'Page Builder | Wodwes',
  });
  
  </script>