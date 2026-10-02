import React from 'react';

export default function SilverBase({ data }) {
  const { owner, product, next_tier = 20 } = data;
  const currentSpend = product.spend_rate || 10;
  const progressPercent = Math.min(Math.round((currentSpend / next_tier) * 100), 100);

  return (
    <div className="min-h-screen bg-[#08090a] text-zinc-300 relative overflow-hidden font-sans selection:bg-zinc-400 selection:text-black">
      {/* Matte Brushed Silver Glows */}
      <div className="absolute -top-24 -left-20 w-80 h-80 bg-zinc-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-zinc-400/5 rounded-full blur-[120px] pointer-events-none" />

      <main className="max-w-xl mx-auto px-5 py-8 md:py-12 relative z-10 space-y-6">
        
        {/* Tier Moniker & Custodian Identification */}
        <section className="rounded-2xl border border-zinc-800 bg-[#0d0e11]/80 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.6)]">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-shrink-0">
                <img 
                  src={owner.photo} 
                  alt={owner.name} 
                  className="w-12 h-12 rounded-full object-cover border border-zinc-700/80 ring-1 ring-zinc-500/20" 
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-zinc-400 border-2 border-[#0d0e11]" />
              </div>
              <div>
                <p className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase">Verified Holder</p>
                <h1 className="text-xl font-serif text-white tracking-wide">{owner.name}</h1>
                <p className="text-xs text-zinc-400 font-mono">{owner.location}</p>
              </div>
            </div>

            <span className="flex-shrink-0 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] border border-zinc-600/60 bg-zinc-800/40 rounded-full text-zinc-300">
              Silver Status
            </span>
          </div>

          {/* Allocation Advancement Track */}
          <div className="mt-6 pt-5 border-t border-zinc-800/80 space-y-2">
            <div className="flex justify-between items-center text-[11px] font-mono">
              <span className="text-zinc-400">Current Spend: <strong className="text-zinc-200">{currentSpend}%</strong></span>
              <span className="text-zinc-500">Tier Benchmark: {next_tier}%</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
              <div 
                className="h-full bg-gradient-to-r from-zinc-500 to-zinc-200 transition-all duration-700" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </section>

        {/* Primary Asset Specification */}
        <section className="rounded-2xl border border-zinc-800 bg-[#0d0e11]/80 backdrop-blur-xl p-6 shadow-xl space-y-5">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-800/80 pb-3">
            <span>Primary Allocation</span>
            <span className="text-zinc-400">{product.category}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <div className="relative w-full sm:w-28 h-28 rounded-xl overflow-hidden border border-zinc-700/60 bg-black flex-shrink-0">
              <img 
                src={product.photo} 
                alt={product.name} 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="space-y-1.5 min-w-0">
              <h2 className="text-lg font-serif text-white tracking-wide truncate">{product.name}</h2>
              <p className="text-xs text-zinc-400 font-mono">
                Model: <span className="text-zinc-200">{product.model}</span>
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider bg-zinc-800/80 text-zinc-300 border border-zinc-700/40">
                  Type: {product.type}
                </span>
                {product.type?.toUpperCase() === 'STANDARD' ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider bg-zinc-800/80 text-zinc-300 border border-zinc-700/40">
                    Price: ${product.price}
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider bg-zinc-800/80 text-zinc-300 border border-zinc-700/40">
                    Rate: {product.spend_rate}%
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Locked Allocation Teaser (Subtle Ego Cue) */}
        <section className="rounded-xl border border-zinc-800/70 bg-[#0a0a0c]/60 p-4 flex items-center justify-between opacity-75">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-serif text-zinc-300">Ascendant Tier Reserve</p>
              <p className="text-[10px] font-mono text-zinc-500">Requires 20% Spend Rate</p>
            </div>
          </div>
          <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">Locked</span>
        </section>

      </main>
    </div>
  );
}