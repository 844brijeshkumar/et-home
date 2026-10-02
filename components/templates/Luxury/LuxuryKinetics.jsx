import React from 'react';

export default function LuxuryKinetics({ data }) {
  const { owner, product } = data;

  return (
    <div className="min-h-screen bg-[#010302] text-[#f0fdf4] relative overflow-hidden font-sans selection:bg-[#10b981] selection:text-black">
      {/* High-Luminance Emerald Flares & Deep Prismatic Radiation */}
      <div className="absolute -top-44 -left-44 w-[40rem] h-[40rem] bg-gradient-to-br from-[#10b981]/25 via-[#047857]/15 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/4 -right-48 w-[42rem] h-[42rem] bg-gradient-to-tl from-[#34d399]/15 via-[#064e3b]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-5 left-1/3 w-96 h-96 bg-[#10b981]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hexagonal Micro-Matrix Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #a7f3d0 1.2px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      <main className="max-w-xl mx-auto px-5 py-8 md:py-12 relative z-10 space-y-6">
        
        {/* Supreme Vault Master Identification Bar */}
        <section className="relative p-[1px] rounded-3xl bg-gradient-to-r from-[#10b981] via-[#ffffff] to-[#047857] shadow-[0_14px_50px_rgba(16,185,129,0.3)]">
          <div className="bg-[#030906]/95 backdrop-blur-2xl p-6 rounded-[23px] flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#34d399] via-white to-[#047857] blur-[3px] opacity-85 animate-pulse" />
                <img 
                  src={owner.photo} 
                  alt={owner.name} 
                  className="relative w-16 h-16 rounded-full object-cover border-2 border-[#091510] ring-2 ring-[#34d399]/70" 
                />
              </div>
              <div className="truncate">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_12px_#10b981]" />
                  <p className="text-[10px] font-mono tracking-[0.3em] text-[#a7f3d0] uppercase font-bold">Vault Master</p>
                </div>
                <h1 className="text-xl md:text-2xl font-serif text-white tracking-wide truncate">{owner.name}</h1>
                <p className="text-xs text-[#8ca397] font-mono tracking-wider">{owner.location}</p>
              </div>
            </div>

            <div className="flex-shrink-0 text-right">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[10px] font-mono tracking-[0.25em] uppercase rounded-full bg-gradient-to-b from-[#10b981]/30 via-[#10b981]/10 to-transparent text-[#d1fae5] border border-[#34d399]/80 shadow-[0_0_25px_rgba(16,185,129,0.35)] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#fff]" />
                Sovereign Apex
              </span>
            </div>
          </div>
        </section>

        {/* Master Asset Showcase Frame */}
        <section className="relative rounded-3xl p-[1px] bg-gradient-to-b from-[#10b981] via-[#047857]/50 to-[#041a10] shadow-[0_22px_75px_rgba(0,0,0,0.98)] overflow-hidden">
          <div className="bg-[#020704]/95 backdrop-blur-2xl rounded-[23px] p-6 space-y-6">
            
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#34d399] tracking-[0.25em] uppercase font-semibold">Master Vault Custody</span>
              <span className="px-3 py-1 rounded-full border border-[#34d399]/50 bg-[#072416] text-[#d1fae5] text-[10px] tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                {product.category}
              </span>
            </div>

            {/* Showcase Visual with Depth Glass */}
            <div className="relative rounded-2xl overflow-hidden border border-[#34d399]/40 bg-black/90 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020704] via-transparent to-[#10b981]/15 z-10 pointer-events-none" />
              <img 
                src={product.photo} 
                alt={product.name} 
                className="w-full h-64 object-cover object-center transform transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute bottom-4 left-5 z-20">
                <p className="text-[10px] font-mono tracking-[0.3em] text-[#34d399] uppercase font-bold">Attestation Specification</p>
                <p className="text-base font-serif text-white tracking-wide">{product.model}</p>
              </div>
            </div>

            {/* Asset Identity Statement */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#d1fae5] to-[#10b981] tracking-tight">
                {product.name}
              </h2>
              <p className="text-xs text-[#8ca397]/90 mt-2 leading-relaxed font-light">
                Hardware-attested cryptographic token verified against KMS master root. Permanent possession established in immutable vault registry.
              </p>
            </div>

            {/* Clearance Level */}
            <div className="pt-4 border-t border-[#10b981]/20 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[10px] font-mono tracking-[0.25em] text-[#8ca397] uppercase">Enclave Security Status</p>
                <p className="text-xs font-serif text-[#34d399] tracking-wider">Unrestricted Sovereign Clearance</p>
              </div>
              <span className="w-3 h-3 rounded-full bg-[#10b981] shadow-[0_0_15px_#10b981]" />
            </div>

          </div>
        </section>

        {/* The Shadow Asset (Locked Prototype Teaser) */}
        <section className="relative rounded-2xl p-[1px] bg-gradient-to-r from-[#10b981]/40 via-transparent to-[#047857]/40">
          <div className="bg-[#030906]/90 backdrop-blur-md rounded-[15px] p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-xl bg-[#091a11] border border-[#10b981]/30 flex items-center justify-center flex-shrink-0 text-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="truncate">
                <h3 className="text-sm font-serif text-[#f0fdf4] truncate">The Sovereign Apex Node</h3>
                <p className="text-[10px] font-mono text-[#8ca397] tracking-wider">Level V Elite Custody Required</p>
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#34d399] border border-[#34d399]/40 px-3 py-1 rounded-md flex-shrink-0 bg-[#10b981]/10">
              Enclave Sealed
            </span>
          </div>
        </section>

        {/* Private Concierge Trigger */}
        <section className="pt-2">
          <button 
            type="button"
            className="w-full relative group overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-[#10b981]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#10b981] via-[#ffffff] to-[#047857] transition-all duration-500 opacity-75 group-hover:opacity-100" />
            <div className="relative bg-[#030906] rounded-[15px] px-6 py-4 flex items-center justify-center gap-3 transition-colors duration-300 group-hover:bg-[#030906]/85">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-white font-bold">
                Summon Custodial Director
              </span>
            </div>
          </button>
        </section>

      </main>
    </div>
  );
}