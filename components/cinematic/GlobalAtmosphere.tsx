'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function GlobalAtmosphere() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Get all sections with a data-theme attribute
    const sections = gsap.utils.toArray('.et-scene-marker') as HTMLElement[];
    
    if (sections.length === 0) return;

    // Create a smooth background color transition linked to the scroll position of each section
    sections.forEach((section) => {
      const theme = section.getAttribute('data-theme') || 'var(--color-et-dark-gold-onyx)';
      
      gsap.to(bgRef.current, {
        backgroundColor: theme,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          end: 'top 20%',
          scrub: true,
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      {/* Dynamic Background Layer */}
      <div 
        ref={bgRef}
        className="fixed inset-0 z-[-2] bg-et-dark-gold-onyx" 
      />
    </>
  );
}
