'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { ASSETS } from "@/app/assets";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for the background image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[100vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src={ASSETS.hero.backgroundImage} 
          alt="Amoura Cortinas" 
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Curtain Reveal Overlays */}
      <motion.div 
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.5, ease: [0.87, 0, 0.13, 1], delay: 0.5 }}
        style={{ originX: 0 }}
        className="absolute inset-y-0 left-0 w-1/2 bg-paper z-50 pointer-events-none border-r border-gold-400/30"
      />
      <motion.div 
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.5, ease: [0.87, 0, 0.13, 1], delay: 0.5 }}
        style={{ originX: 1 }}
        className="absolute inset-y-0 right-0 w-1/2 bg-paper z-50 pointer-events-none border-l border-gold-400/30"
      />

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <span className="inline-block text-gold-400 font-medium tracking-[0.2em] uppercase text-sm mb-4">
            {ASSETS.brand.name}
          </span>
          <h1 className="text-5xl md:text-8xl mb-6 max-w-4xl mx-auto leading-[1.1]">
            {ASSETS.hero.title}
          </h1>
          <p className="text-lg md:text-xl font-light text-white/80 max-w-2xl mx-auto mb-10">
            {ASSETS.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-gold-950 font-semibold rounded-sm transition-all duration-300 flex items-center gap-2 group">
              {ASSETS.hero.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-medium rounded-sm transition-all duration-300 backdrop-blur-sm">
              Conheça Amoura
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500/50 to-transparent" />
        <span className="text-[10px] text-gold-400/60 uppercase tracking-[0.3em]">Scroll</span>
      </motion.div>
    </section>
  );
}
