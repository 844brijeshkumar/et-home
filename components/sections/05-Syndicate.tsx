'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import StandardBase from '../templates/Standard/index';
import SilverBase from '../templates/Silver/index';
import GoldBase from '../templates/Gold/index';
import PremiumBase from '../templates/Premium/index';
import LuxuryBase from '../templates/Luxury/index';
import EliteBase from '../templates/Elite/index';
import GenerationalBase from '../templates/Generational/index';

const MOCK_PATRON_DATA = {
  owner: { photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', name: 'Alaric Thorne', location: 'London, UK' },
  product: { category: 'Identity', photo: 'https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?w=200&h=200&fit=crop', name: 'Obsidian Key', model: 'Series II', type: 'Hardware', spend_rate: 100, price: 25000 },
  next_tier: 1000
};

const STATUS_TIERS = [
  { 
    id: 'standard', 
    label: 'STANDARD', 
    Component: StandardBase
  },
  { 
    id: 'silver', 
    label: 'SILVER', 
    Component: SilverBase
  },
  { 
    id: 'gold', 
    label: 'GOLD', 
    Component: GoldBase
  },
  { 
    id: 'premium', 
    label: 'PREMIUM', 
    Component: PremiumBase
  },
  { 
    id: 'luxury', 
    label: 'LUXURY', 
    Component: LuxuryBase
  },
  { 
    id: 'elite', 
    label: 'ELITE', 
    Component: EliteBase
  },
  { 
    id: 'generational', 
    label: 'GENERATIONAL', 
    Component: GenerationalBase
  },
];

export default function SyndicateScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      // Master timeline attached to the pin
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: '.syndicate-sticky',
          scrub: true,
        }
      });

      const totalTiers = STATUS_TIERS.length;
      
      STATUS_TIERS.forEach((tier, i) => {
        // Calculate relative times on the timeline (0 to 1 for each tier block)
        const startTime = i;
        const endTime = i + 1;
        
        // 1. Fade IN the tier UI
        if (i > 0) {
          tl.to(`.tier-ui-${i}`, { opacity: 1, duration: 0.2 }, startTime);
        }
        
        // 2. Fade OUT the previous tier UI
        if (i < totalTiers - 1) {
          tl.to(`.tier-ui-${i}`, { opacity: 0, duration: 0.2 }, endTime - 0.2);
        }

        // 3. Move the selector dot (animate its top position continuously)
        if (i < totalTiers - 1) {
          const endPercent = ((i + 1) / (totalTiers - 1)) * 100;
          tl.to('.syndicate-selector-dot', 
            { top: `${endPercent}%`, duration: 1, ease: 'none' }, 
            startTime
          );
        }
        
        // 4. Highlight the tier label text
        tl.to(`.tier-label-${i}`, { color: '#F0F0F0', scale: 1.05, x: 10, duration: 0.2 }, startTime);
        
        // 5. Un-highlight the tier label text
        if (i < totalTiers - 1) {
          tl.to(`.tier-label-${i}`, { color: 'rgba(240, 240, 240, 0.3)', scale: 1, x: 0, duration: 0.2 }, endTime - 0.2);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      data-theme="var(--color-et-velvet-amethyst)"
      className="et-section et-scene-marker relative w-full h-[700vh] flex flex-col items-center justify-start overflow-hidden"
    >
      <div className="syndicate-sticky h-[100dvh] flex flex-row items-center justify-between md:justify-center w-full max-w-6xl px-4 sm:px-6 gap-4 sm:gap-10 md:gap-20 pt-[10dvh]">
        
        {/* Physical Status Dial (Scroll driven) */}
        <div className="relative flex flex-col items-start w-[80px] md:w-1/3 h-[70dvh] md:h-[600px]">
          <p className="hidden md:block text-[10px] uppercase tracking-widest text-et-ivory/40 mb-12">The Syndicate</p>
          
          <div className="relative pl-6 md:pl-8 border-l border-et-ivory/10 py-4 flex flex-col justify-between h-full">
            
            {/* Scroll-driven Selector */}
            <div className="absolute left-[-16px] top-4 bottom-4 w-8">
              <div className="syndicate-selector-dot absolute top-0 w-8 h-8 rounded-full border border-et-ivory flex items-center justify-center bg-et-velvet-amethyst z-10 -mt-4 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <div className="w-1.5 h-1.5 rounded-full bg-et-ivory" />
              </div>
            </div>

            {/* Labels */}
            {STATUS_TIERS.map((tier, idx) => (
              <div 
                key={tier.id} 
                className="flex flex-col justify-center h-full relative"
              >
                <h3 className={`tier-label-${idx} text-[9px] sm:text-xs md:text-sm tracking-[0.1em] md:tracking-[0.2em] font-mono text-[rgba(240,240,240,0.3)] origin-left whitespace-nowrap`} style={{ color: idx === 0 ? '#F0F0F0' : 'rgba(240,240,240,0.3)' }}>
                  <span className="hidden md:inline">{tier.label}</span>
                  <span className="md:hidden">{tier.label.substring(0, 3)}</span>
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Physical Phone Frame / UI */}
        <div className="relative w-full max-w-[360px] h-[75dvh] md:h-[720px] max-h-[850px] rounded-[2.5rem] md:rounded-[3.5rem] border border-[#2a2a2a] glass-obsidian flex items-center justify-center shadow-2xl p-2 md:p-3 bg-[#111] shrink-0">
          {/* Inner screen bezel */}
          <div className="relative w-full h-full rounded-[2rem] md:rounded-[3rem] bg-[#050505] overflow-hidden border border-black/50 shadow-inner">
            
            {/* Dynamic UI Content based on Tier, mapped to scroll */}
            {STATUS_TIERS.map((tier, idx) => {
              const TemplateComponent = tier.Component;
              return (
                <div 
                  key={tier.id}
                  className={`tier-ui-${idx} absolute inset-0 w-full h-full overflow-y-auto hide-scrollbar bg-[#050505] [&>div]:!min-h-[720px] ${idx === 0 ? 'opacity-100' : 'opacity-0'}`}
                >
                  <TemplateComponent data={MOCK_PATRON_DATA} />
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
