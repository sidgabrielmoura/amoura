'use client';

import { motion } from "framer-motion";
import { Ruler, NotepadText, Hammer, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Ruler,
    title: "Medição Técnica",
    description: "Nossos especialistas visitam seu espaço para capturar cada detalhe milimétrico."
  },
  {
    icon: NotepadText,
    title: "Escolha e Design",
    description: "Consultoria exclusiva para selecionar o tecido, a prega e o sistema ideal para seu ambiente."
  },
  {
    icon: Hammer,
    title: "Confecção e Instalação",
    description: "Cada cortina é produzida em nosso ateliê e instalada com precisão absoluta pela nossa equipe."
  },
  {
    icon: Sparkles,
    title: "Entrega Perfeita",
    description: "Seu lar transformado com a sofisticação e o caimento que só a Amoura entrega."
  }
];

export function InstallationJourney() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mb-6"
          >
            Sua jornada Amoura
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="w-24 h-1 bg-gold-500 mx-auto"
          />
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gold-200 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-paper border-2 border-gold-500 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-gold-100">
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="px-4">
                  <span className="text-xs font-bold text-gold-300 mb-2 block tracking-tighter">0{index + 1}</span>
                  <h3 className="text-xl mb-3 text-gold-900">{step.title}</h3>
                  <p className="text-sm font-light text-stone-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
