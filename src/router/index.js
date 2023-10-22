// index.js
import { createRouter, createWebHistory } from "vue-router";
import SamplePage from "../components/IndexPage.vue";

const routes = [{ path: "/", component: SamplePage }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
