<script setup>
import { defineProps } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  icon: { default: 'material-symbols-light:star' },
  styleClasses: { default: 'bg-gary-500' },
  height: { default: '30' },
  width: { default: '30' },
});
</script>

<template>
  <div :class="props.styleClasses">
    <!-- use iconify icon   -->
    <Icon :icon="props.icon" :width="props.width" :height="props.height" :ssr="true" />
  </div>
</template>
