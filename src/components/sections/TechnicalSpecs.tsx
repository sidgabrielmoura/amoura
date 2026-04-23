'use client';

import { motion } from "framer-motion";
import { Smartphone, Moon, Sun, Wind, ShieldCheck, Ruler } from "lucide-react";

const specs = [
  {
    icon: Moon,
    title: "Blackout Absoluto",
    description: "Tecnologia de bloqueio total de luz para um descanso impecável.",
    color: "bg-stone-900",
    textColor: "text-white"
  },
  {
    icon: Smartphone,
    title: "Automação Inteligente",
    description: "Integração total com Alexa, Google Home e Siri Shortcuts.",
    color: "bg-gold-50",
    textColor: "text-gold-950"
  },
  {
    icon: Sun,
    title: "Proteção UV",
    description: "Filtros solares que protegem seu mobiliário e piso do desbotamento.",
    color: "bg-white",
    textColor: "text-stone-900"
  },
  {
    icon: Wind,
    title: "Conforto Térmico",
    description: "Tecidos que ajudam na manutenção da temperatura ideal do ambiente.",
    color: "bg-white",
    textColor: "text-stone-900"
  },
  {
    icon: ShieldCheck,
    title: "Antialérgico",
    description: "Tratamento especial nas fibras que repele poeira e ácaros.",
    color: "bg-white",
    textColor: "text-stone-900"
  },
  {
    icon: Ruler,
    title: "Concepção Sob Medida",
    description: "Corte e acabamento personalizados para cada janela e vão.",
    color: "bg-gold-500",
    textColor: "text-gold-950"
  }
];

export function TechnicalSpecs() {
  return (
    <section id="detalhes" className="py-24 bg-paper-dark">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold-600 font-medium tracking-widest uppercase text-xs block mb-4"
          >
            Excelência Técnica
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mb-6"
          >
            A tecnologia a serviço do seu conforto.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-stone-500 font-light"
          >
            Combinamos a tradição da alta alfaiataria com as inovações mais modernas do mercado de decoração.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`p-10 rounded-sm border border-gold-200/20 shadow-sm flex flex-col items-center text-center group ${spec.color} ${spec.textColor}`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:rotate-12 ${
                spec.color === 'bg-white' || spec.color === 'bg-gold-50' || spec.color === 'bg-paper-dark' 
                  ? 'bg-gold-100 text-gold-600' 
                  : 'bg-white/20 text-white'
              }`}>
                <spec.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl mb-4">{spec.title}</h3>
              <p className="font-light text-sm opacity-80 leading-relaxed">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
