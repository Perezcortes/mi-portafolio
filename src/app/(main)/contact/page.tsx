'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AnimatedText } from '../../../components/AnimatedText'
import { motion } from 'framer-motion'
import { Mail, Send, Loader2, MessageCircle } from 'lucide-react'
import { Button } from '../../../components/ui/button'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [isHovered, setIsHovered] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const loadingToast = toast.loading('Enviando mensaje...')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      toast.dismiss(loadingToast)

      if (res.ok) {
        toast.success('Mensaje enviado. ¡Pronto me pondré en contacto!')
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        const data = await res.json()
        toast.error(`${data.error || 'Error al enviar el mensaje'}`)
        setStatus('error')
      }
    } catch (err) {
      console.error('Error al enviar el mensaje:', err)
      toast.dismiss(loadingToast)
      toast.error('Error de red. Intenta de nuevo.')
      setStatus('error')
    }
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText
            text="Contacto"
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
          />
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            ¿Interesado en trabajar juntos o tienes alguna pregunta? No dudes en contactarme.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Información de Contacto</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Puedes contactarme directamente a través de estos medios o usando el formulario.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Correo Electrónico</h4>
                  <a
                    href="mailto:perezcortes05prz@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    perezcortes05prz@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">WhatsApp</h4>
                  <a
                    href="https://wa.me/529531447499"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    +52 953 144 7499
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="pt-2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full group relative overflow-hidden"
                      disabled={status === 'sending'}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <motion.span
                            initial={{ x: 0 }}
                            animate={{ x: isHovered ? 5 : 0 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="flex items-center justify-center"
                          >
                            Enviar Mensaje
                            <motion.span
                              initial={{ x: 0 }}
                              animate={{ x: isHovered ? 5 : 0 }}
                              transition={{ type: 'spring', stiffness: 300 }}
                            >
                              <Send className="ml-2 h-4 w-4" />
                            </motion.span>
                          </motion.span>
                          <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{
                              x: isHovered ? 0 : -100,
                              opacity: isHovered ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-blue-700/10 dark:bg-blue-400/10"
                          />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
