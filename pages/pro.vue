<script setup>
import Aside from '~/components/pro/Aside.vue';
import AuthForm from '~/components/pro/AuthForm.vue';
import BlogPost from '~/components/pro/BlogPost.vue';
</script>
<template>
  <div class="mx-auto h-auto w-full max-w-4xl items-center justify-center md:flex">
    <div class="mx-2 rounded-md border p-4">
      <Aside />
      <AuthForm />
      <BlogPost />
    </div>
  </div>
</template>
