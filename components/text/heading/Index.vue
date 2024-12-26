<template>
  <TextHeadingComponent :data="data" />
  <!-- customizer fields -->
  <TextHeadingCustomizations :data="data" />
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
    validator(obj) {
      const isTextValid = typeof obj.text === 'string';
      const isLevelValid = typeof obj.level === 'number';

      if (!isTextValid) {
        console.warn('The text property must be a valid string. Received:', obj.text);
      }

      if (!isLevelValid) {
        console.warn('The level property must be a valid number. Received:', obj.level);
      }

      return isTextValid && isLevelValid;
    },
  },
});
</script>
