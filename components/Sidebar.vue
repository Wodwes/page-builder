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
      label: "Send Call",
      icon: "i-heroicons-phone-arrow-up-right",
      //   to: "/",
    },
    {
      label: "Send Batch",
      icon: "i-heroicons-arrow-top-right-on-square-solid",
      //   to: "/send-batch",
    },
    {
      label: "Logs",
      icon: "i-heroicons-clipboard-document-list",
      //   to: "/logs",
    },
    {
      label: "Customers",
      icon: "i-heroicons-queue-list-solid",
      //   click: () => (),
    },
  ],
  [
    {
      label: "Settings",
      icon: "i-heroicons-cog-6-tooth",
      //   to: "/settings",
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
