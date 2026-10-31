import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Compass, ArrowRight, Sparkles, Volume2, VolumeX, MapPin, Calendar } from 'lucide-react';
import { heroEntrance } from '../animations/gsapAnimations';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  gold: boolean;
}

export const Hero: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isSprinting, setIsSprinting] = useState(false);

  /* GSAP hero entrance */
  useEffect(() => {
    if (headlineRef.current && subtitleRef.current && ctaRef.current) {
      heroEntrance(
        headlineRef.current,
        subtitleRef.current,
        ctaRef.current,
        badgeRef.current ?? undefined
      );
    }
  }, []);

  /* Ambient Canvas particle effect */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const particles: Particle[] = Array.from({ length: 65 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.2) * 1.2,
      vy: (Math.random() - 0.5) * 0.7,
      size: Math.random() * 2.2 + 0.5,
      alpha: Math.random() * 0.6 + 0.2,
      gold: Math.random() > 0.35,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x = (p.x + p.vx + width) % width;
        p.y = (p.y + p.vy + height) % height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? `rgba(59,130,246,${p.alpha * 0.8})`
          : `rgba(255,255,255,${p.alpha * 0.5})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(0,71,171,0.5)';
        ctx.fill();
      }
      animationId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (isPlaying) {
      v.pause();
    } else {
      void v.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      className="relative min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between overflow-hidden bg-stallion-dark pt-20 pb-4 lg:pt-24 lg:pb-6"
      aria-label="Stallion Marathon Hero"
    >
      {/* ── Background Video & Gradient Layers ────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Genuine Supplied Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          onError={() => setVideoLoaded(false)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-40 scale-105' : 'opacity-0'
          }`}
        >
          <source src="/assets/videos/hero-horse.mp4" type="video/mp4" />
        </video>

        {/* Ambient Overlays - Maya's Deep Royal Blue Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-stallion-dark via-stallion-dark/75 to-stallion-dark/85" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 40%, rgba(0,71,171,0.22) 0%, transparent 70%)',
          }}
        />

        {/* Particle Canvas Fallback / Enhancement */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>

      {/* Spacer to balance vertical centering under fixed navbar */}
      <div className="h-2 sm:h-4" aria-hidden="true" />

      {/* ── Hero Content (Grand, Cinematic & Perfectly Proportioned) ─────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center my-auto py-2">
        {/* Badge: Chapter I */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-blue-500/50 bg-blue-950/80 backdrop-blur-md mb-3 shadow-xl shadow-blue-500/15 hover:border-blue-400 transition-all duration-300"
          style={{ opacity: 0 }}
        >
          <div className="w-7 h-5 flex items-center justify-center flex-shrink-0">
            <img
              src="/assets/images/stallion-logo-official.png"
              alt="Official Stallion Insignia"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="h-3.5 w-px bg-blue-500/40" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-white whitespace-nowrap">
            CHAPTER I
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" aria-hidden="true" />
        </div>

        {/* ── Dynamic Leaping Blue Stallion with Jockey (Maya's Official Asset) ─ */}
        <div
          className="relative my-2 sm:my-3 flex flex-col items-center justify-center cursor-pointer group select-none"
          onClick={() => setIsSprinting((prev) => !prev)}
          title="Click to toggle sprint pace!"
        >
          {/* Ambient Royal Blue Backlight Aura */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            <div
              className={`w-60 h-28 sm:w-80 sm:h-36 bg-blue-600/30 blur-3xl rounded-full animate-blue-aura transition-all duration-500 ${
                isSprinting ? 'bg-blue-400/50 scale-125' : ''
              }`}
            />
          </div>

          {/* Kinetic Speed / Wind Streams trailing behind the horse */}
          <div className="absolute right-0 sm:right-6 inset-y-0 w-36 sm:w-48 flex flex-col justify-center gap-2 pointer-events-none overflow-hidden opacity-80" aria-hidden="true">
            <div className="h-0.5 bg-gradient-to-r from-blue-400 via-white to-transparent rounded-full animate-speed-stream-1" />
            <div className="h-[1.5px] bg-gradient-to-r from-blue-300 via-blue-100 to-transparent rounded-full animate-speed-stream-2" />
            <div className="h-0.5 bg-gradient-to-r from-blue-500 via-blue-200 to-transparent rounded-full animate-speed-stream-3" />
            <div className="h-[1px] bg-gradient-to-r from-white via-blue-300 to-transparent rounded-full animate-speed-stream-4" />
          </div>

          {/* Running Stallion Image with Cadenced Gallop Cycle */}
          <div className={`relative transition-transform duration-300 ${isSprinting ? 'animate-stallion-sprint' : 'animate-stallion-gallop'}`}>
            <img
              src="/assets/images/stallion-rider-hero.png"
              alt="Official Leaping Stallion with Jockey"
              className="h-24 sm:h-32 md:h-40 w-auto object-contain drop-shadow-[0_12px_28px_rgba(0,71,171,0.7)] filter drop-shadow-[0_0_35px_rgba(29,99,255,0.45)] group-hover:drop-shadow-[0_0_50px_rgba(96,165,250,0.85)] group-hover:scale-105 transition-all duration-300"
            />
          </div>

          {/* Interactive Speed Indicator Pill */}
          <div className="mt-1 flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-[10px] text-blue-300 font-medium backdrop-blur-sm group-hover:border-blue-400 transition-colors">
            <span className={`w-1.5 h-1.5 rounded-full ${isSprinting ? 'bg-amber-400 animate-bounce' : 'bg-blue-400 animate-ping'}`} />
            <span>{isSprinting ? '⚡ Sprint Pace (Click to Gallop)' : '🐎 Lead Stallion (Click to Sprint)'}</span>
          </div>
        </div>

        {/* Headline: How’s Your Horse Power? */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-serif tracking-tight text-white leading-[1.05] mb-4"
          style={{ opacity: 0 }}
        >
          How&rsquo;s Your <span className="text-royal-gradient">Horse Power?</span>
        </h1>

        {/* Subline: The first marathon led by a stallion. */}
        <p
          ref={subtitleRef}
          className="font-serif italic text-lg sm:text-2xl md:text-3xl text-blue-200 font-medium mb-4 tracking-wide"
          style={{ opacity: 0 }}
        >
          The first marathon led by a stallion.
        </p>

        {/* Event line: 14 March 2027 · Lemerian Workin Café, Banjara Hills, Hyderabad */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-950/60 border border-blue-500/30 text-slate-200 text-xs sm:text-sm font-medium mb-8">
          <Calendar className="w-4 h-4 text-blue-400" />
          <span>14 March 2027 &bull; Lemerian Workin Caf&eacute;, Banjara Hills, Hyderabad</span>
        </div>

        {/* Action CTAs: Register Now → · See Packages */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md"
          style={{ opacity: 0 }}
        >
          <Link
            to="/packages"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-xl shadow-blue-600/35 hover:shadow-blue-600/50 hover:scale-105 border border-blue-400/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Register Now &rarr;</span>
          </Link>

          <Link
            to="/packages"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full border border-blue-500/40 hover:border-blue-400 bg-slate-900/70 hover:bg-blue-950/70 backdrop-blur-md text-white font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>See Packages</span>
          </Link>
        </div>
      </div>

      {/* ── Quick facts ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full mt-auto">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden glass-panel shadow-lg border border-blue-500/20">
          {[
            { value: '14 March 2027', label: 'Race day', color: 'text-blue-400' },
            { value: '9 Distances', label: 'From 1 KM to 21 KM', color: 'text-white' },
            { value: 'Banjara Hills', label: 'Starts & ends at Lemerian Workin Caf\u00e9', color: 'text-blue-400' },
            { value: 'Workshops', label: 'Body, Mind, and Edge sessions', color: 'text-white' },
          ].map(({ value, label, color }) => (
            <div key={label} className="text-center p-3 sm:p-4 bg-stallion-navy/70">
              <span className={`block text-base sm:text-lg font-serif font-black ${color}`}>
                {value}
              </span>
              <span className="block text-[11px] sm:text-xs text-slate-300 mt-0.5">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Video / Audio Controls */}
        <div className="mt-2.5 flex items-center justify-center gap-3 text-xs text-slate-400">
          <button
            onClick={togglePlay}
            className="p-1 rounded-full hover:bg-stallion-card border border-blue-500/30 hover:text-blue-400 transition"
            title={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
          <span className="text-[10px] tracking-widest uppercase">
            {videoLoaded ? 'Hyderabad Marathon Video Active' : 'Atmospheric Canvas Active'}
          </span>
          <button
            onClick={() => setIsMuted((m) => !m)}
            className="p-1 rounded-full hover:bg-stallion-card border border-blue-500/30 hover:text-blue-400 transition"
            title={isMuted ? 'Unmute audio' : 'Mute audio'}
          >
            {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
          </button>
        </div>
      </div>
    </section>
  );
};
