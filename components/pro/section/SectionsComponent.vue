<script setup>
import BannerImages from '~/assets/images/office.webp';
</script>

<template>
  <div class="text-primary w-full rounded-md border bg-white p-4">
    <div class="grid w-full grid-cols-1 items-center justify-between gap-4 md:grid-cols-3">
      <!-- Card 1 -->
      <div class="flex-shrink-0">
        <UCard>
          <template #header>
            <h3 class="text-center text-lg font-semibold">Office Details</h3>
          </template>
          <div class="p-4">
            <img :src="BannerImages" alt="Office" class="h-32 w-full rounded-md object-cover" />
            <p class="mt-2 text-center text-sm">Explore the modern office environment tailored for productivity and creativity.</p>
          </div>
          <template #footer>
            <button class="mt-2 w-full rounded-md">Learn More</button>
          </template>
        </UCard>
      </div>

      <!-- Card 2 -->
      <div class="flex-shrink-0">
        <UCard>
          <template #header>
            <h3 class="text-center text-lg font-semibold">Office Details</h3>
          </template>
          <div class="p-4">
            <img :src="BannerImages" alt="Office" class="h-32 w-full rounded-md object-cover" />
            <p class="mt-2 text-center text-sm">Explore the modern office environment tailored for productivity and creativity.</p>
          </div>
          <template #footer>
            <button class="mt-2 w-full rounded-md">Learn More</button>
          </template>
        </UCard>
      </div>

      <!-- Card 3 -->
      <div class="flex-shrink-0">
        <UCard>
          <template #header>
            <h3 class="text-center text-lg font-semibold">Office Details</h3>
          </template>
          <div class="p-4">
            <img :src="BannerImages" alt="Office" class="h-32 w-full rounded-md object-cover" />
            <p class="mt-2 text-center text-sm">Explore the modern office environment tailored for productivity and creativity.</p>
          </div>
          <template #footer>
            <button class="mt-2 w-full rounded-md">Learn More</button>
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>
