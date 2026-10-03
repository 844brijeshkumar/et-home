'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [sequenceFailed, setSequenceFailed] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrame = useRef(0);
  const FRAME_COUNT = 240;

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
    let failed = false;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameStr = i.toString().padStart(3, '0');
      img.src = `/v-1 frames/frame_${frameStr}.jpg`;

      img.onload = () => {
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
        scrub: 1.5,
      });

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

        // Idle autoplay (24fps for 240 frames = 10s)
        gsap.to(idleObj, {
          frame: FRAME_COUNT,
          duration: 10,
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
      data-theme="var(--color-et-dark-gold-onyx)"
      className="et-section et-scene-marker relative w-full h-[200vh]"
    >
      <div className="hero-sticky relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* VIDEO LAYER */}
        <div className="absolute inset-0 z-0 flex items-center justify-center mix-blend-screen overflow-hidden">
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
        <div className="relative z-10 flex flex-col items-center justify-center text-center mt-[10vh]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-7xl md:text-9xl tracking-widest text-et-ivory font-light mb-8"
          >
            ET
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 3.5 }}
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
          transition={{ duration: 1.5, delay: 4.5 }}
        >
          <button
            className="interactive group relative overflow-hidden px-10 py-4 border border-et-ivory/20 rounded-none transition-all duration-700 hover:border-et-muted-gold/50"
            onClick={() => {
              // Smooth scroll to next section
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
