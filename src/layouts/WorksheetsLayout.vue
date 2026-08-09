<template>
  <div class="layout">
    <WorksheetSidebar />
    <main class="content">
      <RouterView :key="$route.fullPath" />
    </main>
  </div>
</template>

<script setup lang="ts">
import WorksheetSidebar from '../components/WorksheetSidebar.vue'
</script>

<style scoped>
.layout {
  display: flex;
}

.content {
  flex: 1;
  padding: 1rem;
}
</style>
