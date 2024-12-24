<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';

const value = ref('');
</script>
<template>
  <div class="">
    <div class="">
      <UInput icon="i-lucide-search" color="neutral" size="md" variant="outline" placeholder="Search..." />
    </div>
    <div class="my-4 flex w-full flex-col items-center gap-0">
      <UButton icon="ion:book-outline" size="md" class="text-custom-gray hover:text-primary w-full" variant="ghost">Documentation</UButton>
      <UButton icon="ic:round-bolt" size="md" class="text-custom-gray hover:text-primary w-full" variant="ghost">Playground</UButton>
      <UButton icon="solar:map-broken" size="md" class="text-custom-gray hover:text-primary w-full" variant="ghost">Roadmap</UButton>
      <UButton icon="heroicons:square-3-stack-3d" size="md" class="text-primary hover:text-primary w-full" variant="ghost">Pro</UButton>
      <UButton icon="heroicons:rocket-launch" size="md" class="text-custom-gray hover:text-primary w-full" variant="ghost">Releases</UButton>
    </div>
    <div class="w-full border-b border-dashed border-gray-400 pb-4">
      <UTextarea color="neutral" variant="outline" :rows="12" class="w-full" />
    </div>
    <div class="flex flex-row items-center justify-center gap-2 py-2">
      <Icon icon="mdi-light:heart" width="24" height="24" />
      <p class="text-sm">Learn how to contribute</p>
    </div>
  </div>
</template>
<style></style>
