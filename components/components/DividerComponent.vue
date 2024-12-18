<script setup>
defineProps({
  StyledDivider: {
    type: String,
  },
});
</script>

<template>
  <!-- Dynamically apply the Tailwind classes based on the StyledDivider prop -->
  <div :class="StyledDivider"></div>
</template>
