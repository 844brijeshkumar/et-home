import React from 'react';

export default function LuxuryBase({ data }) {
  const { owner, product } = data;

  return (
    <div className="min-h-screen bg-[#020504] text-[#e3ece7] relative overflow-hidden font-sans selection:bg-[#059669] selection:text-white">
      {/* Deep Emerald & Titanium Ambient Radiation */}
      <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] bg-gradient-to-br from-[#064e3b]/30 via-[#022c22]/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-48 w-[40rem] h-[40rem] bg-[#047857]/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Titanium Mesh Micro-Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #6ee7b7 1px, transparent 0)',
          backgroundSize: '28px 28px'
        }}
      />

      <main className="max-w-xl mx-auto px-5 py-8 md:py-12 relative z-10 space-y-6">
        
        {/* Principal Custodian Identity Plate */}
        <section className="relative p-[1px] rounded-3xl bg-gradient-to-r from-[#059669]/60 via-[#cbd5e1]/40 to-[#022c22] shadow-[0_12px_40px_rgba(0,0,0,0.95)]">
          <div className="bg-[#050b08]/95 backdrop-blur-2xl p-6 rounded-[23px] flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#10b981] via-[#f1f5f9] to-[#047857] blur-[2px] opacity-75" />
                <img 
                  src={owner.photo} 
                  alt={owner.name} 
                  className="relative w-15 h-15 rounded-full object-cover border-2 border-[#091510] ring-1 ring-[#34d399]/40" 
                />
              </div>
              <div className="truncate">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
                  <p className="text-[10px] font-mono tracking-[0.3em] text-[#6ee7b7] uppercase font-semibold">Principal Custodian</p>
                </div>
                <h1 className="text-xl md:text-2xl font-serif text-white tracking-wide truncate">{owner.name}</h1>
                <p className="text-xs text-[#8ca397] font-mono tracking-wider">{owner.location}</p>
              </div>
            </div>

            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[10px] font-mono tracking-[0.25em] uppercase rounded-full bg-[#0a1a12] text-[#a7f3d0] border border-[#10b981]/40 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                Vault Prime
              </span>
            </div>
          </div>
        </section>

        {/* Primary Asset Specification Frame */}
        <section className="relative rounded-3xl p-[1px] bg-gradient-to-b from-[#059669]/50 via-[#0e241b] to-transparent shadow-[0_18px_55px_rgba(0,0,0,0.98)] overflow-hidden">
          <div className="bg-[#030806]/95 backdrop-blur-2xl rounded-[23px] p-6 space-y-6">
            
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#8ca397] tracking-[0.25em] uppercase">Private Vault Ingot</span>
              <span className="px-2.5 py-0.5 rounded border border-[#10b981]/30 bg-[#091710] text-[#a7f3d0] text-[10px] tracking-wider">
                {product.category}
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#10b981]/30 bg-black/80 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#030806] via-transparent to-[#10b981]/10 z-10 pointer-events-none" />
              <img 
                src={product.photo} 
                alt={product.name} 
                className="w-full h-60 object-cover object-center transform transition-transform duration-700 hover:scale-105" 
              />
              <div className="absolute bottom-3 left-4 z-20">
                <p className="text-[10px] font-mono tracking-[0.25em] text-[#34d399] uppercase font-semibold">Provenance Serial</p>
                <p className="text-sm font-serif text-white tracking-wide">{product.model}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d1fae5] to-[#10b981] tracking-tight">
                {product.name}
              </h2>
              <p className="text-xs text-[#8ca397]/80 mt-1 leading-relaxed">
                Secured within physical vault infrastructure. Zero-trust cryptographic verification permanently bound to hardware.
              </p>
            </div>

            {/* Cryptographic Attestation Metadata */}
            <div className="pt-4 border-t border-[#10b981]/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#a7f3d0]">Custodial Ledger Sealed</span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#6ee7b7] border border-[#10b981]/30 px-3 py-1 rounded-full bg-[#0a1c13]">
                Level IV Enclave
              </span>
            </div>

          </div>
        </section>

        {/* Restricted Sovereign Reserve */}
        <section className="relative rounded-2xl p-[1px] bg-gradient-to-b from-[#0e241b]/60 to-transparent opacity-70 hover:opacity-90 transition-opacity">
          <div className="bg-[#040a07]/80 backdrop-blur-md rounded-[15px] p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#091510] border border-[#10b981]/20 flex items-center justify-center flex-shrink-0 text-[#34d399]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="truncate">
                <h3 className="text-sm font-serif text-white truncate">The Apex Sovereign Reserve</h3>
                <p className="text-[10px] font-mono text-[#8ca397] tracking-wider">Apex Ledger Key Access Only</p>
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#34d399]/80 border border-[#10b981]/20 px-2.5 py-1 rounded-md flex-shrink-0">
              Classified
            </span>
          </div>
        </section>

      </main>
    </div>
  );
}