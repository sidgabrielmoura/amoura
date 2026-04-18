'use client';

import { motion, AnimatePresence } from "framer-motion";
import { ASSETS } from "@/app/assets";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-paper relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold-600 font-medium tracking-widest uppercase text-xs block mb-4"
            >
              Suporte Personalizado
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl mb-6"
            >
              {ASSETS.faq.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-stone-500 font-light"
            >
              Tudo o que você precisa saber para transformar seu ambiente com a excelência Amoura. Não encontrou sua dúvida? Entre em contato por WhatsApp.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-12 p-8 bg-gold-950 text-white rounded-sm relative overflow-hidden group"
            >
              <HelpCircle className="absolute -bottom-4 -right-4 w-24 h-24 text-white opacity-5 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-display mb-2 text-gold-400">Atendimento Técnico</h4>
              <p className="text-sm text-stone-300 font-light mb-6">Nossos consultores estão prontos para tirar dúvidas específicas sobre cores e tecidos.</p>
              <a 
                href={ASSETS.contact.whatsapp}
                className="inline-flex items-center gap-2 text-gold-400 font-medium hover:text-white transition-colors"
              >
                Falar com consultor <Plus className="w-4 h-4 rotate-45" />
              </a>
            </motion.div>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {ASSETS.faq.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gold-900/10 last:border-0"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className={cn(
                    "text-lg transition-colors duration-300",
                    openIndex === index ? "text-gold-600 font-medium" : "text-stone-700 group-hover:text-gold-500"
                  )}>
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-gold-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-stone-300 group-hover:text-gold-500" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-stone-500 font-light leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Utility function in a separate line to avoid import issues if not globally available
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
