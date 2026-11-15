import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { CLIENTS, Client } from '../data/clients';

const tileClass =
  'group h-full flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300';
const linkedClass = 'hover:border-brand-blue/40 hover:shadow-lg hover:shadow-slate-200/60';

const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

const LogoPanel: React.FC<{ client: Client }> = ({ client }) => (
  <div className="h-32 flex items-center justify-center px-6 bg-slate-50/70 border-b border-slate-100">
    {client.logo ? (
      <img
        src={client.logo}
        alt={`${client.name} logo`}
        className="max-h-16 max-w-[90%] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      />
    ) : (
      <span
        aria-hidden="true"
        className="flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-blue/10 text-brand-blue text-xl font-semibold tracking-wide group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300"
      >
        {initials(client.name)}
      </span>
    )}
  </div>
);

const TileBody: React.FC<{ client: Client; linked: boolean }> = ({ client, linked }) => (
  <>
    <LogoPanel client={client} />
    <div className="flex-1 flex flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-slate-900 tracking-tight leading-snug group-hover:text-brand-blue transition-colors">
          {client.name}
        </h3>
        {linked && (
          <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-slate-300 group-hover:text-brand-blue transition-colors" aria-hidden="true" />
        )}
      </div>
      <p className="text-sm text-slate-500 font-light mt-1">{client.industry}</p>
      {client.work && (
        <p className="text-sm text-slate-900 font-medium mt-4 pt-4 border-t border-slate-100">{client.work}</p>
      )}
      {client.location && (
        <span className="mt-auto pt-4 self-start">
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-brand-blue bg-blue-50 border border-brand-blue/20 rounded-full px-2 py-0.5">
            <MapPin className="w-3 h-3" aria-hidden="true" />
            {client.location}
          </span>
        </span>
      )}
    </div>
  </>
);

const ClientTile: React.FC<{ client: Client; duplicate?: boolean }> = ({ client, duplicate }) => {
  const tabIndex = duplicate ? -1 : undefined;
  if (client.caseStudyPath) {
    return (
      <Link to={client.caseStudyPath} tabIndex={tabIndex} className={`${tileClass} ${linkedClass}`}>
        <TileBody client={client} linked />
      </Link>
    );
  }
  if (client.url) {
    return (
      <a href={client.url} target="_blank" rel="noopener noreferrer" tabIndex={tabIndex} className={`${tileClass} ${linkedClass}`}>
        <TileBody client={client} linked />
      </a>
    );
  }
  return (
    <div className={tileClass}>
      <TileBody client={client} linked={false} />
    </div>
  );
};

export const Clients: React.FC = () => {
  return (
    <section className="py-24 sm:py-28 md:py-32 bg-white relative" data-testid="clients-section">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div>
            <Reveal>
              <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-brand-blue uppercase mb-6 leading-none">
                Our Clients
              </h3>
            </Reveal>
            <Reveal delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight leading-tight">
                Trusted across India, the UAE and Europe.
              </h2>
            </Reveal>
            <Reveal delay={0.45}>
              <p className="text-slate-600 text-lg font-light leading-relaxed max-w-2xl">
                From healthcare in Dubai and AI automation in Europe to pharmaceuticals and manufacturing in India —
                the businesses we have embedded with and built for.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Infinite carousel: the list is rendered twice and the track slides by half its width. */}
      <div className="client-marquee-viewport relative overflow-hidden motion-reduce:overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="client-marquee flex w-max py-2">
          {[false, true].map((duplicate) => (
            <ul
              key={String(duplicate)}
              aria-hidden={duplicate || undefined}
              className="flex gap-5 pr-5"
            >
              {CLIENTS.map((client) => (
                <li key={client.name} className="w-[280px] sm:w-[300px] flex-shrink-0">
                  <ClientTile client={client} duplicate={duplicate} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};
