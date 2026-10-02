import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function GenerationalArchive({ data }) {
  const { owner, product } = data;
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, -50]);
  const yText = useTransform(scrollY, [0, 500], [0, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50, damping: 20 } }
  };

  return (
    <div className="min-h-screen bg-[#020202] text-[#f4f4f5] font-serif selection:bg-[#f4f4f5] selection:text-black flex flex-col md:justify-center">
      
      {/* Absolute Minimalism - No Glows, No Gradients. Just a subtle grain. */}
      <div 
        className="fixed inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stucco.png")' }}
      />

      <motion.main 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
        className="max-w-3xl mx-auto w-full px-8 py-16 md:py-20 relative z-10"
      >
        
        {/* Archival Header */}
        <motion.header variants={itemVariants} className="border-b border-[#27272a] pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <p className="text-[9px] font-mono tracking-[0.4em] text-[#a1a1aa] uppercase">
              Perpetual Trust & Family Office Ledger
            </p>
            <h1 className="text-3xl md:text-5xl tracking-tight text-[#fafafa]" style={{ fontVariationSettings: '"wght" 300, "opsz" 48' }}>
              Dynastic Archive.
            </h1>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[10px] font-mono tracking-widest text-[#71717a] uppercase mb-1">Authenticating Principal</p>
            <p className="text-sm tracking-wide text-[#e4e4e7]" style={{ fontVariationSettings: '"wght" 400, "opsz" 12' }}>{owner.name}</p>
            <p className="text-xs text-[#52525b] italic mt-1">{owner.location}</p>
          </div>
        </motion.header>

        {/* The Institutional Asset Record */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Stark Black & White Imagery */}
          <motion.div variants={itemVariants} className="md:col-span-5 relative group" style={{ y: yImage }}>
            <div className="aspect-[4/5] w-full overflow-hidden bg-black relative">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={product.photo} 
                alt={product.name} 
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:contrast-100" 
              />
              {/* Museum-style glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>
            
            {/* Embedded Serial Plate */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute -bottom-4 -right-4 bg-[#020202] border border-[#27272a] p-3 shadow-2xl"
            >
              <img 
                src={owner.photo} 
                alt="Principal" 
                className="w-12 h-12 object-cover filter grayscale"
              />
            </motion.div>
          </motion.div>

          {/* Ledger Data (Right Column) */}
          <motion.div variants={itemVariants} className="md:col-span-7 space-y-10 pt-4" style={{ y: yText }}>
            
            <div>
              <p className="text-[10px] font-mono tracking-[0.3em] text-[#71717a] uppercase mb-3">
                Asset Designation
              </p>
              <h2 className="text-2xl tracking-wide text-[#fafafa]" style={{ fontVariationSettings: '"wght" 300, "opsz" 24' }}>
                {product.name}
              </h2>
              <p className="text-sm text-[#a1a1aa] mt-2 leading-relaxed" style={{ fontVariationSettings: '"wght" 400, "opsz" 12' }}>
                Registered in perpetuity under institutional custody. Physical provenance secured via immutable ledger and hardware-attested cryptographic seal.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-[#18181b]">
              <div>
                <p className="text-[9px] font-mono tracking-[0.2em] text-[#52525b] uppercase mb-1">Classification</p>
                <p className="text-xs tracking-wider text-[#d4d4d8]">{product.category}</p>
              </div>
              <div>
                <p className="text-[9px] font-mono tracking-[0.2em] text-[#52525b] uppercase mb-1">Model / Reference</p>
                <p className="text-xs tracking-wider text-[#d4d4d8]">{product.model}</p>
              </div>
              <div>
                <p className="text-[9px] font-mono tracking-[0.2em] text-[#52525b] uppercase mb-1">Custody Status</p>
                <p className="text-xs tracking-wider text-[#d4d4d8]">Permanent Hold</p>
              </div>
              <div>
                <p className="text-[9px] font-mono tracking-[0.2em] text-[#52525b] uppercase mb-1">Verification</p>
                <p className="text-xs tracking-wider text-[#d4d4d8]">NTAG424 DNA Verified</p>
              </div>
            </div>

          </motion.div>
        </section>

        {/* Private Concierge Footer */}
        <motion.footer variants={itemVariants} className="mt-20 pt-8 border-t border-[#18181b] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-mono text-[#52525b] tracking-widest uppercase">
            Strictly Confidential &bull; Client Eyes Only
          </p>
          
          <button className="group flex items-center gap-3 text-[10px] font-mono tracking-[0.3em] uppercase text-[#a1a1aa] hover:text-white transition-colors">
            <span className="w-8 h-[1px] bg-[#3f3f46] group-hover:bg-white transition-colors" />
            Contact Family Office Director
          </button>
        </motion.footer>

      </motion.main>
    </div>
  );
}