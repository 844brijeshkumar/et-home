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

    const handleMouseMove = (e: MouseEvent) => {
      if (!isEnabled.current) return;
      
      const x = e.clientX;
      const y = e.clientY;

      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
}
