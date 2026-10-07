import React from 'react';
import { STATS_LIST } from '../data/edcData';

/**
 * Bandeau de chiffres clés (preuve sociale).
 * Les valeurs sont à compléter dans src/data/edcData.ts (STATS_LIST).
 */
export const StatsBar: React.FC = () => {
  return (
    <section
      aria-label="Chiffres clés"
      className="bg-anthracite-950 border-y border-anthracite-700 py-14 sm:py-16"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {STATS_LIST.map((stat) => (
            <div
              key={stat.label}
              className="text-center lg:text-left lg:border-l lg:border-anthracite-700 lg:pl-8 first:lg:border-l-0 first:lg:pl-0"
            >
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-ocre mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-ivory-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
