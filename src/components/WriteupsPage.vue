<!-- WriteupsPage.vue -->
<template>
  <div class="writeups">
  </div>

  <SocialMediaIcons :icons="socialIcons" />
</template>

<script>
  import SocialMediaIcons from "./SocialMediaIcons.vue";

  export default {
    name: 'WriteupsPage',
    components: {
        SocialMediaIcons
    },
    data() {
      return {
        socialIcons: [
          { src: require('../assets/email-icon.png'), alt: 'email', link: 'mailto:fammacadangdang@mymail.mapua.edu.ph' },
          { src: require('../assets/github-icon.png'), alt: 'github', link: 'https://github.com/izayaaaaaaa' },
          { src: require('../assets/linkedin-icon.png'), alt: 'linkedin', link: 'https://www.linkedin.com/in/francyn-abcd-macadangdang-3b67821a9/' },
        ]
      };
    }
  };
</script>

<style>

</style>