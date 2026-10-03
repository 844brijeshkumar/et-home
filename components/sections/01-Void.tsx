'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [sequenceFailed, setSequenceFailed] = useState(false);
  
  // Store loaded image objects keyed by frame index (0-based)
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const currentFrame = useRef(0);
  const FRAME_COUNT = 240;

  // Find the closest loaded frame to the requested index to prevent blank flashes
  const getClosestFrame = (targetIndex: number) => {
    const loadedFrames = Array.from(imagesRef.current.keys()).sort((a, b) => a - b);
    if (loadedFrames.length === 0) return null;
    
    let closest = loadedFrames[0];
    let minDiff = Math.abs(targetIndex - closest);
    
    for (const frame of loadedFrames) {
      const diff = Math.abs(targetIndex - frame);
      if (diff < minDiff) {
        minDiff = diff;
        closest = frame;
      }
    }
    return imagesRef.current.get(closest);
  };

  // Frame Rendering Logic
  const renderFrame = (index: number) => {
    if (!canvasRef.current) return;
    
    const img = getClosestFrame(index);
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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
    let failed = false;
    let priority1LoadedCount = 0;
    
    // Priority 1: Keyframes (every 10th frame) to quickly get a scrubbable sparse sequence
    const priority1: number[] = [];
    // Priority 2: The rest of the frames to fill the gaps
    const priority2: number[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      if (i === 1 || i === FRAME_COUNT || i % 10 === 0) {
        priority1.push(i);
      } else {
        priority2.push(i);
      }
    }

    const loadFrame = (frameNum: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        const frameStr = frameNum.toString().padStart(3, '0');
        img.src = `/v-1 frames/frame_${frameStr}.jpg`;

        img.onload = () => {
          imagesRef.current.set(frameNum - 1, img); // 0-indexed internally
          if (frameNum === 1) renderFrame(0);
          resolve();
        };

        img.onerror = () => {
          if (!failed) {
            failed = true;
            setSequenceFailed(true);
          }
          resolve(); // Resolve anyway so we don't stall the loading sequence
        };
      });
    };

    const loadPriority1 = async () => {
      // Load Priority 1 concurrently (~25 frames)
      const promises = priority1.map(frameNum => 
        loadFrame(frameNum).then(() => {
          priority1LoadedCount++;
          // Dispatch heroLoaded when all keyframes are ready so Preloader can fade out
          if (priority1LoadedCount === priority1.length) {
            window.dispatchEvent(new Event('heroLoaded'));
            loadPriority2();
          }
        })
      );
      await Promise.all(promises);
    };

    const loadPriority2 = async () => {
      // Load remaining frames in batches to avoid choking the network
      const batchSize = 10;
      for (let i = 0; i < priority2.length; i += batchSize) {
        if (failed) break;
        const batch = priority2.slice(i, i + batchSize);
        await Promise.all(batch.map(loadFrame));
      }
    };

    loadPriority1();

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
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: '.hero-sticky',
        pinSpacing: false,
        scrub: true,
      });

      if (!sequenceFailed) {
        const scrollObj = { frame: 0 };
        const idleObj = { frame: 0 };

        const updateFrame = () => {
          const totalFrame = Math.round(scrollObj.frame) + Math.floor(idleObj.frame);
          let finalFrame = totalFrame % FRAME_COUNT;
          if (finalFrame < 0) finalFrame += FRAME_COUNT;
          
          renderFrame(finalFrame);
        };

        // Idle autoplay
        gsap.to(idleObj, {
          frame: FRAME_COUNT,
          duration: 10,
          ease: 'none',
          repeat: -1,
          onUpdate: updateFrame
        });

        // Scroll scrubbing
        gsap.to(scrollObj, {
          frame: FRAME_COUNT,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true, // Tied to smooth lenis scroll
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
      data-theme="var(--color-et-dark-gold-onyx)"
      className="et-section et-scene-marker relative w-full h-[200vh]"
    >
      <div className="hero-sticky relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* CANVAS SEQUENCE LAYER */}
        <div className="absolute inset-0 z-0 flex items-center justify-center mix-blend-screen overflow-hidden bg-et-dark-gold-onyx">
          {!sequenceFailed ? (
            <canvas
              ref={canvasRef}
              className="w-full h-full object-cover opacity-60"
            />
          ) : (
            <video
              src="/videos/v-1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-60"
            />
          )}
        </div>

        {/* TYPOGRAPHY */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center mt-[10vh] pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-7xl md:text-9xl tracking-widest text-et-ivory font-light mb-8"
          >
            ET
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="text-sm md:text-base tracking-[0.3em] font-light text-et-ivory/80 uppercase"
          >
            Objects with identity.
          </motion.p>
        </div>

        {/* INTERACTION */}
        <motion.div
          className="absolute bottom-24 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
        >
          <button
            className="interactive group relative overflow-hidden px-10 py-4 border border-et-ivory/20 rounded-none transition-all duration-700 hover:border-et-muted-gold/50"
            onClick={() => {
              window.scrollTo({
                top: containerRef.current ? containerRef.current.offsetTop + containerRef.current.offsetHeight : window.innerHeight,
                behavior: 'smooth'
              });
            }}
          >
            <span className="relative z-10 text-[10px] tracking-[0.3em] text-et-ivory/70 group-hover:text-et-muted-gold transition-colors duration-500 uppercase">
              Enter the Arena
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-et-muted-gold/0 via-et-muted-gold/5 to-et-muted-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
