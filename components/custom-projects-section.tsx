"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Shield, ShoppingCart, BarChart3, Code, Database, Globe, Users, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function CustomProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Health License Management System',
      client: 'Río Negro Province',
      category: 'Government System',
      type: 'Custom Web Platform',
      description: 'Web platform developed for the public health sector of Río Negro province, Argentina. Allows health professionals to manage their professional licenses efficiently and securely.',
      image: '/GueZeUYnuP.png',
      clientNeed: 'The province needed to digitize and modernize the process of managing professional health licenses, eliminating in-person procedures and optimizing response times.',
      solution: 'We developed a complete web platform that automates the entire licensing process, from initial registration to renewal, with a robust administrative panel for government management.',
      features: [
        'Online registration for health professionals',
        'License renewal and deactivation system',
        'Administration panel for user management',
        'Optimized and user-friendly interface',
        'Integration with government databases',
        'Automatic notification system',
        'Real-time reports and statistics',
        'Government-level security'
      ],
      technologies: ['Laravel (PHP)', 'Livewire', 'MySQL', 'Bootstrap', 'JavaScript'],
      url: 'https://test-salud.rionegro.gov.ar/',
      gradient: 'from-blue-600 to-cyan-600',
      bgGradient: 'gradient-bg-1',
      icon: Shield,
      duration: '8 months',
      team: '4 developers',
    },
    {
      id: 2,
      title: 'Beverage E-commerce Platform',
      client: 'Local Entrepreneur',
      category: 'E-commerce',
      type: 'Custom Online Store',
      description: 'Completely customized e-commerce solution for selling alcoholic and non-alcoholic beverages in a specific locality, with focus on user experience and conversion.',
      image: '/chrome_wLfuwLnGrm.png',
      clientNeed: 'A local entrepreneur needed a specialized e-commerce platform for beverages, with localized delivery system and inventory management specific to their business model.',
      solution: 'We created a complete online store with dynamic catalog, integrated payment system, localized delivery management and administrative panel for total business control.',
      features: [
        'Dynamic product catalog with advanced filters',
        'Shopping cart optimized for conversion',
        'Secure and simplified payment process',
        'Integration with multiple payment gateways',
        'Localized delivery system with zones',
        'Real-time inventory management',
        'Complete administrative panel',
        'Promotions and discount system'
      ],
      technologies: ['Laravel (PHP)', 'Livewire', 'MySQL', 'Tailwind CSS', 'Alpine.js'],
      url: 'https://escabiados.com.ar',
      gradient: 'from-orange-600 to-red-600',
      bgGradient: 'gradient-bg-2',
      icon: ShoppingCart,
      duration: '6 months',
      team: '3 developers',
    },
    {
      id: 3,
      title: 'Point of Sale System',
      client: 'Retail Store',
      category: 'Enterprise System',
      type: 'Custom POS Solution',
      description: 'Custom POS system developed over more than 2 years to optimize in-store sales operations and provide detailed information about commercial activity.',
      image: '/Imagen de WhatsApp 2025-07-07 a las 17.52.56_c511e788.jpg',
      clientNeed: 'A retail store required a complete point of sale system that integrated inventory, sales, employees and analytics, with scalability capacity and specific business functionalities.',
      solution: 'We developed a robust POS system with scalable architecture, payment integrations, complete inventory management and a public web catalog for remote queries.',
      features: [
        'Real-time inventory and sales tracking',
        'Complete integration with Mercado Pago',
        'Advanced employee and shift management',
        'Notes and credit/tab system',
        'Business hours configuration',
        'Public web catalog for price consultation',
        'Detailed reports and analytics',
        'Automatic backup system'
      ],
      technologies: ['Java', 'Angular', 'PostgreSQL', 'TypeScript', 'Material Design'],
      url: 'https://evan.krauser.com.ar',
      gradient: 'from-purple-600 to-blue-600',
      bgGradient: 'gradient-bg-3',
      icon: BarChart3,
      duration: '24 months',
      team: '5 developers',
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
    <section className="py-20 relative overflow-hidden surface-secondary">
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
            <span className="gradient-text">Custom Projects</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Real cases of tailored solutions developed for our clients. 
            Each project reflects our commitment to excellence and innovation.
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
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <Image
                  src={currentProj.image}
                  alt={currentProj.title}
                  fill
                  className="object-contain bg-white"
                />
              </motion.div>
              
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

                <h3 className="text-3xl font-bold text-primary mb-2">
                  {currentProj.title}
                </h3>
                
                <p className="text-purple-400 font-medium mb-2">
                  Client: {currentProj.client}
                </p>
                
                <p className="text-secondary mb-6 leading-relaxed">
                  {currentProj.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="glass-card p-3 rounded-lg">
                    <div className="text-xs text-muted mb-1">Duration</div>
                    <div className="text-sm font-semibold text-primary">{currentProj.duration}</div>
                  </div>
                  <div className="glass-card p-3 rounded-lg">
                    <div className="text-xs text-muted mb-1">Team</div>
                    <div className="text-sm font-semibold text-primary">{currentProj.team}</div>
                  </div>
                </div>

                {/* Client Need */}
                <div className="mb-6">
                  <h4 className="text-primary font-bold mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2 text-purple-500" />
                    Client Need:
                  </h4>
                  <p className="text-sm text-secondary leading-relaxed">
                    {currentProj.clientNeed}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-primary font-bold mb-2 flex items-center">
                    <Code className="w-4 h-4 mr-2 text-blue-500" />
                    Our Solution:
                  </h4>
                  <p className="text-sm text-secondary leading-relaxed">
                    {currentProj.solution}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-primary font-bold mb-3 flex items-center">
                    <Database className="w-4 h-4 mr-2 text-green-500" />
                    Technologies used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProj.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 glass-card rounded-full text-xs text-secondary border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <Button 
                  className="btn-gradient text-white font-semibold group"
                  onClick={() => window.open(currentProj.url, '_blank')}
                >
                  <Globe className="mr-2 w-4 h-4" />
                  Visit Website
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                </Button>
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

        {/* Features Grid for Current Project */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Key Features - {currentProj.title}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentProj.features.map((feature, index) => (
              <motion.div
                key={`${currentProject}-${index}`}
                className="glass-card-hover p-4 rounded-xl text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="w-2 h-2 bg-purple-500 rounded-full mx-auto mb-3 group-hover:scale-125 transition-transform"></div>
                <p className="text-sm text-secondary group-hover:text-primary transition-colors">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects Summary */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`glass-card-hover rounded-xl p-6 group cursor-pointer relative overflow-hidden ${
                index === currentProject ? 'ring-2 ring-purple-500/50' : ''
              }`}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setCurrentProject(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-sm text-purple-400 mb-2">
                  {project.client}
                </p>
                
                <p className="text-sm text-secondary mb-4 leading-relaxed">
                  {project.type}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted">{project.duration}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-purple-400 hover:text-purple-300 p-0 h-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.url, '_blank');
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}