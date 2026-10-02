'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function TheatreScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      // Pin the Theatre section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: '.theatre-sticky',
        scrub: true,
      });

      // Subtle narrative markers appearing and disappearing
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      });

      tl.to({}, { duration: 0.5 }) // Empty tween to add space before text appears on scroll
        .to(text1Ref.current, { opacity: 1, y: -20, duration: 1 })
        .to(text1Ref.current, { opacity: 0, y: -40, duration: 1 }, "+=1")
        .to(text2Ref.current, { opacity: 1, y: -20, duration: 1 }, "+=0.5")
        .to(text2Ref.current, { opacity: 0, y: -40, duration: 1 }, "+=1")
        .to(text3Ref.current, { opacity: 1, y: -20, duration: 1 }, "+=0.5")
        .to(text3Ref.current, { opacity: 0, y: -40, duration: 1 }, "+=1");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      data-theme="var(--color-et-velvet-ruby)"
      className="et-section et-scene-marker relative w-full h-[300vh] z-10"
    >
      <div className="theatre-sticky h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* VIDEO LAYER (Full Screen Cinematic) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden mix-blend-screen opacity-80 pointer-events-none">
          <video 
            src="/videos/v-4.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Narrative Overlays (Subtle) */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none">
          
          <div ref={text1Ref} className="absolute opacity-0 translate-y-10">
            <h3 className="font-display text-4xl text-et-ivory tracking-[0.2em] uppercase font-light">
              THE SHOWROOM
            </h3>
          </div>
          
          <div ref={text2Ref} className="absolute opacity-0 translate-y-10">
            <h3 className="font-display text-4xl text-et-ivory tracking-[0.2em] uppercase font-light">
              THE CAFÉ
            </h3>
          </div>
          
          <div ref={text3Ref} className="absolute opacity-0 translate-y-10 flex flex-col items-center">
            <p className="text-[10px] tracking-[0.3em] uppercase text-et-ivory mb-2">Rank</p>
            <p className="font-display text-6xl text-et-muted-gold italic">#3</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
