<script setup>
import Accordion from '~/components/components/Accordion.vue';
import Card from '~/components/components/Card.vue';
import CarouselComponent from '~/components/components/CarouselComponent .vue';
import DividerComponent from '~/components/components/DividerComponent.vue';
import IconComponent from '~/components/components/IconComponent.vue';
import ImageComponent from '~/components/components/ImageComponent.vue';
import VideoComponent from '~/components/components/VideoComponent.vue';
const formData = ref({
  name: '',
  email: '',
});
import { ref } from 'vue';
import FormComponent from '~/components/components/FormComponent.vue';

// definePageMeta({
//   layout: 'MainLayout',
// });
const carouselItems = ['https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Slide+1', 'https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Slide+2', 'https://via.placeholder.com/600x300/5733FF/FFFFFF?text=Slide+3'];
</script>

<template>
  <div class="flex h-auto w-full flex-col gap-4">
    <!-- <FormComponent v-model="formData.name" label="Full Name" name="name" placeholder="Enter your full name" customClass="border-gray-400 p-2" /> -->
  </div>
</template>
