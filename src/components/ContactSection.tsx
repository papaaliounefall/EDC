import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageSquare, CheckCircle, FileText } from 'lucide-react';
import { COMPANY_INFO, isProvided } from '../data/edcData';
import { submitToFormspree } from '../lib/formspree';
import { EDCLogo } from './EDCLogo';
import { FormField, fieldControlClass } from './FormField';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'Construction de Bâtiment',
    projectLocation: 'Dakar',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showPhone = isProvided(COMPANY_INFO.phone);
  const showEmail = isProvided(COMPANY_INFO.email);
  const showEmailDevis = isProvided(COMPANY_INFO.emailDevis);
  const showAddress = isProvided(COMPANY_INFO.address);
  const showWhatsapp = isProvided(COMPANY_INFO.whatsapp);
  const hasCoordinates = showPhone || showEmail || showEmailDevis || showAddress || showWhatsapp;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Le nom complet est obligatoire.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Le numéro de téléphone est obligatoire.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Veuillez saisir un numéro de téléphone valide.';
    }
    if (!formData.email.trim()) {
      errs.email = 'L’adresse email est obligatoire.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Format d’adresse email invalide.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Veuillez décrire brièvement votre besoin.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});
    try {
      await submitToFormspree('contact', {
        _subject: `[EDC] Nouvelle demande — ${formData.projectType}`,
        form: 'contact',
        nom: formData.fullName,
        telephone: formData.phone,
        email: formData.email,
        typeProjet: formData.projectType,
        localisation: formData.projectLocation,
        message: formData.message,
      });
      setSubmitted(true);
    } catch (err) {
      setErrors({
        submit: err instanceof Error ? err.message : 'Une erreur est survenue. Veuillez réessayer.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      projectType: 'Construction de Bâtiment',
      projectLocation: 'Dakar',
      message: '',
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="bg-[#292924] text-[#F6F6F2] py-24 sm:py-32 border-t border-[#383832]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#D9A441] uppercase">
              06 — CONTACT DIRECT
            </span>
            <span className="w-8 h-[1px] bg-[#4D4D46]" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Parlons de votre projet.
          </h2>
          <p className="text-base sm:text-lg text-[#D8D8CF] font-light leading-relaxed">
            Décrivez-nous votre projet. Nous étudions votre demande et vous répondons rapidement avec une première approche.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Official Company Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-[#1F1F1B] border border-[#383832]">
              <div className="mb-6">
                <span className="font-mono text-xs text-[#D9A441] uppercase tracking-wider block mb-3">
                  ENTITÉ LÉGALE
                </span>
                <EDCLogo variant="dark" className="h-10 w-auto mb-3" />
                <p className="text-sm text-[#A8A89E] font-medium">Entreprise Dia Construction</p>
              </div>

              <div className="space-y-6 pt-6 border-t border-[#292924] text-sm">
                {hasCoordinates ? (
                  <>
                    {showPhone && (
                      <div className="flex items-start gap-3.5">
                        <Phone className="w-4 h-4 text-[#D9A441] mt-0.5 shrink-0" />
                        <div>
                          <span className="block text-[11px] font-mono text-[#8C8C80] uppercase">Téléphone</span>
                          <span className="text-[#EBEBE4] font-medium">{COMPANY_INFO.phone}</span>
                        </div>
                      </div>
                    )}

                    {showEmail && (
                      <div className="flex items-start gap-3.5">
                        <Mail className="w-4 h-4 text-[#D9A441] mt-0.5 shrink-0" />
                        <div>
                          <span className="block text-[11px] font-mono text-[#8C8C80] uppercase">Email</span>
                          <span className="text-[#EBEBE4] font-medium">{COMPANY_INFO.email}</span>
                        </div>
                      </div>
                    )}

                    {showEmailDevis && (
                      <div className="flex items-start gap-3.5">
                        <FileText className="w-4 h-4 text-[#D9A441] mt-0.5 shrink-0" />
                        <div>
                          <span className="block text-[11px] font-mono text-[#8C8C80] uppercase">Devis</span>
                          <span className="text-[#EBEBE4] font-medium">{COMPANY_INFO.emailDevis}</span>
                        </div>
                      </div>
                    )}

                    {showAddress && (
                      <div className="flex items-start gap-3.5">
                        <MapPin className="w-4 h-4 text-[#D9A441] mt-0.5 shrink-0" />
                        <div>
                          <span className="block text-[11px] font-mono text-[#8C8C80] uppercase">Adresse</span>
                          <span className="text-[#EBEBE4] font-medium">
                            {COMPANY_INFO.address}, {COMPANY_INFO.country}
                          </span>
                        </div>
                      </div>
                    )}

                    {showWhatsapp && (
                      <div className="flex items-start gap-3.5">
                        <MessageSquare className="w-4 h-4 text-[#D9A441] mt-0.5 shrink-0" />
                        <div>
                          <span className="block text-[11px] font-mono text-[#8C8C80] uppercase">WhatsApp</span>
                          <span className="text-[#EBEBE4] font-medium">{COMPANY_INFO.whatsapp}</span>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="text-sm text-[#8C8C80] font-light leading-relaxed">
                    Coordonnées bientôt disponibles. Utilisez le formulaire ci-contre pour nous transmettre
                    votre demande.
                  </p>
                )}
              </div>
            </div>

            {/* Note on Data Transparency */}
            <div className="p-4 border border-[#383832] bg-[#1F1F1B]/40 text-xs font-mono text-[#A8A89E]">
              <span className="text-[#D9A441] font-semibold block mb-1">Confidentialité des plans</span>
              Vos plans et documents sont traités de manière strictement confidentielle.
            </div>
          </div>

          {/* Right Column: Verified Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1F1F1B] p-8 sm:p-10 border border-[#383832]">
              {submitted ? (
                <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-[#D9A441]/10 border border-[#D9A441] text-[#D9A441] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      Demande enregistrée
                    </h3>
                    <p className="text-sm text-[#D8D8CF] max-w-md mx-auto leading-relaxed">
                      Merci <strong className="text-white">{formData.fullName}</strong>. Votre demande pour{' '}
                      <strong className="text-white">{formData.projectType}</strong> ({formData.projectLocation})
                      a bien été transmise à notre équipe. Nous vous recontactons rapidement.
                    </p>
                  </div>

                  <div className="p-4 bg-[#292924] border border-[#383832] max-w-md mx-auto text-left font-mono text-xs text-[#A8A89E]">
                    <span className="block text-[#D9A441] mb-1">VOTRE DEMANDE</span>
                    <div>Contact : {formData.phone} | {formData.email}</div>
                    <div className="truncate mt-1 text-[#EBEBE4]">« {formData.message} »</div>
                  </div>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 border border-[#4D4D46] hover:border-[#D9A441] text-xs font-mono uppercase tracking-wider text-white hover:text-[#D9A441] transition-colors cursor-pointer"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Nom complet */}
                    <FormField id="fullName" label="Nom complet" required error={errors.fullName}>
                      <input
                        type="text"
                        id="fullName"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ex : Ousmane Ba"
                        className={fieldControlClass({ error: !!errors.fullName })}
                      />
                    </FormField>

                    {/* Téléphone */}
                    <FormField id="phone" label="Téléphone" required error={errors.phone}>
                      <input
                        type="tel"
                        id="phone"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+221 77 000 00 00"
                        className={`${fieldControlClass({ error: !!errors.phone })} font-mono`}
                      />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <FormField
                      id="email"
                      label="Email professionnel ou personnel"
                      required
                      error={errors.email}
                    >
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@exemple.sn"
                        className={fieldControlClass({ error: !!errors.email })}
                      />
                    </FormField>

                    {/* Type de projet */}
                    <FormField id="projectType" label="Type de projet" required>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className={`${fieldControlClass()} cursor-pointer`}
                      >
                        <option value="Construction de Bâtiment">Construction de Bâtiment (Gros œuvre)</option>
                        <option value="Génie Civil & Fondations">Génie Civil & Fondations</option>
                        <option value="Travaux Publics & VRD">Travaux Publics & VRD</option>
                        <option value="Rénovation & Réhabilitation">Rénovation & Réhabilitation</option>
                        <option value="Aménagement Extérieur">Aménagement Extérieur</option>
                        <option value="Autre demande">Autre prestation spécifique</option>
                      </select>
                    </FormField>
                  </div>

                  {/* Localisation du projet */}
                  <FormField
                    id="projectLocation"
                    label="Localisation prévisionnelle du chantier"
                    required
                  >
                    <input
                      type="text"
                      id="projectLocation"
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      placeholder="Ex : Dakar (Almadies, Plateau, Diamniadio...), Thiès, Autre région..."
                      className={fieldControlClass()}
                    />
                  </FormField>

                  {/* Message */}
                  <FormField
                    id="message"
                    label="Description du besoin & spécificités"
                    required
                    error={errors.message}
                  >
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Précisez la surface estimée, le stade d’avancement (plans d’architecte disponibles, terrain acquis...) et vos délais souhaités."
                      className={`${fieldControlClass({ error: !!errors.message })} resize-none`}
                    />
                  </FormField>

                  {/* Submit Button */}
                  <div className="pt-2 space-y-4">
                    {errors.submit && (
                      <p className="p-3 bg-red-950/60 border border-red-500/50 text-red-300 text-xs font-mono">
                        {errors.submit}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-4 bg-[#D9A441] text-[#1F1F1B] hover:bg-[#C59132] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Traitement en cours...' : 'Envoyer ma demande'}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
