'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "inicio", label: "Início" },
  { id: "catalogo", label: "Catálogo" },
  { id: "antes-depois", label: "Transformação" },
  { id: "nossa-historia", label: "Nossa História" },
  { id: "ambientes", label: "Ambientes" },
  { id: "detalhes", label: "Diferenciais" },
  { id: "jornada", label: "Jornada" },
  { id: "depoimentos", label: "Depoimentos" },
  { id: "faq", label: "FAQ" },
];

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className={cn(
      "fixed bottom-8 left-8 z-[100] transition-all duration-500",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
    )}>
      <div className="relative flex flex-col items-start">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-stone-900/90 backdrop-blur-md border border-white/10 p-2 rounded-2xl mb-4 shadow-2xl min-w-[200px]"
            >
              <div className="flex flex-col gap-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="px-6 py-3 text-left text-sm text-stone-300 hover:text-white hover:bg-white/5 rounded-xl transition-all font-light tracking-wide flex items-center justify-between group"
                  >
                    {section.label}
                    <div className="w-1 h-1 rounded-full bg-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 border border-white/10 overflow-hidden group",
            isOpen ? "bg-white text-stone-900 rotate-90" : "bg-gold-500 text-gold-950"
          )}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative flex flex-col items-center">
              <Menu className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="text-[8px] uppercase tracking-tighter mt-1 font-bold opacity-60">Menu</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
