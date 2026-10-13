import React from 'react';
import { X } from 'lucide-react';
import { COMPANY_INFO, isProvided } from '../data/edcData';
import { useModalA11y } from '../lib/useModalA11y';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  const dialogRef = useModalA11y(isOpen, onClose);

  if (!isOpen) return null;

  const hasAddress = isProvided(COMPANY_INFO.address);
  const hasEmail = isProvided(COMPANY_INFO.email);
  const contactLine = [isProvided(COMPANY_INFO.phone) && COMPANY_INFO.phone, hasEmail && COMPANY_INFO.email]
    .filter(Boolean)
    .join(' — ');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-dialog-title"
        className="bg-anthracite-900 text-ivory-100 max-w-2xl w-full border border-anthracite-700 shadow-2xl relative max-h-[90vh] flex flex-col focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-anthracite-700 bg-anthracite-800">
          <h3 id="legal-dialog-title" className="font-display text-lg font-bold text-white">
            Informations légales & confidentialité
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#A8A89E] hover:text-white transition-colors cursor-pointer"
            aria-label="Fermer les informations légales"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm leading-relaxed text-ivory-300">
          <section className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-ocre font-semibold">
              1 — Éditeur du site
            </h4>
            <p>
              {COMPANY_INFO.legalName}, société de droit sénégalais
              {hasAddress ? `, siège : ${COMPANY_INFO.address}, ${COMPANY_INFO.country}` : ''}.
            </p>
            <p className="text-[#8C8C80] text-xs font-mono">
              NINEA : {COMPANY_INFO.nineA} — RCCM : {COMPANY_INFO.rccm}
            </p>
            {contactLine && <p>Contact : {contactLine}</p>}
            <p className="text-[#8C8C80] text-xs font-mono">
              Directeur de la publication : {COMPANY_INFO.director}
            </p>
          </section>

          <section className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-ocre font-semibold">
              2 — Hébergement
            </h4>
            <p className="text-[#8C8C80] text-xs font-mono">Hébergeur : {COMPANY_INFO.host}</p>
          </section>

          <section className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-ocre font-semibold">
              3 — Données personnelles
            </h4>
            <p>
              Les informations transmises via les formulaires du site (nom, téléphone, email,
              description du projet) sont collectées exclusivement pour l’étude de votre demande et
              la prise de contact par les équipes d’EDC.
            </p>
            <p>
              Elles ne sont ni cédées ni vendues à des tiers, et sont conservées le temps nécessaire
              au traitement de votre demande. Conformément à la loi n° 2008-12 du 25 janvier 2008
              relative à la protection des données à caractère personnel au Sénégal, vous disposez
                d’un droit d’accès, de rectification et de suppression de vos données : adressez votre
                demande {hasEmail ? `à ${COMPANY_INFO.email}` : 'via le formulaire de contact du site'}.
            </p>
            <p>
              Ce site ne dépose aucun cookie de traçage. Un service de mesure d’audience
              respectueux de la vie privée peut être activé sans consentement préalable.
            </p>
          </section>

          <section className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-ocre font-semibold">
              4 — Propriété intellectuelle
            </h4>
            <p>
              L’ensemble des contenus (textes, visuels, identité graphique) de ce site est la
              propriété exclusive d’{COMPANY_INFO.name}. Toute reproduction sans autorisation
              préalable est interdite.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
