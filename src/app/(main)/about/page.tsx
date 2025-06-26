import { AnimatedText } from '../../../components/AnimatedText'
import { Briefcase, GraduationCap, Award, Mountain, Fish, BookOpen } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <AnimatedText 
          text="Sobre Mí" 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
        />
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Columna izquierda */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="flex items-center text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                <Briefcase className="mr-2 text-blue-600 dark:text-blue-400" />
                Experiencia Profesional
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Desarrollador Full Stack con experiencia creando aplicaciones web modernas y escalables.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                He trabajado en diversos proyectos acádemicos y reales, transformando ideas en productos digitales funcionales.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="flex items-center text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                <GraduationCap className="mr-2 text-blue-600 dark:text-blue-400" />
                Formación Académica
              </h3>
              <ul className="space-y-3">
                <li className="text-gray-600 dark:text-gray-400">
                  <strong>Ingeniería en Computación</strong>
                  <p className="text-sm">Universidad Tecnológica de la Mixteca</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="flex items-center text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                <Award className="mr-2 text-blue-600 dark:text-blue-400" />
                Certificaciones
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-600 dark:text-gray-400">
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg mr-3">
                      <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <strong>Google Data Analytics</strong>
                      <p className="text-sm">Google - (2022)</p>
                    </div>
                  </div>
                </li>
                <li className="text-gray-600 dark:text-gray-400">
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg mr-3">
                      <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <strong>Google UX Design</strong>
                      <p className="text-sm">Google - (2023)</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="flex items-center text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                <Mountain className="mr-2 text-blue-600 dark:text-blue-400" />
                Pasatiempos e Intereses
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Mountain className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span>Ciclismo de montaña</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Fish className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span>Pesca deportiva</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span>Lectura</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>Aprender cosas nuevas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}