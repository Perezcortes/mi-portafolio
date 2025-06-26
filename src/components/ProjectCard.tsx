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
  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center relative group">
        {Icon && (
          <Icon 
            size={48} 
            className="text-white transition-transform duration-300 group-hover:scale-110" 
          />
        )}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-5 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-blue-100/70 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank" className="flex-1">
              <Button 
                variant="outline" 
                className="w-full flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-gray-700"
              >
                <Github className="h-4 w-4" />
                Código
              </Button>
            </Link>
          )}
          
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" className="flex-1">
              <Button className="w-full flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Demo
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}