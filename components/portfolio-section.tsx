"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, ShoppingCart, FileText, PenTool, Monitor, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Gozaar - E-commerce Platform',
      category: 'E-commerce',
      type: 'Tienda Online',
      description: 'Plataforma de e-commerce completa con sistema de categorías, carrito de compras, gestión de inventario y múltiples opciones de pago.',
      image: '/chrome_vqrrPZdY94.png',
      features: [
        'Catálogo de productos con filtros avanzados',
        'Sistema de carrito y checkout optimizado',
        'Panel de administración completo',
        'Integración con pasarelas de pago',
        'Diseño responsive y moderno'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-emerald-600 to-teal-600',
      bgGradient: 'gradient-bg-1',
      icon: ShoppingCart,
    },
    {
      id: 2,
      title: 'Astro Blog - Content Platform',
      category: 'Blog',
      type: 'Plataforma de Contenido',
      description: 'Blog moderno con sistema de gestión de contenido, categorías, búsqueda avanzada y comunidad de lectores.',
      image: '/chrome_LohFGtTflb.png',
      features: [
        'Editor de contenido rico y intuitivo',
        'Sistema de categorías y etiquetas',
        'Búsqueda avanzada de artículos',
        'Comunidad y comentarios',
        'SEO optimizado para mejor ranking'
      ],
      technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'MDX'],
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'gradient-bg-2',
      icon: PenTool,
    },
    {
      id: 3,
      title: 'Azulmia - Artisan Marketplace',
      category: 'E-commerce',
      type: 'Marketplace Artesanal',
      description: 'Marketplace especializado en productos artesanales con galería visual, sistema de pedidos y gestión de artesanos.',
      image: '/kLHsavcOy8.jpg',
      features: [
        'Galería visual de productos artesanales',
        'Perfiles de artesanos y sus historias',
        'Sistema de pedidos personalizado',
        'Gestión de inventario por artesano',
        'Experiencia de compra inmersiva'
      ],
      technologies: ['Next.js', 'Supabase', 'Tailwind CSS', 'Stripe'],
      gradient: 'from-orange-600 to-red-600',
      bgGradient: 'gradient-bg-3',
      icon: ShoppingCart,
    },
    {
      id: 4,
      title: 'Evan - Business Landing',
      category: 'Landing Page',
      type: 'Página Comercial',
      description: 'Landing page moderna para ecosistema comercial con diseño elegante, información clara y llamadas a la acción efectivas.',
      image: '/chrome_FKVw0kKxVS.png',
      features: [
        'Diseño moderno y profesional',
        'Información clara del servicio',
        'Formularios de contacto optimizados',
        'Animaciones suaves y atractivas',
        'Optimizada para conversiones'
      ],
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Next.js'],
      gradient: 'from-blue-600 to-purple-600',
      bgGradient: 'gradient-bg-1',
      icon: Monitor,
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProj = projects[currentProject];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0">
        <div className="floating-orb-1 -top-40 -right-40"></div>
        <div className="floating-orb-2 bottom-1/4 -left-48"></div>
        <div className="floating-orb-3 top-1/3 left-1/4"></div>
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
            <span className="gradient-text">Nuestros Proyectos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre algunos de nuestros trabajos más destacados y cómo hemos ayudado a empresas a transformar su presencia digital.
          </p>
        </motion.div>

        {/* Featured Project Display */}
        <motion.div
          className="glass-effect-strong rounded-2xl overflow-hidden mb-12 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Project Image */}
            <div className="relative h-96 lg:h-auto overflow-hidden">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <Image
                  src={currentProj.image}
                  alt={currentProj.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent lg:hidden"></div>
              
              {/* Navigation Arrows */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                  onClick={prevProject}
                  className="p-3 glass-effect rounded-full hover:neon-glow transition-all duration-300 group"
                >
                  <ArrowLeft className="w-6 h-6 text-white group-hover:text-purple-400" />
                </button>
              </div>
              
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  onClick={nextProject}
                  className="p-3 glass-effect rounded-full hover:neon-glow transition-all duration-300 group"
                >
                  <ArrowRight className="w-6 h-6 text-white group-hover:text-purple-400" />
                </button>
              </div>
            </div>

            {/* Project Info */}
            <div className={`p-8 lg:p-12 relative ${currentProj.bgGradient}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-transparent"></div>
              
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-10"
              >
                {/* Category Badge */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${currentProj.gradient}`}>
                    <currentProj.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-purple-400 font-semibold text-sm uppercase tracking-wide">
                    {currentProj.category}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">
                  {currentProj.title}
                </h3>
                
                <p className="text-purple-400 font-medium mb-4">
                  {currentProj.type}
                </p>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {currentProj.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-bold mb-3">Características principales:</h4>
                  <ul className="space-y-2">
                    {currentProj.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-white font-bold mb-3">Tecnologías utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProj.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 glass-card rounded-full text-xs text-gray-300 border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="btn-gradient text-white font-semibold group">
                    Ver Proyecto Completo
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white glass-effect"
                  >
                    Solicitar Similar
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Project Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProject 
                  ? 'bg-purple-500 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* All Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`glass-card-hover rounded-xl overflow-hidden group cursor-pointer ${
                index === currentProject ? 'ring-2 ring-purple-500/50' : ''
              }`}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setCurrentProject(index)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} shadow-lg`}>
                    <project.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="text-white font-bold text-sm mb-1 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-xs">
                  {project.type}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass-effect-strong rounded-2xl p-8 max-w-3xl mx-auto relative overflow-hidden gradient-bg-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Te gustó alguno de estos proyectos?
              </h3>
              <p className="text-gray-300 mb-6">
                Podemos crear algo similar o completamente personalizado para tu negocio. 
                Cada proyecto es único y se adapta a las necesidades específicas de nuestros clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-gradient text-white px-8 py-3 font-semibold">
                  Solicitar Proyecto Similar
                </Button>
                <Button 
                  variant="outline" 
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white glass-effect"
                >
                  Ver Más Proyectos
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}