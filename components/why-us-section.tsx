"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, X, Crown, Zap, Shield, Clock } from 'lucide-react';

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const comparisons = [
    { feature: 'Desarrollo a medida', us: true, others: false },
    { feature: 'IA real implementada', us: true, others: false },
    { feature: 'Soporte 24/7', us: true, others: false },
    { feature: 'Escalabilidad garantizada', us: true, others: true },
    { feature: 'Código de calidad', us: true, others: true },
    { feature: 'Precios competitivos', us: true, others: false },
  ];

  const advantages = [
    {
      icon: Crown,
      title: 'Experiencia Premium',
      description: 'Más de 3 años perfeccionando soluciones digitales avanzadas.',
    },
    {
      icon: Zap,
      title: 'Desarrollo Ágil',
      description: 'Metodologías modernas que aceleran el tiempo de entrega.',
    },
    {
      icon: Shield,
      title: 'Seguridad Garantizada',
      description: 'Implementamos las mejores prácticas de seguridad en cada proyecto.',
    },
    {
      icon: Clock,
      title: 'Soporte Continuo',
      description: 'Acompañamiento post-lanzamiento para asegurar el éxito.',
    },
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">¿Por qué elegirnos?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No somos una agencia más. Somos tus socios tecnológicos en la construcción del futuro.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Comparison Table */}
          <motion.div
            className="glass-effect rounded-2xl p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Krauser vs Competencia
            </h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center border-b border-gray-700 pb-4 mb-6">
                <div className="text-gray-400 font-semibold">Característica</div>
                <div className="text-purple-400 font-semibold">Krauser</div>
                <div className="text-gray-400 font-semibold">Otros</div>
              </div>
              
              {comparisons.map((item, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-3 gap-4 items-center py-3 border-b border-gray-800 last:border-b-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-gray-300 text-sm">{item.feature}</div>
                  <div className="text-center">
                    {item.us ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </div>
                  <div className="text-center">
                    {item.others ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Advantages */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-xl p-6 group hover:neon-glow transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <advantage.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {advantage.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-gray-300 mb-6">
              Únete a las empresas que ya están viviendo en el futuro con nuestras soluciones.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 neon-glow">
              Comenzar ahora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}