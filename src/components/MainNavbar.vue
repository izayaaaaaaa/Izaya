<!-- MainNavbar.vue -->
<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item"><router-link class="navbar-link" to="/">about</router-link></li>
      <li class="navbar-item"><router-link class="navbar-link" to="/projects">projects</router-link></li>
      <li class="navbar-item"><router-link class="navbar-link" to="/writeups">writeups</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNavbar',
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: center; /* center horizontally */
  font-family: 'Inter', sans-serif;
}

.navbar-list {
  display: flex;
  list-style-type: none; /* remove bullet points */
  padding: 0; /* remove default padding */
  margin: 0; /* remove default margin */
}

.navbar-item {
  padding: 10px 15px; /* padding around each link */
}

.navbar-link {
  text-decoration: none;
  color: var(--foreground);
  font-weight: bold;
  transition: color 0.2s;
}

.navbar-link:hover {
  color: var(--navbartext); /* change link color on hover */
}
</style>