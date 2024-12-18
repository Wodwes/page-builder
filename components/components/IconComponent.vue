<script setup>
import { defineProps } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  icon: { type: String, default: 'material-symbols-light:star' },
  styleClasses: { type: String, default: 'bg-gar-500' },
  height: { type: String, default: '30' },
  width: { type: String, default: '30' },
});
</script>

<template>
  <div :class="props.styleClasses">
    <!-- use iconify icon   -->
    <Icon :icon="props.icon" :width="props.width" :height="props.height" :ssr="true" />
  </div>
</template>
