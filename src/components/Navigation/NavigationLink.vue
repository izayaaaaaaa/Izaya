<template>
    <li class="py-[5px] px-[13px]" :class="linkClasses">
        <router-link :to="to">{{ text }}</router-link>
    </li>
</template>
  
<script>
export default {
    props: {
        to: String,
        text: String,
        mode: String,
    },
    computed: {
        linkClasses() {
            return {
                'text-opacity-60': this.$route.path !== '/',
                'text-secondary': this.mode === 'light',
                'text-light': this.mode === 'dark',
            };
        },
    },
};
</script>
  