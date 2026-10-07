import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { SERVICES_LIST } from '../data/edcData';

export const Services: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="bg-[#1F1F1B] text-[#F6F6F2] py-24 sm:py-32 border-t border-[#292924]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#383832]">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#D9A441] uppercase">
                02 — EXPERTISE
              </span>
              <span className="w-8 h-[1px] bg-[#4D4D46]" aria-hidden="true" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Nos domaines d’intervention
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#D8D8CF] max-w-md font-light leading-relaxed">
            Des solutions adaptées aux exigences de chaque projet, de la construction aux travaux d’infrastructure.
          </p>
        </div>

        {/* Editorial Horizontal Stack with Expanding Detail */}
        <div className="divide-y divide-[#383832] border-y border-[#383832]">
          {SERVICES_LIST.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={service.number}
                className={`group transition-colors duration-200 ${
                  isExpanded ? 'bg-[#292924]/60' : 'hover:bg-[#292924]/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleExpand(index)}
                  className="w-full py-8 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9A441]"
                  aria-expanded={isExpanded}
                >
                  {/* Left: Number + Title */}
                  <div className="flex items-baseline sm:items-center gap-6 sm:gap-12">
                    <span className="font-mono text-lg sm:text-xl text-[#D9A441] font-semibold tracking-wider">
                      {service.number}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#D9A441] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Middle: Short editorial description */}
                  <div className="md:max-w-md md:px-4 text-sm sm:text-base text-[#D8D8CF] font-light">
                    {service.shortDesc}
                  </div>

                  {/* Right: Expand Affordance */}
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D9A441] shrink-0 self-end md:self-auto">
                    <span className="hidden sm:inline-block uppercase tracking-wider text-[11px]">
                      {isExpanded ? 'Détails' : 'Explorer'}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-none border border-[#4D4D46] group-hover:border-[#D9A441] flex items-center justify-center transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 bg-[#D9A441] text-[#1F1F1B] border-[#D9A441]' : 'text-white'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Technical Details */}
                {isExpanded && (
                  <div className="px-4 sm:px-12 pb-8 pt-2 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#383832]/60 animate-in fade-in duration-300">
                    <div className="md:col-span-6 space-y-4">
                      <h4 className="text-xs uppercase tracking-widest font-mono text-[#D9A441]">
                        Approche & Conduite technique
                      </h4>
                      <p className="text-sm sm:text-base text-[#EBEBE4] leading-relaxed font-light">
                        {service.fullDesc}
                      </p>
                    </div>

                    <div className="md:col-span-6">
                      <h4 className="text-xs uppercase tracking-widest font-mono text-[#D9A441] mb-4">
                        Prestations & Typologies prises en charge
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.interventions.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D8D8CF] bg-[#1F1F1B] p-3 border border-[#383832]"
                          >
                            <span className="w-1.5 h-1.5 bg-[#D9A441] mt-1.5 shrink-0" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Note on adaptability */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#8C8C80] border-t border-[#292924] pt-6">
          <span>* Prestations configurables selon le cahier des charges et le dossier d’ingénierie.</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-[#D9A441] hover:underline"
          >
            <span>Soumettre les plans de votre ouvrage</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
