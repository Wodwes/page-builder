<script setup>
import BannerImages from '~/assets/images/office.webp';
</script>

<template>
  <div class="w-full rounded-md border text-white">
    <UContainer class="w-full rounded-md bg-cover bg-center bg-no-repeat p-8" :style="{ backgroundImage: `url(${BannerImages})` }">
      <div class="w-fit rounded-md bg-black/30 p-6 md:max-w-[55%]">
        <h1 class="text-4xl font-bold">Welcome to Nuxt</h1>
        <p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officia exercitationem totam deserunt earum assumenda mollitia, inventore dolore asperiores possimus</p>
        <UButton label="Plan Your Georgian Escape Today!" size="xs" class="rounded-full" color="error" />
      </div>
    </UContainer>
  </div>
</template>
