import React from 'react';

export default function StandardBase({ data }) {
  const { owner, product, next_tier = 10 } = data;
  const currentSpend = product.spend_rate || 0;
  const progressPercent = Math.min(Math.round((currentSpend / next_tier) * 100), 100);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-400 relative overflow-hidden font-sans selection:bg-gray-700 selection:text-white">
      {/* Minimal ambient lighting, deliberately flat compared to higher tiers */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-900/20 to-transparent pointer-events-none" />

      <main className="max-w-xl mx-auto px-5 py-8 md:py-12 relative z-10 space-y-6">
        
        {/* Tier Moniker & Custodian Identification */}
        <section className="rounded-xl border border-gray-800/60 bg-[#0e0e10] p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-shrink-0">
                <img 
                  src={owner.photo} 
                  alt={owner.name} 
                  className="w-12 h-12 rounded-full object-cover border border-gray-800 grayscale-[20%]" 
                />
              </div>
              <div>
                <p className="text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase">Registered Account</p>
                <h1 className="text-xl font-serif text-gray-200 tracking-wide">{owner.name}</h1>
                <p className="text-xs text-gray-500 font-mono">{owner.location}</p>
              </div>
            </div>

            <span className="flex-shrink-0 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] border border-gray-800 bg-gray-900/50 rounded-full text-gray-400">
              Standard
            </span>
          </div>

          {/* Allocation Advancement Track */}
          <div className="mt-6 pt-5 border-t border-gray-800/60 space-y-2">
            <div className="flex justify-between items-center text-[11px] font-mono">
              <span className="text-gray-500">Current Spend: <strong className="text-gray-300">{currentSpend}%</strong></span>
              <span className="text-gray-600">Silver Benchmark: {next_tier}%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
              <div 
                className="h-full bg-gray-600 transition-all duration-700" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </section>

        {/* Primary Asset Specification */}
        <section className="rounded-xl border border-gray-800/60 bg-[#0e0e10] p-6 space-y-5">
          <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 uppercase tracking-widest border-b border-gray-800/60 pb-3">
            <span>Standard Allocation</span>
            <span className="text-gray-600">{product.category}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <div className="relative w-full sm:w-24 h-24 rounded-lg overflow-hidden border border-gray-800 bg-black flex-shrink-0">
              <img 
                src={product.photo} 
                alt={product.name} 
                className="w-full h-full object-cover opacity-90" 
              />
            </div>

            <div className="space-y-1.5 min-w-0">
              <h2 className="text-lg font-serif text-gray-200 tracking-wide truncate">{product.name}</h2>
              <p className="text-xs text-gray-500 font-mono">
                Model: <span className="text-gray-400">{product.model}</span>
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono tracking-wider bg-gray-900 text-gray-400 border border-gray-800">
                  Type: {product.type}
                </span>
                {product.type?.toUpperCase() === 'STANDARD' ? (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono tracking-wider bg-gray-900 text-gray-400 border border-gray-800">
                    Price: ${product.price}
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono tracking-wider bg-gray-900 text-gray-400 border border-gray-800">
                    Rate: {product.spend_rate}%
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Locked Allocation Teaser (Upsell to Silver) */}
        <section className="rounded-lg border border-gray-800/40 bg-gray-900/20 p-4 flex items-center justify-between opacity-60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-gray-950 border border-gray-900 flex items-center justify-center text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-serif text-gray-400">Silver Tier Access</p>
              <p className="text-[10px] font-mono text-gray-600">Requires 10% Spend Rate</p>
            </div>
          </div>
          <span className="text-[10px] font-mono tracking-wider text-gray-600 uppercase">Locked</span>
        </section>

      </main>
    </div>
  );
}