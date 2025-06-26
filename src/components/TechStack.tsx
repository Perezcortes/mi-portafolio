'use client'

import { skills } from '../config/skills'
import { motion } from 'framer-motion'

export function TechStack() {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
        Tecnologías que uso
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-2">
                <Icon size={40} />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
