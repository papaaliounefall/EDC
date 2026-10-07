import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Introduction } from '../components/Introduction';
import { Services } from '../components/Services';
import { Projects } from '../components/Projects';
import { Approach } from '../components/Approach';
import { WhyEDC } from '../components/WhyEDC';
import { StatsBar } from '../components/StatsBar';
import { CTASection } from '../components/CTASection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ProjectConsultationModal } from '../components/ProjectConsultationModal';

export default function Home() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1F1F1B] text-[#F6F6F2] font-sans antialiased selection:bg-[#D9A441] selection:text-[#1F1F1B]">
      <Header onOpenProjectModal={() => setIsConsultationModalOpen(true)} />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <Projects />
        <Approach />
        <WhyEDC />
        <StatsBar />
        <CTASection onOpenProjectModal={() => setIsConsultationModalOpen(true)} />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ProjectConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </div>
  );
}
