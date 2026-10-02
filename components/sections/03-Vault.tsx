'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const COLLECTION = [
  { id: '01', title: 'CHRONOGRAPH', desc: 'Precision movement. Secure identity layer.', type: 'Timepiece' },
  { id: '02', title: 'OBSIDIAN KEY', desc: 'Cryptographic vault access. Tungsten core.', type: 'Hardware' },
  { id: '03', title: 'AURA RING', desc: 'Biometric resonance. Generational proof.', type: 'Wearable' },
  { id: '04', title: 'GENESIS CARD', desc: 'Infinite reserve terminal. Platinum alloy.', type: 'Terminal' },
];

export default function VaultScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      // Pin the Vault section for a cinematic feel
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: '.vault-sticky',
        scrub: true,
      });

      // Horizontal Scroll animation for the cards
      gsap.to(scrollTrackRef.current, {
        x: () => {
          if (!scrollTrackRef.current) return 0;
          const trackWidth = scrollTrackRef.current.scrollWidth;
          const viewportWidth = window.innerWidth;
          // Only scroll if track is wider than viewport
          return Math.min(0, -(trackWidth - viewportWidth + (window.innerWidth < 768 ? 40 : 100)));
        },
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          invalidateOnRefresh: true, // Crucial for mobile resize/orientation changes
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      data-theme="var(--color-et-royal-emerald)"
      className="et-section et-scene-marker relative w-full h-[400vh] z-10"
    >
      <div className="vault-sticky h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Background ambient video */}
        <div className="absolute inset-0 z-0 mix-blend-screen opacity-20 pointer-events-none">
          <video 
            src="/videos/v-2.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-et-royal-emerald via-transparent to-et-royal-emerald" />
        </div>

        {/* Section Header */}
        <div className="absolute top-12 left-12 z-20">
          <p className="text-[10px] tracking-[0.2em] uppercase text-et-ivory/50">The Vault</p>
          <div className="h-[1px] w-8 bg-et-ivory/20 my-2" />
          <p className="text-[10px] font-mono text-et-ivory">ET Collection</p>
        </div>

        {/* Horizontal Scrolling Track */}
        <div className="relative z-10 flex items-center h-[70vh] w-full mt-10">
          <div 
            ref={scrollTrackRef}
            className="flex gap-12 px-12 md:px-32 w-max"
          >
            {COLLECTION.map((item, idx) => (
              <div 
                key={item.id}
                className="w-[300px] md:w-[450px] h-[50vh] flex flex-col justify-end p-8 relative rounded-2xl border border-white/5 bg-black/40 backdrop-blur-md shadow-2xl overflow-hidden group interactive"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Object Placeholder Visual */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-white/5 bg-gradient-to-tr from-transparent via-white/5 to-transparent blur-[1px]" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-mono text-et-ivory opacity-50">{item.id}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-et-ivory opacity-50" />
                    <span className="text-[10px] tracking-widest uppercase text-et-ivory opacity-50">{item.type}</span>
                  </div>
                  <h3 className="font-display text-3xl text-et-ivory mb-2">{item.title}</h3>
                  <p className="text-[10px] tracking-widest uppercase text-et-ivory/50 leading-relaxed max-w-[80%]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
