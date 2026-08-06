<script setup lang="ts">
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!--<HelloWorld />-->
  <nav class="topbar">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/PrivacyPolicy">Privacy</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
.topbar {
  display: flex;
  gap: 20px;
  padding: 10px;
  background: #222;
}

.topbar a {
  color: #ccc;
  text-decoration: none;
  font-weight: 500;
}
.router-link-active {
  color: #fff;
  border-bottom: 2px solid #fff;
}
</style>