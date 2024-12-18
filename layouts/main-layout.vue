<script setup>
import Accordion from './Accordion.vue';
import Card from './Card.vue';
import ButtonComponent from './ButtonComponent.vue';

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
        <!-- Accordion Component -->
        <div v-if="showAccordion" class="mt-2">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
