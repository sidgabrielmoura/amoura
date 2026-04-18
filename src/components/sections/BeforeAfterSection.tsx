'use client';

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { motion } from "framer-motion";
import { ASSETS } from "@/app/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function BeforeAfterSection() {
  const data = ASSETS.beforeAfter;

  return (
    <section id="antes-depois" className="py-24 bg-paper-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold-600 font-medium tracking-widest uppercase text-xs block mb-4"
          >
            A Transformação
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl"
          >
            {data.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-stone-500 font-light mt-4 max-w-2xl mx-auto"
          >
            {data.subtitle}
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto relative group">
          <div className="rounded-sm overflow-hidden shadow-2xl border border-gold-900/10">
            <ReactCompareSlider
              itemOne={
                <div className="relative h-full">
                  <ReactCompareSliderImage 
                    src={data.before} 
                    alt="Ambiente Sem Cortina" 
                  />
                  <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md text-white px-4 py-1 text-xs uppercase tracking-widest font-medium border border-white/10">
                    {data.labelBefore}
                  </div>
                </div>
              }
              itemTwo={
                <div className="relative h-full">
                  <ReactCompareSliderImage 
                    src={data.after} 
                    alt="Ambiente Amoura Cortinas" 
                  />
                  <div className="absolute top-6 right-6 bg-gold-600/80 backdrop-blur-md text-white px-4 py-1 text-xs uppercase tracking-widest font-medium border border-white/10">
                    {data.labelAfter}
                  </div>
                </div>
              }
              handle={
                <div className="h-full w-1 bg-gold-500 flex items-center justify-center relative cursor-ew-resize">
                  <div className="w-10 h-10 rounded-full bg-gold-500 shadow-lg flex items-center justify-center -translate-x-0.5 border-4 border-paper">
                    <div className="flex gap-0.5">
                      <ChevronLeft className="w-4 h-4 text-gold-950 -mr-1" />
                      <ChevronRight className="w-4 h-4 text-gold-950" />
                    </div>
                  </div>
                </div>
              }
              className="h-[500px] md:h-[700px]"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-t border-r border-gold-500/20 -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b border-l border-gold-500/20 -z-10" />
        </div>
      </div>
    </section>
  );
}
