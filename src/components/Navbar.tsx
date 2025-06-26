'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'
import { cn } from '../lib/utils'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Sobre mí', path: '/about' },
  { name: 'Habilidades', path: '/skills' },
  { name: 'Proyectos', path: '/projects' },
  { name: 'Contacto', path: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-md shadow-sm',
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 border-b'
          : 'bg-white/70 dark:bg-gray-900/70 border-b border-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          José Pérez
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={cn(
                'text-sm font-medium transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400',
                pathname === path ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'
              )}
            >
              {name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 animate-in fade-in slide-in-from-top-4">
          <div className="container py-4 flex flex-col space-y-3 px-4 sm:px-6">
            {navItems.map(({ name, path }) => (
              <Link
                key={path}
                href={path}
                className={cn(
                  'px-4 py-2 text-base font-medium transition-colors rounded-md',
                  pathname === path
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                )}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
