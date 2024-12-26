<script setup>
import { ref } from 'vue';

// Reactive list of image URLs
const images = ref([
  { src: 'https://picsum.photos/300/200?random=1', alt: 'Image 1' },
  { src: 'https://picsum.photos/300/200?random=2', alt: 'Image 2' },
  { src: 'https://picsum.photos/300/200?random=3', alt: 'Image 3' },
  { src: 'https://picsum.photos/300/200?random=4', alt: 'Image 4' },
  { src: 'https://picsum.photos/300/200?random=5', alt: 'Image 5' },
  { src: 'https://picsum.photos/300/200?random=6', alt: 'Image 6' },
]);
</script>

<template>
  <div class="text-primary w-full rounded-md border bg-white p-4">
    <div class="container mx-auto p-4">
      <h1 class="mb-6 text-center text-2xl font-bold">Gallery</h1>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div v-for="(image, index) in images" :key="index" class="relative overflow-hidden rounded-lg shadow-md">
          <img :src="image.src" :alt="image.alt" class="h-auto w-full object-cover transition-transform duration-300 hover:scale-105" />
        </div>
      </div>
    </div>
  </div>
</template>
