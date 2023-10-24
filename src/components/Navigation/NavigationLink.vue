<template>
    <li class="py-[5px] px-[13px]" :class="textClass">
        <router-link :to="to">{{ text }}</router-link>
    </li>
</template>
  
<script>
export default {
    props: {
        to: String,
        text: String,
    },
    computed: {
        textClass() {
            const isLightMode = this.$store.state.mode === 'light';
            const isDarkMode = this.$store.state.mode === 'dark';
            const isCurrentRoute = this.$route.path === this.to;
            return {
                'text-secondary': isLightMode,
                'text-light': isDarkMode,
                'text-opacity-60': !isCurrentRoute,
            };
        },
    },
};
</script>
  