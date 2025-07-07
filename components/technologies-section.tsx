"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function TechnologiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const technologies = [
    {
      category: 'Inteligencia Artificial',
      items: [
        { name: 'OpenAI GPT', logo: '🤖' },
        { name: 'Claude AI', logo: '🧠' },
        { name: 'Google Gemini', logo: '💎' },
        { name: 'TensorFlow', logo: '🔬' },
      ],
      gradient: 'gradient-bg-1',
    },
    {
      category: 'Ecommerce',
      items: [
        { name: 'Shopify', logo: '🛍️' },
        { name: 'WooCommerce', logo: '🏪' },
        { name: 'Magento', logo: '🛒' },
        { name: 'Custom Solutions', logo: '⚙️' },
      ],
      gradient: 'gradient-bg-2',
    },
    {
      category: 'Pagos',
      items: [
        { name: 'Mercado Pago', logo: '💳' },
        { name: 'Stripe', logo: '💰' },
        { name: 'PayPal', logo: '💵' },
        { name: 'Crypto Payments', logo: '₿' },
      ],
      gradient: 'gradient-bg-3',
    },
    {
      category: 'Cloud & Infrastructure',
      items: [
        { name: 'AWS', logo: '☁️' },
        { name: 'Google Cloud', logo: '🌐' },
        { name: 'Microsoft Azure', logo: '🔷' },
        { name: 'Docker', logo: '🐳' },
      ],
      gradient: 'gradient-bg-1',
    },
    {
      category: 'Desarrollo',
      items: [
        { name: 'React/Next.js', logo: '⚛️' },
        { name: 'Node.js', logo: '🟢' },
        { name: 'Python', logo: '🐍' },
        { name: 'TypeScript', logo: '📝' },
      ],
      gradient: 'gradient-bg-2',
    },
    {
      category: 'Bases de Datos',
      items: [
        { name: 'PostgreSQL', logo: '🐘' },
        { name: 'MongoDB', logo: '🍃' },
        { name: 'Redis', logo: '🔴' },
        { name: 'Supabase', logo: '⚡' },
      ],
      gradient: 'gradient-bg-3',
    },
  ];

  return (
    <section id="technologies" className="py-20 relative overflow-hidden">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0">
        <div className="floating-orb-1 top-1/4 -left-32"></div>
        <div className="floating-orb-3 -bottom-40 -right-32"></div>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 via-slate-900/70 to-slate-800/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Tecnologías que Dominamos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trabajamos con las tecnologías más avanzadas del mercado para garantizar soluciones de vanguardia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className={`glass-effect-strong rounded-2xl p-8 relative overflow-hidden ${category.gradient}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-600/5 to-transparent"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  {category.category}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="glass-card rounded-lg p-4 text-center group hover:glass-effect-strong transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                        {tech.logo}
                      </div>
                      <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {tech.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass-effect-strong rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden gradient-bg-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿No ves tu tecnología favorita?
              </h3>
              <p className="text-gray-300 mb-6">
                Nos adaptamos constantemente a las nuevas tecnologías. Si tienes una preferencia específica, 
                conversemos sobre cómo integrarla en tu proyecto.
              </p>
              <button className="btn-gradient text-white px-8 py-3 rounded-lg font-semibold">
                Conversemos
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}