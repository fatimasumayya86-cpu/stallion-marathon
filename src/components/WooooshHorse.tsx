import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Zap, Sparkles, Wind } from 'lucide-react';

export const WooooshHorse: React.FC = () => {
  const [isWooooshActive, setIsWooooshActive] = useState(false);
  const [speedPace, setSpeedPace] = useState<'steady' | 'sprint' | 'woooosh'>('steady');
  const wooooshTrackRef = useRef<HTMLDivElement>(null);
  const wooooshHorseRef = useRef<HTMLDivElement>(null);
  const shockwaveRef = useRef<HTMLDivElement>(null);

  // Trigger the full-screen horizontal WOOOOOSH streak
  const triggerWoooosh = () => {
    if (isWooooshActive) return;
    setIsWooooshActive(true);
    setSpeedPace('woooosh');

    const horse = wooooshHorseRef.current;
    const shock = shockwaveRef.current;
    if (!horse) return;

    // Reset position to far right of the viewport
    gsap.set(horse, {
      x: window.innerWidth + 200,
      y: 0,
      opacity: 1,
      scale: 1.15,
      rotate: -4,
    });

    const tl = gsap.timeline({
      onComplete: () => {
        setIsWooooshActive(false);
        setSpeedPace('steady');
        gsap.set(horse, { opacity: 0 });
      },
    });

    // Sonic shockwave blast at the center
    if (shock) {
      tl.fromTo(
        shock,
        { scale: 0.2, opacity: 0.9, borderColor: '#60A5FA' },
        { scale: 2.8, opacity: 0, duration: 0.9, ease: 'power2.out' },
        0.3
      );
    }

    // Rocket across screen with galloping vertical wave & speed blur
    tl.to(
      horse,
      {
        x: -400,
        duration: 1.35,
        ease: 'power2.inOut',
      },
      0
    )
      // Gallop vertical oscillation during the dash
      .to(
        horse,
        {
          y: -25,
          duration: 0.25,
          yoyo: true,
          repeat: 5,
          ease: 'sine.inOut',
        },
        0
      );
  };

  // Auto-run a friendly woooosh on first page load after 1.5s
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerWoooosh();
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full my-2 flex flex-col items-center justify-center select-none">
      {/* ── 1. Full-Width Runway for the Hyper-Speed WOOOOOSH Dash ─────────── */}
      <div
        ref={wooooshTrackRef}
        className={`fixed inset-x-0 top-24 sm:top-28 h-64 pointer-events-none z-30 overflow-hidden ${
          isWooooshActive ? 'block' : 'hidden'
        }`}
        aria-hidden="true"
      >
        {/* Central Sonic Shockwave Ring */}
        <div
          ref={shockwaveRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-4 border-blue-400 opacity-0 pointer-events-none"
        />

        {/* The Sprinting Ghost Fleet (Horse + Trailing After-Images) */}
        <div ref={wooooshHorseRef} className="absolute top-10 flex items-center">
          {/* Main Leaping Stallion */}
          <div className="relative z-20">
            <img
              src="/assets/images/stallion-rider-hero.png"
              alt="Woooosh Stallion"
              className="h-32 sm:h-44 md:h-52 w-auto object-contain filter drop-shadow-[0_0_35px_rgba(59,130,246,0.9)]"
            />
          </div>

          {/* Ghost Trail 1 (Electric Blue Offset) */}
          <div className="absolute left-8 sm:left-14 top-1 opacity-50 z-10 pointer-events-none blur-[1px]">
            <img
              src="/assets/images/stallion-rider-hero.png"
              alt=""
              className="h-30 sm:h-40 md:h-48 w-auto object-contain filter hue-rotate-15 drop-shadow-[0_0_20px_rgba(96,165,250,0.8)]"
            />
          </div>

          {/* Ghost Trail 2 (Deep Blue Comet Tail) */}
          <div className="absolute left-16 sm:left-28 top-2 opacity-30 z-0 pointer-events-none blur-[2px]">
            <img
              src="/assets/images/stallion-rider-hero.png"
              alt=""
              className="h-28 sm:h-38 md:h-44 w-auto object-contain"
            />
          </div>

          {/* Trailing Supersonic Speed Flares */}
          <div className="absolute left-12 w-96 h-16 flex flex-col justify-center gap-1.5 pointer-events-none">
            <div className="h-1 bg-gradient-to-r from-blue-300 via-white to-transparent rounded-full opacity-90 w-full" />
            <div className="h-0.5 bg-gradient-to-r from-blue-400 via-blue-200 to-transparent rounded-full opacity-70 w-3/4" />
            <div className="h-1.5 bg-gradient-to-r from-blue-500 via-white to-transparent rounded-full opacity-80 w-5/6" />
            <div className="h-0.5 bg-gradient-to-r from-white via-blue-400 to-transparent rounded-full opacity-60 w-2/3" />
          </div>
        </div>
      </div>

      {/* ── 2. The Hero Centerpiece Stallion (Always Present & Animated) ──── */}
      <div
        onClick={triggerWoooosh}
        className="relative flex flex-col items-center justify-center cursor-pointer group"
        title="Click to unleash the WOOOOOSH!"
      >
        {/* Ambient Pulsing Backlight Aura */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <div
            className={`w-60 h-28 sm:w-80 sm:h-36 bg-blue-600/35 blur-3xl rounded-full animate-blue-aura transition-all duration-500 group-hover:scale-125 group-hover:bg-blue-400/50 ${
              isWooooshActive ? 'scale-150 bg-blue-400/70' : ''
            }`}
          />
        </div>

        {/* Ambient Horizontal Wind Stream Streaks behind the horse */}
        <div className="absolute right-0 sm:right-6 inset-y-0 w-36 sm:w-52 flex flex-col justify-center gap-2 pointer-events-none overflow-hidden opacity-85" aria-hidden="true">
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-white to-transparent rounded-full animate-speed-stream-1" />
          <div className="h-[1.5px] bg-gradient-to-r from-blue-300 via-blue-100 to-transparent rounded-full animate-speed-stream-2" />
          <div className="h-0.5 bg-gradient-to-r from-blue-500 via-blue-200 to-transparent rounded-full animate-speed-stream-3" />
          <div className="h-[1px] bg-gradient-to-r from-white via-blue-300 to-transparent rounded-full animate-speed-stream-4" />
        </div>

        {/* Stallion Running Motion Cycle */}
        <div className={`relative transition-transform duration-300 ${
          isWooooshActive
            ? 'animate-stallion-sprint scale-110'
            : speedPace === 'sprint'
            ? 'animate-stallion-sprint'
            : 'animate-stallion-gallop'
        }`}>
          <img
            src="/assets/images/stallion-rider-hero.png"
            alt="Lead Blue Stallion with Jockey"
            className="h-28 sm:h-36 md:h-44 w-auto object-contain drop-shadow-[0_12px_28px_rgba(0,71,171,0.7)] filter drop-shadow-[0_0_35px_rgba(29,99,255,0.45)] group-hover:drop-shadow-[0_0_60px_rgba(96,165,250,0.95)] group-hover:scale-105 transition-all duration-300"
          />
        </div>

        {/* ── Interactive "WOOOOSH" Trigger Button Pill ──────────────────── */}
        <div className="mt-2 flex items-center gap-2.5">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              triggerWoooosh();
            }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-widest shadow-xl shadow-blue-600/40 border border-blue-300/40 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Zap className="w-3.5 h-3.5 fill-current text-white animate-pulse" />
            <span>{isWooooshActive ? '⚡ WOOOOOSHING!' : '⚡ Make It Go WOOOOSH!'}</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSpeedPace((p) => (p === 'steady' ? 'sprint' : 'steady'));
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-950/70 hover:bg-blue-900/60 border border-blue-500/30 text-[10px] text-blue-300 font-semibold transition"
          >
            <Wind className="w-3 h-3 text-blue-400" />
            <span>Pace: {speedPace === 'sprint' ? 'Sprint' : 'Gallop'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
