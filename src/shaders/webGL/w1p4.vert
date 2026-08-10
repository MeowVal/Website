#version 300 es
in vec4 a_Position;
in vec4 a_Color;
out vec4 v_Color;
uniform float theta;
void main() {
    v_Color = a_Color;

    gl_Position.x = -sin(theta) * a_Position.x + cos(theta) * a_Position.y;
    gl_Position.y =  sin(theta) * a_Position.y + cos(theta) * a_Position.x;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
}
