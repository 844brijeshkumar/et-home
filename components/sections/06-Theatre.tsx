'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

export default function TheatreScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${track.scrollWidth}`,
          scrub: true,
          pin: '.theatre-pin',
          invalidateOnRefresh: true,
        }
      });

      tl.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none'
      });

      // Scale effect on images as they enter the viewport
      const imageContainers = gsap.utils.toArray<HTMLElement>('.theatre-img-container');
      imageContainers.forEach((container) => {
        const media = container.querySelector('img, video');
        if (media) {
          gsap.fromTo(media, 
            { scale: 1.15 },
            {
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: container,
                containerAnimation: tl,
                start: 'left right', 
                end: 'center center', 
                scrub: true,
              }
            }
          );
        }
      });

      // Video playback logic
      const videos = gsap.utils.toArray<HTMLVideoElement>('.theatre-video');
      videos.forEach((video) => {
        ScrollTrigger.create({
          trigger: video.closest('.theatre-img-container'),
          containerAnimation: tl,
          start: 'left 80%', 
          end: 'right 20%',
          onEnter: () => {
            video.currentTime = 0;
            video.play().catch(() => {});
          },
          onLeave: () => video.pause(),
          onEnterBack: () => {
            video.currentTime = 0;
            video.play().catch(() => {});
          },
          onLeaveBack: () => video.pause(),
        });
      });

      // Refresh ScrollTrigger when images load to ensure correct scrollWidth
      const images = track.querySelectorAll('img');
      images.forEach((img) => {
        if (img.complete) {
          ScrollTrigger.refresh();
        } else {
          img.addEventListener('load', () => ScrollTrigger.refresh());
        }
      });

      // Fallback ResizeObserver to catch any layout shifts that change track width
      const ro = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });
      ro.observe(track);

      return () => {
        ro.disconnect();
      };

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      data-theme="var(--color-et-dark-gold-onyx)"
      className="et-section et-scene-marker relative w-full min-h-screen z-10"
    >
      <div className="theatre-pin h-screen w-full overflow-hidden">
        
        <div ref={trackRef} className="flex h-screen w-max items-center px-[5vw]">
          
          {/* Opening */}
          <div className="w-[90vw] md:w-[60vw] h-screen flex flex-col items-center justify-center shrink-0 pr-[10vw]">
            <p className="text-et-muted-gold tracking-widest mb-6 uppercase text-sm">06</p>
            <h2 className="text-5xl md:text-7xl font-display text-et-ivory tracking-[0.2em] mb-8 font-light text-center">
              THE THEATRE
            </h2>
            <p className="text-et-ivory/80 tracking-[0.3em] uppercase text-xs md:text-sm text-center">
              The object leaves the screen.
            </p>
          </div>

          {/* Image 01 - ANONYMOUS */}
          <div className="theatre-img-container shrink-0 mx-[2vw] flex flex-col justify-center items-center">
            <div className="flex flex-col w-[80vw] md:w-[25vw] h-[65vh] rounded-[24px] bg-transparent border border-et-ivory/10 overflow-hidden shadow-xl">
              <div className="flex-1 w-full relative flex items-center justify-center p-0">
                <Image src="/images/a1.png" alt="Anonymous" fill className="object-cover rounded-t-[24px]" sizes="(max-width: 768px) 90vw, 45vw" />
              </div>
              <div className="flex justify-between items-center w-full px-6 py-6 shrink-0 border-t border-et-ivory/10">
                <h3 className="text-lg md:text-xl font-display text-et-ivory tracking-[0.2em] font-light truncate">ANONYMOUS</h3>
                <div className="text-et-ivory/70 tracking-[0.2em] text-xs shrink-0 pl-4">01 / 06</div>
              </div>
            </div>
          </div>

          {/* Image 02 - MACHINE */}
          <div className="theatre-img-container shrink-0 mx-[2vw] flex flex-col justify-center items-center">
            <div className="flex flex-col w-[80vw] md:w-[25vw] h-[65vh] rounded-[24px] bg-transparent border border-et-ivory/10 overflow-hidden shadow-xl">
              <div className="flex-1 w-full relative flex items-center justify-center p-0">
                <Image src="/images/a2.png" alt="Machine" fill className="object-cover rounded-t-[24px]" sizes="(max-width: 768px) 90vw, 45vw" />
              </div>
              <div className="flex justify-between items-center w-full px-6 py-6 shrink-0 border-t border-et-ivory/10">
                <h3 className="text-lg md:text-xl font-display text-et-ivory tracking-[0.2em] font-light truncate">MACHINE</h3>
                <div className="text-et-ivory/70 tracking-[0.2em] text-xs shrink-0 pl-4">02 / 06</div>
              </div>
            </div>
          </div>

          {/* Image 03 - WATCH + COFFEE */}
          <div className="theatre-img-container shrink-0 mx-[2vw] flex flex-col justify-center items-center">
            <div className="flex flex-col w-[80vw] md:w-[25vw] h-[65vh] rounded-[24px] bg-transparent border border-et-ivory/10 overflow-hidden shadow-xl">
              <div className="flex-1 w-full relative flex items-center justify-center p-0">
                <Image src="/images/a3.jpg" alt="Watch + Coffee" fill className="object-cover rounded-t-[24px]" sizes="(max-width: 768px) 90vw, 45vw" />
              </div>
              <div className="flex justify-between items-center w-full px-6 py-6 shrink-0 border-t border-et-ivory/10">
                <h3 className="text-lg md:text-xl font-display text-et-ivory tracking-[0.2em] font-light truncate">WATCH + COFFEE</h3>
                <div className="text-et-ivory/70 tracking-[0.2em] text-xs shrink-0 pl-4">03 / 06</div>
              </div>
            </div>
          </div>

          {/* Image 04 - COFFEE CAN */}
          <div className="theatre-img-container shrink-0 mx-[2vw] flex flex-col justify-center items-center">
            <div className="flex flex-col w-[80vw] md:w-[25vw] h-[65vh] rounded-[24px] bg-transparent border border-et-ivory/10 overflow-hidden shadow-xl">
              <div className="flex-1 w-full relative flex items-center justify-center p-0">
                <Image src="/images/a4.png" alt="Coffee Can" fill className="object-cover rounded-t-[24px]" sizes="(max-width: 768px) 90vw, 45vw" />
              </div>
              <div className="flex justify-between items-center w-full px-6 py-6 shrink-0 border-t border-et-ivory/10">
                <h3 className="text-lg md:text-xl font-display text-et-ivory tracking-[0.2em] font-light truncate">COFFEE CAN</h3>
                <div className="text-et-ivory/70 tracking-[0.2em] text-xs shrink-0 pl-4">04 / 06</div>
              </div>
            </div>
          </div>

          {/* Image 05 - MOOD (Video) */}
          <div className="theatre-img-container shrink-0 mx-[2vw] flex flex-col justify-center items-center">
            <div className="flex flex-col w-[90vw] md:w-[45vw] h-[65vh] rounded-[24px] bg-transparent border border-et-ivory/10 overflow-hidden shadow-xl">
              <div className="flex-1 w-full flex items-center justify-center p-0">
                <video src="/videos/a-5.mp4" muted playsInline className="theatre-video w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center w-full px-6 py-6 shrink-0 bg-transparent border-t border-et-ivory/10">
                <h3 className="text-lg md:text-xl font-display text-et-ivory tracking-[0.2em] font-light truncate">MOOD</h3>
                <div className="text-et-ivory/70 tracking-[0.2em] text-xs shrink-0 pl-4">05 / 06</div>
              </div>
            </div>
          </div>

          {/* Image 06 - COUPLE */}
          <div className="theatre-img-container shrink-0 mx-[2vw] flex flex-col justify-center items-center">
            <div className="flex flex-col w-[80vw] md:w-[25vw] h-[65vh] rounded-[24px] bg-transparent border border-et-ivory/10 overflow-hidden shadow-xl">
              <div className="flex-1 w-full relative flex items-center justify-center p-0">
                <Image src="/images/a6.png" alt="Couple" fill className="object-cover rounded-t-[24px]" sizes="(max-width: 768px) 90vw, 45vw" />
              </div>
              <div className="flex justify-between items-center w-full px-6 py-6 shrink-0 border-t border-et-ivory/10">
                <h3 className="text-lg md:text-xl font-display text-et-ivory tracking-[0.2em] font-light truncate">COUPLE</h3>
                <div className="text-et-ivory/70 tracking-[0.2em] text-xs shrink-0 pl-4">06 / 06</div>
              </div>
            </div>
          </div>

          {/* End Demo/Info Block */}
          <div className="theatre-img-container shrink-0 ml-[10vw] mr-[30vw] flex flex-col justify-center items-center h-full">
            <div className="bg-transparent p-10 md:p-20 rounded-[32px] border border-et-ivory/10 shadow-2xl flex flex-col items-center justify-center text-center w-[85vw] md:w-[50vw]">
              <p className="text-et-muted-gold tracking-widest mb-6 uppercase text-sm">Beyond The Theatre</p>
              <h3 className="text-3xl md:text-6xl font-display text-et-ivory tracking-[0.2em] font-light mb-8">EXPLORE THE ARCHIVE</h3>
              <p className="text-et-ivory/80 tracking-widest leading-relaxed mb-12 text-sm md:text-base">
                The cinematic journey doesn't end here. Delve deeper into the curated gallery of physical artifacts, detailed case studies, and the overarching vision.
              </p>
              <button className="px-8 py-4 border border-et-ivory/30 text-et-ivory tracking-[0.2em] uppercase text-xs hover:bg-et-ivory hover:text-et-dark-gold-onyx transition-all duration-500 rounded-full">
                View Gallery
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
