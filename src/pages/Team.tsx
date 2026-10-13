import React from 'react';
import { useSeo } from '../lib/useSeo';
import { getSeo } from '../seo';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

const TEAM = [
  { name: 'Direction Générale', role: 'Pilotage stratégique & développement', photo: null },
  { name: 'Responsable Technique', role: 'Bureau Technique — études & suivi qualité', photo: null },
  { name: 'Conducteur de Travaux', role: 'Suivi de chantier, sécurité & coordination', photo: null },
  { name: 'Chef de Chantier', role: 'Exécution & encadrement terrain', photo: null },
];

export default function Team() {
  useSeo(getSeo('/equipe'));

  return (
    <div className="min-h-screen bg-[#1F1F1B] text-[#F6F6F2] font-sans antialiased selection:bg-[#D9A441] selection:text-[#1F1F1B]">
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#D9A441] uppercase">
              NOTRE ÉQUIPE
            </span>
            <span className="w-8 h-[1px] bg-[#4D4D46]" aria-hidden="true" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            L'encadrement qui fait la différence
          </h1>
          <p className="text-base sm:text-lg text-[#D8D8CF] max-w-2xl font-light leading-relaxed mb-12">
            Une équipe soudée, proche du terrain, qui veille à la qualité et au respect des délais sur
            chaque chantier.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <article
                key={member.name}
                className="bg-[#292924] border border-[#383832] p-8 flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 rounded-full bg-[#1F1F1B] border border-[#4D4D46] mb-6" />
                <h2 className="font-display text-lg font-bold text-white mb-2">{member.name}</h2>
                <p className="text-sm text-[#D8D8CF] font-light leading-relaxed">{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
