<script setup>
import { useStorage } from '@vueuse/core';

useSeoMeta({ title: 'Page Builder | Wodwes' });

// State for toggling sidebar visibility
const showSidebar = useStorage('persisted-sidebar', true);

console.log(useApp());
</script>

<template>
  <nav class="relative flex h-[64px] w-full items-center justify-between self-center border-b pr-8 pl-4">
    <div class="flex items-center gap-4">
      <UButton @click="showSidebar = !showSidebar" icon="i-quill:hamburger-sidebar" size="md" color="primary" variant="soft" class="hiddenmd:block cursor-pointer p-1" :ui="{ leadingIcon: 'size-6' }" />
      <div class="text-lg text-gray-700">Page builder</div>
    </div>

    <div class="flex items-center gap-4">
      <UAvatar icon="i-lucide-image" size="xl" />
    </div>
  </nav>
  <main class="flex">
    <ClientOnly>
      <div class="relative z-10 h-[calc(100vh-66px)] shrink-0 border-r bg-white pr-0.5 duration-200" :class="showSidebar ? 'w-[320px]' : 'w-0 overflow-hidden opacity-0'">
        <!-- <SideBar /> -->
      </div>
    </ClientOnly>
    <div class="h-[calc(100vh-71px)] w-full overflow-auto">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores dolorem eius sint, temporibus earum quasi? Voluptate hic impedit porro qui odio, amet enim odit mollitia praesentium ratione! Dolor, hic debitis.
      <slot class="p-4" />
    </div>
  </main>
</template>
