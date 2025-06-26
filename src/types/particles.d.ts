declare module 'particles.js' {
  export interface ParticlesConfig {
    [key: string]: any
  }

  export function particlesJS(id: string, config: ParticlesConfig): void
}