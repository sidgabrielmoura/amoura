'use client';

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ASSETS } from "@/app/assets";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ASSETS.hero.slides;
  
  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="inicio" ref={containerRef} className="relative h-[100vh] w-full overflow-hidden flex items-center justify-center bg-stone-900">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0 bg-stone-900"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <motion.div style={{ y }} className="w-full h-full">
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Curtain Reveal Overlays (Only on initial load) */}
      <motion.div 
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.8, ease: [0.87, 0, 0.13, 1], delay: 0.2 }}
        style={{ originX: 0 }}
        className="absolute inset-y-0 left-0 w-1/2 bg-paper z-50 pointer-events-none border-r border-gold-400/30"
      />
      <motion.div 
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1.8, ease: [0.87, 0, 0.13, 1], delay: 0.2 }}
        style={{ originX: 1 }}
        className="absolute inset-y-0 right-0 w-1/2 bg-paper z-50 pointer-events-none border-l border-gold-400/30"
      />

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block text-gold-400 font-medium tracking-[0.2em] uppercase text-sm mb-4">
            {ASSETS.brand.name}
          </span>
          
          <h1 className="text-5xl md:text-8xl mb-6 leading-[1.1]">
            {ASSETS.hero.title}
          </h1>
          
          <p className="text-lg md:text-xl font-light text-white/80 max-w-2xl mx-auto mb-10">
            {ASSETS.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-gold-950 font-semibold rounded-sm transition-all duration-300 flex items-center gap-2 group"
            >
              {ASSETS.hero.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('nossa-historia')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-medium rounded-sm transition-all duration-300 backdrop-blur-sm"
            >
              Conheça Amoura
            </button>
          </div>
        </motion.div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-12 left-0 w-full flex items-center justify-between px-12 z-30">
        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={cn(
                "h-1 transition-all duration-500",
                currentSlide === i ? "w-12 bg-gold-500" : "w-6 bg-white/20"
              )}
            />
          ))}
        </div>
      </div>

      {/* Auto-play progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 z-30">
        <motion.div
          key={currentSlide}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 6, ease: "linear" }}
          style={{ originX: 0 }}
          className="h-full bg-gold-500/50"
        />
      </div>
    </section>
  );
}
