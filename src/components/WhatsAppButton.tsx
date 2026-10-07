import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/edcData';

/**
 * Bouton WhatsApp flottant (coin bas-droit).
 * Masqué tant que COMPANY_INFO.whatsappRaw est un numéro placeholder.
 */
export const WhatsAppButton: React.FC = () => {
  const digits = COMPANY_INFO.whatsappRaw.replace(/\D/g, '');
  const isConfigured = digits.length >= 9 && !/0{6,}/.test(digits);

  if (!isConfigured) return null;

  const message = encodeURIComponent(
    'Bonjour EDC, je souhaite échanger au sujet d’un projet de construction.',
  );

  return (
    <a
      href={`https://wa.me/${digits}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter EDC sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 px-4 py-3 bg-ocre text-anthracite-900 hover:bg-ocre-hover font-semibold text-xs uppercase tracking-wider shadow-lg shadow-black/30 transition-colors cursor-pointer active:translate-y-0.5"
    >
      <MessageCircle className="w-4 h-4" aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
};
