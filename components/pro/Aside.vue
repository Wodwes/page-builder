<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';
import { ref } from 'vue';

// State for textarea value
const value = ref('');
</script>

<template>
  <UContainer class="mx-2 rounded-md border p-4">
    <div class="mmin-w-xl mx-auto p-4">
      <!-- Search Input -->
      <div class="mb-4">
        <UInput icon="i-lucide-search" color="neutral" size="md" variant="outline" placeholder="Search..." aria-label="Search" class="w-full" />
      </div>

      <!-- Button List -->
      <div class="my-4 flex min-w-xl flex-col items-center gap-2">
        <UButton icon="ion:book-outline" size="md" class="text-custom-gray hover:text-primary w-full" variant="ghost" aria-label="Documentation"> Documentation </UButton>
        <UButton icon="ic:round-bolt" size="md" class="text-custom-gray hover:text-primary w-full" variant="ghost" aria-label="Playground"> Playground </UButton>
        <UButton icon="solar:map-broken" size="md" class="text-custom-gray hover:text-primary w-full" variant="ghost" aria-label="Roadmap"> Roadmap </UButton>
        <UButton icon="heroicons:square-3-stack-3d" size="md" class="text-primary hover:text-primary w-full" variant="ghost" aria-label="Pro Features"> Pro </UButton>
        <UButton icon="heroicons:rocket-launch" size="md" class="text-custom-gray hover:text-primary w-full" variant="ghost" aria-label="Releases"> Releases </UButton>
      </div>

      <!-- Textarea -->
      <div class="mb-4 w-full border-b border-dashed pb-4">
        <UTextarea v-model="value" color="neutral" variant="outline" :rows="12" class="w-full" aria-label="User Input" />
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-center gap-2 py-2 text-center">
        <Icon icon="mdi-light:heart" width="24" height="24" aria-hidden="true" />
        <p class="text-sm">Learn how to contribute</p>
      </div>
    </div>
  </UContainer>
</template>
