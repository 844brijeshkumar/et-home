'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function RecognitionScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const recognitionTextRef = useRef<HTMLDivElement>(null);
  const doorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      // Pin the Recognition section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: '.recognition-sticky',
        pinSpacing: false,
        scrub: true,
      });

      // Animate "IDENTITY CONFIRMED" and then transition to private door
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      });

      tl.to(recognitionTextRef.current, { opacity: 1, y: -20, duration: 1 })
        .to(recognitionTextRef.current, { opacity: 0, y: -40, duration: 0.5 }, "+=1")
        .to(doorRef.current, { opacity: 1, scale: 1, duration: 2 }, "+=0.5")
        .to(doorRef.current, { opacity: 0, scale: 1.1, duration: 1 }, "+=1");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      data-theme="var(--color-et-velvet-ruby)"
      className="et-section et-scene-marker relative w-full h-[250vh] z-10"
    >
      <div className="recognition-sticky h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* VIDEO LAYER (Full Screen Cinematic) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <video 
            src="/videos/v-5.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Narrative Overlays */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none">
          
          <div ref={recognitionTextRef} className="absolute opacity-0 translate-y-10">
            <h3 className="font-mono text-xs text-et-ivory tracking-[0.4em] uppercase opacity-70">
              IDENTITY CONFIRMED
            </h3>
          </div>
          
          {/* Private Door Metaphor */}
          <div ref={doorRef} className="absolute inset-0 opacity-0 flex flex-col items-center justify-center transform scale-95 origin-center bg-black/40 backdrop-blur-sm">
            <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-et-muted-gold to-transparent mb-8 opacity-50" />
            <h3 className="font-display text-2xl text-et-muted-gold tracking-widest font-light">
              ENTER PRIVATE RESERVE
            </h3>
          </div>
          
        </div>
      </div>
    </section>
  );
}
