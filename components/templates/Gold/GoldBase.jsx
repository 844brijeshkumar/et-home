import React from 'react';

export default function GoldBase({ data }) {
  const { owner, product } = data;

  return (
    <div className="min-h-screen bg-[#080705] text-[#e8dec5] relative overflow-hidden font-sans selection:bg-[#d4af37] selection:text-black">
      {/* Warm Ambient Gold Radial Glows */}
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-gradient-to-br from-[#d4af37]/15 via-[#b8860b]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[32rem] h-[32rem] bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Guilloché Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)',
          backgroundSize: '28px 28px'
        }}
      />

      <main className="max-w-xl mx-auto px-5 py-8 md:py-12 relative z-10 space-y-6">
        
        {/* Custodian Prestige Header */}
        <section className="relative p-[1px] rounded-3xl bg-gradient-to-r from-[#d4af37]/40 via-[#f5e6a3]/20 to-[#996515]/40 shadow-[0_8px_32px_rgba(0,0,0,0.85)]">
          <div className="bg-[#0e0c08]/95 backdrop-blur-2xl p-6 rounded-[23px] flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#d4af37] via-[#fff4cc] to-[#996515] blur-[2px] opacity-70" />
                <img 
                  src={owner.photo} 
                  alt={owner.name} 
                  className="relative w-14 h-14 rounded-full object-cover border-2 border-[#120f0a] ring-1 ring-[#d4af37]/50" 
                />
              </div>
              <div className="truncate">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
                  <p className="text-[10px] font-mono tracking-[0.28em] text-[#d4af37]/80 uppercase">Sovereign Holder</p>
                </div>
                <h1 className="text-xl md:text-2xl font-serif text-white tracking-wide truncate">{owner.name}</h1>
                <p className="text-xs text-[#a89f81] font-mono tracking-wider">{owner.location}</p>
              </div>
            </div>

            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[10px] font-mono tracking-[0.25em] uppercase rounded-full bg-gradient-to-b from-[#d4af37]/20 to-transparent text-[#f5e6a3] border border-[#d4af37]/50 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                Gold Guild
              </span>
            </div>
          </div>
        </section>

        {/* Primary Vault Allocation Showcase */}
        <section className="relative rounded-3xl p-[1px] bg-gradient-to-b from-[#d4af37]/40 via-[#2a2213] to-transparent shadow-[0_12px_45px_rgba(0,0,0,0.9)] overflow-hidden">
          <div className="bg-[#0b0a07]/90 backdrop-blur-2xl rounded-[23px] p-6 space-y-6">
            
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#a89f81] tracking-[0.2em] uppercase">Vault Holding</span>
              <span className="px-2.5 py-0.5 rounded border border-[#d4af37]/30 bg-[#16120b] text-[#f5e6a3] text-[10px] tracking-wider">
                {product.category}
              </span>
            </div>

            {/* Product Display Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 bg-black/80 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a07] via-transparent to-[#d4af37]/10 z-10 pointer-events-none" />
              <img 
                src={product.photo} 
                alt={product.name} 
                className="w-full h-56 object-cover object-center transform transition-transform duration-700 hover:scale-105" 
              />
              <div className="absolute bottom-3 left-4 z-20">
                <p className="text-[10px] font-mono tracking-[0.25em] text-[#d4af37] uppercase">Edition Spec</p>
                <p className="text-sm font-serif text-white tracking-wide">{product.model}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#fff4cc] via-[#d4af37] to-[#996515] tracking-tight">
                {product.name}
              </h2>
              <p className="text-xs text-[#a89f81]/80 mt-1 leading-relaxed">
                Registered under immutable ledger custody. Hardware key authenticated.
              </p>
            </div>

            {/* Status Weight (No Numbers, Pure Presence) */}
            <div className="pt-4 border-t border-[#d4af37]/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#e8dec5]">Active Allocation</span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#a89f81] border border-[#d4af37]/30 px-3 py-1 rounded-full">
                Tier II Privilege
              </span>
            </div>

          </div>
        </section>

        {/* Locked Allocation (Subtle Desire Trigger) */}
        <section className="relative rounded-2xl p-[1px] bg-gradient-to-b from-[#2a2213] to-transparent opacity-70 hover:opacity-90 transition-opacity">
          <div className="bg-[#0b0a07]/80 backdrop-blur-md rounded-[15px] p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#14110b] border border-[#d4af37]/20 flex items-center justify-center flex-shrink-0 text-[#d4af37]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="truncate">
                <h3 className="text-sm font-serif text-white truncate">Imperial Sovereign Reserve</h3>
                <p className="text-[10px] font-mono text-[#a89f81] tracking-wider">Restricted Guild Allocation</p>
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37]/70 border border-[#d4af37]/20 px-2.5 py-1 rounded-md flex-shrink-0">
              Classified
            </span>
          </div>
        </section>

      </main>
    </div>
  );
}