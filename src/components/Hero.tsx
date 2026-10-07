import React from 'react';
import { ArrowDownRight, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../data/edcData';
import { scrollToSection } from '../lib/scroll';
import heroImg from '../assets/images/hero_edc_construction_1791383474080.webp';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 sm:pb-16 bg-[#1F1F1B] overflow-hidden"
    >
      {/* Background Architectural Carrier with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          fetchPriority="high"
          decoding="async"
          alt="Chantier de construction en cours - structure béton armé et ingénierie de précision EDC"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Grayscale architectural filter + deep dark scrim */}
        <div className="absolute inset-0 bg-[#1F1F1B]/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1B] via-[#1F1F1B]/70 to-[#1F1F1B]/40" />
        <div className="absolute inset-0 bg-grid-architectural opacity-40 pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full my-auto py-12">
        <div className="max-w-4xl">
          {/* Label / Architectural Kicker */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-6 h-[1.5px] bg-[#D9A441]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#D9A441]">
              ENTREPRISE DIA CONSTRUCTION
            </span>
          </div>

          {/* Grand Architectural Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-8">
            Construire avec précision.{' '}
            <span className="block text-[#D9A441] font-extrabold">Bâtir pour durer.</span>
          </h1>

          {/* Subtitle / Proposition */}
          <p className="text-lg sm:text-xl text-[#EBEBE4] leading-relaxed max-w-2xl font-light mb-10">
            {COMPANY_INFO.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 bg-[#D9A441] text-[#1F1F1B] hover:bg-[#C59132] font-semibold text-xs tracking-wider uppercase transition-colors text-center cursor-pointer shadow-sm active:translate-y-0.5"
            >
              Démarrer un projet
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('#realisations')}
              className="px-8 py-4 border border-[#4D4D46] hover:border-[#D9A441] text-white hover:text-[#D9A441] font-semibold text-xs tracking-wider uppercase transition-colors text-center cursor-pointer bg-[#1F1F1B]/40 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <span>Découvrir nos réalisations</span>
              <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Technical Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full border-t border-[#383832]/80 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#A8A89E]">
          <div className="flex items-center gap-3">
            <Compass className="w-4 h-4 text-[#D9A441]" aria-hidden="true" />
            <span className="text-white font-medium">{COMPANY_INFO.domains}</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#A8A89E]">
            <span>Sénégal • Dakar & Régions</span>
            <span className="text-[#4D4D46]">|</span>
            <span>Rigueur technique & Exécution</span>
          </div>
        </div>
      </div>
    </section>
  );
};
