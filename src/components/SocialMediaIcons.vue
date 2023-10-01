<!-- SocialMediaIcons.vue -->
<template>
  <div class="social-icons">
    <a v-for="(icon, index) in icons" :key="index" :href="icon.link" target="_blank" rel="noopener noreferrer">
      <img :src="icon.src" :alt="icon.alt" />
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialMediaIcons",
  props: {
    icons: Array
  }
};
</script>

<style scoped>
.social-icons {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 68px 150px;
}

.social-icons img {
  width: 30px;
  margin: 5px 0;
}
</style>
