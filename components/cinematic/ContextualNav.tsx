'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { id: '01', label: 'VOID' },
  { id: '02', label: 'PHILOSOPHY' },
  { id: '03', label: 'VAULT' },
  { id: '04', label: 'IDENTITY' },
  { id: '05', label: 'SYNDICATE' },
  { id: '06', label: 'THEATRE' },
  { id: '07', label: 'RECOGNITION' },
  { id: '08', label: 'RESERVE' },
];

export default function ContextualNav() {
  const [activeSection, setActiveSection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
      
      // Simple logic to find active section based on scroll position
      // Real implementation would use IntersectionObserver or GSAP ScrollTrigger
      const sections = document.querySelectorAll('.et-section');
      let current = 0;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          current = index;
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 mix-blend-difference"
      initial={{ opacity: 0 }}
      animate={{ opacity: hasScrolled ? 1 : 0 }}
      transition={{ duration: 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-3 py-10 px-4">
        {NAV_ITEMS.map((item, index) => (
          <div key={item.id} className="flex items-center justify-end group cursor-pointer">
            <motion.span 
              className="text-[10px] tracking-[0.2em] text-et-ivory/70 mr-4 whitespace-nowrap overflow-hidden"
              initial={{ width: 0, opacity: 0 }}
              animate={{ 
                width: isHovered ? 'auto' : 0, 
                opacity: isHovered ? 1 : 0 
              }}
              transition={{ duration: 0.3 }}
            >
              {item.label}
            </motion.span>
            <span className={`text-[10px] font-mono transition-colors duration-300 ${activeSection === index ? 'text-et-ivory' : 'text-et-ivory/30 group-hover:text-et-ivory/60'}`}>
              {item.id}
            </span>
          </div>
        ))}
      </div>
    </motion.nav>
  );
}
