import React from 'react';

export default function EliteInfinite({ data }) {
  const { owner, product } = data;

  return (
    <div className="min-h-screen bg-[#020104] text-white relative overflow-hidden font-sans selection:bg-[#06b6d4] selection:text-black">
      {/* Hyper-Luminance Prismatic Fields */}
      <div className="absolute -top-52 -left-52 w-[48rem] h-[48rem] bg-gradient-to-br from-[#8b5cf6]/30 via-[#3b82f6]/20 to-transparent rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/4 -right-56 w-[50rem] h-[50rem] bg-gradient-to-tl from-[#06b6d4]/25 via-[#9333ea]/15 to-transparent rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-[36rem] h-[36rem] bg-[#a855f7]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Cybernetic Micro-Array Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #38bdf8 1.4px, transparent 0)',
          backgroundSize: '20px 20px'
        }}
      />

      <main className="max-w-2xl mx-auto px-5 py-8 md:py-12 relative z-10 space-y-6">
        
        {/* Supreme HUD Status Strip */}
        <div className="flex items-center justify-between text-[9px] font-mono tracking-[0.35em] uppercase text-[#38bdf8] border-b border-[#06b6d4]/30 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] animate-ping" />
            <span>Absolute Sovereign Authority</span>
          </div>
          <span>Continuum: Unrestricted</span>
        </div>

        {/* Apex Monolith Identity Header */}
        <section className="relative rounded-3xl p-[1px] bg-gradient-to-r from-[#06b6d4] via-white to-[#8b5cf6] shadow-[0_20px_70px_rgba(6,182,212,0.35)]">
          <div className="bg-[#050308]/95 backdrop-blur-2xl p-6 md:p-8 rounded-[23px] relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-5 min-w-0">
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#06b6d4] via-white to-[#a855f7] blur-md opacity-90 animate-[spin_8s_linear_infinite]" />
                  <img 
                    src={owner.photo} 
                    alt={owner.name} 
                    className="relative w-20 h-20 rounded-2xl object-cover border-2 border-[#06b6d4] bg-black" 
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#38bdf8] rounded-full border-2 border-[#050308] shadow-[0_0_12px_#38bdf8]" />
                </div>

                <div className="truncate space-y-1">
                  <p className="text-[10px] font-mono tracking-[0.4em] text-[#38bdf8] uppercase font-bold">Infinite Custodian</p>
                  <h1 className="text-2xl md:text-3xl font-serif text-white tracking-wide truncate">{owner.name}</h1>
                  <p className="text-xs text-[#c4b5fd] font-mono tracking-wider">{owner.location}</p>
                </div>
              </div>

              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-mono tracking-[0.3em] uppercase rounded-xl bg-gradient-to-r from-[#06b6d4]/30 via-white/10 to-[#8b5cf6]/30 text-white border border-[#38bdf8] shadow-[0_0_25px_rgba(56,189,248,0.4)]">
                  <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#fff]" />
                  Infinite Apex
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Master Showcase: The High-Spend Prismatic Canvas */}
        <section className="relative rounded-3xl p-[1px] bg-gradient-to-b from-[#06b6d4] via-[#4c1d95] to-transparent shadow-[0_28px_90px_rgba(0,0,0,0.98)] overflow-hidden">
          <div className="bg-[#030206]/95 backdrop-blur-3xl rounded-[23px] p-6 md:p-8 space-y-6">
            
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#38bdf8] tracking-[0.3em] uppercase font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
                Primary Continuum Holding
              </span>
              <span className="px-3 py-1 rounded-md border border-[#06b6d4]/50 bg-[#0a192f] text-[#7dd3fc] text-[10px] tracking-widest uppercase">
                {product.category}
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#06b6d4]/50 bg-black shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-[#06b6d4]/20 z-10 pointer-events-none" />
              <img 
                src={product.photo} 
                alt={product.name} 
                className="w-full h-80 object-cover object-center transform transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute bottom-5 left-6 z-20 space-y-1">
                <p className="text-[10px] font-mono tracking-[0.35em] text-[#38bdf8] uppercase font-bold">Attested Specification</p>
                <p className="text-xl font-serif text-white tracking-wide">{product.model}</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-[#7dd3fc] to-[#a855f7] tracking-tight">
                {product.name}
              </h2>
              <p className="text-xs text-[#cbd5e1] leading-relaxed font-light mt-2">
                Physical cryptographic token permanently sealed against KMS Master Root. Highest attainable tier in global asset custody.
              </p>
            </div>

            <div className="pt-4 border-t border-[#06b6d4]/30 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[9px] font-mono tracking-[0.3em] text-[#38bdf8] uppercase font-bold">Clearance Level</p>
                <p className="text-xs font-serif text-white tracking-wider">Unrestricted Infinite Sovereign</p>
              </div>
              <span className="w-3.5 h-3.5 rounded-full bg-[#06b6d4] shadow-[0_0_20px_#06b6d4]" />
            </div>

          </div>
        </section>

        {/* Floor Custodian Direct Link */}
        <section className="pt-2">
          <button 
            type="button"
            className="w-full relative group overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4] via-white to-[#8b5cf6] transition-all duration-700 opacity-90 group-hover:opacity-100" />
            <div className="relative bg-[#050308] rounded-[15px] px-6 py-4 flex items-center justify-center gap-3 transition-colors duration-300 group-hover:bg-[#050308]/85">
              <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] animate-ping" />
              <span className="text-xs font-mono uppercase tracking-[0.35em] text-white font-bold">
                Summon Custodial Director Immediately
              </span>
            </div>
          </button>
        </section>

      </main>
    </div>
  );
}