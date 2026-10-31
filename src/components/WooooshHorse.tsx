import React, { useState } from 'react';

export const WooooshHorse: React.FC = () => {
  const [isSuperWoooosh, setIsSuperWoooosh] = useState(false);

  const triggerBoost = () => {
    setIsSuperWoooosh(true);
    setTimeout(() => setIsSuperWoooosh(false), 2000);
  };

  return (
    <div
      onClick={triggerBoost}
      className="relative w-full max-w-2xl my-3 sm:my-4 py-2 flex flex-col items-center justify-center cursor-pointer select-none group"
      title="Click the stallion for supersonic burst!"
    >
      {/* ── 1. Ambient Royal Blue Glow Flare Behind Horse ────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div
          className={`w-72 h-32 sm:w-[420px] sm:h-44 bg-blue-600/35 blur-3xl rounded-full transition-all duration-500 ${
            isSuperWoooosh
              ? 'bg-blue-400/60 scale-135 blur-2xl'
              : 'animate-blue-aura group-hover:scale-115 group-hover:bg-blue-500/45'
          }`}
        />
      </div>

      {/* ── 2. Continuous Supersonic Wind & Speed Streaks (The "WOOOOSH") ──── */}
      <div
        className="absolute right-2 sm:right-10 inset-y-0 w-48 sm:w-72 flex flex-col justify-center gap-2.5 pointer-events-none overflow-hidden opacity-90"
        aria-hidden="true"
      >
        <div className="h-1 bg-gradient-to-r from-blue-300 via-white to-transparent rounded-full animate-speed-stream-1 shadow-[0_0_12px_#60A5FA]" />
        <div className="h-[2px] bg-gradient-to-r from-blue-400 via-blue-100 to-transparent rounded-full animate-speed-stream-2" />
        <div className="h-1 bg-gradient-to-r from-blue-500 via-white to-transparent rounded-full animate-speed-stream-3 shadow-[0_0_15px_#2563EB]" />
        <div className="h-[1.5px] bg-gradient-to-r from-white via-blue-300 to-transparent rounded-full animate-speed-stream-4" />
        {isSuperWoooosh && (
          <>
            <div className="h-1.5 bg-gradient-to-r from-cyan-300 via-white to-transparent rounded-full animate-speed-stream-1" />
            <div className="h-1 bg-gradient-to-r from-blue-400 via-white to-transparent rounded-full animate-speed-stream-2" />
          </>
        )}
      </div>

      {/* ── 3. The Full Stallion with Trailing Ghost Motion & Gallop Arc ──── */}
      <div className="relative flex items-center justify-center">
        {/* Trailing Ghost Silhouette 2 (Deep Blue Wake) */}
        <div
          className="absolute left-6 sm:left-12 top-1.5 z-0 opacity-30 pointer-events-none filter blur-[3px]"
          aria-hidden="true"
        >
          <img
            src="/assets/images/stallion-rider-hero.png"
            alt=""
            className="h-28 sm:h-40 md:h-48 w-auto object-contain filter hue-rotate-15"
          />
        </div>

        {/* Trailing Ghost Silhouette 1 (Electric Blue Offset) */}
        <div
          className="absolute left-3 sm:left-6 top-1 z-10 opacity-55 pointer-events-none filter blur-[1.5px]"
          aria-hidden="true"
        >
          <img
            src="/assets/images/stallion-rider-hero.png"
            alt=""
            className="h-30 sm:h-42 md:h-50 w-auto object-contain filter drop-shadow-[0_0_25px_rgba(96,165,250,0.85)]"
          />
        </div>

        {/* Main Full Leaping Stallion with Jockey (Always 100% Full & Visible) */}
        <div
          className={`relative z-20 transition-all duration-300 ${
            isSuperWoooosh ? 'animate-stallion-sprint scale-110' : 'animate-stallion-gallop'
          }`}
        >
          <img
            src="/assets/images/stallion-rider-hero.png"
            alt="Lead Stallion with Jockey - Chapter I"
            className="h-32 sm:h-44 md:h-52 w-auto object-contain drop-shadow-[0_12px_28px_rgba(0,71,171,0.85)] filter drop-shadow-[0_0_40px_rgba(29,99,255,0.7)] group-hover:drop-shadow-[0_0_65px_rgba(96,165,250,1)] group-hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};
