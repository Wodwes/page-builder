<script setup>
// Tracks the currently open dropdown
const activeDropdown = ref(true);

const toggleDropdown = (section) => {
  activeDropdown.value = activeDropdown.value === section ? null : section;
};

const items = [
  { label: 'Components', icon: 'tdesign:component-layout', slot: 'components' },
  { label: 'Pages', icon: 'qlementine-icons:layout-pages-horizontal-16', slot: 'pages' },
  { label: 'settings', icon: 'material-symbols:settings-rounded', slot: 'settings' },
];
</script>

<template>
  <div class="h-auto space-y-2">
    <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }">
      <!-- label slot -->
      <template #default="{ item, index, open }">
        <UButton color="gray" variant="ghost" class="border-b border-gray-200" :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">
          <template #leading>
            <div class="-my-1 flex h-6 w-6 items-center justify-center rounded-full">
              <UIcon :name="item.icon" class="text-primary size-5" />
            </div>
          </template>

          <span class="truncate">{{ item.label }}</span>

          <template #trailing>
            <UIcon name="i-heroicons-chevron-right-20-solid" class="ms-auto h-5 w-5 transform transition-transform duration-200" :class="[open && 'rotate-90']" />
          </template>
        </UButton>
      </template>

      <!-- custom slots -->
      <template #components>
        <div class="p-3">components slot</div>
      </template>
      <template #pages>
        <div class="p-3">pages slot</div>
      </template>
      <template #settings>
        <div class="p-3">settings slot</div>
      </template>
    </UAccordion>
  </div>
</template>
