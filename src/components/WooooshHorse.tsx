import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Sparkles } from 'lucide-react';

export const WooooshHorse: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horseFleetRef = useRef<HTMLDivElement>(null);
  const shockwaveRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement>(null);
  const [isWooooshPlaying, setIsWooooshPlaying] = useState(false);

  // The cinematic WOOOOOSH sequence
  const executeWoooosh = () => {
    if (isWooooshPlaying) return;
    setIsWooooshPlaying(true);

    const horseFleet = horseFleetRef.current;
    const shockwave = shockwaveRef.current;
    const trails = trailsRef.current;
    if (!horseFleet) return;

    const winW = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const travelDist = Math.max(winW / 2 + 350, 700);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsWooooshPlaying(false);
      },
    });

    // Step 1: Horse surges forward and accelerates off the left edge (WOOOOSH!)
    tl.to(horseFleet, {
      x: -travelDist,
      duration: 0.85,
      ease: 'power3.in',
    })
      .to(
        trails,
        {
          opacity: 1,
          scaleX: 2.2,
          duration: 0.4,
          ease: 'power2.out',
        },
        0
      )
      // Step 2: Sonic shockwave blast expanding across hero
      .fromTo(
        shockwave,
        { scale: 0.2, opacity: 0.95 },
        { scale: 3.2, opacity: 0, duration: 0.7, ease: 'power2.out' },
        0.5
      )
      // Step 3: Instantly wrap horse to the right side off-screen
      .set(horseFleet, {
        x: travelDist,
      })
      // Step 4: Rocket in from the right and swoop smoothly back into center!
      .to(horseFleet, {
        x: 0,
        duration: 1.15,
        ease: 'power3.out',
      })
      .to(
        trails,
        {
          opacity: 0.3,
          scaleX: 1,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.6'
      );
  };

  // Run initial grand entrance WOOOOOSH on page mount
  useEffect(() => {
    const horseFleet = horseFleetRef.current;
    if (!horseFleet) return;

    const winW = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const travelDist = Math.max(winW / 2 + 350, 700);

    // Initial entrance from the right side of the screen
    gsap.set(horseFleet, { x: travelDist });

    const entranceTimer = setTimeout(() => {
      gsap.to(horseFleet, {
        x: 0,
        duration: 1.3,
        ease: 'power3.out',
        onComplete: () => {
          setIsWooooshPlaying(false);
        },
      });
    }, 400);

    // Auto-repeat a periodic woooosh every 12 seconds so the screen feels alive
    const interval = setInterval(() => {
      executeWoooosh();
    }, 12000);

    return () => {
      clearTimeout(entranceTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={executeWoooosh}
      className="relative w-full max-w-5xl my-2 sm:my-3 py-2 flex flex-col items-center justify-center cursor-pointer select-none group"
      title="Click to unleash the WOOOOOSH!"
    >
      {/* ── 1. Central Sonic Shockwave Ring ───────────────────────────────── */}
      <div
        ref={shockwaveRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-blue-400 opacity-0 pointer-events-none z-10 shadow-[0_0_30px_#60A5FA]"
      />

      {/* ── 2. Ambient Royal Blue Backlight Flare ─────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div
          className={`w-80 h-36 sm:w-[480px] sm:h-48 bg-blue-600/30 blur-3xl rounded-full transition-all duration-500 ${
            isWooooshPlaying ? 'bg-blue-400/60 scale-125' : 'animate-blue-aura'
          }`}
        />
      </div>

      {/* ── 3. The Galloping Horse Fleet (Animated by GSAP) ───────────────── */}
      <div ref={horseFleetRef} className="relative flex items-center justify-center will-change-transform z-20">
        {/* Dynamic Trailing Wind & Comet Trails */}
        <div
          ref={trailsRef}
          className="absolute left-14 sm:left-24 w-72 sm:w-96 flex flex-col justify-center gap-2 pointer-events-none opacity-40 transition-opacity duration-300"
          aria-hidden="true"
        >
          <div className="h-1 bg-gradient-to-r from-blue-300 via-white to-transparent rounded-full shadow-[0_0_12px_#60A5FA] w-full" />
          <div className="h-0.5 bg-gradient-to-r from-blue-400 via-blue-100 to-transparent rounded-full w-4/5" />
          <div className="h-1.5 bg-gradient-to-r from-blue-500 via-white to-transparent rounded-full shadow-[0_0_15px_#2563EB] w-5/6" />
        </div>

        {/* Ghost Trail 2 (Deep Blue Wake) */}
        <div
          className="absolute left-6 sm:left-12 top-1 z-0 opacity-30 pointer-events-none filter blur-[3px]"
          aria-hidden="true"
        >
          <img
            src="/assets/images/stallion-rider-hero.png"
            alt=""
            className="h-28 sm:h-40 md:h-48 w-auto object-contain filter hue-rotate-15"
          />
        </div>

        {/* Ghost Trail 1 (Electric Blue Offset) */}
        <div
          className="absolute left-3 sm:left-6 top-0.5 z-10 opacity-55 pointer-events-none filter blur-[1.5px]"
          aria-hidden="true"
        >
          <img
            src="/assets/images/stallion-rider-hero.png"
            alt=""
            className="h-30 sm:h-42 md:h-50 w-auto object-contain filter drop-shadow-[0_0_25px_rgba(96,165,250,0.85)]"
          />
        </div>

        {/* Main Full Leaping Stallion with Jockey */}
        <div className="relative z-20 animate-stallion-gallop">
          <img
            src="/assets/images/stallion-rider-hero.png"
            alt="Lead Stallion with Jockey - Chapter I"
            className="h-32 sm:h-44 md:h-52 w-auto object-contain drop-shadow-[0_15px_30px_rgba(0,71,171,0.85)] filter drop-shadow-[0_0_40px_rgba(29,99,255,0.7)] group-hover:drop-shadow-[0_0_60px_rgba(96,165,250,1)] transition-all duration-300"
          />
        </div>
      </div>

      {/* ── 4. Subtle Interactive Hint Pill ──────────────────────────────── */}
      <div className="mt-2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-[10px] sm:text-[11px] text-blue-300 group-hover:border-blue-400 group-hover:text-white transition-all">
        <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" />
        <span>{isWooooshPlaying ? '⚡ Woooosh in motion!' : 'Click stallion to unleash Woooosh'}</span>
      </div>
    </div>
  );
};
