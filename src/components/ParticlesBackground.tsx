'use client'

import { useEffect } from 'react'
import { loadSlim } from 'tsparticles-slim'
import { tsParticles, type Engine } from 'tsparticles-engine'

export function ParticlesBackground() {
  useEffect(() => {
    const initParticles = async () => {
      await loadSlim(tsParticles)
      
      await tsParticles.load({
        id: "tsparticles",
        options: {
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#1126D6",
            },
            links: {
              color: "#1126D6",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        },
      })
    }

    initParticles()
  }, [])

  return (
    <div 
      id="tsparticles" 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  )
}