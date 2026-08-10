<script setup lang="ts">
import { onMounted, ref } from 'vue'


// WebGL utils (place your MV.js, webgl-utils.js, initShaders.js in /src/lib/webgl/)
import WebGLUtils from '@/lib/webGL/webgl-utils.js'

const canvasRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  const canvas = canvasRef.value!
  const gl = WebGLUtils.setupWebGL(canvas)

  // Cornflower blue
  gl.clearColor(0.3921, 0.5843, 0.9294, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)
})
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
