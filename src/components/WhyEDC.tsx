import React from 'react';
import { VALUES_LIST } from '../data/edcData';

export const WhyEDC: React.FC = () => {
  return (
    <section className="bg-[#F6F6F2] text-[#1F1F1B] py-24 sm:py-32 border-t border-[#D8D8CF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#A67825] uppercase">
                05 — ENGAGEMENT
              </span>
              <span className="w-8 h-[1px] bg-[#D8D8CF]" aria-hidden="true" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1F1F1B] leading-[1.15] mb-6">
              Pourquoi choisir EDC ?
            </h2>

            <p className="text-base sm:text-lg text-[#52524C] leading-relaxed mb-8 font-normal">
              Dans un secteur où la solidité de l’ouvrage engage la sécurité et le patrimoine, EDC privilégie des fondations morales et professionnelles inébranlables.
            </p>

            <div className="p-6 bg-white border border-[#D8D8CF]">
              <div className="text-xs font-mono text-[#A67825] uppercase tracking-wider mb-2 font-semibold">
                Notre principe directeur
              </div>
              <blockquote className="text-sm text-[#1F1F1B] italic leading-relaxed border-l-2 border-[#A67825] pl-4">
                « La réussite d’un chantier réside dans la cohérence absolue entre les plans d’ingénierie et la réalité du coulage sur le terrain. »
              </blockquote>
            </div>
          </div>

          {/* Right Column: 4 Editorial Value Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES_LIST.map((val) => (
              <div
                key={val.label}
                className="bg-white p-8 border border-[#D8D8CF] hover:border-[#A67825] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#A67825] font-semibold tracking-widest">
                      {val.metric}
                    </span>
                    <span className="w-2 h-2 bg-[#1F1F1B]" aria-hidden="true" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#1F1F1B] mb-3 tracking-wide">
                    {val.label}
                  </h3>

                  <p className="text-sm text-[#52524C] leading-relaxed mb-4">
                    {val.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EBEBE4] text-xs font-mono text-[#6B6B62]">
                  {val.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
