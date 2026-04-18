'use client';

import { motion, AnimatePresence } from "framer-motion";
import { ASSETS } from "@/app/assets";
import { useState } from "react";
import { X, Maximize2, ChevronRight } from "lucide-react";

export function EnvironmentsSection() {
  const [selectedEnv, setSelectedEnv] = useState<typeof ASSETS.environments.items[0] | null>(null);

  return (
    <section id="ambientes" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold-600 font-medium tracking-widest uppercase text-xs block mb-4"
          >
            Inspirando Espaços
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl"
          >
            {ASSETS.environments.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-stone-500 font-light mt-4 max-w-2xl mx-auto"
          >
            {ASSETS.environments.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ASSETS.environments.items.map((env, index) => (
            <motion.div
              key={env.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
              onClick={() => setSelectedEnv(env)}
            >
              <img 
                src={env.image} 
                alt={env.name} 
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-2xl text-white font-display mb-2">{env.name}</h3>
                <div className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Explorar ambiente <ChevronRight className="w-3 h-3" />
                </div>
              </div>

              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Expansion */}
      <AnimatePresence>
        {selectedEnv && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEnv(null)}
              className="absolute inset-0 bg-stone-950/95 backdrop-blur-lg"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="relative w-full max-w-6xl bg-white overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Image Gallery Side */}
              <div className="md:w-3/5 h-[300px] md:h-auto overflow-y-auto scrollbar-hide">
                <div className="flex flex-col gap-2 p-2">
                  {selectedEnv.gallery.map((img, i) => (
                    <img key={i} src={img} alt={selectedEnv.name} className="w-full object-cover" />
                  ))}
                </div>
              </div>

              {/* Description Side */}
              <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-paper relative">
                <button 
                  onClick={() => setSelectedEnv(null)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-100 transition-colors"
                >
                  <X className="w-6 h-6 text-stone-400" />
                </button>

                <span className="text-gold-600 font-medium tracking-widest uppercase text-xs block mb-4">
                  Projeto Exclusivo
                </span>
                <h3 className="text-4xl md:text-5xl text-stone-900 mb-6">{selectedEnv.name}</h3>
                <p className="text-stone-600 font-light leading-relaxed mb-10">
                  {selectedEnv.description}
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-600">
                      01
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900">Tecido Selecionado</h4>
                      <p className="text-sm text-stone-500">Linho rústico com trama aberta.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-600">
                      02
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900">Sistema de Trilho</h4>
                      <p className="text-sm text-stone-500">Trilho suíço com movimento suave.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <button className="w-full py-4 bg-gold-500 text-gold-950 font-bold uppercase tracking-widest text-sm hover:bg-gold-600 transition-colors">
                    Solicitar orçamento para este ambiente
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
