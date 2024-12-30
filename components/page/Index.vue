<script setup>
const { state, page } = useBuilderPage();

const props = defineProps({ component: { type: String, required: true }, data: { type: Object, required: true }, class: { type: String, required: false }, index: { type: Number, required: true } });

const setComponent = (component, index) => {
  state.value.activeComponent = component;
  state.value.activeComponentIndex = index;
};
</script>

<template>
  <ProComponentsTextHeading v-if="props.component === 'heading'" :data="props.data" :class="props.class" @click="setComponent(component, index)" />
  <ProComponentsTextParagraph v-if="props.component === 'paragraph'" :data="props.data" :class="props.class" @click="setComponent(component, index)" />
  <ProComponentsButton v-if="props.component === 'button'" :data="props.data" :class="props.class" @click="setComponent(component, index)" />
</template>
