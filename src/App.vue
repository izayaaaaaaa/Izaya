<!-- App.vue -->
<template>
  <div id="app">
    <MainNavbar />
    <router-view />
  </div>
</template>

<script>
  import MainNavbar from "./components/MainNavbar.vue";
  import "./colors.css";

  export default {
    components: {
      MainNavbar
    }
  };
</script>

<style>
  body {
    background-color: var(--background);
    color: var(--foreground);
  }

  .app {
    min-height: 100vh; /* ensure at least viewport height */
  }
</style>