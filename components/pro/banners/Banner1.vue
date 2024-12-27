<script setup>
import BannerImages from '~/assets/images/city.webp';
</script>

<template>
  <div class="w-full rounded-md border text-white">
    <UContainer class="w-full rounded-md bg-cover bg-center bg-no-repeat p-8" :style="{ backgroundImage: `url(${BannerImages})` }">
      <h1 class="text-4xl font-bold">Welcome to Nuxt</h1>
      <p class="my-4">This is a section with a beautiful background image.</p>
      <UButton label="Plan Your Georgian Escape Today!" size="xs" class="rounded-full" color="error" />
    </UContainer>
  </div>
</template>
