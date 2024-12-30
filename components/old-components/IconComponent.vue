<script setup>
import { defineProps } from 'vue';
import { Icon } from '@iconify/vue';

defineProps({
  icon: { default: 'material-symbols-light:star' },
  styleClasses: { default: 'bg-gary-500' },
  height: { default: '60' },
  width: { default: '60' },
});
</script>

<template>
  <div :class="styleClasses">
    <!-- use iconify icon   -->
    <Icon :icon="icon" :width="width" :height="height" :ssr="true" />
  </div>
</template>
