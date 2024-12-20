<script setup>
import { ref } from 'vue';

defineProps({
  message: {
    type: String,
    required: true,
    default: 'This is an alert message!',
  },
  description: {
    type: String,
    default: 'I am a description. Click the edit button to change this text.',
  },
  type: {
    type: String,
    default: 'success',
  },
  dismissible: {
    type: Boolean,
    default: true,
  },
});

const isVisible = ref(true);

// Dynamic classes based on the alert type
const alertClasses = {
  info: 'bg-blue-100 text-blue-700 border-blue-500',
  success: 'bg-green-100 text-green-700 border-green-500',
  warning: 'bg-yellow-100 text-yellow-700 border-yellow-500',
  error: 'bg-red-100 text-red-700 border-red-500',
};

// Close the alert
const closeAlert = () => {
  isVisible.value = false;
};
</script>

<template>
  <div v-if="isVisible" :class="`relative flex flex-col gap-2 border-l-4 p-4 ${alertClasses[type]}`">
    <!-- Alert Content -->
    <div class="flex items-center gap-2">
      <!-- Alert Icon -->
      <!-- <span class="text-xl">
        <template v-if="type === 'success'">✅</template>
        <template v-else-if="type === 'error'">❌</template>
        <template v-else-if="type === 'warning'">⚠️</template>
        <template v-else>ℹ️</template>
      </span> -->

      <!-- Alert Message -->
      <p class="flex-grow text-lg font-semibold">{{ message }}</p>

      <!-- Close Button -->
      <button v-if="dismissible" @click="closeAlert" class="text-lg font-bold leading-none text-gray-500 hover:text-gray-700 focus:outline-none">&times;</button>
    </div>

    <!-- Alert Description -->
    <p v-if="description" class="text-xs text-gray-600">{{ description }}</p>
  </div>
</template>

<style scoped>
/* Optional: Add animations or additional styles if needed */
</style>
