import { LucideIcon, Laptop2, Code2, Rocket } from 'lucide-react'

export interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  icon?: LucideIcon
}

export const projects: Project[] = [
  {
    title: 'AIQuizHub',
    description: 'Plataforma de exámenes automáticos con evaluación por IA para profesores y estudiantes.',
    technologies: ['Next.js', 'FastAPI', 'MySQL', 'TailwindCSS', 'Docker'],
    githubUrl: 'https://github.com/perezcortes/aiquizhub',
    liveUrl: '',
    icon: Code2
  },
  {
    title: 'Deja Vu Body Art',
    description: 'Sitio web para automatizacion de tareas para Deja Vu Body Art',
    technologies: ['PHP', 'Apache', 'Express', 'MySQL', 'Docker'],
    githubUrl: 'https://github.com/Perezcortes/proyectoweb.git',
    liveUrl: '',
    icon: Laptop2
  },
  {
    title: 'AI-NASA',
    description: 'Explora el universo con información de la NASA, comandos por voz e IA.',
    technologies: ['Next.js', 'TailwindCSS', 'NASA API', 'Web Speech API'],
    githubUrl: 'https://github.com/perezcortes/ai-nasa',
    liveUrl: 'https://ai-nasa.vercel.app',
    icon: Rocket
  }
]
