<!-- Navigation/VerticalLine.vue -->
<template>
    <li>
        <div :class="{ 'vertical-line': $store.state.mode == 'light', 'vertical-line-dark': $store.state.mode == 'dark' }">
        </div>
    </li>
</template>

<script></script>