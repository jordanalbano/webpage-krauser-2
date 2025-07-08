"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, User, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  const services = [
    'Inteligencia Artificial',
    'Ecommerce a Medida',
    'Soluciones en la Nube',
    'Aplicaciones Móviles',
    'Integraciones',
    'Automatización',
    'Desarrollo Personalizado'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contacto@krauser.com.ar',
      href: 'mailto:contacto@krauser.com.ar',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+54 2920 707402',
      href: 'tel:+542920707402',
      gradient: 'from-green-600 to-teal-600'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'América Latina',
      href: '#',
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden surface-secondary">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0">
        <div className="floating-orb-1 -top-40 -right-40"></div>
        <div className="floating-orb-2 bottom-1/4 -left-48"></div>
        <div className="floating-orb-3 top-1/3 left-1/4"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Hablemos de tu Proyecto</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            ¿Tenés una idea? Conversemos sobre cómo podemos ayudarte a transformarla en realidad.
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
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-purple-500" />
                Solicitar Cotización
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                      Nombre completo *
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
                        className="w-full pl-10 pr-4 py-3 glass-card rounded-lg border border-purple-500/20 bg-transparent text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                      Email *
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
                        className="w-full pl-10 pr-4 py-3 glass-card rounded-lg border border-purple-500/20 bg-transparent text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary mb-2">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 glass-card rounded-lg border border-purple-500/20 bg-transparent text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                        placeholder="Tu empresa"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                      Teléfono
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 glass-card rounded-lg border border-purple-500/20 bg-transparent text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                        placeholder="+54 11 1234-5678"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-secondary mb-2">
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 glass-card rounded-lg border border-purple-500/20 bg-transparent text-primary focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                  >
                    <option value="" className="bg-slate-800 text-white">Seleccionar servicio</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-slate-800 text-white">
                        {service}
                      </option>
                    ))}
                  </select>
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
                    rows={4}
                    className="w-full px-4 py-3 glass-card rounded-lg border border-purple-500/20 bg-transparent text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none"
                    placeholder="Contanos sobre tu proyecto, necesidades específicas, presupuesto estimado, etc."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full btn-gradient text-white py-3 font-semibold group"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Enviar Mensaje
                  <div className="ml-2 group-hover:translate-x-1 transition-transform">→</div>
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-effect-strong rounded-2xl p-8 relative overflow-hidden gradient-bg-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Información de Contacto
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 glass-card rounded-xl hover:glass-effect-strong transition-all duration-300 group"
                      whileHover={{ scale: 1.02, x: 5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${info.gradient} group-hover:scale-110 transition-transform`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted">{info.title}</div>
                        <div className="text-primary font-semibold group-hover:text-purple-400 transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="glass-effect-strong rounded-2xl p-8 relative overflow-hidden gradient-bg-3">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-transparent"></div>
              
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-primary mb-4">
                  ¿Por qué elegirnos?
                </h4>
                
                <ul className="space-y-3">
                  <li className="flex items-center text-secondary">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Respuesta en menos de 24 horas</span>
                  </li>
                  <li className="flex items-center text-secondary">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Consulta inicial gratuita</span>
                  </li>
                  <li className="flex items-center text-secondary">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Propuesta personalizada</span>
                  </li>
                  <li className="flex items-center text-secondary">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Soporte post-lanzamiento</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="text-secondary mb-4">
                ¿Preferís una llamada directa?
              </p>
              <Button
                className="btn-gradient text-white px-6 py-3 font-semibold"
                onClick={() => window.open('tel:+542920707402', '_self')}
              >
                <Phone className="mr-2 w-4 h-4" />
                Llamar Ahora
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}