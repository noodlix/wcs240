<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="alin">
    <nav>
      <RouterLink to="/">Main</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/assignments">Assignments</RouterLink>
      <RouterLink to="/contacts">Contacts</RouterLink>
    </nav>
  </div>

  <div class="cnt">
    <div class="alin">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
nav {
  width: 99vw;
  overflow-x: hidden;
  font-size: 14px;
  text-align: center;
  padding: 1rem;
  backdrop-filter: blur(6px);
  border-bottom: 2px solid rgba(255, 182, 193, 0.4);
  position: sticky;
  top: 0;
  z-index: 1000; 
}

nav a {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  transition: all 0.2s ease;
}

nav a.router-link-exact-active {
  color: #ff69b4;
  border-bottom: 2px solid #ff69b4;
}

nav a:hover {
  color: #ff1493;
  background-color: rgba(255, 182, 193, 0.2);
  border-radius: 8px;
}

.cnt {
  max-width: 100vw;
  background-color:  rgba(255, 182, 193, 0.2);
  min-height: 100vh;
}

.alin {
  flex-direction: column;
  width: fit-content;
  margin: 0 auto;
}
</style>
