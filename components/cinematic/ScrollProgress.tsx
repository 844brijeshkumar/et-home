'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className="fixed left-8 top-1/2 -translate-y-1/2 h-48 w-[1px] bg-et-ivory/10 z-50 mix-blend-difference hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="w-[2px] -ml-[0.5px] bg-et-ivory origin-top"
        style={{ scaleY, height: '100%' }}
      />
      
      {/* Scroll indicator dot */}
      <motion.div
        className="w-1.5 h-1.5 rounded-full bg-et-ivory -ml-[2px] shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        style={{ 
          y: useSpring(
            // Map 0-1 to 0-192px (h-48)
            scrollYProgress, 
            { stiffness: 100, damping: 30 }
          ),
          marginTop: -3 // Center dot on the line end
        }}
      />
    </motion.div>
  );
}
