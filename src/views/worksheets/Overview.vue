<script setup lang="ts">
const webgl = [
  { unit: 1, part: 1, title: 'Points' },
  { unit: 1, part: 2, title: 'Triangles' },
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
</script>

<template>
  <section class="overview">
    <h1>Graphics Worksheets Overview</h1>

    <h2>WebGL — Computer Graphics</h2>
    <ul>
      <li v-for="w in webgl" :key="`${w.unit}-${w.part}`">
        <router-link :to="`/worksheets/webgl/w${w.unit}p${w.part}`">
          w{{ w.unit }}p{{ w.part }} — {{ w.title }}
        </router-link>
      </li>
    </ul>

    <h2>WebGPU — Rendering</h2>
    <ul>
      <li v-for="w in webgpu" :key="`${w.unit}-${w.part}`">
        <router-link :to="`/worksheets/webgpu/w${w.unit}p${w.part}`">
          w{{ w.unit }}p{{ w.part }} — {{ w.title }}
        </router-link>
      </li>
    </ul>
  </section>
</template>
