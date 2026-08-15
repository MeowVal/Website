<script setup lang="ts">
document.title = "CatKatNya - Projects"

</script>

<template>
  <section class="projects">
    <h1>Projects</h1>
    <div class="container">
      <ul class="list">
        <li>
          <router-link to="/overview">
            Graphics Worksheets Overview
          </router-link>
        </li>

        <li>
          <router-link to="/projects/other-project">
            Other Project
          </router-link>
        </li>

        <!-- etc -->
      </ul>
    </div>
  </section>
</template>

<style scoped>
.container {
  text-align: center;
}
.list {
  display: inline-block;
  list-style-type: disc;
  list-style-position: outside;
  text-align: center;
}
</style>