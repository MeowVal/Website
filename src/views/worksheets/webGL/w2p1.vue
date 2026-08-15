<script setup lang="ts">
import { onMounted, ref } from 'vue'
// Shader imports
import vert from '@/shaders/webGL/w2p1.vert?raw'
import frag from '@/shaders/webGL/w2p1.frag?raw'

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

  //const offset = MV.vec2(0.0, 0.0); // v_t
  //let velocity = MV.vec2(0.0, 0.0); // w_t
  let mousepos = MV.vec2(0.0, 0.0);
  //const speed = 0.02;

  canvas.addEventListener("mousemove", function (ev) {
    const target = ev.currentTarget as HTMLCanvasElement;
    const bbox = target.getBoundingClientRect();
    mousepos = MV.vec2(
        2 * (ev.clientX - bbox.left)/canvas.width - 1,
        2 * (canvas.height - ev.clientY + bbox.top - 1)/canvas.height - 1
    );

    //velocity = MV.vec2((mousepos[0] - offset[0])*speed, (mousepos[1] - offset[1])*speed);
  });

  const max_verts = 1000;
  let index = 0;
  let numPoints = 0;

  const colour = MV.vec4(0.0, 0.0, 0.0, 1.0);
  let p = [];



  const vBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, max_verts*MV.sizeof['vec2'], gl.STATIC_DRAW);
  canvas.addEventListener("mousedown", function() {
    p = mousepos;
    addColour(index);
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, index*MV.sizeof['vec2'], MV.flatten(p));
    numPoints = Math.max(numPoints, ++index);
    index %= max_verts;
    requestAnimationFrame(render);
  });

  const vPosition = gl.getAttribLocation(program, "a_Position");
  gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vPosition);


  const cBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, max_verts*4*MV.sizeof['vec4'], gl.STATIC_DRAW);
  function addColour(i: number){
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, i*MV.sizeof['vec4'], MV.flatten(colour));
  }

  const vColour = gl.getAttribLocation(program, "a_Color");
  gl.vertexAttribPointer(vColour, 4, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vColour);
  gl.clear(gl.COLOR_BUFFER_BIT);



  function render(){
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, numPoints);

  }
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