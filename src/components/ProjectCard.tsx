import { Project } from '../config/projects'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '../components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
        <div className="text-6xl">{project.icon && <project.icon size={48} />}</div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                Código
              </Button>
            </Link>
          )}
          
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank">
              <Button size="sm" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Ver demo
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}