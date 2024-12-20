<script setup>
defineProps({
  label: {
    type: String,
    default: 'Padding',
  },
});

const InputValidate = (event) => {
  const input = event.target;
  const value = parseInt(input.value, 10);

  // Enforce min and max values
  if (value < 0) {
    input.value = 0;
  }
};
</script>
<template>
  <div>
    <!-- Padding  -->
    <div class="flex w-full flex-col items-start justify-between border-b pb-3 pt-2">
      <p class="mb-1 text-start text-xs text-gray-500">{{ label }}:</p>
      <div class="box-content grid w-full grid-cols-5 items-center gap-2 divide-x rounded-md border text-xs text-gray-500">
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="InputValidate" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="InputValidate" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="InputValidate" /></div>
        <div><input type="number" class="mx-2 w-full py-1 text-xs focus:outline-none" @input="InputValidate" /></div>
        <div class="flex items-center justify-center px-2">PX</div>
      </div>
      <div class="box-content grid w-full grid-cols-5 items-center gap-1 px-2 text-[10px] text-gray-500">
        <div>Top</div>
        <div>Right</div>
        <div>Bottom</div>
        <div>Left</div>
        <div></div>
      </div>
    </div>
  </div>
</template>
