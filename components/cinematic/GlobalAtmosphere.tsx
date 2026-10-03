'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function GlobalAtmosphere() {
  const [themes, setThemes] = useState<string[]>(['var(--color-et-dark-gold-onyx)']);
  const containerRef = useRef<HTMLDivElement>(null);

  // Discover all unique themes on mount
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.et-scene-marker')) as HTMLElement[];
    const uniqueThemes = new Set<string>();
    uniqueThemes.add('var(--color-et-dark-gold-onyx)'); // Base fallback
    
    sections.forEach((s) => {
      const theme = s.getAttribute('data-theme');
      if (theme) uniqueThemes.add(theme);
    });
    setThemes(Array.from(uniqueThemes));
  }, []);

  useEffect(() => {
    if (themes.length <= 1) return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.et-scene-marker') as HTMLElement[];
      
      sections.forEach((section) => {
        const theme = section.getAttribute('data-theme') || 'var(--color-et-dark-gold-onyx)';
        const targetDiv = containerRef.current?.querySelector(`[data-bg-theme="${theme}"]`);
        
        if (targetDiv) {
          // Fade IN the target theme div
          gsap.to(targetDiv, {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top 60%',
              end: 'top 20%',
              scrub: true,
            }
          });
          
          // Fade OUT all other theme divs
          const siblings = Array.from(containerRef.current?.children || []).filter(el => el !== targetDiv);
          siblings.forEach(sibling => {
            gsap.to(sibling, {
              opacity: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top 60%',
                end: 'top 20%',
                scrub: true,
              }
            });
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [themes]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[-2] pointer-events-none bg-et-dark-gold-onyx">
      {themes.map((theme, idx) => (
        <div
          key={theme}
          data-bg-theme={theme}
          className="absolute inset-0"
          style={{ 
            backgroundColor: theme,
            opacity: idx === 0 ? 1 : 0 
          }}
        />
      ))}
    </div>
  );
}
