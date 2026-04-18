'use client';

import { ASSETS } from "@/app/assets";
import { Camera, Globe, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-stone-950 text-white py-20 border-t border-gold-900/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-display text-gold-500 mb-6">{ASSETS.brand.name}</h2>
            <p className="text-stone-400 font-light text-sm leading-relaxed mb-8">
              {ASSETS.brand.slogan}. Oferecemos o que há de mais luxuoso em cortinas e automação para ambientes exclusivos.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all duration-300">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all duration-300">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-500 font-medium mb-6 uppercase tracking-widest text-xs">Menu Principal</h4>
            <ul className="space-y-4 text-stone-400 font-light text-sm">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Início</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Coleções</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Nosso Processo</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Tecnologia</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Instalação</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold-500 font-medium mb-6 uppercase tracking-widest text-xs">Exclusividades</h4>
            <ul className="space-y-4 text-stone-400 font-light text-sm">
              <li>Consultoria de Design</li>
              <li>Medição Técnica Grátis</li>
              <li>Instalação Especializada</li>
              <li>Automação Residencial</li>
              <li>Manutenção de Tecidos</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-500 font-medium mb-6 uppercase tracking-widest text-xs">Contato</h4>
            <ul className="space-y-4 text-stone-400 font-light text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{ASSETS.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500" />
                <span>(00) 0000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500" />
                <span>{ASSETS.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-stone-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {ASSETS.brand.name}. Todos os direitos reservados.</p>
          <p>Design by AI Excellence</p>
        </div>
      </div>

      {/* Floating CTA for WhatsApp */}
      <motion.a 
        href={ASSETS.contact.whatsapp}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 bg-green-600 p-4 rounded-full shadow-2xl shadow-green-900/40 group"
      >
        <div className="absolute -top-12 right-0 bg-white text-stone-900 px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Fale com um consultor
        </div>
        <Phone className="w-6 h-6 text-white" />
      </motion.a>
    </footer>
  );
}
