'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';

export default function IdentityScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Pin the Identity section
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: '.identity-sticky',
      scrub: true,
    });

    // Reveal network graph on scroll
    const nodes = networkRef.current?.querySelectorAll('.node-reveal');
    const lines = networkRef.current?.querySelectorAll('.line-reveal');
    
    if (nodes && lines) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: networkRef.current,
          start: 'top 70%',
          end: 'bottom 40%',
          scrub: 1
        }
      });

      tl.fromTo(nodes[0], { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 })
        .fromTo(lines[0], { scaleY: 0 }, { scaleY: 1, transformOrigin: 'top', duration: 1 })
        .fromTo(nodes[1], { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 })
        .fromTo(lines[1], { scaleY: 0 }, { scaleY: 1, transformOrigin: 'top', duration: 1 })
        .fromTo(nodes[2], { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 })
        .fromTo(lines[2], { scaleY: 0 }, { scaleY: 1, transformOrigin: 'top', duration: 1 })
        .fromTo(nodes[3], { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      data-theme="var(--color-et-velvet-amethyst)"
      className="et-section et-scene-marker relative w-full h-[250vh] z-10 overflow-hidden"
    >
      {/* VIDEO LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="identity-sticky h-screen w-full flex items-center justify-center opacity-30 mix-blend-screen">
          <video 
            src="/videos/v-3.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Narrative Sticky Layer */}
      <div className="sticky top-0 h-[80vh] w-full flex flex-col items-center justify-center pointer-events-none px-6 text-center z-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-display text-3xl md:text-5xl text-et-ivory font-light mb-8">
            Every ET object carries an identity.
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-5xl text-et-ivory/60 font-light mb-8">
            Not merely a serial number.
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="font-display text-4xl md:text-6xl text-et-ivory font-light italic text-et-muted-gold">
            A relationship.
          </h2>
        </motion.div>
      </div>

      {/* Technical Concept & Visual Network */}
      <div className="relative h-[150vh] flex items-center justify-center w-full px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl">
          
          {/* Concepts */}
          <div className="flex flex-col gap-16 md:w-1/2 mb-16 md:mb-0">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-et-ivory mb-3 font-semibold">Authenticity</h3>
              <p className="text-sm font-light text-et-ivory/60 max-w-xs">The object can be cryptographically verified instantly.</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-et-ivory mb-3 font-semibold">Identity</h3>
              <p className="text-sm font-light text-et-ivory/60 max-w-xs">The physical object is uniquely associated with its digital counterpart.</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-et-ivory mb-3 font-semibold">Access</h3>
              <p className="text-sm font-light text-et-ivory/60 max-w-xs">Identity determines the privileges the object unlocks in the physical world.</p>
            </div>
          </div>

          {/* Network Visualization */}
          <div ref={networkRef} className="flex flex-col items-center md:w-1/2 h-[500px]">
            <div className="node-reveal flex flex-col items-center">
              <p className="text-[10px] tracking-[0.2em] uppercase text-et-ivory/50 mb-2">Object</p>
              <div className="w-2 h-2 rounded-full bg-et-ivory shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            </div>
            
            <div className="line-reveal w-[1px] h-20 bg-gradient-to-b from-et-ivory/50 to-et-ivory/10 my-1" />
            
            <div className="node-reveal flex flex-col items-center">
              <p className="text-[10px] tracking-[0.2em] uppercase text-et-ivory/50 mb-2">Identity</p>
              <div className="w-2 h-2 rounded-full bg-et-ivory/70 shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
            </div>
            
            <div className="line-reveal w-[1px] h-20 bg-gradient-to-b from-et-ivory/30 to-et-ivory/5 my-1" />
            
            <div className="node-reveal flex flex-col items-center">
              <p className="text-[10px] tracking-[0.2em] uppercase text-et-ivory/50 mb-2">Owner</p>
              <div className="w-2 h-2 rounded-full bg-et-muted-gold shadow-[0_0_8px_rgba(197,160,89,0.5)]" />
            </div>
            
            <div className="line-reveal w-[1px] h-20 bg-gradient-to-b from-et-muted-gold/50 to-transparent my-1" />
            
            <div className="node-reveal flex flex-col items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-et-ivory/20 mb-2" />
              <p className="text-[10px] tracking-[0.2em] uppercase text-et-muted-gold font-semibold">Access</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
