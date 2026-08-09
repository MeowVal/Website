<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const webgl = [
  { unit: 1, part: 1, title: 'Blank Canvas' },
  { unit: 1, part: 2, title: 'Corner points of triangle' },
  { unit: 1, part: 3, title: 'Circles' },
  { unit: 1, part: 4, title: 'Curves' },
  { unit: 1, part: 5, title: 'Bezier' },

  { unit: 2, part: 1, title: 'Shaders' },
  { unit: 2, part: 2, title: 'Attributes' },
  { unit: 2, part: 3, title: 'Matrices' },
  { unit: 2, part: 4, title: 'Transforms' },
  { unit: 2, part: 5, title: 'Lighting' },
  { unit: 2, part: 6, title: 'Textures' },
  { unit: 2, part: 7, title: 'Advanced' },
]

const webgpu = [
  { unit: 1, part: 1, title: 'Device & Swapchain' },
  { unit: 1, part: 2, title: 'Basic Pipeline' },
  { unit: 1, part: 3, title: 'Uniform Buffers' },
  { unit: 1, part: 4, title: 'Textures' },
  { unit: 1, part: 5, title: 'Compute' },
]

const route = useRoute()

// Highlight active worksheet
const activePath = computed(() => route.path)
</script>

<template>
  <aside class="sidebar">
    <h2>WebGL</h2>
    <ul>
      <li
          v-for="w in webgl"
          :key="`${w.unit}-${w.part}`"
          :class="{ active: activePath === `/worksheets/webgl/w${w.unit}p${w.part}` }"
      >
        <router-link :to="`/worksheets/webgl/w${w.unit}p${w.part}`">
          w{{ w.unit }}p{{ w.part }} — {{ w.title }}
        </router-link>
      </li>
    </ul>

    <h2>WebGPU</h2>
    <ul>
      <li
          v-for="w in webgpu"
          :key="`${w.unit}-${w.part}`"
          :class="{ active: activePath === `/worksheets/webgpu/w${w.unit}p${w.part}` }"
      >
        <router-link :to="`/worksheets/webgpu/w${w.unit}p${w.part}`">
          w{{ w.unit }}p{{ w.part }} — {{ w.title }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 260px;
  padding: 1rem;
  border-right: 1px solid #ccc;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 0.4rem 0;
}

li.active a {
  font-weight: bold;
  color: #007bff;
}
</style>
