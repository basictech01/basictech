import React from 'react';
import { motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const COMPARISON = [
  { label: 'Starts with', agency: 'A spec someone else wrote', us: 'Your operations and your customers' },
  { label: 'Team', agency: 'Developers working off tickets', us: 'Forward-deployed engineers, product & business analysts' },
  { label: 'Where they work', agency: 'Outside your company', us: 'Inside it — like your own employees' },
  { label: 'Accountable for', agency: 'Features delivered', us: 'Business impact, measured' },
  { label: 'What we learn', agency: 'Stays in one project', us: 'Becomes products for every client' },
] as const;

export const Philosophy: React.FC = () => {
  return (
    <section className="py-24 sm:py-28 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/40 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
        <div className="max-w-3xl mb-14 sm:mb-16">
          <Reveal>
            <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-brand-blue uppercase mb-6 leading-none">
              The shift
            </h3>
          </Reveal>
          <Reveal delay={0.3}>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight leading-tight">
              AI made writing code cheap. <br className="hidden sm:block" />
              <span className="text-brand-blue">Knowing what to build</span> is the new edge.
            </h2>
          </Reveal>
          <Reveal delay={0.45}>
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              That changes what you need from a technology partner. Not more hands to write code — but people
              who understand your business well enough to decide what's worth building, and own the result.
            </p>
          </Reveal>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="hidden md:grid grid-cols-[1fr_1.2fr_1.4fr] border-b border-slate-100">
            <div className="p-6" />
            <div className="p-6 text-xs font-semibold tracking-widest text-slate-400 uppercase">Traditional agency</div>
            <div className="p-6 text-xs font-semibold tracking-widest text-brand-blue uppercase bg-blue-50/50">
              Basic Tech · FDE-led
            </div>
          </div>

          {COMPARISON.map((row, index) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr_1.4fr] border-b border-slate-100 last:border-b-0"
            >
              <div className="px-6 pt-6 md:py-6 text-sm sm:text-base font-semibold text-slate-900 tracking-tight">
                {row.label}
              </div>
              <div className="px-6 py-3 md:py-6 flex items-start gap-3 text-slate-500 font-light text-[15px] sm:text-base">
                <Minus className="w-4 h-4 mt-1 flex-shrink-0 text-slate-300" aria-hidden="true" />
                <span>
                  <span className="md:hidden text-xs font-semibold tracking-widest text-slate-400 uppercase block mb-1">
                    Traditional agency
                  </span>
                  {row.agency}
                </span>
              </div>
              <div className="px-6 pb-6 pt-3 md:py-6 flex items-start gap-3 text-slate-900 font-medium text-[15px] sm:text-base bg-blue-50/50">
                <Check className="w-4 h-4 mt-1 flex-shrink-0 text-brand-blue" aria-hidden="true" />
                <span>
                  <span className="md:hidden text-xs font-semibold tracking-widest text-brand-blue uppercase block mb-1">
                    Basic Tech
                  </span>
                  {row.us}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
