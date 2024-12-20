<script setup>
import AccordionStyle from './AccordionStyle/AccordionStyle.vue';
import ButtonStyle from './ButtonStyle/ButtonStyle.vue';
import Divider from './Divider/Divider.vue';
import HeadingStyle from './HeadingStyle/HeadingStyle.vue';

import ImageStyle from './ImageStyle/ImageStyle.vue';
import VideoStyle from './VideoStyle/VideoStyle.vue';

definePageMeta({
  layout: 'main-layout',
});
</script>

<template>
  <div class="h-auto min-h-screen w-full overflow-y-auto">
    <!-- <HeadingStyle /> -->
    <!-- <Divider /> -->
    <!-- <ImageStyle /> -->
    <!-- <ButtonStyle /> -->
    <VideoStyle />
    <AccordionStyle />
  </div>
</template>
