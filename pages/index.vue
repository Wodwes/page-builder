<script setup>
const { state, page } = useBuilderPage();
</script>
<template>
  <div class="p-4">
    <!-- show components based on the builder page array -->
    <template v-for="(component, index) in page" :key="index">
      <ShowPageComponent
        :component="component.component"
        :data="component"
        @click="
          state.activeComponent = component.component;
          state.activeComponentIndex = index;
        "
      />
    </template>

    <!-- raw data -->
    <!-- <pre>{{ page }}</pre> -->
  </div>
</template>
