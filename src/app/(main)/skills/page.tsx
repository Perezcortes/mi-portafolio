'use client'

import { AnimatedText } from '../../../components/AnimatedText'
import { TechStack } from '../../../components/TechStack'

export default function SkillsPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedText
          text="Tecnologías que Domino"
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
        />

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Estas son las herramientas y tecnologías con las que trabajo regularmente para crear soluciones robustas y escalables.
          </p>
        </div>

        <TechStack />
      </div>
    </div>
  )
}