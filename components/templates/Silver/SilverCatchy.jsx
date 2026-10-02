import React from 'react';

export default function SilverCatchy({ data }) {
  const { owner, product, next_tier } = data;
  const currentSpend = product.spend_rate || 20;
  const progressPercent = Math.min(Math.round((currentSpend / next_tier) * 100), 100);

  return (
    <div className="min-h-screen bg-[#07080a] text-zinc-200 relative overflow-hidden font-sans selection:bg-zinc-300 selection:text-black">
      {/* Dynamic Liquid Silver Ambient Lighting */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-zinc-300/10 via-zinc-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-gradient-to-tl from-slate-400/10 via-zinc-700/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-zinc-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Specular Mesh Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      <main className="max-w-xl mx-auto px-5 py-8 md:py-12 relative z-10 space-y-6">
        
        {/* Top Metallic Identity Bar */}
        <section className="relative p-[1px] rounded-3xl bg-gradient-to-r from-zinc-700 via-zinc-300/40 to-zinc-800 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
          <div className="bg-[#0c0d10]/95 backdrop-blur-xl p-5 md:p-6 rounded-[23px] flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              {/* Silver Specular Ring Avatar */}
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-zinc-400 via-white to-zinc-600 blur-[2px] opacity-60 animate-pulse" />
                <img 
                  src={owner.photo} 
                  alt={owner.name} 
                  className="relative w-14 h-14 rounded-full object-cover border-2 border-[#121316] ring-1 ring-zinc-400/40" 
                />
              </div>
              <div className="truncate">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  <p className="text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase">Authenticated Custodian</p>
                </div>
                <h1 className="text-xl md:text-2xl font-serif tracking-tight text-white truncate">{owner.name}</h1>
                <p className="text-xs text-zinc-400/80 font-mono tracking-wide">{owner.location}</p>
              </div>
            </div>

            {/* Silver Metallic Status Pill */}
            <div className="flex-shrink-0 text-right">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-mono tracking-[0.2em] uppercase rounded-full bg-gradient-to-b from-zinc-200/10 via-zinc-400/5 to-transparent text-zinc-200 border border-zinc-400/40 shadow-[0_0_20px_rgba(212,212,216,0.15)] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-200 shadow-[0_0_6px_#fff]" />
                Ascendant
              </span>
            </div>
          </div>
        </section>

        {/* Primary Asset Display (The Showcase Flex) */}
        <section className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-zinc-400/40 via-zinc-800/40 to-zinc-900 shadow-[0_10px_40px_rgba(0,0,0,0.9)] overflow-hidden">
          <div className="bg-[#0b0c0f]/90 backdrop-blur-2xl rounded-[23px] p-6 space-y-6">
            
            {/* Visual Header & Provenance Chip */}
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500 tracking-[0.2em] uppercase">Permanent Holding</span>
              <span className="px-2.5 py-0.5 rounded border border-zinc-700/60 bg-zinc-900/60 text-zinc-300 text-[10px] tracking-wider">
                {product.category}
              </span>
            </div>

            {/* Specular Showcase Card Image */}
            <div className="relative rounded-2xl overflow-hidden border border-zinc-700/50 bg-black/60 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0f] via-transparent to-zinc-200/10 z-10 pointer-events-none" />
              <img 
                src={product.photo} 
                alt={product.name} 
                className="w-full h-56 object-cover object-center transform transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute bottom-3 left-4 z-20">
                <p className="text-[10px] font-mono tracking-[0.2em] text-zinc-400 uppercase">Specification</p>
                <p className="text-sm font-serif text-white tracking-wide">{product.model}</p>
              </div>
            </div>

            {/* Title & Micro-Details */}
            <div>
              <h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 tracking-tight">
                {product.name}
              </h2>
              <p className="text-xs text-zinc-400/70 mt-1 leading-relaxed">
                Cryptographically assigned to private vault custody. Hardware-level immutability preserved.
              </p>
            </div>

            {/* Silver Tier Elevation Bar (Ego Lever) */}
            <div className="pt-2 border-t border-zinc-800/80 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <span className="text-zinc-500">Allocation</span>
                  <span className="text-white font-bold">{currentSpend}%</span>
                </span>
                <span className="text-zinc-500 tracking-wider">
                  Target: <strong className="text-zinc-300 font-semibold">{next_tier}%</strong> (Gold Entry)
                </span>
              </div>

              {/* Liquid Silver Track */}
              <div className="w-full h-2 rounded-full bg-zinc-900 border border-zinc-800 p-0.5 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-zinc-500 via-zinc-200 to-white shadow-[0_0_12px_rgba(255,255,255,0.7)] transition-all duration-1000 ease-out relative"
                  style={{ width: `${progressPercent}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_2.5s_infinite]" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* The Shadow Asset (Engineered Completion Bias) */}
        <section className="relative rounded-2xl p-[1px] bg-gradient-to-b from-zinc-800/50 to-zinc-950 opacity-60 hover:opacity-85 transition-opacity duration-300">
          <div className="bg-[#08090b]/80 backdrop-blur-md rounded-[15px] p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 text-zinc-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="truncate">
                <h3 className="text-sm font-serif text-zinc-300 truncate">Sovereign Guild Reserve</h3>
                <p className="text-[10px] font-mono text-zinc-500 tracking-wider">Unlocks at Gold Level (30%)</p>
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 border border-zinc-800 px-2.5 py-1 rounded-md flex-shrink-0">
              Restricted
            </span>
          </div>
        </section>

        {/* Concierge Summon Trigger */}
        <section className="pt-2">
          <button 
            type="button"
            className="w-full relative group overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-zinc-400"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-600 transition-all duration-500 opacity-60 group-hover:opacity-100" />
            <div className="relative bg-[#0d0e12] rounded-[15px] px-6 py-4 flex items-center justify-center gap-3 transition-colors duration-300 group-hover:bg-[#0d0e12]/80">
              <span className="w-2 h-2 rounded-full bg-zinc-300 animate-ping" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-100 font-semibold">
                Request Floor Concierge
              </span>
            </div>
          </button>
        </section>

      </main>
    </div>
  );
}