'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      data-theme="var(--color-et-dark-gold-onyx)"
      className="et-section et-scene-marker relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* VIDEO LAYER */}
      <div className="absolute inset-0 z-0 flex items-center justify-center mix-blend-screen overflow-hidden">
        <video 
          src="/videos/v-1.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* TYPOGRAPHY */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-[10vh]">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-7xl md:text-9xl tracking-widest text-et-ivory font-light mb-8"
        >
          ET
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3.5 }}
          className="text-sm md:text-base tracking-[0.3em] font-light text-et-ivory/80 uppercase"
        >
          Objects with identity.
        </motion.p>
      </div>

      {/* INTERACTION */}
      <motion.div 
        className="absolute bottom-24 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 4.5 }}
      >
        <button 
          className="interactive group relative overflow-hidden px-10 py-4 border border-et-ivory/20 rounded-none transition-all duration-700 hover:border-et-muted-gold/50"
          onClick={() => {
            // Smooth scroll to next section
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <span className="relative z-10 text-[10px] tracking-[0.3em] text-et-ivory/70 group-hover:text-et-muted-gold transition-colors duration-500 uppercase">
            Enter the Arena
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-et-muted-gold/0 via-et-muted-gold/5 to-et-muted-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
        </button>
      </motion.div>
    </section>
  );
}
