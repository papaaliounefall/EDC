import React from 'react';
import { APPROACH_STEPS } from '../data/edcData';

export const Approach: React.FC = () => {
  return (
    <section id="approche" className="bg-[#1F1F1B] text-[#F6F6F2] py-24 sm:py-32 border-t border-[#292924]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#D9A441] uppercase">
              04 — MÉTHODE D’EXÉCUTION
            </span>
            <span className="w-8 h-[1px] bg-[#4D4D46]" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            De l’idée à la réalisation.
          </h2>
          <p className="text-base sm:text-lg text-[#D8D8CF] font-light leading-relaxed">
            Une méthodologie structurée pour garantir la conformité aux normes, la maîtrise des coûts et le respect des délais convenus.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-[1px] bg-[#383832] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {APPROACH_STEPS.map((step, index) => (
              <div
                key={step.number}
                className="group flex flex-col justify-between p-6 bg-[#292924]/40 border border-[#383832] hover:border-[#D9A441] transition-all duration-300 relative"
              >
                <div>
                  {/* Step Marker */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 bg-[#1F1F1B] border border-[#4D4D46] group-hover:border-[#D9A441] flex items-center justify-center font-mono text-sm font-bold text-[#D9A441]">
                      {step.number}
                    </span>
                    <span className="font-mono text-[11px] text-[#6B6B62] uppercase tracking-wider">
                      Étape {index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-white mb-3 tracking-wide group-hover:text-[#D9A441] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#D8D8CF] leading-relaxed font-light mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Technical deliverable note */}
                <div className="pt-4 border-t border-[#383832] text-[11px] font-mono text-[#8C8C80]">
                  <span className="block text-[#D9A441] uppercase font-semibold mb-0.5">Livrable</span>
                  <span>{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality commitment note */}
        <div className="mt-16 p-6 border border-[#383832] bg-[#292924]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#D9A441]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-wider text-white">
              Garantie d’engagement & Suivi de chantier
            </span>
          </div>
          <span className="text-xs text-[#D8D8CF] font-light max-w-lg">
            Réunions hebdomadaires de coordination technique et comptes-rendus d’avancement systématiques pour chaque maître d’ouvrage.
          </span>
        </div>
      </div>
    </section>
  );
};
