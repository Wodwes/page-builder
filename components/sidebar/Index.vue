<script setup>
const { addComponent, page, state } = useBuilderPage();

const items = [
  {
    label: 'Components',
    icon: 'i-fluent-mdl2:web-components',
    slot: 'components',
  },
  {
    label: 'Pages',
    icon: 'i-material-symbols:library-books-outline',
    slot: 'pages',
  },
  {
    label: 'Settings',
    icon: 'i-heroicons-cog-6-tooth',
    slot: 'settings',
  },
];

const removeComponent = (index) => {
  state.value.activeComponent = null;
  state.value.activeComponentIndex = null;
  page.value.splice(index, 1);
};
</script>

<template>
  <UAccordion :items="items" :ui="{ header: 'px-4 hover:bg-primary/10', content: 'px-4 py-2', item: 'last:border-b' }">
    <template #components="{ item }">
      <!-- headings -->
      <div class="grid grid-cols-4 gap-2">
        <div class="flex-center hover:bg-primary/10 aspect-square w-12 cursor-pointer rounded-md border p-2" @click="addComponent('heading')">
          <Icon name="i-gravity-ui:heading" class="text-2xl" />
        </div>
      </div>
      <hr class="mt-4 mb-2" />
      <div>
        <div v-for="(component, index) in page" :key="index">
          <div class="flex items-center gap-1">
            <UIcon name="i-heroicons:bars-3-solid" :size="18" class="cursor-pointer" />
            <h3 class="text-base capitalize">{{ component.component }}</h3>
            <UIcon name="i-heroicons:x-mark-20-solid" :size="18" class="cursor-pointer text-red-500" @click="removeComponent(index)" />
          </div>
        </div>
      </div>
    </template>

    <template #pages="{ item }">
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iure velit magni sequi enim corrupti atque, nihil minus harum perspiciatis! Officiis tenetur reiciendis rerum quam, quos amet explicabo enim nihil!</div>
    </template>

    <template #settings="{ item }">
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iure velit magni sequi enim corrupti atque, nihil minus harum perspiciatis! Officiis tenetur reiciendis rerum quam, quos amet explicabo enim nihil!</div>
    </template>
  </UAccordion>
</template>
