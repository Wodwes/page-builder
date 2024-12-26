<script setup>
import BannerImages from '~/assets/images/office.webp';
</script>

<template>
  <div class="w-full rounded-md border text-white">
    <div class="flex w-full flex-1 items-center justify-between">
      <div class="flex-shrink-0">
        <img :src="BannerImages" class="h-16 w-auto" alt="Office Banner" />
      </div>
      <div class="flex-grow text-black">
        <h2 class="text-lg font-bold">Welcome to Our Office</h2>
        <p class="text-sm">Feel free to explore our facilities and services</p>
      </div>
      <div class="flex-shrink-0">
        <button class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">Book a Visit</button>
      </div>
    </div>
  </div>
</template>
