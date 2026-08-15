#version 300 es
in vec4 a_Position;
in vec4 a_Color;
out vec4 v_Color;
uniform vec3 v;
void main() {
    v_Color = a_Color;
    gl_Position = vec4(a_Position.xyz + v, 1.0);
    gl_PointSize = 10.0;
}
