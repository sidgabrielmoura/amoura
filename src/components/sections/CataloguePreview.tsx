'use client';

import { motion } from "framer-motion";
import { ASSETS } from "@/app/assets";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export function CataloguePreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth / 2
        : scrollLeft + clientWidth / 2;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="catalogo" className="py-24 bg-paper relative overflow-hidden">
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

          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gold-200 flex items-center justify-center hover:bg-gold-50 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-gold-700" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-gold-200 flex items-center justify-center hover:bg-gold-50 transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5 text-gold-700" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ASSETS.catalog.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="min-w-[280px] md:min-w-[380px] flex flex-col group cursor-pointer snap-start"
            >
              {/* Image Container with Fixed Height */}
              <div className="w-full h-[400px] md:h-[520px] shrink-0 overflow-hidden relative mb-6 bg-stone-100">
                <div className="absolute inset-0 bg-gold-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback for broken images
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop";
                  }}
                />
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="h-[2px] w-full bg-gold-400 mb-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 delay-100" />
                  <p className="text-white text-sm font-light italic">
                    Descubra a coleção {item.name}
                  </p>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-2xl mb-2 text-gold-900 font-display">{item.name}</h3>
                <p className="text-stone-500 font-light text-sm italic">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

