import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STEPS = [
  { label: 'Embed', detail: 'Our consultants join your team.' },
  { label: 'Understand', detail: 'We learn how your operations really run.' },
  { label: 'Identify', detail: 'We map your needs to solutions we have already proven.' },
  { label: 'Build', detail: 'Custom AI on your data, built on proven foundations.' },
  { label: 'Integrate', detail: 'Shipped into production workflows.' },
  { label: 'Measure', detail: 'Impact tracked in business numbers.' },
] as const;

const RADIUS = 42; // % of the container, matches the progress arc radius
const STEP_MS = 2200;

export const FdeLoop: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % STEPS.length), STEP_MS);
    return () => window.clearInterval(id);
  }, []);

  const progress = active / STEPS.length;

  return (
    <div
      className="relative w-[500px] h-[500px] xl:w-[550px] xl:h-[550px] 2xl:w-[600px] 2xl:h-[600px]"
      role="img"
      aria-label="The forward-deployed engineering loop: Embed, Understand, Identify, Build, Integrate, Measure."
    >
      {/* Outer frame and slow rotating guide ring */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 border border-slate-200 rounded-full"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[18%] border border-dashed border-slate-300 rounded-full"
      />

      {/* Track + progress arc */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90 overflow-visible">
        <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="#e2e8f0" strokeWidth="0.4" />
        <motion.circle
          cx="50"
          cy="50"
          r={RADIUS}
          fill="none"
          stroke="#2F80ED"
          strokeWidth="0.6"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="1 1"
          initial={{ strokeDashoffset: 1 }}
          animate={{ strokeDashoffset: 1 - progress }}
          transition={{ duration: active === 0 ? 0.4 : 0.9, ease: 'easeInOut' }}
        />
      </svg>

      {/* Core */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-40 h-40 bg-brand-blue/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[46%] text-center flex flex-col items-center">
        <div className="w-5 h-5 bg-brand-blue rounded-full shadow-[0_0_30px_rgba(47,128,237,0.6)] flex items-center justify-center mb-4">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
        <p className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase mb-2">Your business</p>
        <div className="h-20">
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="text-base xl:text-lg font-medium text-slate-900 leading-snug tracking-tight"
            >
              {STEPS[active].detail}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Step nodes on the ring */}
      {STEPS.map((step, i) => {
        const angle = (-90 + i * (360 / STEPS.length)) * (Math.PI / 180);
        const left = 50 + RADIUS * Math.cos(angle);
        const top = 50 + RADIUS * Math.sin(angle);
        const isActive = i === active;
        const isDone = i < active;
        return (
          <div
            key={step.label}
            style={{ left: `${left}%`, top: `${top}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
          <motion.button
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: isActive ? 1.08 : 1 }}
            transition={{ duration: 0.4, delay: isActive ? 0 : 0.6 + i * 0.08 }}
            className={`flex items-center gap-2 rounded-full border pl-1.5 pr-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
              isActive
                ? 'bg-brand-blue border-brand-blue text-white shadow-lg shadow-blue-500/30'
                : isDone
                  ? 'bg-white border-brand-blue/40 text-slate-900'
                  : 'bg-white border-slate-200 text-slate-500'
            }`}
          >
            <span
              className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-mono ${
                isActive ? 'bg-white/20 text-white' : isDone ? 'bg-blue-50 text-brand-blue' : 'bg-slate-50 text-slate-400'
              }`}
            >
              0{i + 1}
            </span>
            {step.label}
          </motion.button>
          </div>
        );
      })}
    </div>
  );
};
