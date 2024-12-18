<script setup>
import Accordion from '../components/Accordion.vue';
import ButtonComponent from '../components/ButtonComponent.vue';
import Card from '../components/Card.vue';
import ImageComponent from '../components/ImageComponent.vue';
import { Icon } from '@iconify/vue';
import VideoComponent from '../components/VideoComponent.vue';

const ComponentsDropdown = ref(false);
const showAccordion = ref(false);
const showCard = ref(false);
const showButton = ref(false);
const showVideo = ref(false);

const ComponentsToggle = () => {
  ComponentsDropdown.value = !ComponentsDropdown.value;
};
const toggleAccordion = () => {
  showAccordion.value = !showAccordion.value;
};
const togglecard = () => {
  showCard.value = !showCard.value;
};
const toggleButton = () => {
  showButton.value = !showButton.value;
};
const toggleVideo = () => {
  showVideo.value = !showVideo.value;
};
</script>
<template>
  <div class="relative">
    <!-- Dropdown Toggle Button -->
    <button class="w-full rounded-md border border-gray-300 bg-white p-3 text-left font-semibold text-gray-500 shadow-sm transition-colors duration-300 hover:bg-gray-50 hover:text-green-400 focus:outline-none" @click="ComponentsToggle">Components</button>

    <!-- Dropdown Content -->
    <div v-if="ComponentsDropdown" class="mt-2 grid w-full grid-cols-1 items-center justify-between gap-2 rounded-md border border-gray-300 bg-white p-2 shadow-lg">
      <!-- Pargraph -->
      <div @click="toggleAccordion" class="rounded-md border p-2 text-start text-sm font-semibold text-gray-500 transition-colors duration-300 hover:text-green-400">
        <div class="flex flex-row items-center gap-2">
          <Icon icon="tabler:section" :ssr="true" width="30" height="30" />
          <span>Accordion</span>
        </div>
        <div v-if="showAccordion" class="mt-2">
          <Accordion />
        </div>
      </div>
      <!-- Card Component  -->
      <div @click="togglecard" class="rounded-md border p-2 text-start text-base font-semibold text-gray-500 transition-colors duration-300 hover:text-green-400">
        <div class="flex flex-row items-center gap-2">
          <Icon icon="material-symbols-light:id-card-outline-sharp" width="24" height="24" :ssr="true" />
          <span>Card</span>
        </div>
        <div v-if="showCard" class="mt-2">
          <Card title="Card Title" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu." buttonText="Learn More" />
        </div>
      </div>
      <!-- Button Component -->
      <div @click="toggleButton" class="rounded-md border p-2 text-start text-base font-semibold text-gray-500 transition-colors duration-300 hover:text-green-400">
        <div class="flex flex-row items-center gap-2">
          <Icon icon="mdi:button-pointer" width="24" height="24" :ssr="true" />
          <span>Button</span>
        </div>
        <div v-if="showButton" class="mt-2">
          <ButtonComponent />
        </div>
      </div>
      <!-- image component  -->
      <div @click="toggleButton" class="rounded-md border p-2 text-start text-base font-semibold text-gray-500 transition-colors duration-300 hover:text-green-400">
        <div class="flex flex-row items-center gap-2">
          <Icon icon="material-symbols-light:image-outline-sharp" width="24" height="24" :ssr="true" />
          <span>Image</span>
        </div>
        <div v-if="showButton" class="mt-2">
          <ImageComponent ImageURL="https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?t=st=1734505442~exp=1734509042~hmac=056e0809acfab279e0b9fa4c5ceede086df3e334ea2341274d41c957450c1db3&w=740" />
        </div>
      </div>

      <!-- video component  -->
      <div @click="toggleVideo" class="rounded-md border p-2 text-start text-base font-semibold text-gray-500 transition-colors duration-300 hover:text-green-400">
        <div class="flex flex-row items-center gap-2">
          <Icon icon="material-symbols-light:image-outline-sharp" width="24" height="24" :ssr="true" />
          <span>Video</span>
        </div>
        <div v-if="showVideo" class="mt-2">
          <VideoComponent videoURL="https://www.youtube.com/watch?v=dCxSsr5xuL8" posterImage="https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?t=st=1734505442~exp=1734509042~hmac=056e0809acfab279e0b9fa4c5ceede086df3e334ea2341274d41c957450c1db3&w=740" />
        </div>
      </div>
    </div>
  </div>
</template>

<!-- posterImage="https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?t=st=1734505442~exp=1734509042~hmac=056e0809acfab279e0b9fa4c5ceede086df3e334ea2341274d41c957450c1db3&w=740"  -->
