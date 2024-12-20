<script setup>
defineProps({
  label: {
    type: String,
    default: 'undefined',
    required: true,
  },
  DropdownItems: {
    type: Array,
    default: () => [],
  },
});
const Dropdown = ref(false);
</script>
<template>
  <!-- text transform  -->
  <div class="flex w-full flex-row items-center justify-between gap-6 border-b py-2">
    <p class="text-xs text-gray-500">{{ label }}</p>
    <div class="flex flex-row items-center justify-end rounded-md border">
      <UDropdown v-model:open="Dropdown" :items="DropdownItems" :popper="{ placement: 'bottom-start' }">
        <UButton color="white" label="Default" trailing-icon="i-heroicons-chevron-down-20-solid" class="text-xs text-gray-500" />
        <template #item="{ item }">
          <div class="cursor-pointer px-3 py-1 text-xs hover:bg-gray-100">
            {{ item.label }}
          </div>
        </template>
      </UDropdown>
    </div>
  </div>
</template>
