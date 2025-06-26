'use client'

import { SocialIcons } from './SocialIcons'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sección superior con columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Columna 1: Información personal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                José Pérez
              </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Desarrollador Full Stack enfocado en soluciones modernas, accesibles y de alto rendimiento.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                <Link href="mailto:perezcortes05prz@gmail.com" className="hover:underline">
                  perezcortes05prz@gmail.com
                </Link>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                <span>+52 953 144 7499</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                <span>Huajuapan de León, Oaxaca, México</span>
              </div>
            </div>
          </motion.div>

          {/* Columna 2: Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Columna 3: Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Conéctate</h3>
            <SocialIcons className="flex space-x-4" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Sígueme en mis redes para ver mis últimos proyectos y actualizaciones.
            </p>
          </motion.div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

        {/* Sección inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} José Pérez. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}