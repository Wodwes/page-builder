<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';
const show = ref(false);
const password = ref('');
</script>

<template>
  <UContainer class="w-full flex-col items-center justify-center md:flex md:min-w-xl">
    <!-- Header section with lock icon and welcome text -->
    <div class="w-full flex-col items-center justify-center gap-2 md:flex">
      <div class="flex flex-col items-center justify-center gap-2">
        <Icon icon="heroicons:lock-closed" width="30" height="30" class="mt- mb-2 text-black" />
        <p class="text-2xl leading-8 font-bold text-black">Welcome back!</p>
      </div>
      <div class="flex flex-row items-center justify-center">
        <p class="text-custom-gray text-base leading-4">Don't have an account?</p>
        <p class="text-primary text-base leading-4">&nbsp;Sign up</p>
        .
      </div>

      <div class="flex w-auto flex-col gap-2 md:w-full">
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

      <div class="flex w-auto flex-col justify-start gap-4 py-1 md:w-full">
        <div class="flex w-auto flex-col justify-start gap-4 py-1 md:w-full">
          <UCheckbox label="Remember me" class="my-3" />
          <UAlert title="Error signing in" color="error" icon="heroicons:information-circle-20-solid" :ui="{ icon: 'size-6' }" />
          <UButton color="primary" class="mx-auto w-full justify-center">Continue</UButton>
        </div>
        <div class="my-4 flex items-center">
          <div class="flex-grow border-t border-gray-300"></div>
          <span class="mx-2 text-gray-600">or</span>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>
        <UButton icon="fe:github" size="md" color="ghost" variant="solid" class="justify-center rounded-md border"> Continue with GitHub</UButton>
        <div class="flex flex-col items-center justify-center gap-4 leading-4 md:flex-row md:gap-0">
          <p class="text-custom-gray text-base leading-4">By signing in, you agree to our</p>
          <p class="text-primary text-base leading-4">&nbsp;Terms of Service</p>
          .
        </div>
      </div>
    </div>
  </UContainer>
</template>
