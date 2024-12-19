<script setup>
import { ref, onMounted, watch } from 'vue';

// Define props
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  height: {
    type: String,
    default: '400px', // default height
  },
  width: {
    type: String,
    default: '100%', // default width
  },
  showControls: {
    type: Boolean,
    default: true, // Default to showing controls
  },
  autoplay: {
    type: Boolean,
    default: false, // Default to no autoplay
  },
  interval: {
    type: Number,
    default: 3000, // Default interval is 3 seconds
  },
});

// State to track the current slide
const currentIndex = ref(0);

// Auto-play functionality
let autoplayTimer;

onMounted(() => {
  if (props.autoplay) {
    startAutoplay();
  }
});

// Watch for changes in the autoplay prop to start or stop
watch(
  () => props.autoplay,
  (newVal) => {
    if (newVal) {
      startAutoplay();
    } else {
      clearInterval(autoplayTimer);
    }
  }
);

// Function to start autoplay
const startAutoplay = () => {
  autoplayTimer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.items.length;
  }, props.interval);
};

// Functions to change slides
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.items.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.items.length) % props.items.length;
};

// Function to jump to a specific slide
const goToSlide = (index) => {
  currentIndex.value = index;
};
</script>

<template>
  <div :style="{ height: props.height, width: props.width }" class="relative overflow-hidden">
    <!-- Carousel Items -->
    <div :style="{ transform: `translateX(-${currentIndex.value * 100}%)` }" class="flex transition-transform duration-500 ease-in-out">
      <div v-for="(item, index) in props.items" :key="index" class="h-full w-full flex-shrink-0">
        <!-- Displaying item content (could be image, text, etc.) -->
        <div class="flex h-full w-full items-center justify-center">
          <img v-if="typeof item === 'string'" :src="item" alt="carousel item" class="h-full w-full object-cover" />
          <div v-else-if="typeof item === 'object'" :style="{ backgroundColor: item.color }" class="flex h-full w-full items-center justify-center text-3xl text-white">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>

    <!-- Custom Controls -->
    <div v-if="props.showControls" class="absolute top-1/2 flex w-full -translate-y-1/2 transform justify-between px-4">
      <!-- Previous Button -->
      <button @click="prevSlide" class="rounded-full bg-gray-500 p-2 text-white">Prev</button>

      <!-- Next Button -->
      <button @click="nextSlide" class="rounded-full bg-gray-500 p-2 text-white">Next</button>
    </div>

    <!-- Dots Navigation -->
    <div v-if="props.showControls" class="absolute bottom-4 flex w-full justify-center gap-2">
      <span v-for="(item, index) in props.items" :key="index" @click="goToSlide(index)" class="h-3 w-3 cursor-pointer rounded-full bg-white" :class="{ 'bg-gray-800': currentIndex.value === index }"></span>
    </div>
  </div>
</template>

<style scoped>
/* Add custom styles if needed */
</style>
