// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "./IndexPage.vue";
import BlogPage from "./BlogPage.vue";
import WriteUpPage from "./WriteUpPage.vue";

const routes = [
    { path: "/", component: IndexPage },
    { path: "/blog", component: BlogPage },
    { path: "/writeup", component: WriteUpPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;