import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';

const REGIONS = [
  {
    name: 'India',
    points: [
      'Dozens of languages, scripts, and literacy levels in one user base',
      'Price-sensitive markets, low-end devices, patchy connectivity',
      'UPI, WhatsApp-first journeys, and fast-moving regulation',
    ],
  },
  {
    name: 'Europe',
    points: [
      '24 official languages across very different markets',
      'GDPR, accessibility, and data-residency by default',
      'Mature enterprises with deep legacy systems to modernise',
    ],
  },
] as const;

export const Regions: React.FC = () => {
  return (
    <section className="py-24 sm:py-28 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-50/30 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">
          <div>
            <Reveal>
              <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-brand-blue uppercase mb-6 leading-none">
                India × Europe
              </h3>
            </Reveal>
            <Reveal delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight leading-tight">
                Built for diversity.
              </h2>
            </Reveal>
            <Reveal delay={0.45}>
              <p className="text-slate-600 text-lg font-light leading-relaxed max-w-md">
                We work with clients across India and Europe — two regions equally diverse in language,
                culture, and regulation. We know how to build software that works for all of them.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REGIONS.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
                className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:border-brand-blue/30 transition-colors duration-500"
              >
                <h3 className="text-2xl font-semibold text-slate-900 mb-6 tracking-tight">{region.name}</h3>
                <ul className="space-y-4">
                  {region.points.map((point) => (
                    <li key={point} className="flex gap-3 text-slate-600 font-light leading-relaxed text-[15px] sm:text-base">
                      <span className="mt-2.5 w-1.5 h-1.5 bg-brand-blue rounded-full flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
