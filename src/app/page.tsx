import { AnimatedText } from '../components/AnimatedText'
import { TechStack } from '../components/TechStack'
import { SocialIcons } from '../components/SocialIcons'
import Link from 'next/link'
import { Button } from '../components/ui/button'
import { MoveRight, Download } from 'lucide-react'
import { ParticlesBackground } from '../components/ParticlesBackground'

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-12 px-4 sm:px-6 lg:px-8 text-center">
      {/* Fondo de partículas (opcional) */}
      <ParticlesBackground />
      
      <div className="relative z-10 max-w-4xl">
        <div className="mb-12 space-y-8">
          <AnimatedText 
            text="Hola, soy José Pérez" 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
          />
          
          <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-6 animate-fade-in">
            <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-300 dark:to-indigo-300 text-transparent bg-clip-text">
              Full Stack Developer
            </span>
          </h2>
          
          <SocialIcons className="flex justify-center space-x-4 mb-8 animate-fade-in delay-100" />
          
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8 animate-fade-in delay-200">
            Desarrollador de software apasionado por crear soluciones robustas, escalables y centradas en la experiencia del usuario.
            Con experiencia en tecnologías modernas y enfoque en resultados de calidad.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-300">
            <Link href="/projects">
              <Button className="group flex items-center gap-2 px-6 py-3">
                Ver mis proyectos
                <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="px-6 py-3">
                Contáctame
              </Button>
            </Link>
            <Button variant="secondary" className="px-6 py-3 group">
              <a 
                href="/CV-Jose-Perez.pdf" 
                download="CV-Jose-Perez.pdf"
                className="flex items-center gap-2"
              >
                Descargar CV
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </Button>
          </div>
        </div>
        
        <TechStack />
      </div>
    </div>
  )
}