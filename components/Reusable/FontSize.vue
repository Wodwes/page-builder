<script setup>
const FontSizeValidate = (event) => {
  const input = event.target;
  const value = parseInt(input.value, 10);

  // Enforce min and max values
  if (value < 0) {
    input.value = 0;
  } else if (value > 200) {
    input.value = 200;
  }
};
</script>
<template>
  <div class="flex w-full flex-row items-center justify-between border-b py-2">
    <p class="text-start text-xs text-gray-500">Font Size:</p>
    <div class="flex flex-row items-center justify-end overflow-hidden rounded-md border text-xs">
      <input @input="FontSizeValidate" type="number" class="w-12 py-1 indent-3 text-xs" min="0" max="200" placeholder="0" />
    </div>
  </div>
</template>
