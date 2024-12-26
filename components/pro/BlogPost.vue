<script setup>
// Calculate the "time ago" value for a specific date
import { ref } from 'vue';

// Function to limit words
function limitWords(text, wordLimit = 10) {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + ' ...';
  }
  return text;
}

// Example content
const content = ref('Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque alias quasi veritatis vel saepe aliquam enim tempora sapiente dicta consectetur pariatur dolorem asperiores unde, libero provident eum odio ipsum?');

// Use the function to process the content
const truncatedContent = ref(limitWords(content.value, 20));
</script>

<template>
  <UContainer class="md:-mx-5">
    <div class="mx-2 rounded-md border p-4">
      <div class="items-between grid grid-cols-1 justify-center md:grid-cols-2 md:gap-4">
        <!-- Image section -->
        <div>
          <img src="/assets/images/laptop.webp" alt="Laptop" class="h-auto w-full overflow-hidden rounded-lg" />
        </div>

        <!-- Text section -->
        <div class="flex flex-col justify-between gap-2 py-4 md:gap-0">
          <UBadge color="primary" variant="outline" class="w-fit bg-green-100">Badge</UBadge>
          <h2 class="text-2xl font-bold">Nuxt 3.9</h2>
          <p class="text-gray-700">{{ truncatedContent }}</p>
          <div class="flex items-center space-x-2">
            <!-- Avatar -->
            <UAvatar src="https://github.com/benjamincanac.png" />
            <!-- Date and Time Ago -->
            <span class="text-gray-600">Dec 25, 2023</span>
          </div>
        </div>
      </div>
    </div>
  </UContainer>
</template>
