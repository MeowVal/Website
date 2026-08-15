<script setup lang="ts">
import { onMounted, ref } from 'vue'
// Shader imports
import vert from '@/shaders/webGL/w1p5.vert?raw'
import frag from '@/shaders/webGL/w1p5.frag?raw'

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
  let vertices: any[] = [];
  let colours: any[] = [];
  const r = 0.5;

  for (let i = 0.0; i <= 360; i++){
    const j = i * Math.PI / 180;
    const vert1 = MV.vec2(
        r * Math.sin(j),
        r * Math.cos(j)
    );
    const vert2 = MV.vec2(0.0, 0.0);// the colour white
    const colour = MV.vec4(1.0, 1.0, 1.0, 1.0);
    vertices = vertices.concat(vert1);
    vertices = vertices.concat(vert2);
    //for each vert a colour is needed hence the two adding of a colour to the colours array
    colours = colours.concat(colour);
    colours = colours.concat(colour);
  }

  const numVertices = vertices.length / 2;//the vertecies array needs to be divided by two because they are stored in pairs in the vertex buffer meaning there is half the number of Attrib in the vertex array compared to the number in the vertecies array. This is simply a qurke with my implementation.

  //The vColour and vPosition needs to be the same length to be compatible with every browser that supports webGl.
  const vBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, MV.flatten(vertices), gl.STATIC_DRAW);

  const vPosition = gl.getAttribLocation(program, "a_Position");
  gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vPosition);

  const cBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, MV.flatten(colours), gl.STATIC_DRAW);

  const vColour = gl.getAttribLocation(program, "a_Color");
  gl.vertexAttribPointer(vColour, 4, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vColour);

  const vLoc = gl.getUniformLocation(program, "v");
  const v = MV.vec3(0.0, 0.0, 0.0);
  const w = MV.vec3(0.0, 0.02, 0.0);//initial velocity vector
  gl.clear(gl.COLOR_BUFFER_BIT);
  function render(){
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, numVertices);
  }
  function animate(){
    setTimeout(function() {
      requestAnimationFrame(animate);
      w[1]*= Math.sign(1.0-0.5- MV.length(v));//Velocity direection
      v[1] = v[1]+w[1];//uniform translation vector
      gl.uniform3fv(vLoc,v);
      render();
    }, 100)
  }
  animate();
})
document.title = "CatKatNya - w1p5"

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