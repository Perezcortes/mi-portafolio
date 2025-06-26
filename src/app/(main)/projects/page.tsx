'use client'

import { ProjectCard } from '../../../components/ProjectCard'
import { projects } from '../../../config/projects'
import { AnimatedText } from '../../../components/AnimatedText'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { Github } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <AnimatedText 
          text="Mis Proyectos" 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent" 
        />
        
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8">
          Algunos de mis proyectos más destacados. Cada uno representa un desafío único y una solución creativa.
        </p>
        
        <Link href="https://github.com/Perezcortes?tab=repositories" target="_blank">
          <Button variant="outline" className="gap-2">
            <Github className="h-5 w-5" />
            Ver todos en GitHub
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}