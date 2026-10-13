import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useSeo } from '../lib/useSeo';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

export default function NotFound() {
  useSeo({
    title: 'Page introuvable (404) | EDC — Entreprise Dia Construction',
    description:
      "La page demandée n'existe pas ou a été déplacée. Retrouvez EDC — Entreprise Dia Construction et ses services au Sénégal depuis l'accueil.",
    path: '/',
    noindex: true,
  });

  return (
    <div className="min-h-screen bg-[#1F1F1B] text-[#F6F6F2] font-sans antialiased selection:bg-[#D9A441] selection:text-[#1F1F1B]">
      <Header />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#D9A441] uppercase">
            ERREUR 404
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Cette page n'existe pas
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#D8D8CF] font-light max-w-xl mx-auto leading-relaxed">
            La page que vous cherchez a peut-être été déplacée ou supprimée.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#1F1F1B] bg-[#D9A441] hover:bg-[#C59132] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Retour à l'accueil</span>
          </Link>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
