import React, { useState } from 'react';

export const WooooshHorse: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl my-2 sm:my-3 py-2 flex flex-col items-center justify-center select-none group">
      {/* ── 1. Majestic Royal Blue Ambient Glow ──────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-80 h-36 sm:w-[480px] sm:h-48 bg-blue-600/30 blur-3xl rounded-full animate-blue-aura" />
      </div>

      {/* ── 2. The Full Leaping Stallion with Dynamic Cadence ─────────────── */}
      <div className="relative flex items-center justify-center">
        {/* Soft Motion Echo */}
        <div
          className="absolute left-4 top-1 z-10 opacity-40 pointer-events-none filter blur-[2px]"
          aria-hidden="true"
        >
          <img
            src="/assets/images/stallion-rider-hero.png"
            alt=""
            className="h-32 sm:h-44 md:h-52 w-auto object-contain filter drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]"
          />
        </div>

        {/* Main Full Leaping Stallion (Clean, Sharp & Majestic) */}
        <div className="relative z-20 animate-stallion-gallop transition-transform duration-300 group-hover:scale-105">
          <img
            src="/assets/images/stallion-rider-hero.png"
            alt="Lead Stallion with Jockey - Chapter I"
            className="h-32 sm:h-44 md:h-52 w-auto object-contain drop-shadow-[0_15px_30px_rgba(0,71,171,0.85)] filter drop-shadow-[0_0_35px_rgba(29,99,255,0.6)] transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};
