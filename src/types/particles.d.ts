declare module 'particles.js' {
  export interface ParticlesConfig {
    [key: string]: unknown
  }

  export function particlesJS(id: string, config: ParticlesConfig): void
}