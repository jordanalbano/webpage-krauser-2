"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'general'
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contacto@krauser.com.ar',
      link: 'mailto:contacto@krauser.com.ar',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+54 2920 707402',
      link: '#',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'América Latina',
      link: '#',
    },
  ];

  const services = [
    { value: 'general', label: 'Consulta General' },
    { value: 'ecommerce-simple', label: 'E-commerce (Proyecto Común)' },
    { value: 'landing-simple', label: 'Landing Page (Proyecto Común)' },
    { value: 'blog-simple', label: 'Blog (Proyecto Común)' },
    { value: 'ai', label: 'Soluciones con IA (Personalizado)' },
    { value: 'ecommerce', label: 'E-commerce Personalizado' },
    { value: 'cloud', label: 'Cloud Solutions (Personalizado)' },
    { value: 'mobile', label: 'Apps Móviles (Personalizado)' },
    { value: 'integration', label: 'Integraciones (Personalizado)' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message based on service type
    let message = `Hola! Me interesa solicitar una cotización.\n\n`;
    message += `Nombre: ${formData.name}\n`;
    message += `Email: ${formData.email}\n`;
    if (formData.company) message += `Empresa: ${formData.company}\n`;
    
    if (formData.service === 'general') {
      message += `Tipo: Consulta General\n`;
    } else if (['ai', 'ecommerce', 'cloud', 'mobile', 'integration'].includes(formData.service)) {
      message += `Tipo: Proyecto Personalizado - ${services.find(s => s.value === formData.service)?.label}\n`;
      message += `¿Podrías contarme más detalles sobre qué tipo de ${services.find(s => s.value === formData.service)?.label.toLowerCase()} necesitas?\n`;
    }
    
    message += `\nMensaje: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/5492920707402?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0">
        <div className="floating-orb-2 -top-40 -left-40"></div>
        <div className="floating-orb-1 bottom-0 -right-48"></div>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/80 to-slate-900/95"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Hablemos de tu proyecto</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos listos para convertir tu visión en realidad. Contáctanos y comencemos a construir el futuro juntos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="glass-effect-strong rounded-2xl p-8 relative overflow-hidden gradient-bg-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-8">
                Envíanos un mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre completo
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass-card border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass-card border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Empresa
                  </label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="glass-card border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full glass-card border border-slate-600 text-white rounded-md px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  >
                    {services.map((service) => (
                      <option key={service.value} value={service.value} className="bg-slate-800">
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="glass-card border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full btn-gradient text-white py-3 font-semibold text-lg group"
                >
                  Enviar por WhatsApp
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & CTA */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Contact Info */}
            <div className="glass-effect-strong rounded-2xl p-8 relative overflow-hidden gradient-bg-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Información de contacto
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.title === 'Teléfono' ? `https://wa.me/5492920707402?text=${encodeURIComponent('Hola! Me interesa solicitar una cotización para un proyecto.')}` : info.link}
                      target={info.title === 'Teléfono' ? '_blank' : undefined}
                      className="flex items-center space-x-4 p-4 glass-card rounded-lg hover:glass-effect-strong transition-all duration-300 group"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg group-hover:scale-110 transition-transform shadow-lg">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{info.title}</div>
                        <div className="text-white font-medium">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <motion.button
                className="w-full glass-card-hover rounded-xl p-6 text-left group relative overflow-hidden gradient-bg-3"
                whileHover={{ scale: 1.02, y: -2 }}
                onClick={() => {
                  const message = 'Hola! Me gustaría agendar una reunión para discutir mi proyecto.';
                  window.open(`https://wa.me/5492920707402?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <Calendar className="w-8 h-8 text-purple-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-white font-bold">Agendar reunión</h4>
                    <p className="text-gray-400 text-sm">Conversemos en una videollamada</p>
                  </div>
                </div>
              </motion.button>
              
              <motion.button
                className="w-full glass-card-hover rounded-xl p-6 text-left group relative overflow-hidden gradient-bg-1"
                whileHover={{ scale: 1.02, y: -2 }}
                onClick={() => {
                  const message = 'Hola! Me gustaría chatear sobre mi proyecto.';
                  window.open(`https://wa.me/5492920707402?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <MessageCircle className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-white font-bold">WhatsApp</h4>
                    <p className="text-gray-400 text-sm">Chatea con nosotros directamente</p>
                  </div>
                </div>
              </motion.button>
            </div>

            {/* Response Time */}
            <div className="glass-effect-strong rounded-xl p-6 text-center relative overflow-hidden gradient-bg-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-transparent to-blue-600/10"></div>
              <div className="relative z-10">
                <h4 className="text-white font-bold mb-2">⚡ Respuesta rápida</h4>
                <p className="text-gray-400 text-sm">
                  Respondemos en menos de 2 horas en horario laboral
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}