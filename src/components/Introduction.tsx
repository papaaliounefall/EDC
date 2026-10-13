import React from 'react';
import introImg from '../assets/images/edc_intro_detail_1791383486997.webp';

export const Introduction: React.FC = () => {
  return (
    <section id="a-propos" className="bg-[#F6F6F2] text-[#1F1F1B] py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle blueprint / grid lines */}
      <div className="absolute inset-0 bg-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Content (Left Column) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Architectural Chapter Marker */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#A67825] uppercase">
                01 — EDC
              </span>
              <span className="w-12 h-[1px] bg-[#D8D8CF]" aria-hidden="true" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1F1F1B] leading-[1.15] mb-8">
              Une construction pensée dans les détails.
            </h2>

            <div className="space-y-6 text-[#4D4D46] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              <p>
                EDC est une entreprise de construction sénégalaise basée à Mbour. Nous accompagnons
                particuliers, entreprises et collectivités de l’étude à la livraison, avec une même exigence :
                un ouvrage solide, livré dans les délais et au juste coût.
              </p>
              <p className="text-sm sm:text-base text-[#6B6B62]">
                Notre équipe travaille au plus près du terrain, dans le respect des règles de l’art et des
                normes en vigueur au Sénégal, et vous tient informé à chaque étape du chantier.
              </p>
            </div>

            {/* Architectural Blueprint Spec List */}
            <div className="mt-10 pt-8 border-t border-[#E0E0D8] grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs text-[#52524C]">
              <div>
                <span className="block text-[#A67825] text-[11px] uppercase tracking-wider mb-1 font-semibold">
                  MÉTIERS
                </span>
                <span className="text-[#1F1F1B] font-medium font-sans text-sm">
                  Bâtiment & Travaux publics
                </span>
              </div>
              <div>
                <span className="block text-[#A67825] text-[11px] uppercase tracking-wider mb-1 font-semibold">
                  CHAMP D’ACTION
                </span>
                <span className="text-[#1F1F1B] font-medium font-sans text-sm">
                  Thiès & Régions
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[#A67825] text-[11px] uppercase tracking-wider mb-1 font-semibold">
                  ENGAGEMENT
                </span>
                <span className="text-[#1F1F1B] font-medium font-sans text-sm">
                  Qualité & délais tenus
                </span>
              </div>
            </div>
          </div>

          {/* Architectural Vertical Image with Technical Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#D8D8CF] p-3 bg-white shadow-sm">
              {/* Corner crosshairs like architectural blueprint */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#1F1F1B]" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#1F1F1B]" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#1F1F1B]" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#1F1F1B]" />

              <div className="overflow-hidden aspect-[3/4] bg-[#EBEBE4]">
                <img
                  src={introImg}
                  loading="lazy"
                  decoding="async"
                  alt="Détail architectural de béton banché et structure métallique - EDC"
                  className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#6B6B62] px-1">
                <span>MATIÈRE & STRUCTURE</span>
                <span className="text-[#A67825]">Mbour • Sénégal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
