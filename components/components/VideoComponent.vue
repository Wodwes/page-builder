<script setup>
defineProps({
  videoURL: {
    type: String,
    required: true,
  },
  posterImage: {
    type: String,
    default: null,
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
  controls: {
    type: Boolean,
    default: true,
  },
  loop: {
    type: Boolean,
    default: false,
  },
  muted: {
    type: Boolean,
    default: false,
  },
});

// Extract the video ID from the YouTube URL
const getEmbedURL = (url) => {
  const videoId = url.split('v=')[1]?.split('&')[0];
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
};
</script>

<template>
  <div class="h-auto w-full">
    <!-- Embed YouTube video using iframe -->
    <iframe v-if="getEmbedURL(videoURL)" :src="getEmbedURL(videoURL)" :autoplay="autoplay ? 1 : 0" :controls="controls ? 1 : 0" :loop="loop ? 1 : 0" :muted="muted ? 1 : 0" frameborder="0" allowfullscreen class="h-auto w-full object-contain md:h-full"></iframe>
  </div>
</template>
