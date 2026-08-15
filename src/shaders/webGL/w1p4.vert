#version 300 es
in vec4 a_Position;
in vec4 a_Color;
out vec4 v_Color;
uniform float theta;
void main() {
    v_Color = a_Color;

    float s = sin(theta);
    float c = cos(theta);

    vec2 rotated = vec2(
            c * a_Position.x - s * a_Position.y,
            s * a_Position.x + c * a_Position.y
    );

    gl_Position = vec4(rotated, 0.0, 1.0);
}
