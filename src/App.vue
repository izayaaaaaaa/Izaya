<!-- App.vue -->
<script setup>
import MainNavVue from "./components/Navigation/MainNav.vue";
</script>

<template>
    <div id="app">
        <div
            class="flex justify-center py-[67px] min-h-screen"
            :class="['content-container', $store.state.mode === 'dark' ? 'dark' : '']"
        >
            <div class="xl:w-[35%] lg:w-[50%] md:w-[70%] w-[85%]">
                <header>
                    <MainNavVue />
                </header>
                <main>
                    <!-- placeholder for rendering route-specific components -->
                    <router-view />
                </main>
            </div>
        </div>
    </div>
</template>
