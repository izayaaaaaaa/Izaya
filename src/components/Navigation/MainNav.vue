<!-- Navigation/MainNav.vue -->
<template>
    <nav class="flex justify-between border-b-black border-opacity-50 border-solid border-b-[1px]">
        <ul class="flex font-medium">
            <NavigationLink to="/" text="home" />
            <VerticalLine />
            <NavigationLink to="/blog" text="blog" />
            <VerticalLine />
            <NavigationLink to="/writeup" text="writeup" />
        </ul>
        <ModeSwitcher :mode="$store.state.mode" />
    </nav>
</template>

<script>
import NavigationLink from "./NavigationLink.vue"
import ModeSwitcher from './ModeSwitcher.vue';
import VerticalLine from "./VerticalLine.vue"

export default {
    components: {
        NavigationLink,
        ModeSwitcher,
        VerticalLine
    }
};
</script>