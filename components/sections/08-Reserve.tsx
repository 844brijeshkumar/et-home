'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function ReserveScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Pin the Reserve section
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=200%',
      pin: '.reserve-sticky',
      scrub: true,
    });

    // Animate vessels filling on scroll
    const vessels = document.querySelectorAll('.vessel-fill');
    
    if (vessels.length > 0) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 40%',
          end: 'bottom 40%',
          scrub: 1
        }
      });

      tl.to(vessels[0], { scaleX: 1, duration: 1 })
        .to(vessels[1], { scaleX: 1, duration: 1 })
        .to(vessels[2], { scaleX: 1, duration: 1 });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      data-theme="var(--color-et-warm-champagne)"
      className="et-section et-scene-marker relative w-full h-[300vh] z-10"
    >
      <div className="reserve-sticky h-screen w-full flex flex-col items-center justify-center px-6">
        
        <div className="w-full max-w-2xl flex flex-col gap-16">
          
          {/* Status Vessel */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-end">
              <h4 className="font-display text-2xl text-et-ivory tracking-wider font-light">STATUS</h4>
              <p className="text-[10px] tracking-[0.2em] text-et-ivory/40 uppercase">Privileges & Experiences</p>
            </div>
            <div className="w-full h-16 glass-obsidian rounded-sm overflow-hidden relative">
              <div className="vessel-fill absolute inset-0 bg-gradient-to-r from-et-muted-gold/20 to-et-muted-gold/40 origin-left scale-x-0" />
            </div>
          </div>
          
          {/* Vault Vessel */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-end">
              <h4 className="font-display text-2xl text-et-ivory tracking-wider font-light">VAULT</h4>
              <p className="text-[10px] tracking-[0.2em] text-et-ivory/40 uppercase">Internal Value & Benefits</p>
            </div>
            <div className="w-full h-16 glass-obsidian rounded-sm overflow-hidden relative">
              <div className="vessel-fill absolute inset-0 bg-gradient-to-r from-et-ivory/10 to-et-ivory/30 origin-left scale-x-0" />
            </div>
          </div>
          
          {/* Reserve Vessel */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-end">
              <h4 className="font-display text-2xl text-et-ivory tracking-wider font-light">RESERVE</h4>
              <p className="text-[10px] tracking-[0.2em] text-et-ivory/40 uppercase">Financial Infrastructure</p>
            </div>
            <div className="w-full h-16 glass-obsidian rounded-sm overflow-hidden relative">
              <div className="vessel-fill absolute inset-0 bg-gradient-to-r from-et-royal-emerald/20 to-et-royal-emerald/50 origin-left scale-x-0" />
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
