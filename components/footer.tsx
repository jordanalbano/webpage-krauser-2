"use client";

import { motion } from 'framer-motion';
import { Brain, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Servicios': [
      'Inteligencia Artificial',
      'Ecommerce',
      'Cloud Solutions',
      'Apps Móviles',
      'Integraciones',
      'Automatización',
    ],
    'Empresa': [
      'Sobre nosotros',
      'Casos de éxito',
      'Blog',
      'Careers',
      'Contacto',
    ],
    'Recursos': [
      'Documentación',
      'Soporte',
      'FAQ',
      'Términos de servicio',
      'Política de privacidad',
    ],
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="relative surface-secondary border-t border-border">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Brain className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold gradient-text">Krauser</span>
            </div>
            <p className="text-secondary mb-6 leading-relaxed">
              Desarrollamos el futuro del software con soluciones innovadoras de IA, 
              cloud y automatización para empresas visionarias.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 glass-effect rounded-lg hover:neon-glow transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (categoryIndex + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-primary font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-muted hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          className="glass-effect rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-primary font-bold text-xl mb-6 text-center">
            ¿Tienes un proyecto en mente?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-purple-500" />
              <span className="text-secondary">hola@krauser.dev</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-blue-500" />
              <span className="text-secondary">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-green-500" />
              <span className="text-secondary">América Latina</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted text-sm mb-4 md:mb-0">
            © {currentYear} Krauser. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-1 text-sm">
            <span className="text-muted">Hecho con</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span className="text-muted">para el futuro</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}