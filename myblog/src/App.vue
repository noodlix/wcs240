<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="center">
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
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
  padding: 1rem;
  backdrop-filter: blur(6px);
  border-bottom: 2px solid rgba(255, 182, 193, 0.4);
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

nav a {
  padding: 0.5rem 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  transition: all 0.2s ease;
  border-radius: 6px;
}

nav a.router-link-exact-active {
  color: #ff69b4;
  border-bottom: 2px solid #ff69b4;
}

nav a:hover {
  color: #ff1493;
  background-color: rgb(255, 240, 243);
}


@media (max-width: 600px) {
  nav {
    flex-direction: column;
    align-items: center;
  }

  nav a {
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.75rem;
  }
}


.cnt {
  background-color:  rgb(255,240,243);
  min-height: 100vh;
  width: 100vw;

}

.center {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column; /* stack nav and content vertically */
  align-items: center;    /* center horizontally */
}

.alin {
  display: flex;
  flex-direction: column;
  align-items: center; /* ensures children stay centered */
  justify-content: center;
  width: 100%;
  max-width: 900px; /* optional: prevents content stretching too wide */
  margin: 0 auto;
}

</style>
