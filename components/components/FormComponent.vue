<script setup>
import { ref } from 'vue';
defineProps({
  FormTitle: {
    type: String,
    default: 'Form',
  },
});

// Form Data
const formData = ref({
  name: '',
  email: '',
  message: '',
});

// Handle Form Submission
const handleSubmit = () => {
  // Emit the form data to the parent or handle submission logic
  console.log('Form Submitted:', formData.value);
  alert('Form submitted successfully!');

  // Clear the form after submission
  formData.value = {
    name: '',
    email: '',
    message: '',
  };
};
</script>
<template>
  <div class="mx-auto w-full rounded-md border border-gray-300 p-4 xl:max-w-xl">
    <h2 class="mb-4 text-xl font-semibold text-gray-700">Simple Form</h2>

    <form @submit.prevent="handleSubmit">
      <!-- Name Input -->
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" v-model="formData.name" class="mt-1 block w-full rounded-md border border-gray-300 p-2" required />
      </div>

      <!-- Email Input -->
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" v-model="formData.email" class="mt-1 block w-full rounded-md border border-gray-300 p-2" required />
      </div>

      <!-- Message Input -->
      <div class="mb-4">
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" v-model="formData.message" rows="4" class="mt-1 block w-full rounded-md border border-gray-300 p-2" required></textarea>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="w-full rounded-md bg-blue-500 p-2 text-white transition-colors hover:bg-blue-600">Submit</button>
    </form>
  </div>
</template>
