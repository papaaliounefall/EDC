import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Approach } from './components/Approach';
import { WhyEDC } from './components/WhyEDC';
import { StatsBar } from './components/StatsBar';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ProjectConsultationModal } from './components/ProjectConsultationModal';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1F1F1B] text-[#F6F6F2] font-sans antialiased selection:bg-[#D9A441] selection:text-[#1F1F1B]">
      {/* Top Bar Header */}
      <Header onOpenProjectModal={() => setIsConsultationModalOpen(true)} />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* 01 Introduction Editorial */}
        <Introduction />

        {/* 02 Services / Domaines d'intervention */}
        <Services />

        {/* 03 Réalisations / Projets de référence */}
        <Projects />

        {/* 04 Notre approche / De l'idée à la réalisation */}
        <Approach />

        {/* 05 Pourquoi EDC / Valeurs & Engagement */}
        <WhyEDC />

        {/* Chiffres clés / Preuve sociale */}
        <StatsBar />

        {/* CTA Banner */}
        <CTASection onOpenProjectModal={() => setIsConsultationModalOpen(true)} />

        {/* 06 Contact & Formulaire Technique */}
        <ContactSection />
      </main>

      {/* Footer Institutionnel */}
      <Footer />

      {/* Bouton WhatsApp flottant */}
      <WhatsAppButton />

      {/* Direct Consultation Modal */}
      <ProjectConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </div>
  );
}
