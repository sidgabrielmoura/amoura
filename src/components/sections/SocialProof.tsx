'use client';

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Silveira",
    role: "Arquiteta de Interiores",
    content: "A Amoura é minha parceira em todos os projetos de alto padrão. O caimento dos tecidos e a precisão da instalação são inigualáveis.",
    stars: 5
  },
  {
    name: "Ricardo Mendes",
    role: "Proprietário no Mansão das Flores",
    content: "Contratamos a automação para toda a casa. A facilidade de controlar as cortinas pelo celular trouxe um conforto que não sabíamos que precisávamos.",
    stars: 5
  },
  {
    name: "Juliana Costa",
    role: "Digital Influencer",
    content: "Minhas janelas agora são o cenário preferido das minhas fotos. O linho premium da Amoura transformou completamente a atmosfera da minha sala.",
    stars: 5
  }
];

export function SocialProof() {
  return (
    <section className="py-24 bg-paper relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none">
        <Quote className="w-64 h-64 text-gold-950" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold-600 font-medium tracking-widest uppercase text-xs block mb-4"
          >
            Vozes de Satisfação
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl"
          >
            O que nossos clientes dizem
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 shadow-sm border border-gold-100/50 flex flex-col items-center text-center relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(test.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-stone-600 font-light italic leading-relaxed mb-8 flex-grow">
                "{test.content}"
              </p>
              <div>
                <h4 className="font-semibold text-gold-950">{test.name}</h4>
                <p className="text-xs text-stone-400 uppercase tracking-widest mt-1">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
