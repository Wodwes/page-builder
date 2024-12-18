<script setup>
import Accordion from '~/components/components/Accordion.vue';
import Card from '~/components/components/Card.vue';
import ImageComponent from '~/components/components/ImageComponent.vue';
// definePageMeta({
//   layout: 'MainLayout',
// });
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <!-- <Card title="Card Title" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu." buttonText="Learn More" /> -->
    <!-- <Accordion /> -->
    <ImageComponent ImageURL="https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?t=st=1734505442~exp=1734509042~hmac=056e0809acfab279e0b9fa4c5ceede086df3e334ea2341274d41c957450c1db3&w=740" />
  </div>
</template>
