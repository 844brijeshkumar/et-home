'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SceneController({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is where we would orchestrate global scene transitions
    // For now, it simply wraps the scenes to provide a unified GSAP context
    
    const ctx = gsap.context(() => {
      // Future global scroll triggers can be defined here
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full relative">
      {children}
    </div>
  );
}
