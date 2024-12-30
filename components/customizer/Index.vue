<script setup>
const { state, page } = useBuilderPage();
</script>

<template>
  <h2 class="text-primary text-base">Customizations</h2>

  <div class="mt-2 border-t pt-3">
    <ProComponentsTextHeadingCustomizations v-if="state.activeComponent === 'heading'" :data="page[state.activeComponentIndex]" />
    <ProComponentsTextParagraphCustomizations v-if="state.activeComponent === 'paragraph'" :data="page[state.activeComponentIndex]" />
    <ProComponentsButtonCustomizations v-if="state.activeComponent === 'button'" :data="page[state.activeComponentIndex]" />
  </div>
</template>
