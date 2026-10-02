import React from 'react';

export default function PremiumUltimate({ data }) {
  const { owner, product } = data;

  return (
    <div className="min-h-screen bg-[#040102] text-[#fff1f2] relative overflow-hidden font-sans selection:bg-[#e11d48] selection:text-white">
      {/* High-Luminance Crimson & Platinum Radiance */}
      <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] bg-gradient-to-br from-[#e11d48]/25 via-[#881337]/15 to-transparent rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 -right-48 w-[40rem] h-[40rem] bg-gradient-to-tl from-[#be123c]/20 via-[#4c0519]/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-5 left-1/4 w-96 h-96 bg-[#e11d48]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Radial Obsidian Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #fda4af 1.2px, transparent 0)',
          backgroundSize: '26px 26px'
        }}
      />

      <main className="max-w-xl mx-auto px-5 py-8 md:py-12 relative z-10 space-y-6">
        
        {/* Supreme Consular Identity Bar */}
        <section className="relative p-[1px] rounded-3xl bg-gradient-to-r from-[#e11d48] via-[#ffffff] to-[#9f1239] shadow-[0_12px_45px_rgba(225,29,72,0.3)]">
          <div className="bg-[#0a0204]/95 backdrop-blur-2xl p-6 rounded-[23px] flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#fb7185] via-white to-[#be123c] blur-[3px] opacity-85 animate-pulse" />
                <img 
                  src={owner.photo} 
                  alt={owner.name} 
                  className="relative w-16 h-16 rounded-full object-cover border-2 border-[#130306] ring-2 ring-[#fb7185]/70" 
                />
              </div>
              <div className="truncate">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f43f5e] shadow-[0_0_12px_#f43f5e]" />
                  <p className="text-[10px] font-mono tracking-[0.3em] text-[#fda4af] uppercase font-bold">Apex Custodian</p>
                </div>
                <h1 className="text-xl md:text-2xl font-serif text-white tracking-wide truncate">{owner.name}</h1>
                <p className="text-xs text-[#d4a5ab] font-mono tracking-wider">{owner.location}</p>
              </div>
            </div>

            <div className="flex-shrink-0 text-right">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[10px] font-mono tracking-[0.25em] uppercase rounded-full bg-gradient-to-b from-[#e11d48]/30 via-[#e11d48]/10 to-transparent text-[#ffe4e6] border border-[#fb7185]/80 shadow-[0_0_25px_rgba(225,29,72,0.35)] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#fff]" />
                Apex Master
              </span>
            </div>
          </div>
        </section>

        {/* Master Showcase: The High-Spend Crimson Card */}
        <section className="relative rounded-3xl p-[1px] bg-gradient-to-b from-[#e11d48] via-[#881337]/50 to-[#2c050e] shadow-[0_20px_70px_rgba(0,0,0,0.98)] overflow-hidden">
          <div className="bg-[#080203]/95 backdrop-blur-2xl rounded-[23px] p-6 space-y-6">
            
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#fb7185] tracking-[0.25em] uppercase font-semibold">Consular Primary Holding</span>
              <span className="px-3 py-1 rounded-full border border-[#fb7185]/50 bg-[#28040b] text-[#ffe4e6] text-[10px] tracking-wider shadow-[0_0_15px_rgba(225,29,72,0.2)]">
                {product.category}
              </span>
            </div>

            {/* Specimen Showcase Visual */}
            <div className="relative rounded-2xl overflow-hidden border border-[#fb7185]/40 bg-black/90 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#080203] via-transparent to-[#e11d48]/15 z-10 pointer-events-none" />
              <img 
                src={product.photo} 
                alt={product.name} 
                className="w-full h-64 object-cover object-center transform transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute bottom-4 left-5 z-20">
                <p className="text-[10px] font-mono tracking-[0.3em] text-[#fb7185] uppercase font-bold">Provenance Spec</p>
                <p className="text-base font-serif text-white tracking-wide">{product.model}</p>
              </div>
            </div>

            {/* Asset Identity */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#ffe4e6] to-[#e11d48] tracking-tight">
                {product.name}
              </h2>
              <p className="text-xs text-[#d4a5ab]/90 mt-2 leading-relaxed font-light">
                Assigned under absolute non-circulating custody. Physical cryptographic chip token verified and sealed.
              </p>
            </div>

            {/* Prestige Status Line */}
            <div className="pt-4 border-t border-[#e11d48]/20 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[10px] font-mono tracking-[0.25em] text-[#fda4af] uppercase">Vault Ledger Authority</p>
                <p className="text-xs font-serif text-[#fff1f2] tracking-wider">Unrestricted Consular Clearance</p>
              </div>
              <span className="w-3 h-3 rounded-full bg-[#f43f5e] shadow-[0_0_15px_#f43f5e]" />
            </div>

          </div>
        </section>

        {/* The Shadow Asset (High Scarcity Teaser) */}
        <section className="relative rounded-2xl p-[1px] bg-gradient-to-r from-[#e11d48]/40 via-transparent to-[#9f1239]/40">
          <div className="bg-[#090204]/90 backdrop-blur-md rounded-[15px] p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-xl bg-[#1f0308] border border-[#e11d48]/30 flex items-center justify-center flex-shrink-0 text-[#f43f5e] shadow-[0_0_15px_rgba(225,29,72,0.2)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="truncate">
                <h3 className="text-sm font-serif text-[#ffe4e6] truncate">Imperial Obsidian Reserve</h3>
                <p className="text-[10px] font-mono text-[#d4a5ab] tracking-wider">Direct Concierge Key Required</p>
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#fb7185] border border-[#fb7185]/40 px-3 py-1 rounded-md flex-shrink-0 bg-[#e11d48]/10">
              Vault Sealed
            </span>
          </div>
        </section>

        {/* Private Concierge Trigger */}
        <section className="pt-2">
          <button 
            type="button"
            className="w-full relative group overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-[#f43f5e]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#e11d48] via-[#ffffff] to-[#9f1239] transition-all duration-500 opacity-75 group-hover:opacity-100" />
            <div className="relative bg-[#0c0204] rounded-[15px] px-6 py-4 flex items-center justify-center gap-3 transition-colors duration-300 group-hover:bg-[#0c0204]/85">
              <span className="w-2 h-2 rounded-full bg-[#f43f5e] animate-ping" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-white font-bold">
                Summon Lead Concierge
              </span>
            </div>
          </button>
        </section>

      </main>
    </div>
  );
}