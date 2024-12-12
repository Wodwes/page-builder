<script setup>
const value = ref("");
</script>

<template>
  <div class="m-16 space-y-8">
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <Button label="Verify" size="small" />

    <FloatLabel variant="on">
      <InputText id="username" v-model="value" />
      <label for="username">Username</label>
    </FloatLabel>
  </div>
</template>
