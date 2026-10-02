'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function CollectionScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 30%",
            scrub: true,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[150vh] flex flex-col items-center justify-center bg-et-black py-32">
      <h2 ref={titleRef} className="text-4xl md:text-6xl font-light tracking-wide mb-16">
        The Asset Vault
      </h2>
      
      <div className="w-full max-w-5xl h-[60vh] border border-white/5 rounded-2xl flex items-center justify-center bg-et-surface/30 relative overflow-hidden">
        {/* Placeholder for Image Sequence */}
        <span className="text-et-gray text-xs tracking-widest">[ IMAGE SEQUENCE : SCROLL-CONTROLLED ASSET ROTATION ]</span>
      </div>
    </section>
  );
}
