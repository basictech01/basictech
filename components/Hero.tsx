import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FdeLoop } from './FdeLoop';

interface HeroProps {
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the parallax effect
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Transforms for the right-side abstract visual (Parallax)
  const visualX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const visualY = useTransform(springY, [-0.5, 0.5], [-20, 20]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  // Spotlight Effect
  // We map mouse coordinates (0 to 1) to percentage strings for the gradient
  const spotlightLeft = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightTop = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);
  
  // Scroll Parallax
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    // Normalize mouse position from -0.5 to 0.5 relative to center
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white perspective-1000"
    >
      {/* Background Grid - Only visible in Hero */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] pointer-events-none opacity-50" 
      />
      
      {/* Interactive Spotlight on Grid */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-60 mix-blend-multiply"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${useSpring(useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]), {stiffness: 100, damping: 30})} ${useSpring(useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]), {stiffness: 100, damping: 30})}, rgba(47,128,237,0.25), transparent 80%)`
        }}
      />
      
      {/* Gradient Overlay for Depth - Reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 h-full items-center">
        {/* Left Content */}
        <motion.div style={{ opacity, scale, y }} className="flex flex-col items-start space-y-6 sm:space-y-7 md:space-y-8 pointer-events-auto">
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xs sm:text-sm font-semibold tracking-widest text-brand-blue uppercase leading-none"
            >
              FDE-led AI engineering company
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1]"
            >
              We don't build your software. <br />
              We become your <span className="relative inline-block text-brand-blue">
                AI team
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-1 left-0 h-[2px] bg-brand-blue"
                />
              </span>.
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-lg font-light leading-relaxed"
          >
            Forward-deployed product and engineering teams, embedded inside your business.
            <br />
            <span className="text-base sm:text-lg md:text-xl font-light">What McKinsey and the Big Four did for business strategy, Basic Tech does for software — across India and Europe.</span>
          </motion.p>

          <div className="flex flex-wrap items-center gap-4">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStartProject}
            className="flex items-center gap-3 text-lg font-medium bg-brand-blue text-white px-8 py-4 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
          >
            Embed a Team
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-lg font-medium text-brand-blue px-8 py-4 rounded-full border border-brand-blue/30 hover:border-brand-blue transition-colors duration-300"
            >
              Our Products
            </Link>
          </motion.div>
          </div>
        </motion.div>

        {/* Right: the FDE loop */}
        <motion.div 
          style={{ 
            opacity: useTransform(scrollY, [0, 400], [1, 0]),
            x: visualX,
            y: visualY,
            rotateX: rotateX,
            rotateY: rotateY,
          }}
          className="hidden lg:flex justify-center items-center relative perspective-1000"
        >
          <FdeLoop />
        </motion.div>
      </div>
    </section>
  );
};