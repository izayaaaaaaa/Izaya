<!-- Layouts/SectionLayout.vue -->
<template>
    <div class="mt-[26px] mb-[36px]">
        <h2 class="font-bold mb-[15px]">{{ title }}</h2>
        <slot></slot>
    </div>
</template>


<script>
export default {
    props: {
        title: String
    }
}
</script>