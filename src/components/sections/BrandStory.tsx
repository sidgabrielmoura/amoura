'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { ASSETS } from "@/app/assets";
import { useRef } from "react";

export function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="nossa-historia" ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <motion.img
                style={{ y: imgY }}
                src={ASSETS.story.image}
                alt="Nosso Ateliê"
                className="w-full h-full object-cover scale-125"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold-500/40 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold-500/40 -z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 left-8 bg-paper p-8 shadow-xl border border-gold-100"
            >
              <p className="text-gold-700 font-display text-4xl mb-1">10+</p>
              <p className="text-[10px] uppercase tracking-widest text-stone-500">Anos de Maestria</p>
            </motion.div>
          </div>

          <div className="lg:pl-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-gold-600 font-medium tracking-widest uppercase text-xs block mb-4"
            >
              Exclusividade Amoura
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl mb-8 leading-tight"
            >
              {ASSETS.story.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-stone-600 text-lg font-light leading-relaxed mb-8"
            >
              {ASSETS.story.description}
            </motion.p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center shrink-0">
                  <span className="text-gold-700 text-xs">◆</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gold-900 mb-1">Feito à Mão</h4>
                  <p className="text-sm text-stone-500 font-light">Acabamento de precisão e detalhes artesanais.</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center shrink-0">
                  <span className="text-gold-700 text-xs">◆</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gold-900 mb-1">Sob Medida</h4>
                  <p className="text-sm text-stone-500 font-light">Projetos únicos para cada ambiente.</p>
                </div>
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => document.getElementById('jornada')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-3 text-gold-800 font-medium"
            >
              <div className="w-12 h-12 rounded-full border border-gold-500 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                →
              </div>
              Conheça o nosso processo
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
