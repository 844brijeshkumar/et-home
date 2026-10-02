import React from 'react';

export default function GoldCatchy({ data }) {
  const { owner, product } = data;

  return (
    <div className="min-h-screen bg-[#050403] text-[#faedd0] relative overflow-hidden font-sans selection:bg-[#ffd700] selection:text-black">
      {/* High-Luminance Gold Flares */}
      <div className="absolute -top-40 -left-40 w-[34rem] h-[34rem] bg-gradient-to-br from-[#ffd700]/20 via-[#d4af37]/10 to-transparent rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/4 -right-40 w-[36rem] h-[36rem] bg-gradient-to-tl from-[#e6ca65]/15 via-[#996515]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#ffd700]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Opulent Geometric Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffe066 1.2px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      <main className="max-w-xl mx-auto px-5 py-8 md:py-12 relative z-10 space-y-6">
        
        {/* Crown Custodian Header Bar */}
        <section className="relative p-[1px] rounded-3xl bg-gradient-to-r from-[#ffd700] via-[#fff5cc] to-[#b8860b] shadow-[0_10px_40px_rgba(212,175,55,0.25)]">
          <div className="bg-[#0c0a06]/95 backdrop-blur-2xl p-6 rounded-[23px] flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#ffd700] via-[#ffffff] to-[#b8860b] blur-[3px] opacity-80 animate-pulse" />
                <img 
                  src={owner.photo} 
                  alt={owner.name} 
                  className="relative w-16 h-16 rounded-full object-cover border-2 border-[#120f0a] ring-2 ring-[#ffd700]/60" 
                />
              </div>
              <div className="truncate">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ffd700] shadow-[0_0_10px_#ffd700]" />
                  <p className="text-[10px] font-mono tracking-[0.3em] text-[#ffd700] uppercase font-bold">Supreme Custodian</p>
                </div>
                <h1 className="text-xl md:text-2xl font-serif text-white tracking-wide truncate">{owner.name}</h1>
                <p className="text-xs text-[#c4b693] font-mono tracking-wider">{owner.location}</p>
              </div>
            </div>

            <div className="flex-shrink-0 text-right">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[10px] font-mono tracking-[0.25em] uppercase rounded-full bg-gradient-to-b from-[#ffd700]/25 via-[#ffd700]/10 to-transparent text-[#fff4cc] border border-[#ffd700]/70 shadow-[0_0_25px_rgba(255,215,0,0.3)] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fff] shadow-[0_0_8px_#fff]" />
                Aurum Prime
              </span>
            </div>
          </div>
        </section>

        {/* Master Showcase: The High-Spend Gold Card */}
        <section className="relative rounded-3xl p-[1px] bg-gradient-to-b from-[#ffd700] via-[#d4af37]/50 to-[#2e220e] shadow-[0_16px_60px_rgba(0,0,0,0.95)] overflow-hidden">
          <div className="bg-[#090805]/95 backdrop-blur-2xl rounded-[23px] p-6 space-y-6">
            
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#d4af37] tracking-[0.25em] uppercase font-semibold">Permanent Master Holding</span>
              <span className="px-3 py-1 rounded-full border border-[#ffd700]/50 bg-[#1f190b] text-[#ffe680] text-[10px] tracking-wider shadow-[0_0_15px_rgba(255,215,0,0.15)]">
                {product.category}
              </span>
            </div>

            {/* Highlight Asset Visual */}
            <div className="relative rounded-2xl overflow-hidden border border-[#ffd700]/40 bg-black/90 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#090805] via-transparent to-[#ffd700]/15 z-10 pointer-events-none" />
              <img 
                src={product.photo} 
                alt={product.name} 
                className="w-full h-64 object-cover object-center transform transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute bottom-4 left-5 z-20">
                <p className="text-[10px] font-mono tracking-[0.3em] text-[#ffd700] uppercase font-bold">Specification</p>
                <p className="text-base font-serif text-white tracking-wide">{product.model}</p>
              </div>
            </div>

            {/* Asset Identity */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#ffe066] to-[#d4af37] tracking-tight">
                {product.name}
              </h2>
              <p className="text-xs text-[#c4b693]/90 mt-2 leading-relaxed font-light">
                Secured within private bullion status. Encrypted physical token verified with zero-latency hardware attestation.
              </p>
            </div>

            {/* Prestige Flex Statement (Replacing all progress bars) */}
            <div className="pt-4 border-t border-[#ffd700]/20 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[10px] font-mono tracking-[0.25em] text-[#a89f81] uppercase">Vault Classification</p>
                <p className="text-xs font-serif text-[#ffd700] tracking-wider">Unrestricted Sovereign Custody</p>
              </div>
              <span className="w-3 h-3 rounded-full bg-[#ffd700] shadow-[0_0_15px_#ffd700]" />
            </div>

          </div>
        </section>

        {/* Private Reserve Teaser */}
        <section className="relative rounded-2xl p-[1px] bg-gradient-to-r from-[#ffd700]/30 via-transparent to-[#b8860b]/30">
          <div className="bg-[#0a0805]/90 backdrop-blur-md rounded-[15px] p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-xl bg-[#17130b] border border-[#ffd700]/30 flex items-center justify-center flex-shrink-0 text-[#ffd700] shadow-[0_0_15px_rgba(255,215,0,0.15)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="truncate">
                <h3 className="text-sm font-serif text-[#faedd0] truncate">Obsidian Guild Allocation</h3>
                <p className="text-[10px] font-mono text-[#a89f81] tracking-wider">Direct Concierge Authorization Required</p>
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#ffd700] border border-[#ffd700]/30 px-3 py-1 rounded-md flex-shrink-0 bg-[#ffd700]/5">
              Vault Locked
            </span>
          </div>
        </section>

        {/* Private Concierge Trigger */}
        <section className="pt-2">
          <button 
            type="button"
            className="w-full relative group overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-[#ffd700]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700] via-[#ffffff] to-[#b8860b] transition-all duration-500 opacity-70 group-hover:opacity-100" />
            <div className="relative bg-[#0c0a06] rounded-[15px] px-6 py-4 flex items-center justify-center gap-3 transition-colors duration-300 group-hover:bg-[#0c0a06]/85">
              <span className="w-2 h-2 rounded-full bg-[#ffd700] animate-ping" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#fff4cc] font-bold">
                Summon Floor Custodian
              </span>
            </div>
          </button>
        </section>

      </main>
    </div>
  );
}