import React from 'react';

export default function PremiumBase({ data }) {
  const { owner, product } = data;

  return (
    <div className="min-h-screen bg-[#070304] text-[#f5e6e8] relative overflow-hidden font-sans selection:bg-[#991b1b] selection:text-white">
      {/* Deep Crimson Ambient Flares */}
      <div className="absolute -top-36 -left-36 w-[32rem] h-[32rem] bg-gradient-to-br from-[#800a12]/20 via-[#450a0a]/10 to-transparent rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 -right-44 w-[36rem] h-[36rem] bg-[#991b1b]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Velvet Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #fca5a5 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}
      />

      <main className="max-w-xl mx-auto px-5 py-8 md:py-12 relative z-10 space-y-6">
        
        {/* Consular Profile Card */}
        <section className="relative p-[1px] rounded-3xl bg-gradient-to-r from-[#991b1b]/60 via-[#e2e8f0]/30 to-[#450a0a] shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
          <div className="bg-[#0f0506]/95 backdrop-blur-2xl p-6 rounded-[23px] flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#dc2626] via-[#f8fafc] to-[#7f1d1d] blur-[2px] opacity-75" />
                <img 
                  src={owner.photo} 
                  alt={owner.name} 
                  className="relative w-14 h-14 rounded-full object-cover border-2 border-[#180608] ring-1 ring-[#f87171]/40" 
                />
              </div>
              <div className="truncate">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] shadow-[0_0_8px_#ef4444]" />
                  <p className="text-[10px] font-mono tracking-[0.3em] text-[#fca5a5] uppercase font-semibold">Consular Custodian</p>
                </div>
                <h1 className="text-xl md:text-2xl font-serif text-white tracking-wide truncate">{owner.name}</h1>
                <p className="text-xs text-[#bda1a4] font-mono tracking-wider">{owner.location}</p>
              </div>
            </div>

            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[10px] font-mono tracking-[0.25em] uppercase rounded-full bg-[#2a080c] text-[#fecaca] border border-[#ef4444]/40 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                Vanguard
              </span>
            </div>
          </div>
        </section>

        {/* Primary Specimen Card */}
        <section className="relative rounded-3xl p-[1px] bg-gradient-to-b from-[#991b1b]/50 via-[#3a080e] to-transparent shadow-[0_16px_50px_rgba(0,0,0,0.95)] overflow-hidden">
          <div className="bg-[#0b0304]/90 backdrop-blur-2xl rounded-[23px] p-6 space-y-6">
            
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#c48d93] tracking-[0.2em] uppercase">Permanent Sovereign Holding</span>
              <span className="px-2.5 py-0.5 rounded border border-[#ef4444]/30 bg-[#260508] text-[#fca5a5] text-[10px] tracking-wider">
                {product.category}
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#ef4444]/30 bg-black/80 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0304] via-transparent to-[#ef4444]/10 z-10 pointer-events-none" />
              <img 
                src={product.photo} 
                alt={product.name} 
                className="w-full h-60 object-cover object-center transform transition-transform duration-700 hover:scale-105" 
              />
              <div className="absolute bottom-3 left-4 z-20">
                <p className="text-[10px] font-mono tracking-[0.25em] text-[#f87171] uppercase">Asset Designation</p>
                <p className="text-sm font-serif text-white tracking-wide">{product.model}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fecaca] to-[#ef4444] tracking-tight">
                {product.name}
              </h2>
              <p className="text-xs text-[#bda1a4]/80 mt-1 leading-relaxed">
                Registered under cryptographic vault ledger. Fully verified biometric identity profile.
              </p>
            </div>

            {/* Prestige Status Tier Line */}
            <div className="pt-4 border-t border-[#ef4444]/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse" />
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#fecaca]">Tier III Custody Protocol</span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#fca5a5] border border-[#ef4444]/30 px-3 py-1 rounded-full bg-[#200508]">
                Privileged Access
              </span>
            </div>

          </div>
        </section>

        {/* Restricted Silhouette Slot */}
        <section className="relative rounded-2xl p-[1px] bg-gradient-to-b from-[#450a0a]/50 to-transparent opacity-65 hover:opacity-90 transition-opacity">
          <div className="bg-[#0b0304]/80 backdrop-blur-md rounded-[15px] p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#1c0407] border border-[#ef4444]/20 flex items-center justify-center flex-shrink-0 text-[#f87171]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="truncate">
                <h3 className="text-sm font-serif text-white truncate">Sovereign Obsidian Ingot</h3>
                <p className="text-[10px] font-mono text-[#bda1a4] tracking-wider">Unreleased Prototype Allocation</p>
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#f87171]/80 border border-[#ef4444]/20 px-2.5 py-1 rounded-md flex-shrink-0">
              Classified
            </span>
          </div>
        </section>

      </main>
    </div>
  );
}