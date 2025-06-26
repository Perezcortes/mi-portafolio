'use client'

import { AnimatedText } from '../components/AnimatedText'
import { TechStack } from '../components/TechStack'
import Link from 'next/link'
import { Button } from '../components/ui/button'
import { MoveRight, Download, ArrowDown, ChevronRight, Eye, Linkedin, Github, Mail } from 'lucide-react'
import { ParticlesBackground } from '../components/ParticlesBackground'
import { motion } from 'framer-motion'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../config/projects'

export default function Home() {
  return (
    <div className="relative">
      {/* Sección Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <ParticlesBackground />

        <div className="relative z-10 max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <AnimatedText
              text="Hola, soy José Pérez"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
            />

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 mb-6"
            >
              <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-300 dark:to-indigo-300 text-transparent bg-clip-text">
                Full Stack Developer
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-2xl mx-auto text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8"
            >
              Desarrollador de software apasionado por crear soluciones robustas, escalables y centradas en la experiencia del usuario.
            </motion.p>

            {/* Redes sociales destacadas */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex justify-center gap-4 mb-8 flex-wrap"
            >
              <a
                href="https://www.linkedin.com/in/joseprzdev-c05"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Perezcortes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors dark:bg-gray-700 dark:hover:bg-gray-800"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="mailto:perezcortes05prz@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
                <span className="hidden sm:inline">Email</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link href="/projects">
                <Button className="group flex items-center gap-2 px-6 py-3 text-base">
                  Ver mis proyectos
                  <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-6 py-3 text-base">
                  Contáctame
                </Button>
              </Link>

              {/* Grupo de botones para CV */}
              <div className="flex items-center gap-4">
                <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                  Currículum Vitae
                </span>

                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    className="px-4 py-3 text-base group"
                    asChild
                  >
                    <a
                      href="/docs/CV_Jose_Perez.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                      aria-label="Ver Currículum Vitae"
                    >
                      <Eye className="h-4 w-4" />
                    </a>
                  </Button>

                  <Button
                    variant="secondary"
                    className="px-4 py-3 text-base group"
                    asChild
                  >
                    <a
                      href="/docs/CV_Jose_Perez.pdf"
                      download="CV_Jose_Perez.pdf"
                      className="flex items-center gap-2"
                      aria-label="Descargar Currículum Vitae"
                    >
                      <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="h-8 w-8 text-gray-400 animate-bounce" />
        </motion.div>
      </section>

      {/* Sección Proyectos Destacados */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Proyectos <span className="text-blue-600 dark:text-blue-400">Destacados</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Algunos de mis trabajos más recientes y desafiantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button variant="outline" className="group">
                Ver todos los proyectos
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección Tecnologías */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Mi <span className="text-blue-600 dark:text-blue-400">Stack</span> Tecnológico
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Las herramientas y tecnologías que uso para crear soluciones de calidad
            </p>
          </div>

          <TechStack />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Listo para trabajar juntos?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Si tienes un proyecto en mente o necesitas ayuda con tu desarrollo, no dudes en contactarme.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Contactar ahora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}