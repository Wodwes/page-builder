<template>
  <div class="p-4">
    <div>
      <!-- <Heading /> -->
      <component :is="componentname" />
      <!-- <componentname /> -->
    </div>
    <pre class="mt-6">{{ builderpage }}</pre>
  </div>
</template>

<script setup>
import Heading from '~/components/Heading.vue';

const { state: builderpage } = useBuilderPage();
const componentname = ref(Heading);
</script>
