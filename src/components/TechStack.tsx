'use client'

import { skillCategories } from '../config/skills'
import { motion } from 'framer-motion'

export function TechStack() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
        Mi <span className="text-blue-500">Stack</span> Tecnológico
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <motion.div 
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-200 dark:border-gray-700">
              {category.category}
            </h3>
            
            <div className="grid grid-cols-3 gap-4">
              {category.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div 
                    className="p-3 rounded-lg mb-2"
                    style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-sm text-center text-gray-700 dark:text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}