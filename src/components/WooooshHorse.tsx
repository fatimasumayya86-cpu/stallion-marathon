import React from 'react';

export const WooooshHorse: React.FC = () => {
  return (
    <div className="relative w-full max-w-md my-1 sm:my-1.5 flex items-center justify-center select-none">
      {/* ── Soft Royal Blue Ambient Glow (No harsh lines) ───────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-64 h-24 sm:w-80 sm:h-28 bg-blue-600/25 blur-2xl rounded-full" />
      </div>

      {/* ── Clean, Sharp Official Leaping Stallion ───────────────────────── */}
      <div className="relative z-10 animate-stallion-gallop transition-transform duration-300 hover:scale-105">
        <img
          src="/assets/images/stallion-rider-hero.png"
          alt="Official Leaping Stallion with Jockey"
          className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,71,171,0.6)]"
        />
      </div>
    </div>
  );
};
