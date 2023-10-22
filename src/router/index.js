// index.js
import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "./IndexPage.vue";
import BlogPage from "./BlogPage.vue";
import WriteupsPage from "./WriteupsPage.vue";

const routes = [
  { path: "/", component: IndexPage },
  { path: "/blog", component: BlogPage },
  { path: "/writeups", component: WriteupsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
