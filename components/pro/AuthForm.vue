<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';
const show = ref(false);
const password = ref('');
</script>

<template>
  <div class="flex min-w-xl flex-col items-center justify-center rounded-lg border p-6">
    <!-- Header section with lock icon and welcome text -->
    <div class="flex flex-col items-center justify-center gap-2">
      <Icon icon="heroicons:lock-closed" width="30" height="30" class="mt- mb-2 text-black" />
      <p class="text-2xl leading-8 font-bold text-black">Welcome back!</p>
      <div class="flex flex-row items-center justify-center">
        <p class="text-custom-gray text-base leading-4">Don't have an account?</p>
        <p class="text-primary text-base leading-4">&nbsp;Sign up</p>
        .
      </div>

      <div class="flex w-full flex-col gap-2">
        <!-- Email input field  -->
        <UFormField label="Email">
          <UInput placeholder="Enter your email" class="w-full" />
        </UFormField>

        <!-- Password input field  -->
        <UFormField label="Password">
          <UInput v-model="password" placeholder="Password" :type="show ? 'text' : 'password'" :ui="{ trailing: 'pe-1' }" class="w-full">
            <!-- Trailing slot for the password visibility toggle button -->
            <template #trailing>
              <UButton color="neutral" variant="link" size="sm" :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'" aria-label="show ? 'Hide password' : 'Show password'" :aria-pressed="show" aria-controls="password" @click="show = !show" />
            </template>
          </UInput>
        </UFormField>
      </div>
      <div class="flex w-full flex-col justify-start gap-2 py-3">
        <UCheckbox label="Remember me" />
        <UAlert
          title="Error signing in"
          icon="information-circle-20-solid"
          :ui="{
            icon: 'size-11',
          }"
        />
      </div>
    </div>
  </div>
</template>
