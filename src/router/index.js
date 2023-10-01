// index.js
import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '../components/AboutPage.vue';
import ProjectsPage from '../components/ProjectsPage.vue';
import WriteupsPage from '../components/WriteupsPage.vue';

const routes = [
  { path: '/', component: AboutPage },
  { path: '/projects', component: ProjectsPage },
  { path: '/writeups', component: WriteupsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;