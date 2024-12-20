<script setup>
const LineHeightValidate = (event) => {
  const input = event.target;
  const value = parseInt(input.value, 10);

  // Enforce min and max values
  if (value < 0) {
    input.value = 0;
  } else if (value > 88) {
    input.value = 88;
  }
};
</script>
<template>
  <div class="flex w-full flex-row items-center justify-between border-b py-2">
    <p class="text-start text-xs text-gray-500">Line Height:</p>
    <div class="flex flex-row items-center justify-end overflow-hidden rounded-md border text-xs">
      <input @input="LineHeightValidate" type="number" class="w-12 py-1 indent-3 text-xs" min="0" max="200" />
    </div>
  </div>
</template>
