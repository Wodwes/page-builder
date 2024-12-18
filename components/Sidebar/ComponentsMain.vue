<script setup>
import { ref } from 'vue';
import Accordion from '../components/Accordion.vue';
import ButtonComponent from '../components/ButtonComponent.vue';
import Card from '../components/Card.vue';
import ImageComponent from '../components/ImageComponent.vue';
import { Icon } from '@iconify/vue';
import VideoComponent from '../components/VideoComponent.vue';
import DividerComponent from '../components/DividerComponent.vue';
import IconComponent from '../components/IconComponent.vue';
import CarouselComponent from '../components/CarouselComponent .vue';
import FormComponent from '../components/FormComponent.vue';

const ComponentsDropdown = ref(false);

// Store components and their respective states in an array
const components = ref([
  {
    name: 'Accordion',
    component: Accordion,
    icon: 'tabler:section',
    show: ref(false),
  },
  {
    name: 'Card',
    component: Card,
    icon: 'material-symbols-light:id-card-outline-sharp',
    show: ref(false),
    props: {
      title: 'Card Title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu.',
      buttonText: 'Learn More',
    },
  },
  {
    name: 'Button',
    component: ButtonComponent,
    icon: 'mdi:button-pointer',
    show: ref(false),
  },
  {
    name: 'Image',
    component: ImageComponent,
    icon: 'material-symbols-light:image-outline-sharp',
    show: ref(false),
    props: {
      ImageURL: 'https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?t=st=1734505442~exp=1734509042~hmac=056e0809acfab279e0b9fa4c5ceede086df3e334ea2341274d41c957450c1db3&w=740',
    },
  },
  {
    name: 'Video',
    component: VideoComponent,
    icon: 'octicon:video-24',
    show: ref(false),
    props: {
      videoURL: 'https://www.youtube.com/watch?v=dCxSsr5xuL8',
      posterImage: 'https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?t=st=1734505442~exp=1734509042~hmac=056e0809acfab279e0b9fa4c5ceede086df3e334ea2341274d41c957450c1db3&w=740',
    },
  },
  {
    name: 'Divider',
    component: DividerComponent,
    icon: 'tdesign:component-divider-vertical',
    show: ref(false),
    props: {
      height: 'h-px',
      width: 'w-full',
      color: 'bg-gray-500',
      margin: 'my-4',
    },
  },
  {
    name: 'Icon',
    component: IconComponent,
    icon: 'mdi:star-circle-outline',
    show: ref(false),
    props: {
      icon: 'material-symbols-light:star',
      height: '50',
      width: '50',
      styleClasses: 'text-red-500',
    },
  },
  {
    name: 'Form',
    component: FormComponent,
    icon: 'fluent:form-28-regular',
    show: ref(false),
    props: {
      FormTitle: 'Form',
    },
  },
]);

// Toggle function for components
const toggleComponent = (index) => {
  components.value[index].show = !components.value[index].show;
};

const ComponentsToggle = () => {
  ComponentsDropdown.value = !ComponentsDropdown.value;
};
</script>

<template>
  <div class="relative">
    <!-- Dropdown Toggle Button -->
    <button class="w-full rounded-md border border-gray-300 bg-white p-3 text-left font-semibold text-gray-500 shadow-sm transition-colors duration-300 hover:bg-gray-50 hover:text-green-400 focus:outline-none" @click="ComponentsToggle">Components</button>

    <!-- Dropdown Content -->
    <div v-if="ComponentsDropdown" class="mt-2 grid w-full grid-cols-1 items-center justify-between gap-2 rounded-md border border-gray-300 bg-white p-2 shadow-lg">
      <!-- Loop through components -->
      <div v-for="(component, index) in components" :key="component.name" @click="toggleComponent(index)" class="rounded-md border p-2 text-start text-base font-semibold text-gray-500 transition-colors duration-300 hover:text-green-400">
        <div class="flex flex-row items-center gap-2">
          <Icon :icon="component.icon" width="30" height="30" :ssr="true" />
          <span>{{ component.name }}</span>
        </div>
        <div v-if="component.show" class="mt-2">
          <component :is="component.component" v-bind="component.props" />
        </div>
      </div>
    </div>
  </div>
</template>
