'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

export default function InvitationScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [requested, setRequested] = useState(false);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleRequest = () => {
    setRequested(true);
  };

  return (
    <section 
      ref={containerRef}
      data-theme="var(--color-et-dark-gold-onyx)"
      className="et-section et-scene-marker relative w-full min-h-screen flex flex-col items-center justify-center bg-transparent z-10"
    >
      <div className="w-full max-w-4xl flex flex-col items-center justify-center px-6 text-center">
        
        <AnimatePresence mode="wait">
          {!requested ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center w-full"
            >
              <h2 className="font-display text-3xl md:text-5xl text-et-ivory font-light mb-4">
                YOU HAVE SEEN THE OBJECT.
              </h2>
              <h2 className="font-display text-3xl md:text-5xl text-et-ivory/70 font-light italic mb-24">
                NOW ENTER THE WORLD.
              </h2>
              
              <div className="w-full max-w-sm flex flex-col gap-6">
                <p className="text-[10px] tracking-[0.3em] uppercase text-et-ivory/80 mb-2">
                  Request Showroom Coordinates
                </p>
                
                <div className="flex gap-4">
                  <input 
                    type="text" 
                    placeholder="CC" 
                    className="w-16 bg-transparent border-b border-et-ivory/20 pb-2 text-center text-et-ivory font-mono focus:outline-none focus:border-et-muted-gold transition-colors"
                  />
                  <input 
                    type="text" 
                    placeholder="PHONE NUMBER" 
                    className="flex-1 bg-transparent border-b border-et-ivory/20 pb-2 text-et-ivory font-mono focus:outline-none focus:border-et-muted-gold transition-colors"
                  />
                </div>
                
                <button 
                  onClick={handleRequest}
                  className="interactive mt-8 px-8 py-4 border border-et-ivory/20 hover:border-et-muted-gold/50 text-[10px] tracking-[0.3em] uppercase text-et-ivory transition-colors duration-500 hover:text-et-muted-gold"
                >
                  Request Access
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h3 className="font-mono text-sm tracking-[0.4em] text-et-muted-gold uppercase mb-8">
                INVITATION REQUESTED
              </h3>
              <p className="font-display text-2xl text-et-ivory/80 font-light italic">
                Further coordinates will follow.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
