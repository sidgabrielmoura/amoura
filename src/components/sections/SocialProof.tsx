'use client';

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { ASSETS } from "@/app/assets";
import { useRef } from "react";

export function SocialProof() {
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
    <section id="depoimentos" className="py-24 bg-paper relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none">
        <Quote className="w-64 h-64 text-gold-950" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
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
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gold-200 flex items-center justify-center hover:bg-gold-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gold-700" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-gold-200 flex items-center justify-center hover:bg-gold-50 transition-colors"
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
          {ASSETS.testimonials.map((test, index) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[300px] md:min-w-[400px] bg-white p-10 shadow-sm border border-gold-100/50 flex flex-col items-center text-center relative snap-center"
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
