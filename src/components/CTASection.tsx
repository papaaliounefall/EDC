import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, isProvided } from '../data/edcData';
import { scrollToSection } from '../lib/scroll';

interface CTASectionProps {
  onOpenProjectModal?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenProjectModal }) => {
  const scrollToContact = () => scrollToSection('#contact');

  const whatsappDigits = COMPANY_INFO.whatsappRaw.replace(/\D/g, '');
  const showWhatsapp = isProvided(COMPANY_INFO.whatsapp) && whatsappDigits.length >= 9;
  const whatsappHref = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(
    'Bonjour EDC, je souhaite échanger au sujet d’un projet de construction.',
  )}`;

  return (
    <section className="bg-[#1F1F1B] text-[#F6F6F2] py-24 sm:py-32 border-t border-[#292924] relative overflow-hidden">
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-grid-architectural opacity-50 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#D9A441]" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#D9A441]">
            COLLABORATION & ÉTUDE
          </span>
          <span className="w-8 h-[1px] bg-[#D9A441]" aria-hidden="true" />
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          Vous avez un projet de construction ?
        </h2>

        <p className="text-base sm:text-xl text-[#D8D8CF] max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Demandez un devis, parcourez nos réalisations ou écrivez-nous directement sur WhatsApp : nous étudions votre besoin et vous répondons rapidement, sans engagement.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenProjectModal || scrollToContact}
            className="w-full sm:w-auto px-8 py-4 bg-[#D9A441] text-[#1F1F1B] hover:bg-[#C59132] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm active:translate-y-0.5 flex items-center justify-center gap-2"
          >
            <span>Demander un devis</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('#realisations')}
            className="w-full sm:w-auto px-8 py-4 border border-[#4D4D46] hover:border-[#D9A441] text-white hover:text-[#D9A441] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Voir nos réalisations
          </button>

          {showWhatsapp && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border border-[#4D4D46] hover:border-[#D9A441] text-white hover:text-[#D9A441] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Contacter sur WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
