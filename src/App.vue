<script setup>
import MainNavVue from './components/Navigation/MainNav.vue';
</script>

<template>
  <div id="app">
    <div class="flex justify-center py-[67px] min-h-scree">
      <div class="w-[35%]">
        <header>
          <MainNavVue />
        </header>
        <main>
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>
