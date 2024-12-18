<!-- <script setup>
import laptopImage from '@/assets/images/laptop.webp';
defineProps({
  ImageURL: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <img :src="laptopImage" class="w-52 object-contain" alt="img" />
  </div>
</template> -->
<script setup>
defineProps({
  ImageURL: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <img :src="ImageURL" class="w-52 object-contain" alt="UI/UX Representations" />
  </div>
</template>
