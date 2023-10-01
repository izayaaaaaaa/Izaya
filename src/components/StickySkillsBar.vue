<!-- StickySkillsBar.vue -->
<template>
  <div class="sticky-skills-bar">
    <span class="first-letter" :style="`color: ${textColor}`">{{ text.charAt(0) }}</span>{{ text.slice(1) }}
  </div>
</template>

<script>
  export default {
    name: "StickySkillsBar",
    props: {
      text: String,
      textColor: String
    }
  };
</script>

<style scoped>
  .sticky-skills-bar {
    background-color: var(--background);
    color: var(--foreground);
    margin-bottom: 10px;

    /* makes sure the stick-skills thing is on the bottom-right */
    max-width: fit-content; 
    white-space: nowrap; 
  }
</style>