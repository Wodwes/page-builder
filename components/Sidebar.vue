<template>
  <div class="flex flex-1 flex-col overflow-y-auto">
    <div class="flex-1 px-2 py-4">
      <!-- <UVerticalNavigation :links="links" ui="{ padding: 'py-3 ps-3' }" /> -->
      <UVerticalNavigation :links="links">
        <template #default="{ link }">
          <span class="group-hover:text-primary relative">{{ link.label }}</span>
        </template>
      </UVerticalNavigation>
    </div>
  </div>
</template>
<script setup lang="js">
const links = [
  [
    {
      label: ' Components',
      icon: 'material-symbols:library-books-outline',
      to: '/components',
    },
    {
      label: ' Pages',
      icon: 'material-symbols:library-books-outline',
      // to: "/pages",
    },
    {
      label: 'Settings',
      icon: 'i-heroicons-cog-6-tooth',
      // to: "/settings",
    },
  ],
  [
    {
      label: 'Help',
      icon: 'i-heroicons-question-mark-circle',
    },
  ],
];
</script>
