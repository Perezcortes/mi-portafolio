import { FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { ComponentType } from 'react'

export interface Project {
  title: string
  description: string
  technologies: string[]
  icon: ComponentType<{ size?: number }>
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Sistema de Gestión Académica',
    description:
      'Plataforma completa para gestión de estudiantes, profesores y cursos con autenticación JWT.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    icon: FaReact,
    githubUrl: 'https://github.com/Perezcortes/AI-NASA',
  },
  {
    title: 'E-commerce Full Stack',
    description:
      'Tienda online con carrito de compras, pasarela de pagos y panel administrativo.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    icon: SiNextdotjs,
    githubUrl: 'https://github.com/Perezcortes/AI-NASA',
    liveUrl: 'https://ecommerce-joseprz.vercel.app',
  },
  // Agrega más proyectos si deseas...
]