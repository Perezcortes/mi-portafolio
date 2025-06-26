'use client'

import { SocialIcons } from './SocialIcons'

export function Footer() {
  return (
    <footer className="border-t bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              José Pérez
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
              Desarrollador Full Stack especializado en crear soluciones digitales modernas y eficientes.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-2">
            <SocialIcons className="flex justify-center space-x-4" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} José Pérez. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}