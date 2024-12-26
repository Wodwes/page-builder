<script setup>
import BannerImages from '~/assets/images/city.webp';
</script>

<template>
  <UContainer class="w-full bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${BannerImages})` }">
    <div class="w-full p-4 text-white md:p-8">
      <h1 class="text-4xl font-bold">Welcome to Nuxt</h1>
      <p class="mt-4">This is a section with a beautiful background image.</p>
      <UButton label="Plan Your Georgian Escape Today!" size="xs" class="my-4 rounded-full" color="error" />
    </div>
  </UContainer>
</template>
