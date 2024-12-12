<template>
  <div class="flex flex-1 flex-col overflow-y-auto">
    <div class="flex-1 px-2 py-4">
      <UVerticalNavigation :links="links" :ui="{ padding: 'py-3 ps-3' }" />
    </div>
  </div>
</template>
<script setup lang="ts">
const links = [
  [
    {
      label: " Pages",
      icon: "material-symbols:list-alt-outline-sharp",
      // to: "/pages",
    },
    {
      label: "Settings",
      icon: "i-heroicons-cog-6-tooth",
      // to: "/settings",
    },
  ],
  [
    {
      label: "Help",
      icon: "i-heroicons-question-mark-circle",
    },
  ],
];
</script>
