<script setup lang="ts">
import { onMounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  const canvas = canvasRef.value!
  const gl = canvas.getContext('webgl2')!

  // Cornflower blue
  gl.clearColor(0.3921, 0.5843, 0.9294, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)
})
document.title = "CatKatNya - w1p1"

</script>

<template>
  <div class="worksheet">
    <canvas ref="canvasRef" width="512" height="512">
      Please use a browser that supports HTML5 canvas.
    </canvas>
  </div>
</template>

<style scoped>
.worksheet {
  padding: 1rem;
}

canvas {
  border: 1px solid #444;
}
</style>
