import React, { useState } from 'react';
import { useSeo } from '../lib/useSeo';
import { getSeo } from '../seo';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { PROJECTS_LIST } from '../data/edcData';

export default function Realisations() {
  useSeo(getSeo('/realisations'));

  const [activeCategory, setActiveCategory] = useState<string>('Tous');
  const categories = ['Tous', 'Bâtiment', 'Travaux Publics', 'VRD & Aménagements'];
  const filteredProjects =
    activeCategory === 'Tous'
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F6F6F2] text-[#1F1F1B] font-sans antialiased selection:bg-[#D9A441] selection:text-[#1F1F1B]">
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#A67825] uppercase">
              NOS RÉALISATIONS
            </span>
            <span className="w-8 h-[1px] bg-[#D8D8CF]" aria-hidden="true" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1F1F1B] mb-8">
            Toutes nos références
          </h1>

          <div className="flex flex-wrap items-center gap-1 p-1 bg-[#EBEBE4] border border-[#D8D8CF] mb-10 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1F1F1B] text-white shadow-xs font-semibold'
                    : 'text-[#52524C] hover:text-[#1F1F1B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-white border border-[#D8D8CF] overflow-hidden"
              >
                <div className="overflow-hidden aspect-[4/3] bg-[#292924]">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#6B6B62] mb-3">
                    <span>{project.category}</span>
                    <span>·</span>
                    <span>{project.location}</span>
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1F1F1B] mb-3">
                    {project.title}
                  </h2>
                  <p className="text-sm text-[#52524C] leading-relaxed mb-4">{project.scope}</p>
                  <div className="pt-4 border-t border-[#EBEBE4] text-xs font-mono text-[#A67825]">
                    Dossier technique disponible sur demande.
                  </div>
                </div>
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
