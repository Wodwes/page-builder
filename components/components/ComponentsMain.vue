<script setup>
import Accordion from './Accordion.vue';
import Card from './Card.vue';

const ComponentsDropdown = ref(false);
const showAccordion = ref(false);
const showCard = ref(false);

const ComponentsToggle = () => {
  ComponentsDropdown.value = !ComponentsDropdown.value;
};
const toggleAccordion = () => {
  showAccordion.value = !showAccordion.value;
};
const togglecard = () => {
  showCard.value = !showCard.value;
};
</script>
<template>
  <div class="relative">
    <!-- Dropdown Toggle Button -->
    <button class="w-full rounded-md border border-gray-300 bg-white p-3 text-left font-semibold text-gray-500 shadow-sm transition-colors duration-300 hover:bg-gray-50 hover:text-green-400 focus:outline-none" @click="ComponentsToggle">Components</button>

    <!-- Dropdown Content -->
    <div v-if="ComponentsDropdown" class="mt-2 grid w-full grid-cols-1 items-center justify-between gap-2 rounded-md border border-gray-300 bg-white p-2 shadow-lg">
      <!-- Pargraph -->
      <div @click="toggleAccordion" class="rounded-md border p-2 text-center text-sm font-semibold text-gray-500 transition-colors duration-300 hover:text-green-400">
        <button>Accordion</button>
        <!-- Accordion Component -->
        <div v-if="showAccordion" class="mt-2">
          <!-- <Accordion /> -->
        </div>
      </div>
      <!-- Card Component  -->
      <div @click="togglecard" class="rounded-md border p-2 text-center text-base font-semibold text-gray-500 transition-colors duration-300 hover:text-green-400">
        <button>Card</button>
        <!-- Accordion Component -->
        <div v-if="showCard" class="mt-2">
          <!-- <Card title="Card Title" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu." buttonText="Learn More" /> -->
        </div>
      </div>
    </div>
  </div>
</template>
