import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './products/ProductCard';

const OTHER_PRODUCTS = PRODUCTS.filter((p) => p.slug !== 'uniun');

const UNIUN_POINTS = [
  {
    title: 'Own your data layer',
    text: 'Every message, decision, and document becomes part of a company knowledge graph you control.',
  },
  {
    title: 'Humans and AI, one graph',
    text: 'People and agents read and write to the same shared context — so AI works with your team, not beside it.',
  },
  {
    title: 'Built on Nostr',
    text: 'An open protocol, not a vendor silo. Your identity and data stay portable and yours.',
  },
] as const;

export const ProductsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-28 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-brand-blue uppercase mb-6 leading-none">
              Our Products
            </h3>
          </Reveal>
          <Reveal delay={0.3}>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight leading-tight">
              Learned in the field. <br />
              Shipped as products.
            </h2>
          </Reveal>
          <Reveal delay={0.45}>
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Problems we solve deep inside one client often exist in many. We turn those learnings into
              products — so every company can benefit from what our forward-deployed teams discover.
            </p>
          </Reveal>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="border border-slate-200 rounded-2xl bg-white overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-10 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-slate-50 border border-slate-100 flex-shrink-0">
                  <img src="/uniun-logo.png" alt="Uniun logo" className="max-h-12 max-w-[80%] object-contain" />
                </div>
                <div>
                  <span className="text-brand-blue font-mono text-[10px] tracking-wider uppercase">
                    Data layer for AI-first companies
                  </span>
                  <h3 className="text-3xl font-semibold text-slate-900 tracking-tight">Uniun</h3>
                </div>
              </div>

              <p className="text-xl sm:text-2xl text-slate-900 font-medium tracking-tight leading-snug mb-6">
                Rethink your company as AI-first — starting with who owns your data.
              </p>
              <p className="text-slate-600 font-light leading-relaxed text-[15px] sm:text-base mb-8">
                Uniun brings the power of a knowledge graph to your organisation. It starts with internal
                communication — a Slack-like workspace evolving towards a Telegram-style experience — where
                every conversation feeds a graph that your people and your AI agents share.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.uniun.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 px-5 py-2.5 rounded-full transition-colors"
                >
                  Visit uniun.in
                </a>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:text-blue-700 px-5 py-2.5 border border-brand-blue/30 hover:border-brand-blue rounded-full transition-colors"
                >
                  All products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="p-8 sm:p-10 md:p-12 bg-slate-50/50 flex flex-col justify-center">
              {UNIUN_POINTS.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                  className="flex gap-6 py-6 border-t border-slate-100 first:border-t-0"
                >
                  <span className="text-xs font-mono text-brand-blue pt-1.5">0{index + 1}</span>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">{point.title}</h4>
                    <p className="text-slate-600 font-light leading-relaxed text-[15px] sm:text-base">{point.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.article>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {OTHER_PRODUCTS.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};
