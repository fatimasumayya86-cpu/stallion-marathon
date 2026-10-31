import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Compass, ArrowRight, Sparkles, Volume2, VolumeX, MapPin, Calendar } from 'lucide-react';
import { heroEntrance } from '../animations/gsapAnimations';
import { WooooshHorse } from './WooooshHorse';

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
      className="relative min-h-[100dvh] lg:h-[100dvh] lg:max-h-[100dvh] flex flex-col justify-between overflow-hidden bg-stallion-dark pt-14 pb-2 lg:pt-14 lg:pb-3"
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

      {/* ── Hero Content (Grand, Cinematic & Perfectly Fitted in 100vh) ─────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center my-auto py-1">
        {/* Badge: Chapter I */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/50 bg-blue-950/80 backdrop-blur-md mb-1 sm:mb-1.5 shadow-lg shadow-blue-500/15 hover:border-blue-400 transition-all duration-300"
          style={{ opacity: 0 }}
        >
          <div className="w-5 h-4 flex items-center justify-center flex-shrink-0">
            <img
              src="/assets/images/stallion-logo-official.png"
              alt="Official Stallion Insignia"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="h-3 w-px bg-blue-500/40" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-white whitespace-nowrap">
            CHAPTER I
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" aria-hidden="true" />
        </div>

        {/* ── Dynamic Leaping Stallion with Full WOOOOOSH Capabilities ───── */}
        <WooooshHorse />

        {/* Headline: How’s Your Horse Power? */}
        <h1
          ref={headlineRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-serif tracking-tight text-white leading-tight mb-1.5 sm:mb-2"
          style={{ opacity: 0 }}
        >
          How&rsquo;s Your <span className="text-royal-gradient">Horse Power?</span>
        </h1>

        {/* Subline: The first marathon led by a stallion. */}
        <p
          ref={subtitleRef}
          className="font-serif italic text-sm sm:text-base md:text-lg text-blue-200 font-medium mb-1.5 sm:mb-2 tracking-wide"
          style={{ opacity: 0 }}
        >
          The first marathon led by a stallion.
        </p>

        {/* Event line: 14 March 2027 · Lemerian Workin Café, Banjara Hills, Hyderabad */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-blue-950/60 border border-blue-500/30 text-slate-200 text-[11px] sm:text-xs font-medium mb-3 sm:mb-4">
          <Calendar className="w-3.5 h-3.5 text-blue-400" />
          <span>14 March 2027 &bull; Lemerian Workin Caf&eacute;, Banjara Hills, Hyderabad</span>
        </div>

        {/* Action CTAs: Register Now → · See Packages */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xl"
          style={{ opacity: 0 }}
        >
          <Link
            to="/packages"
            className="w-full sm:w-auto px-7 sm:px-8 py-2.5 sm:py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-600/35 hover:shadow-blue-600/50 hover:scale-105 border border-blue-400/50 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap flex-shrink-0"
          >
            <span>Register Now &rarr;</span>
          </Link>

          <Link
            to="/packages"
            className="w-full sm:w-auto px-7 sm:px-8 py-2.5 sm:py-3 rounded-full border border-blue-500/40 hover:border-blue-400 bg-slate-900/70 hover:bg-blue-950/70 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap flex-shrink-0"
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
            <div key={label} className="text-center p-2 sm:p-2.5 bg-stallion-navy/70">
              <span className={`block text-sm sm:text-base font-serif font-black ${color}`}>
                {value}
              </span>
              <span className="block text-[10px] sm:text-[11px] text-slate-300 mt-0.5">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Video / Audio Controls */}
        <div className="mt-1.5 flex items-center justify-center gap-3 text-xs text-slate-400">
          <button
            onClick={togglePlay}
            className="p-1 rounded-full hover:bg-stallion-card border border-blue-500/30 hover:text-blue-400 transition"
            title={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
          </button>
          <span className="text-[9px] tracking-widest uppercase">
            {videoLoaded ? 'Hyderabad Marathon Video Active' : 'Atmospheric Canvas Active'}
          </span>
          <button
            onClick={() => setIsMuted((m) => !m)}
            className="p-1 rounded-full hover:bg-stallion-card border border-blue-500/30 hover:text-blue-400 transition"
            title={isMuted ? 'Unmute audio' : 'Mute audio'}
          >
            {isMuted ? <VolumeX className="w-2.5 h-2.5" /> : <Volume2 className="w-2.5 h-2.5" />}
          </button>
        </div>
      </div>
    </section>
  );
};
