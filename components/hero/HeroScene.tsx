'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

export default function HeroScene() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Example scene-level GSAP animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video placeholder for 'The Void' */}
      <div className="absolute inset-0 w-full h-full bg-et-surface z-0 flex items-center justify-center opacity-50">
        <span className="text-et-gray text-xs tracking-widest">[ VIDEO: THE VOID / ROTATING CHIP ]</span>
      </div>

      <div className="relative z-10 text-center">
        <h1 ref={textRef} className="text-6xl md:text-8xl font-light tracking-tight mb-8">
          E T
        </h1>
        
        {/* Micro-interaction with Framer Motion */}
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
          whileTap={{ scale: 0.95 }}
          className="glass-obsidian px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-colors"
        >
          Enter the Syndicate
        </motion.button>
      </div>
    </section>
  );
}
