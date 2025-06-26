export function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={className}>
      <a href="https://www.linkedin.com/in/joseprzdev-c05" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        <span className="sr-only">LinkedIn</span>
        {/* Icono de LinkedIn */}
      </a>
      {/* Agrega más redes sociales según sea necesario */}
    </div>
  )
}