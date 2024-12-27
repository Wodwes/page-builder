<template>
  <div class="mb-2 grid grid-cols-2 gap-2">
    <USelect v-model="data.size" :items="sizes" :ui="ui" placeholder="Size" class="w-full" />
    <USelect v-model="data.style" :items="styles" :ui="ui" placeholder="Style" class="w-full" />
  </div>

  <UInput v-model="data.text" class="w-full" placeholder="Text" />
</template>

<script setup>
defineProps(['data']);

const ui = { trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200' };

const sizes = [
  { label: 'Small', value: 'text-sm' },
  { label: 'Medium', value: 'text-base' },
  { label: 'Large', value: 'text-lg' },
  { label: 'Extra Large', value: 'text-xl' },
  { label: '2XL', value: 'text-2xl' },
  { label: '3XL', value: 'text-3xl' },
  { label: '4XL', value: 'text-4xl' },
  { label: '5XL', value: 'text-5xl' },
  { label: '6XL', value: 'text-6xl' },
  { label: '7XL', value: 'text-7xl' },
];

const styles = [
  { label: 'Normal', value: 'font-normal' },
  { label: 'Italic', value: 'italic' },
  { label: 'Bold', value: 'font-bold' },
  { label: 'Underline', value: 'underline' },
];
</script>
