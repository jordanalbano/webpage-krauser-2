"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Send, MessageCircle, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShowError(false);
    setShowSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Success
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        // Error from server
        setErrorMessage(data.error || 'Error al enviar el mensaje');
        setShowError(true);
        
        // Hide error message after 5 seconds
        setTimeout(() => {
          setShowError(false);
        }, 5000);
      }
    } catch (error) {
      // Network or other error
      setErrorMessage('Error de conexión. Verifica tu internet e intenta nuevamente.');
      setShowError(true);
      
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden surface-secondary">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0">
        <div className="floating-orb-1 -top-40 -right-40"></div>
        <div className="floating-orb-2 bottom-1/4 -left-48"></div>
        <div className="floating-orb-3 top-1/3 left-1/4"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Contactanos</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            ¿Tenés un proyecto en mente? Escribinos y conversemos sobre cómo podemos ayudarte.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="glass-effect-strong rounded-2xl p-8 md:p-12 relative overflow-hidden gradient-bg-1 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-transparent"></div>
          
          <div className="relative z-10">
            {/* Success Message */}
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-center"
              >
                <div className="flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-green-400 font-semibold">¡Mensaje enviado exitosamente!</span>
                </div>
                <p className="text-green-300 text-sm">
                  Tu mensaje ha sido enviado a nuestro equipo. Te responderemos pronto.
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {showError && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-center"
              >
                <div className="flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-red-400 font-semibold">Error al enviar</span>
                </div>
                <p className="text-red-300 text-sm">
                  {errorMessage}
                </p>
              </motion.div>
            )}
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Envíanos un mensaje
              </h3>
              <p className="text-secondary">
                Completá el formulario y te responderemos a la brevedad
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                  Nombre *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full pl-10 pr-4 py-3 glass-card rounded-lg border border-purple-500/20 bg-transparent text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tu nombre completo"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                  Correo electrónico *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full pl-10 pr-4 py-3 glass-card rounded-lg border border-purple-500/20 bg-transparent text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  rows={5}
                  className="w-full px-4 py-3 glass-card rounded-lg border border-purple-500/20 bg-transparent text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Contanos sobre tu proyecto, necesidades específicas, presupuesto estimado, etc."
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full btn-gradient text-white py-4 font-semibold text-lg group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    Enviar mensaje
                    <div className="ml-2 group-hover:translate-x-1 transition-transform">→</div>
                  </>
                )}
              </Button>
            </form>

            {/* Contact Email Display */}
            <div className="mt-8 pt-6 border-t border-purple-500/20">
              <div className="text-center">
                <p className="text-sm text-muted mb-2">También podés escribirnos directamente a:</p>
                <a 
                  href="mailto:evillablanca@krauser.com.ar"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors group"
                >
                  <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  evillablanca@krauser.com.ar
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-effect rounded-xl p-6 max-w-md mx-auto">
            <h4 className="text-lg font-bold text-primary mb-3">
              ¿Qué podés esperar?
            </h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li className="flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                Respuesta en menos de 24 horas
              </li>
              <li className="flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                Consulta inicial gratuita
              </li>
              <li className="flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                Propuesta personalizada
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}