import React, { useState } from 'react';

export const WooooshHorse: React.FC = () => {
  const [hyperSpeed, setHyperSpeed] = useState(false);

  const handleBurst = () => {
    setHyperSpeed(true);
    setTimeout(() => setHyperSpeed(false), 2400);
  };

  return (
    <div
      onClick={handleBurst}
      className="relative w-full max-w-4xl h-28 sm:h-36 md:h-44 my-2 sm:my-3 overflow-hidden cursor-pointer select-none flex items-center justify-center"
      title="Click the runway for hyper-sonic boost!"
    >
      {/* ── Background Speed Streaks & Horizon Glow ──────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`w-3/4 h-24 bg-blue-600/25 blur-3xl rounded-full transition-all duration-300 ${
          hyperSpeed ? 'bg-blue-400/50 scale-150' : 'animate-blue-aura'
        }`} />
      </div>

      {/* Horizontal laser wind streaks across the runway */}
      <div className="absolute inset-x-0 h-16 flex flex-col justify-center gap-3 pointer-events-none opacity-60">
        <div className="h-[1.5px] bg-gradient-to-r from-transparent via-blue-400/80 to-transparent w-full animate-pulse" />
        <div className="h-0.5 bg-gradient-to-r from-transparent via-white/70 to-transparent w-4/5 mx-auto" />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/80 to-transparent w-full" />
      </div>

      {/* ── The Galloping Woooosh Fleet (Continuously Crossing Screen) ─────── */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none ${
          hyperSpeed ? 'animate-woooosh-hyper' : 'animate-woooosh-continuous'
        }`}
      >
        <div className="relative flex items-center">
          {/* Main Leaping Stallion with Jockey */}
          <div className="relative z-20 animate-stallion-gallop">
            <img
              src="/assets/images/stallion-rider-hero.png"
              alt="Lead Stallion with Jockey"
              className="h-24 sm:h-32 md:h-40 w-auto object-contain filter drop-shadow-[0_10px_25px_rgba(0,71,171,0.8)] drop-shadow-[0_0_35px_rgba(29,99,255,0.6)]"
            />
          </div>

          {/* Trailing Ghost Silhouette 1 (Electric Blue Blur) */}
          <div className="absolute left-8 sm:left-14 top-1 z-10 opacity-60 pointer-events-none animate-stallion-gallop filter blur-[1px]">
            <img
              src="/assets/images/stallion-rider-hero.png"
              alt=""
              className="h-22 sm:h-30 md:h-38 w-auto object-contain filter drop-shadow-[0_0_25px_rgba(96,165,250,0.85)]"
            />
          </div>

          {/* Trailing Ghost Silhouette 2 (Deep Navy Motion Wake) */}
          <div className="absolute left-16 sm:left-28 top-2 z-0 opacity-35 pointer-events-none animate-stallion-gallop filter blur-[2.5px]">
            <img
              src="/assets/images/stallion-rider-hero.png"
              alt=""
              className="h-20 sm:h-28 md:h-36 w-auto object-contain"
            />
          </div>

          {/* Comet Tail & Wind Trails Streaming Behind */}
          <div className="absolute left-16 sm:left-24 w-64 sm:w-96 flex flex-col justify-center gap-1.5 pointer-events-none">
            <div className="h-1 bg-gradient-to-r from-blue-300 via-white to-transparent rounded-full opacity-90 w-full animate-pulse" />
            <div className="h-0.5 bg-gradient-to-r from-blue-400 via-blue-200 to-transparent rounded-full opacity-70 w-3/4" />
            <div className="h-1.5 bg-gradient-to-r from-blue-500 via-white to-transparent rounded-full opacity-80 w-5/6" />
            <div className="h-[1px] bg-gradient-to-r from-white via-blue-400 to-transparent rounded-full opacity-60 w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
};
