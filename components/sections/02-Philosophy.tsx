'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function PhilosophyScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const text3Ref = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate text elements sequentially on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 1, // Smooth scrubbing
      }
    });

    tl.fromTo(text1Ref.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1 }
    )
    .to(text1Ref.current, { opacity: 0.3, duration: 0.5 }, "+=0.5")
    .fromTo(text2Ref.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1 }, 
      "-=0.2"
    )
    .to(text2Ref.current, { opacity: 0.3, duration: 0.5 }, "+=0.5")
    .fromTo(text3Ref.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, color: 'var(--color-et-ivory)' }, 
      "-=0.2"
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      data-theme="var(--color-et-dark-gold-onyx)"
      className="et-section et-scene-marker relative w-full h-[150vh] flex flex-col items-center justify-center bg-transparent z-10"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl w-full flex flex-col gap-16 md:gap-24 text-center">
          <h2 ref={text1Ref} className="font-display text-3xl md:text-5xl lg:text-6xl text-et-ivory font-light leading-tight">
            Luxury was once about possession.
          </h2>
          
          <h2 ref={text2Ref} className="font-display text-3xl md:text-5xl lg:text-6xl text-et-ivory font-light leading-tight">
            We believe it should be about access.
          </h2>
          
          <h2 ref={text3Ref} className="font-display text-3xl md:text-5xl lg:text-6xl text-et-ivory font-light leading-tight">
            <span className="text-et-muted-gold italic pr-2">ET</span> creates objects that remember.
          </h2>
        </div>
      </div>
    </section>
  );
}
