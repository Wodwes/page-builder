<script setup>
import { ref } from 'vue';

// Reactive list of image objects
const images = ref([
  { src: 'https://picsum.photos/600/400?random=1', alt: 'Beautiful Landscape', title: 'Landscape 1' },
  { src: 'https://picsum.photos/600/400?random=2', alt: 'Mountain View', title: 'Landscape 2' },
  { src: 'https://picsum.photos/600/400?random=3', alt: 'Sunny Beach', title: 'Landscape 3' },
  { src: 'https://picsum.photos/600/400?random=4', alt: 'City Skyline', title: 'Landscape 4' },
  { src: 'https://picsum.photos/600/400?random=5', alt: 'Forest Path', title: 'Landscape 5' },
  { src: 'https://picsum.photos/600/400?random=6', alt: 'Desert Dunes', title: 'Landscape 6' },
]);

// Lightbox state
const selectedImage = ref(null);

// Open lightbox
const openLightbox = (image) => {
  selectedImage.value = image;
};

// Close lightbox
const closeLightbox = () => {
  selectedImage.value = null;
};
</script>

<template>
  <div class="rounded-md border bg-white p-8">
    <h1 class="mb-8 text-center text-3xl font-bold text-gray-800">Lightbox Gallery</h1>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Gallery Images -->
      <div v-for="(image, index) in images" :key="index" class="group relative overflow-hidden rounded-lg shadow-lg">
        <img :src="image.src" :alt="image.alt" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
        <div class="bg-opacity-50 absolute inset-0 flex items-center justify-center bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100" @click="openLightbox(image)">
          <p class="text-lg font-semibold text-white">{{ image.title }}</p>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="selectedImage" class="bg-opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div class="relative max-h-[90vh] max-w-[90vw]">
        <button @click="closeLightbox" class="absolute top-4 right-4 rounded-full bg-white p-2 text-black hover:bg-gray-200">Close</button>
        <img :src="selectedImage.src" :alt="selectedImage.alt" class="rounded-lg shadow-lg" />
        <p class="mt-4 text-center text-xl font-semibold text-white">
          {{ selectedImage.title }}
        </p>
      </div>
    </div>
  </div>
</template>
