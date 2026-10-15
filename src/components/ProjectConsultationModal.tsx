import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { useModalA11y } from '../lib/useModalA11y';
import { submitToFormspree } from '../lib/formspree';
import { COMPANY_INFO, isProvided } from '../data/edcData';
import { EDCLogo } from './EDCLogo';
import { FormField, fieldControlClass } from './FormField';

interface ProjectConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectConsultationModal: React.FC<ProjectConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectScope: 'Construction neuve',
    location: 'Dakar',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => {
    setSubmitted(false);
    setError('');
    setIsSubmitting(false);
    onClose();
  };

  const dialogRef = useModalA11y(isOpen, handleClose);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Veuillez renseigner votre nom et votre numéro de téléphone.');
      return;
    }
    setError('');
    setIsSubmitting(true);
    try {
      await submitToFormspree('devis', {
        _subject: `[EDC] Demande de devis — ${formData.projectScope}`,
        form: 'consultation-projet',
        nom: formData.name,
        telephone: formData.phone,
        email: formData.email,
        natureTravaux: formData.projectScope,
        localisation: formData.location,
        details: formData.notes,
      });
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Une erreur est survenue. Veuillez réessayer.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-dialog-title"
        className="bg-[#1F1F1B] text-[#F6F6F2] max-w-xl w-full border border-[#383832] shadow-2xl relative max-h-[92vh] flex flex-col focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#383832] bg-[#292924]">
          <div className="flex items-center gap-4">
            <EDCLogo variant="dark" className="h-8 w-auto hidden sm:block" />
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#D9A441] block">
                ÉTUDE DE VOTRE PROJET
              </span>
              <h3 id="consultation-dialog-title" className="font-display text-lg sm:text-xl font-bold text-white">
                Demander un devis
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-1 text-[#A8A89E] hover:text-white transition-colors cursor-pointer"
            aria-label="Fermer la boîte de dialogue"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-[#D9A441]/15 text-[#D9A441] border border-[#D9A441] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-display text-xl font-bold text-white">
                Demande d’étude enregistrée
              </h4>
              <p className="text-sm text-[#D8D8CF] leading-relaxed max-w-md mx-auto">
                Merci, votre demande pour le projet{' '}
                <strong className="text-white">{formData.projectScope}</strong> à{' '}
                <strong className="text-white">{formData.location}</strong> a bien été reçue. Un responsable vous contacte sous 24 à 48 h ouvrées.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-3 bg-[#D9A441] text-[#1F1F1B] hover:bg-[#C59132] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#A8A89E] font-light leading-relaxed">
                Remplissez ce court formulaire : nous étudions votre projet et revenons vers vous rapidement.
              </p>

              {isProvided(COMPANY_INFO.emailDevis) && (
                <p className="text-xs text-[#A8A89E] font-light leading-relaxed">
                  Ou adressez votre demande de devis à{' '}
                  <span className="text-[#D9A441] font-medium">{COMPANY_INFO.emailDevis}</span>.
                </p>
              )}

              {error && (
                <div className="p-3 bg-red-950/60 border border-red-500/50 text-red-300 text-xs font-mono">
                  {error}
                </div>
              )}

              <FormField id="consultation-name" label="Nom complet ou Raison sociale" required>
                <input
                  type="text"
                  id="consultation-name"
                  value={formData.name}
                  autoComplete="name"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex : M. Diallo ou Société X"
                  className={fieldControlClass({ dense: true })}
                />
              </FormField>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField id="consultation-phone" label="Téléphone" required>
                  <input
                    type="tel"
                    id="consultation-phone"
                    value={formData.phone}
                    autoComplete="tel"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+221 ..."
                    className={`${fieldControlClass({ dense: true })} font-mono`}
                  />
                </FormField>
                <FormField id="consultation-email" label="Email">
                  <input
                    type="email"
                    id="consultation-email"
                    value={formData.email}
                    autoComplete="email"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@domaine.sn"
                    className={fieldControlClass({ dense: true })}
                  />
                </FormField>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField id="consultation-scope" label="Nature des travaux">
                  <select
                    id="consultation-scope"
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className={`${fieldControlClass({ dense: true })} cursor-pointer`}
                  >
                    <option value="Construction neuve">Construction neuve</option>
                    <option value="Gros œuvre seul">Gros œuvre seul</option>
                    <option value="Génie civil & Ouvrage">Génie civil & Ouvrage</option>
                    <option value="Voirie & VRD">Voirie & VRD</option>
                    <option value="Réhabilitation">Réhabilitation lourde</option>
                  </select>
                </FormField>
                <FormField id="consultation-location" label="Localisation">
                  <input
                    type="text"
                    id="consultation-location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Dakar, Thiès, Autre..."
                    className={fieldControlClass({ dense: true })}
                  />
                </FormField>
              </div>

              <FormField id="consultation-notes" label="Détails / Cahier des charges succinct">
                <textarea
                  id="consultation-notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Surface estimée en m², nombre de niveaux, contraintes de calendrier..."
                  className={`${fieldControlClass({ dense: true })} resize-none`}
                />
              </FormField>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#D9A441] text-[#1F1F1B] hover:bg-[#C59132] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Transmission en cours...' : 'Transmettre pour étude'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
