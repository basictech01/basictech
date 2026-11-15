import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Product, STATUS_LABELS, STATUS_STYLES } from '../../data/products';
import { useContact } from '../layout/ContactContext';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { open } = useContact();
  const isLive = product.status === 'live';
  const isDeployed = product.status === 'deployed';
  const Icon = product.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="flex flex-col h-full border border-slate-200 rounded-lg p-6 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-brand-blue font-mono text-[10px] tracking-wider uppercase">{product.category}</span>
        <span className={`text-[10px] font-medium uppercase tracking-wide px-2 py-1 rounded-full border ${STATUS_STYLES[product.status]}`}>
          {STATUS_LABELS[product.status]}
        </span>
      </div>
      {product.cover && (
        <div className="mb-4 flex items-center justify-center h-24 rounded-md bg-slate-50 border border-slate-100">
          <img
            src={product.cover}
            alt={`${product.name} logo`}
            className="max-h-16 max-w-[70%] object-contain"
            loading="lazy"
          />
        </div>
      )}
      {!product.cover && Icon && (
        <div className="mb-4 inline-flex self-start p-3 bg-blue-50 rounded-lg text-brand-blue">
          <Icon size={24} strokeWidth={1.5} />
        </div>
      )}
      <h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">{product.name}</h3>
      <p className="text-sm text-brand-blue/90 font-medium mb-3">{product.tagline}</p>
      <p className="text-sm text-slate-600 font-light leading-relaxed mb-6 flex-1">{product.description}</p>
      {product.outcome && (
        <p className="text-sm font-medium text-slate-900 border-t border-slate-100 pt-4 mb-6">{product.outcome}</p>
      )}
      {product.usedBy && product.usedBy.length > 0 && (
        <div className="mb-6" data-testid="used-by">
          <p className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase mb-2">Used by</p>
          <ul className="flex flex-wrap gap-2">
            {product.usedBy.map((c) => (
              <li key={c.name}>
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[11px] font-medium text-slate-700 hover:text-brand-blue border border-slate-200 hover:border-brand-blue/40 bg-slate-50 rounded-full px-3 py-1 transition-colors"
                  >
                    {c.name}
                  </a>
                ) : (
                  <span className="inline-block text-[11px] font-medium text-slate-700 border border-slate-200 bg-slate-50 rounded-full px-3 py-1">
                    {c.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex flex-wrap gap-3 mt-auto">
        {isDeployed ? (
          <button
            onClick={() => open(`Product enquiry: ${product.name}`)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-full transition-colors"
          >
            Talk to us
          </button>
        ) : isLive && product.url ? (
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-full transition-colors"
          >
            Visit site
          </a>
        ) : (
          <button
            onClick={() => open(`Product waitlist: ${product.name}`)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-full transition-colors"
          >
            Notify me
          </button>
        )}
        {product.appStoreUrl && (
          <a
            href={product.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:text-blue-700 px-4 py-2 border border-brand-blue/30 hover:border-brand-blue rounded-full transition-colors"
          >
            App Store
          </a>
        )}
        {!isLive && product.url && (
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:text-blue-700 px-4 py-2 border border-brand-blue/30 hover:border-brand-blue rounded-full transition-colors"
          >
            Visit
          </a>
        )}
        {product.caseStudyPath && (
          <Link
            to={product.caseStudyPath}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue hover:text-blue-700 px-4 py-2 border border-brand-blue/30 hover:border-brand-blue rounded-full transition-colors"
          >
            Case study
          </Link>
        )}
      </div>
    </motion.div>
  );
};
