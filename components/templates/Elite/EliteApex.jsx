import React from 'react';

export default function EliteApex({ data }) {
  const { owner, product } = data;

  return (
    <div className="min-h-screen bg-[#030206] text-[#ede9fe] relative overflow-hidden font-sans selection:bg-[#7c3aed] selection:text-white">
      {/* Prismatic Void Ambient Radiance */}
      <div className="absolute -top-48 -left-48 w-[42rem] h-[42rem] bg-gradient-to-br from-[#7c3aed]/25 via-[#4c1d95]/15 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 -right-52 w-[46rem] h-[46rem] bg-gradient-to-tl from-[#06b6d4]/15 via-[#581c87]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-[32rem] h-[32rem] bg-[#8b5cf6]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Cybernetic Dot Matrix Grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #a78bfa 1.2px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Animated Vertical Laser Scanning Line */}
      <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#06b6d4]/60 to-transparent animate-[scan_6s_linear_infinite] pointer-events-none opacity-40" />

      <main className="max-w-2xl mx-auto px-5 py-8 md:py-12 relative z-10 space-y-6">
        
        {/* HUD Telemetry Top Strip */}
        <div className="flex items-center justify-between text-[9px] font-mono tracking-[0.3em] uppercase text-[#a78bfa]/60 border-b border-[#7c3aed]/20 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-ping" />
            <span>Node: Primary Vault Enclave</span>
          </div>
          <span>Protocol: Level V Sovereign</span>
        </div>

        {/* Asymmetrical Apex Identity Core */}
        <section className="relative rounded-3xl p-[1px] bg-gradient-to-r from-[#7c3aed] via-[#06b6d4]/50 to-[#4c1d95] shadow-[0_16px_60px_rgba(124,58,237,0.25)]">
          <div className="bg-[#07050d]/95 backdrop-blur-2xl p-6 md:p-8 rounded-[23px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#06b6d4]/40 pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-5 min-w-0">
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#7c3aed] via-[#06b6d4] to-[#c084fc] blur-sm opacity-80 animate-[spin_10s_linear_infinite]" />
                  <img 
                    src={owner.photo} 
                    alt={owner.name} 
                    className="relative w-18 h-18 rounded-2xl object-cover border border-[#06b6d4]/60 bg-black" 
                  />
                  <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#06b6d4] rounded-full border-2 border-[#07050d] shadow-[0_0_8px_#06b6d4]" />
                </div>

                <div className="truncate">
                  <div className="flex items-center gap-2">
                    <p className="text-[10px] font-mono tracking-[0.35em] text-[#06b6d4] uppercase font-bold">Apex Sovereign</p>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-serif text-white tracking-wide truncate">{owner.name}</h1>
                  <p className="text-xs text-[#a78bfa]/80 font-mono tracking-wider">{owner.location}</p>
                </div>
              </div>

              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-mono tracking-[0.3em] uppercase rounded-xl bg-gradient-to-r from-[#7c3aed]/30 to-[#06b6d4]/20 text-[#ede9fe] border border-[#a78bfa]/40 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                  <span className="w-2 h-2 rounded-full bg-[#06b6d4]" />
                  Apex Master
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Master Physical Holding */}
        <section className="relative rounded-3xl p-[1px] bg-gradient-to-b from-[#7c3aed]/60 via-[#1e1b4b] to-transparent shadow-[0_24px_80px_rgba(0,0,0,0.95)]">
          <div className="bg-[#05030a]/95 backdrop-blur-3xl rounded-[23px] p-6 md:p-8 space-y-6">
            
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#a78bfa] tracking-[0.3em] uppercase flex items-center gap-2">
                <span className="inline-block w-2 h-0.5 bg-[#06b6d4]" />
                Primary Attested Asset
              </span>
              <span className="px-3 py-1 rounded-md border border-[#7c3aed]/40 bg-[#160d2e] text-[#c4b5fd] text-[10px] tracking-widest uppercase">
                {product.category}
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#7c3aed]/40 bg-black/95 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#05030a] via-transparent to-[#7c3aed]/15 z-10 pointer-events-none" />
              <img 
                src={product.photo} 
                alt={product.name} 
                className="w-full h-72 object-cover object-center transform transition-transform duration-1000 group-hover:scale-105" 
              />
              
              <div className="absolute bottom-4 left-5 z-20 space-y-1">
                <p className="text-[9px] font-mono tracking-[0.3em] text-[#06b6d4] uppercase font-bold">Physical Provenance</p>
                <p className="text-lg font-serif text-white tracking-wide">{product.model}</p>
              </div>

              <div className="absolute top-4 right-4 z-20">
                <span className="px-2.5 py-1 rounded text-[9px] font-mono tracking-widest uppercase bg-black/70 border border-[#a78bfa]/30 text-[#ede9fe] backdrop-blur-md">
                  Hardware Bound
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ede9fe] to-[#c084fc] tracking-tight">
                {product.name}
              </h2>
              <p className="text-xs text-[#a78bfa]/80 leading-relaxed font-light">
                Cryptographic hardware token immutably recorded to the Sovereign Enclave. Zero-compromise custodial segregation verified.
              </p>
            </div>

            <div className="pt-4 border-t border-[#7c3aed]/20 grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="space-y-1">
                <p className="text-[9px] text-[#a78bfa]/60 uppercase tracking-widest">Enclave Identity</p>
                <p className="text-[#ede9fe] tracking-wider text-[11px]">Direct KMS Unwrapped</p>
              </div>
              <div className="space-y-1 text-right">
                <p className="text-[9px] text-[#a78bfa]/60 uppercase tracking-widest">Consensus Clearance</p>
                <p className="text-[#06b6d4] tracking-wider text-[11px]">Unrestricted Apex</p>
              </div>
            </div>

          </div>
        </section>

        {/* Classified Prototype Teaser */}
        <section className="relative rounded-2xl p-[1px] bg-gradient-to-r from-[#7c3aed]/40 via-transparent to-[#06b6d4]/40">
          <div className="bg-[#070410]/90 backdrop-blur-md rounded-[15px] p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-11 h-11 rounded-xl bg-[#140a2b] border border-[#7c3aed]/40 flex items-center justify-center flex-shrink-0 text-[#c084fc] shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="truncate">
                <h3 className="text-sm font-serif text-white truncate">Infinite Continuum Ingot</h3>
                <p className="text-[10px] font-mono text-[#a78bfa] tracking-wider">Unlocks at Infinite Tier Custody</p>
              </div>
            </div>
            <span className="text-[9px] font-mono uppercase tracking-widest text-[#06b6d4] border border-[#06b6d4]/30 px-3 py-1.5 rounded-lg flex-shrink-0 bg-[#06b6d4]/5">
              Enclave Locked
            </span>
          </div>
        </section>

        {/* Direct Sovereign Dispatch Trigger */}
        <section className="pt-2">
          <button 
            type="button"
            className="w-full relative group overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-[#06b6d4]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] via-[#06b6d4] to-[#c084fc] transition-all duration-700 opacity-80 group-hover:opacity-100 group-hover:scale-105" />
            <div className="relative bg-[#07050d] rounded-[15px] px-6 py-4 flex items-center justify-center gap-3 transition-colors duration-300 group-hover:bg-[#07050d]/85">
              <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-ping" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-white font-bold">
                Summon Sovereign Floor Custodian
              </span>
            </div>
          </button>
        </section>

      </main>
    </div>
  );
}