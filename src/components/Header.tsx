import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';
import { EDCLogo } from './EDCLogo';

interface HeaderProps {
  onOpenProjectModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenProjectModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/#a-propos' },
    { label: 'Nos services', href: '/#services' },
    { label: 'Réalisations', href: '/#realisations' },
    { label: 'Notre approche', href: '/#approche' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Équipe', href: '/equipe' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Si lien interne page accueil (ancre), scroll; sinon laisser navigation router
    if (href.startsWith('#')) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (onOpenProjectModal) {
      onOpenProjectModal();
    } else {
      scrollToSection('#contact');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1F1F1B]/95 backdrop-blur-md border-b border-[#383832] py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Official Brand Logo (Single Element) */}
        <a
          href="/"
          className="flex items-center transition-opacity hover:opacity-90 shrink-0"
          aria-label="EDC - Entreprise Dia Construction"
        >
          <EDCLogo variant="dark" className="h-9 sm:h-10 w-auto" />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#EBEBE4]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative py-1 hover:text-[#D9A441] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D9A441] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handleCtaClick}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1F1F1B] bg-[#D9A441] hover:bg-[#C59132] transition-colors whitespace-nowrap cursor-pointer shadow-sm active:translate-y-0.5"
          >
            <span>Parler de votre projet</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#D9A441] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A441]"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1F1F1B] border-b border-[#383832] px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-white hover:text-[#D9A441] transition-colors py-1.5 border-b border-[#292924]"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={handleCtaClick}
              className="mt-3 flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#1F1F1B] bg-[#D9A441] hover:bg-[#C59132] transition-colors"
            >
              <span>Parler de votre projet</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
