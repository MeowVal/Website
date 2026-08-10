<script setup lang="ts">
import { onMounted, ref } from 'vue'
// Shader imports
import vert from '@/shaders/webGL/w1p3.vert?raw'
import frag from '@/shaders/webGL/w1p3.frag?raw'

// WebGL utils
import WebGLUtils from '@/lib/webGL/webgl2-utils.js'
import MV from '@/lib/webGL/MV.js'

const canvasRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  const canvas = canvasRef.value!
  const gl = canvas.getContext('webgl2')!
  const program = WebGLUtils.createProgramFromSources(gl, [vert, frag])
  if (!program) {
    throw new Error("Shader program failed to compile/link")
  }
  gl.useProgram(program)
  gl.clearColor(0.3921, 0.5843, 0.9294, 1.0);


  var vertices = [ MV.vec2(0.0, 0.0), MV.vec2(1.0, 1.0), MV.vec2(1.0, 0.0) ];
  var colours = [ MV.vec4(1.0, 0.0, 0.0, 1.0), MV.vec4(0.0, 0.0, 1.0, 1.0), MV.vec4(0.0, 1.0, 0.0, 1.0) ];
  var numVertices = vertices.length;
  var vBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, MV.flatten(vertices), gl.STATIC_DRAW);

  var vPosition = gl.getAttribLocation(program, "a_Position");
  gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vPosition);

  var cBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, MV.flatten(colours), gl.STATIC_DRAW);

  var vColour = gl.getAttribLocation(program, "a_Color");
  gl.vertexAttribPointer(vColour, 4, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vColour);

  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, numVertices);
})
</script>

<template>
  <div class="worksheet">
    <canvas ref="canvasRef" width="512" height="512">
      Your browser does not support HTML5 canvas.
    </canvas>
  </div>
</template>

<style scoped>
canvas {
  border: 1px solid #444;
}
</style>