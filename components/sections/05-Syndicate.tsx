'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import StandardUI from '../templates/Standard/index';
import PrivateUI from '../templates/Private/index';
import VIPUI from '../templates/VIP/index';
import GenerationalUI from '../templates/Generational/index';

const STATES = ['STANDARD', 'PRIVATE', 'VIP', 'GENERATIONAL'];

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
          pin: '.syndicate-pin',
          pinSpacing: false,
          scrub: true,
        }
      });

      const statesCount = STATES.length;
      
      for (let i = 0; i < statesCount; i++) {
        const stepTime = i;
        
        // Highlight current text in dial
        tl.to(`.step-text-${i}`, {
          color: '#F0F0F0',
          scale: 1.05,
          x: 5,
          duration: 0.2
        }, stepTime);
        
        tl.to(`.step-dot-${i}`, {
          backgroundColor: '#F0F0F0',
          duration: 0.2
        }, stepTime);
        
        // Fade in current UI
        if (i > 0) {
          tl.to(`.ui-state-${i}`, { opacity: 1, duration: 0.3 }, stepTime);
        }

        // Fade out previous text & UI (except when on the last step)
        if (i < statesCount - 1) {
          // move dot down
          const nextPercent = ((i + 1) / (statesCount - 1)) * 100;
          
          tl.to('.active-dot', {
            top: `${nextPercent}%`,
            duration: 1,
            ease: 'none'
          }, stepTime);

          // fade out current state near the end of this scroll block
          tl.to(`.step-text-${i}`, {
            color: 'rgba(240, 240, 240, 0.3)',
            scale: 1,
            x: 0,
            duration: 0.2
          }, stepTime + 0.8);
          
          tl.to(`.step-dot-${i}`, {
            backgroundColor: 'rgba(240, 240, 240, 0.2)',
            duration: 0.2
          }, stepTime + 0.8);
          
          tl.to(`.ui-state-${i}`, { opacity: 0, duration: 0.3 }, stepTime + 0.8);
        }
      }

      // Phase 5: Transition into Theatre (fade out elements)
      const fadeOutTime = statesCount; 
      tl.to('.dial-wrapper', { opacity: 0, y: -20, duration: 0.5 }, fadeOutTime);
      tl.to('.phone-wrapper', { opacity: 0, scale: 0.95, duration: 0.5 }, fadeOutTime);
      
      // The statement text stays a bit longer, then fades out
      tl.to('.statement-text', { opacity: 0, y: -30, duration: 0.5 }, fadeOutTime + 0.5);

      // Add empty time at the end to allow for full fade out before section unpins
      tl.to({}, { duration: 0.5 });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      data-theme="var(--color-et-velvet-amethyst)"
      className="et-section et-scene-marker relative w-full h-[600vh] flex flex-col items-center justify-start z-10"
    >
      <div className="syndicate-pin h-[100dvh] w-full flex items-center justify-center overflow-hidden px-4 md:px-12">
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between py-[4dvh] sm:py-[8dvh] md:py-[15vh] gap-6 md:gap-0">
          
          {/* LEFT: Statement & Dial */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left relative z-10 shrink-0 pr-0 md:pr-10">
            <div className="statement-text">
              <p className="text-et-muted-gold tracking-widest mb-2 md:mb-6 uppercase text-[10px] md:text-sm">05 &mdash; THE SYNDICATE</p>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-display text-et-ivory tracking-[0.2em] font-light leading-snug">
                OWNERSHIP<br className="hidden md:block" />CHANGES<br className="hidden md:block" />ACCESS.
              </h2>
            </div>
            
            {/* Physical Status Dial */}
            <div className="dial-wrapper flex flex-col items-start relative ml-0 md:ml-2 mt-6 md:mt-20 h-32 sm:h-40 md:h-64 justify-between w-max mx-auto md:mx-0 opacity-100">
              
              {/* Vertical Track Line */}
              <div className="absolute left-[3px] top-2 bottom-2 w-[1px] bg-et-ivory/20" />
              
              {/* Moving Active Dot */}
              <div className="active-dot absolute left-[-4px] top-0 w-4 h-4 rounded-full border border-et-ivory bg-[#160D1E] flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.3)] z-10 -mt-[4px]">
                <div className="w-1.5 h-1.5 rounded-full bg-et-ivory" />
              </div>

              {STATES.map((state, i) => (
                <div key={state} className={`dial-step-${i} relative flex items-center pl-8 w-full`}>
                  <div className={`step-dot-${i} absolute left-[1px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-et-ivory/20 transition-colors`} />
                  <p className={`step-text-${i} text-[9px] md:text-xs tracking-[0.3em] font-mono uppercase text-et-ivory/30 transform-gpu`}>
                    {state}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Minimal Phone Interface */}
          <div className="w-full md:w-1/2 flex justify-center phone-wrapper opacity-100 shrink-0">
            <div className="relative w-[240px] h-[480px] md:w-[280px] md:h-[580px] rounded-[2.5rem] md:rounded-[3rem] border border-[#222] bg-[#050505] shadow-2xl overflow-hidden p-2 md:p-4 flex flex-col shrink-0">
              {/* Glass subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              
              {/* Screen Bezel */}
              <div className="relative flex-1 w-full rounded-[2rem] md:rounded-[2.2rem] bg-[#020202] border border-black/50 overflow-hidden shadow-inner flex flex-col items-center">
                
                <div className="w-full text-center mt-6 md:mt-8 z-20">
                  <span className="text-et-ivory tracking-[0.3em] text-[9px] opacity-40">ET</span>
                </div>

                <div className="relative flex-1 w-full flex flex-col justify-center items-center">
                  
                  {/* STATE 0: STANDARD */}
                  <div className="ui-state-0 absolute inset-0 opacity-100">
                    <StandardUI />
                  </div>

                  {/* STATE 1: PRIVATE */}
                  <div className="ui-state-1 absolute inset-0 opacity-0">
                    <PrivateUI />
                  </div>

                  {/* STATE 2: VIP */}
                  <div className="ui-state-2 absolute inset-0 opacity-0">
                    <VIPUI />
                  </div>

                  {/* STATE 3: GENERATIONAL */}
                  <div className="ui-state-3 absolute inset-0 opacity-0">
                    <GenerationalUI />
                  </div>

                </div>

                {/* Bottom line indicator */}
                <div className="w-1/3 h-[2px] bg-white/20 rounded-full mx-auto mb-3 md:mb-4 z-20" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
