declare module '@/types/webgl2-utils' {
    export interface WebGLUtils {
        createProgram(
            gl: WebGL2RenderingContext,
            shaders: WebGLShader[],
            attribs?: string[],
            locations?: number[],
            errorCallback?: (msg: string) => void
        ): WebGLProgram | null

        createProgramFromSources(
            gl: WebGL2RenderingContext,
            shaderSources: [string, string],
            attribs?: string[],
            locations?: number[],
            errorCallback?: (msg: string) => void
        ): WebGLProgram | null

        resizeCanvasToDisplaySize(
            canvas: HTMLCanvasElement,
            multiplier?: number
        ): boolean
    }

    const utils: WebGLUtils
    export default utils
}
