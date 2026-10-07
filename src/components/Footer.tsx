import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/edcData';
import { EDCLogo } from './EDCLogo';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  return (
    <footer className="bg-[#141411] text-[#A8A89E] border-t border-[#292924] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#292924]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <EDCLogo variant="dark" className="h-10 sm:h-12 w-auto mb-2" />
            </div>

            <p className="text-sm text-[#EBEBE4] font-medium">
              Entreprise Dia Construction
            </p>

            <p className="text-sm text-[#8C8C80] font-light italic max-w-sm">
              « {COMPANY_INFO.tagline} »
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="block text-[#D9A441] uppercase tracking-widest font-semibold mb-2">
              NAVIGATION
            </span>
        <ul className="space-y-2">
          <li>
            <a href="/" className="hover:text-white transition-colors cursor-pointer">
              Accueil
            </a>
          </li>
          <li>
            <a href="/#a-propos" className="hover:text-white transition-colors cursor-pointer">
              À propos
            </a>
          </li>
          <li>
            <a href="/#services" className="hover:text-white transition-colors cursor-pointer">
              Nos services
            </a>
          </li>
          <li>
            <a href="/realisations" className="hover:text-white transition-colors cursor-pointer">
              Réalisations
            </a>
          </li>
          <li>
            <a href="/#approche" className="hover:text-white transition-colors cursor-pointer">
              Notre approche
            </a>
          </li>
          <li>
            <a href="/#contact" className="hover:text-white transition-colors cursor-pointer">
              Contact
            </a>
          </li>
          <li>
            <a href="/equipe" className="hover:text-white transition-colors cursor-pointer">
              Équipe
            </a>
          </li>
        </ul>
          </div>

          {/* Legal Coordinates Column */}
          <div className="md:col-span-4 space-y-3 text-xs font-mono">
            <span className="block text-[#D9A441] uppercase tracking-widest font-semibold mb-2">
              COORDINATION
            </span>
            <div className="space-y-2 text-[#8C8C80]">
              <div>Siège : {COMPANY_INFO.address}, Sénégal</div>
              <div>Téléphone : {COMPANY_INFO.phone}</div>
              <div>Email : {COMPANY_INFO.email}</div>
              <div className="pt-2 text-[11px] text-[#6B6B62]">
                Bâtiment • Génie civil • Travaux publics au Sénégal
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B6B62]">
          <div>
            © 2026 EDC — Entreprise Dia Construction. Tous droits réservés.
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsLegalOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Mentions légales
            </button>
            <span className="text-[#4D4D46]" aria-hidden="true">
              |
            </span>
            <button
              type="button"
              onClick={() => setIsLegalOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Confidentialité
            </button>
          </div>
          <div>
            Exécution architecturale & BTP • Sénégal
          </div>
        </div>
      </div>

      <LegalModal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
    </footer>
  );
};
