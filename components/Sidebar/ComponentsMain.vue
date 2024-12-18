<script setup>
import Accordion from '../components/Accordion.vue';
import ButtonComponent from '../components/ButtonComponent.vue';
import Card from '../components/Card.vue';
import ImageComponent from '../components/ImageComponent.vue';

const ComponentsDropdown = ref(false);
const showAccordion = ref(false);
const showCard = ref(false);
const showButton = ref(false);

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
</script>
<template>
  <div class="relative">
    <!-- Dropdown Toggle Button -->
    <button class="w-full rounded-md border border-gray-300 bg-white p-3 text-left font-semibold text-gray-500 shadow-sm transition-colors duration-300 hover:bg-gray-50 hover:text-green-400 focus:outline-none" @click="ComponentsToggle">Components</button>

    <!-- Dropdown Content -->
    <div v-if="ComponentsDropdown" class="mt-2 grid w-full grid-cols-1 items-center justify-between gap-2 rounded-md border border-gray-300 bg-white p-2 shadow-lg">
      <!-- Pargraph -->
      <div @click="toggleAccordion" class="rounded-md border p-2 text-start text-sm font-semibold text-gray-500 transition-colors duration-300 hover:text-green-400">
        <button>Accordion</button>
        <div v-if="showAccordion" class="mt-2">
          <Accordion />
        </div>
      </div>
      <!-- Card Component  -->
      <div @click="togglecard" class="rounded-md border p-2 text-start text-base font-semibold text-gray-500 transition-colors duration-300 hover:text-green-400">
        <button>Card</button>
        <div v-if="showCard" class="mt-2">
          <Card title="Card Title" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu." buttonText="Learn More" />
        </div>
      </div>
      <!-- Button Component -->
      <div @click="toggleButton" class="rounded-md border p-2 text-start text-base font-semibold text-gray-500 transition-colors duration-300 hover:text-green-400">
        <button>Button</button>
        <div v-if="showButton" class="mt-2">
          <ButtonComponent />
        </div>
      </div>
      <!-- image component  -->
      <div @click="toggleButton" class="rounded-md border p-2 text-start text-base font-semibold text-gray-500 transition-colors duration-300 hover:text-green-400">
        <button>Image</button>
        <!-- Accordion Component -->
        <div v-if="showButton" class="mt-2">
          <ImageComponent ImageURL="https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?t=st=1734505442~exp=1734509042~hmac=056e0809acfab279e0b9fa4c5ceede086df3e334ea2341274d41c957450c1db3&w=740" />
        </div>
      </div>
    </div>
  </div>
</template>
