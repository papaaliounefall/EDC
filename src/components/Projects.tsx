import React, { useState } from 'react';
import { ArrowUpRight, X, MapPin, Layers } from 'lucide-react';
import { PROJECTS_LIST } from '../data/edcData';
import { useModalA11y } from '../lib/useModalA11y';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Tous');

  const closeModal = () => setSelectedProject(null);
  const modalRef = useModalA11y(Boolean(selectedProject), closeModal);

  const categories = ['Tous', 'Bâtiment', 'Travaux Publics', 'VRD & Aménagements'];

  const filteredProjects =
    activeCategory === 'Tous'
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter((p) => p.category === activeCategory);

  const primaryProject = filteredProjects[0] || PROJECTS_LIST[0];
  const secondaryProjects = filteredProjects.slice(1);

  return (
    <section id="realisations" className="bg-[#F6F6F2] text-[#1F1F1B] py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-semibold tracking-widest text-[#A67825] uppercase">
                03 — RÉFÉRENCES
              </span>
              <span className="w-8 h-[1px] bg-[#D8D8CF]" aria-hidden="true" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1F1F1B]">
              Des projets qui parlent pour nous.
            </h2>
          </div>

          {/* Interactive Filter Control (Zero-pill discipline: segmented control buttons) */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-[#EBEBE4] border border-[#D8D8CF]">
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
        </div>

        {/* Editorial Notice on Typologies */}
        <div className="mb-8 p-3 bg-white border border-[#E0E0D8] text-xs font-mono text-[#6B6B62] flex items-center justify-between">
          <span>* Aperçu des typologies d’ouvrages que nous réalisons au Sénégal.</span>
          <span className="hidden sm:inline text-[#A67825]">RÉALISATIONS EDC</span>
        </div>

        {/* Editorial Asymmetric Layout */}
        <div className="space-y-12">
          {/* Main Featured Project (Large 16:9 Banner Layout) */}
          {primaryProject && (
            <div
              className="group cursor-pointer bg-white border border-[#D8D8CF] overflow-hidden transition-all duration-300 hover:border-[#A67825]"
              onClick={() => setSelectedProject(primaryProject)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-8 overflow-hidden aspect-[16/9] lg:aspect-auto min-h-[320px] lg:min-h-[460px] bg-[#292924] relative">
                  <img
                    src={primaryProject.image}
                    alt={primaryProject.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 font-mono text-[11px] bg-[#1F1F1B]/90 text-white px-2.5 py-1 tracking-wider uppercase">
                    Projet phare
                  </div>
                </div>

                <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#D8D8CF]">
                  <div>
                    {/* Unboxed Metadata (Zero-pill) */}
                    <div className="flex items-center gap-2 text-xs font-mono text-[#6B6B62] mb-4">
                      <span>{primaryProject.category}</span>
                      <span aria-hidden="true">/</span>
                      <span className="flex items-center gap-1 text-[#1F1F1B] font-medium">
                        <MapPin className="w-3 h-3 text-[#A67825]" />
                        {primaryProject.location}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1F1F1B] mb-4 group-hover:text-[#A67825] transition-colors">
                      {primaryProject.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#52524C] leading-relaxed mb-6 font-normal">
                      {primaryProject.scope}
                    </p>

                    <div className="p-3 bg-[#F6F6F2] border border-[#E0E0D8] text-xs font-mono text-[#4D4D46]">
                      <span className="text-[#A67825] font-semibold block mb-0.5">Note technique</span>
                      {primaryProject.executionNote}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#EBEBE4] flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#1F1F1B] font-medium group-hover:text-[#A67825]">
                      Consulter la fiche technique
                    </span>
                    <div className="w-9 h-9 border border-[#D8D8CF] group-hover:border-[#A67825] group-hover:bg-[#A67825] group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Projects Grid (Asymmetric 2-Column) */}
          {secondaryProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {secondaryProjects.map((project) => (
                <div
                  key={project.id}
                  className="group cursor-pointer bg-white border border-[#D8D8CF] overflow-hidden transition-all duration-300 hover:border-[#A67825] flex flex-col justify-between"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="overflow-hidden aspect-[4/3] bg-[#292924] relative">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-3 left-3 font-mono text-[11px] bg-[#1F1F1B]/85 text-white px-2 py-0.5 tracking-wider uppercase">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      {/* Unboxed Metadata */}
                      <div className="flex items-center gap-2 text-xs font-mono text-[#6B6B62] mb-3">
                        <MapPin className="w-3 h-3 text-[#A67825]" />
                        <span>{project.location}</span>
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1F1F1B] mb-3 group-hover:text-[#A67825] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-[#52524C] leading-relaxed mb-4">
                        {project.scope}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-[#EBEBE4] flex items-center justify-between text-xs font-mono">
                      <span className="text-[#6B6B62] group-hover:text-[#1F1F1B]">Voir les spécifications</span>
                      <ArrowUpRight className="w-4 h-4 text-[#A67825]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Link below Gallery */}
        <div className="mt-14 pt-8 border-t border-[#D8D8CF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm font-mono text-[#6B6B62]">
            Chaque chantier livré s’accompagne de plans conformes à l’exécution et d’un dossier de récolement.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#1F1F1B] hover:text-[#A67825] transition-colors"
          >
            <span>Demander un dossier technique de référence →</span>
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="bg-white max-w-2xl w-full border border-[#D8D8CF] shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E0E0D8] bg-[#F6F6F2]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A67825]">
                <Layers className="w-3.5 h-3.5" />
                <span className="uppercase tracking-wider font-semibold">FICHE TECHNIQUE OUVRAGE</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-1 text-[#6B6B62] hover:text-[#1F1F1B] cursor-pointer"
                aria-label="Fermer la fiche"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              <div className="aspect-[16/9] w-full overflow-hidden bg-[#1F1F1B]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#6B6B62] mb-1">
                  <span>{selectedProject.category}</span>
                  <span>·</span>
                  <span>{selectedProject.location}</span>
                </div>
                <h3 id="project-dialog-title" className="font-display text-2xl font-bold text-[#1F1F1B]">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-sm text-[#4D4D46] leading-relaxed">
                {selectedProject.scope}
              </p>

              <div className="border border-[#E0E0D8] divide-y divide-[#E0E0D8] font-mono text-xs">
                <div className="p-3 bg-[#F6F6F2] flex justify-between">
                  <span className="text-[#6B6B62]">Programme :</span>
                  <span className="font-sans font-medium text-[#1F1F1B]">{selectedProject.specs.programme}</span>
                </div>
                <div className="p-3 bg-white flex justify-between">
                  <span className="text-[#6B6B62]">Structure & Matériaux :</span>
                  <span className="font-sans font-medium text-[#1F1F1B]">{selectedProject.specs.structure}</span>
                </div>
                <div className="p-3 bg-[#F6F6F2] flex justify-between">
                  <span className="text-[#6B6B62]">Phasage technique :</span>
                  <span className="font-sans font-medium text-[#1F1F1B]">{selectedProject.specs.phasage}</span>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 bg-[#1F1F1B] text-white hover:bg-[#A67825] text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  Étudier un projet similaire
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
