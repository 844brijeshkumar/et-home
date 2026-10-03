'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';

export default function IdentityScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [sequenceFailed, setSequenceFailed] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrame = useRef(0);
  const FRAME_COUNT = 480;

  // Frame Rendering Logic
  const renderFrame = (index: number) => {
    if (!canvasRef.current || !imagesRef.current[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const img = imagesRef.current[index];
    if (!img.complete || img.naturalWidth === 0) return;
    
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    
    const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const newWidth = imgWidth * ratio;
    const newHeight = imgHeight * ratio;
    const offsetX = (canvasWidth - newWidth) / 2;
    const offsetY = (canvasHeight - newHeight) / 2;
    
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
    currentFrame.current = index;
  };

  useEffect(() => {
    // 1. Image Preloading
    let failed = false;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameStr = i.toString().padStart(3, '0');
      img.src = `/v-3 frames/frame_${frameStr}.jpg`;
      
      img.onload = () => {
        // Render the first frame immediately once loaded
        if (i === 1) {
           renderFrame(0);
        }
      };
      
      img.onerror = () => {
        if (!failed) {
          failed = true;
          setSequenceFailed(true);
        }
      };
      
      images.push(img);
    }
    imagesRef.current = images;

    // 2. Setup Canvas Resize
    const handleResize = () => {
      if (canvasRef.current) {
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
        
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
           ctx.scale(dpr, dpr);
        }
        
        renderFrame(currentFrame.current);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      // Pin the Identity section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: '.identity-sticky',
        pinSpacing: false,
        scrub: 1.5,
      });

      // Reveal network graph on scroll
      const nodes = networkRef.current?.querySelectorAll('.node-reveal');
      const lines = networkRef.current?.querySelectorAll('.line-reveal');
      
      if (nodes && lines) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: networkRef.current,
            start: 'top 70%',
            end: 'bottom 40%',
            scrub: 1
          }
        });

        tl.fromTo(nodes[0], { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 })
          .fromTo(lines[0], { scaleY: 0 }, { scaleY: 1, transformOrigin: 'top', duration: 1 })
          .fromTo(nodes[1], { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 })
          .fromTo(lines[1], { scaleY: 0 }, { scaleY: 1, transformOrigin: 'top', duration: 1 })
          .fromTo(nodes[2], { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 })
          .fromTo(lines[2], { scaleY: 0 }, { scaleY: 1, transformOrigin: 'top', duration: 1 })
          .fromTo(nodes[3], { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 });
      }

      // Scroll sequence animation
      if (!sequenceFailed) {
        const scrollObj = { frame: 0 };
        const idleObj = { frame: 0 };

        const updateFrame = () => {
          // Combine idle and scroll progress
          const totalFrame = Math.round(scrollObj.frame) + Math.floor(idleObj.frame);
          let finalFrame = totalFrame % FRAME_COUNT;
          if (finalFrame < 0) finalFrame += FRAME_COUNT;
          renderFrame(finalFrame);
        };

        // Idle autoplay (24fps for 480 frames = 20s)
        gsap.to(idleObj, {
          frame: FRAME_COUNT,
          duration: 20,
          ease: 'none',
          repeat: -1,
          onUpdate: updateFrame
        });

        // Scroll scrubbing (advances 1 full loop over the scroll distance)
        gsap.to(scrollObj, {
          frame: FRAME_COUNT,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5,
          },
          onUpdate: updateFrame
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [sequenceFailed]);

  return (
    <section 
      ref={containerRef}
      data-theme="var(--color-et-velvet-amethyst)"
      className="et-section et-scene-marker relative w-full h-[250vh] z-10 overflow-hidden"
    >
      {/* VIDEO LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="identity-sticky h-screen w-full flex items-center justify-center opacity-100">
          {!sequenceFailed ? (
            <canvas 
              ref={canvasRef}
              className="w-full h-full object-cover"
            />
          ) : (
            <video 
              src="/videos/v-3.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Narrative Sticky Layer */}
      <div className="sticky top-0 h-[80vh] w-full flex flex-col items-center justify-center pointer-events-none px-6 text-center z-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-display text-3xl md:text-5xl text-et-ivory font-bold drop-shadow-lg mb-8">
            Every ET object carries an identity.
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-5xl text-et-ivory font-bold drop-shadow-lg mb-8">
            Not merely a serial number.
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-20%" }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="font-display text-4xl md:text-6xl text-et-muted-gold font-bold italic drop-shadow-lg">
            A relationship.
          </h2>
        </motion.div>
      </div>

      {/* Technical Concept & Visual Network */}
      <div className="relative h-[150vh] flex items-center justify-center w-full px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl">
          
          {/* Concepts */}
          <div className="flex flex-col gap-16 md:w-1/2 mb-16 md:mb-0">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-et-ivory mb-3 font-bold drop-shadow-md">Authenticity</h3>
              <p className="text-sm font-bold text-et-ivory max-w-xs drop-shadow-md">The object can be cryptographically verified instantly.</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-et-ivory mb-3 font-bold drop-shadow-md">Identity</h3>
              <p className="text-sm font-bold text-et-ivory max-w-xs drop-shadow-md">The physical object is uniquely associated with its digital counterpart.</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-et-ivory mb-3 font-bold drop-shadow-md">Access</h3>
              <p className="text-sm font-bold text-et-ivory max-w-xs drop-shadow-md">Identity determines the privileges the object unlocks in the physical world.</p>
            </div>
          </div>

          {/* Network Visualization */}
          <div ref={networkRef} className="flex flex-col items-center md:w-1/2 h-[500px]">
            <div className="node-reveal flex flex-col items-center">
              <p className="text-[10px] tracking-[0.2em] uppercase text-et-ivory font-bold drop-shadow-md mb-2">Object</p>
              <div className="w-2 h-2 rounded-full bg-et-ivory shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            </div>
            
            <div className="line-reveal w-[1px] h-20 bg-gradient-to-b from-et-ivory/50 to-et-ivory/10 my-1" />
            
            <div className="node-reveal flex flex-col items-center">
              <p className="text-[10px] tracking-[0.2em] uppercase text-et-ivory font-bold drop-shadow-md mb-2">Identity</p>
              <div className="w-2 h-2 rounded-full bg-et-ivory/70 shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
            </div>
            
            <div className="line-reveal w-[1px] h-20 bg-gradient-to-b from-et-ivory/30 to-et-ivory/5 my-1" />
            
            <div className="node-reveal flex flex-col items-center">
              <p className="text-[10px] tracking-[0.2em] uppercase text-et-ivory font-bold drop-shadow-md mb-2">Owner</p>
              <div className="w-2 h-2 rounded-full bg-et-muted-gold shadow-[0_0_8px_rgba(197,160,89,0.5)]" />
            </div>
            
            <div className="line-reveal w-[1px] h-20 bg-gradient-to-b from-et-muted-gold/50 to-transparent my-1" />
            
            <div className="node-reveal flex flex-col items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-et-ivory/20 mb-2" />
              <p className="text-[10px] tracking-[0.2em] uppercase text-et-muted-gold font-bold drop-shadow-md">Access</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
