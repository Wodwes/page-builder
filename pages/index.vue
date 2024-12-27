<script setup>
const { state, page } = useBuilderPage();
</script>
<template>
  <div>
    <!-- show components based on the builder page array -->
    <template v-for="(component, index) in page" :key="index">
      <Page
        :component="component.component"
        :data="component"
        @click="
          state.activeComponent = component.component;
          state.activeComponentIndex = index;
        "
        class="hover:bg-primary/5 hover:border-primary/25 border-y border-transparent"
      />
    </template>

    <!-- raw data -->
    <!-- <pre>{{ page }}</pre> -->
  </div>
</template>
