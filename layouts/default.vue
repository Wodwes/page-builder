<script setup>
useSeoMeta({ title: 'Page Builder | Wodwes' });
const { state } = useApp();
</script>

<template>
  <nav class="relative flex h-[64px] w-full items-center justify-between self-center border-b pr-8 pl-4">
    <div class="flex items-center gap-4">
      <UButton @click="state.showSidebar = !state.showSidebar" icon="i-quill:hamburger-sidebar" size="md" color="primary" variant="soft" class="hiddenmd:block cursor-pointer p-1" :ui="{ leadingIcon: 'size-6' }" />
      <div class="text-lg text-gray-700">Page builder</div>
    </div>

    <div class="flex items-center gap-4">
      <UAvatar icon="i-lucide-image" size="xl" />
    </div>
  </nav>
  <main class="grid grid-cols-[auto_1fr_auto]">
    <div class="relative z-10 h-[calc(100vh-66px)] border-r bg-white duration-200" :class="state.showSidebar ? 'w-[260px]' : 'w-0 overflow-hidden opacity-0'">
      <Sidebar />
    </div>
    <div class="h-[calc(100vh-71px)] w-full overflow-auto">
      <slot />
    </div>
    <div class="relative z-10 h-[calc(100vh-66px)] border-l bg-white p-2 duration-200" :class="state.showCustomizer ? 'w-[260px]' : 'w-0 overflow-hidden opacity-0'">
      <!-- customizer tab -->
      <Customizer />
    </div>
  </main>
</template>
