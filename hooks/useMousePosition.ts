'use client';

import { useEffect, useRef } from 'react';

export function useMousePosition() {
  const isEnabled = useRef(true);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      isEnabled.current = false;
      return;
    }

    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isEnabled.current || ticking) return;
      
      const x = e.clientX;
      const y = e.clientY;

      ticking = true;
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--mouse-x', `${x}px`);
        document.documentElement.style.setProperty('--mouse-y', `${y}px`);
        ticking = false;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
}
