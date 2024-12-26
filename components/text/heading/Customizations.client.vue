<template>
  <Teleport to="#teleports">
    <div class="flex gap-2">
      <USelect v-model="data.level" :items="items" :ui="ui" placeholder="Heading" class="mb-2 w-full" />
      <USelect v-model="data.size" :items="sizes" :ui="ui" placeholder="Size" class="mb-2 w-full" />
    </div>
    <UInput v-model="data.text" class="w-full" placeholder="Text" />
  </Teleport>
</template>

<script setup>
defineProps(['data']);

const ui = { trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200' };

const items = [
  { label: 'H1', value: 1 },
  { label: 'H2', value: 2 },
  { label: 'H3', value: 3 },
  { label: 'H4', value: 4 },
  { label: 'H5', value: 5 },
  { label: 'H6', value: 6 },
];

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
</script>
