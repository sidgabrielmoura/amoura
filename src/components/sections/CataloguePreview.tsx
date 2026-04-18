'use client';

import { motion } from "framer-motion";
import { ASSETS } from "@/app/assets";
import { cn } from "@/lib/utils";

export function CataloguePreview() {
  return (
    <section className="py-24 bg-paper relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-gold-600 font-medium tracking-widest uppercase text-xs block mb-4"
            >
              Coleções Amoura
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl"
            >
              Escolha o tecido que conta a sua história.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <button className="text-gold-700 font-semibold border-b border-gold-500 pb-1 hover:border-b-2 transition-all">
              Ver todos os catálogos
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ASSETS.catalog.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden relative mb-6">
                <div className="absolute inset-0 bg-gold-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <motion.img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="h-[2px] w-full bg-gold-400 mb-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 delay-100" />
                  <p className="text-white text-sm font-light italic">
                    Descubra a coleção {item.name}
                  </p>
                </div>
              </div>
              <h3 className="text-2xl mb-2 text-gold-900">{item.name}</h3>
              <p className="text-stone-500 font-light">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
