<script setup>
const formData = ref({
  name: '',
  email: '',
});
import { ref } from 'vue';
import AlertComponent from '~/components/components/AlertComponent.vue';
import FormComponent from '~/components/components/FormComponent.vue';
</script>

<template>
  <div class="flex h-auto w-full flex-col gap-4">
    <AlertComponent message="This is an Alert" Description="I am a description. Click the edit button to change this text." type="success" />
    <FormComponent v-model="formData.name" label="Full Name" name="name" placeholder="Enter your full name" customClass="border p-2" />
  </div>
</template>
