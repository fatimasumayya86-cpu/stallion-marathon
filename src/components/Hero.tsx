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
        {/* Unified Luxury Chapter Badge with Official Stallion Insignia */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500/50 bg-blue-950/80 backdrop-blur-md mb-4 shadow-xl shadow-blue-500/15 hover:border-blue-400 transition-all duration-300"
          style={{ opacity: 0 }}
        >
          <div className="w-10 h-6 flex items-center justify-center flex-shrink-0">
            <img
              src="/assets/images/stallion-logo-official.png"
              alt="Official Stallion Insignia"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="h-3.5 w-px bg-blue-500/40" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-white whitespace-nowrap">
            CHAPTER I &bull; 14 MARCH 2027 &bull; HYDERABAD
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" aria-hidden="true" />
        </div>

        {/* Grand Headline - 2 Majestic Bold Lines */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-black font-serif tracking-tight text-white leading-[1.05] mb-3 sm:mb-4"
          style={{ opacity: 0 }}
        >
          <span className="block">BORN TO RUN,</span>
          <span className="block text-royal-gradient">FREE.</span>
        </h1>

        {/* Tagline */}
        <p className="font-serif italic text-base sm:text-xl md:text-2xl text-blue-300 font-medium mb-3 sm:mb-4 tracking-wide">
          &ldquo;Khoj Khud Ki. Untame Your Strength.&rdquo;
        </p>

        {/* Vision Copy */}
        <p
          ref={subtitleRef}
          className="text-sm sm:text-base md:text-lg text-slate-200 font-light max-w-2xl mb-6 leading-relaxed"
          style={{ opacity: 0 }}
        >
          A stallion is never tamed &mdash; only trained. It channels its strength instead of losing it,
          and that discipline is what turns raw power into a clean, fast stride. On 14th March 2027,
          Hyderabad's working professionals trade the desk for the start line to meet their work and life stronger.
        </p>

        {/* Action CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-lg"
          style={{ opacity: 0 }}
        >
          <Link
            to="/packages"
            className="w-full sm:w-auto px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-xl shadow-blue-600/35 hover:shadow-blue-600/50 hover:scale-105 border border-blue-400/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Explore 9 Distances</span>
            <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
          </Link>

          <Link
            to="/story"
            className="w-full sm:w-auto px-8 sm:px-9 py-3.5 sm:py-4 rounded-full border border-blue-500/40 hover:border-blue-400 bg-slate-900/70 hover:bg-blue-950/70 backdrop-blur-md text-white font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-blue-400" aria-hidden="true" />
            <span>The Concept Story</span>
          </Link>
        </div>
      </div>

      {/* ── Bottom Section: Stats Bar & Audio Bar (Pinned inside viewport) ─── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full mt-auto">
        {/* Event At A Glance Stats Bar */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden glass-panel shadow-lg">
          {[
            { value: '9 Distances', label: '1 to 21 KM Range', color: 'text-blue-400' },
            { value: '3 Tracks', label: '11 Workshop Sessions', color: 'text-white' },
            { value: '₹1 Lakh+', label: 'Prize Money Pool', color: 'text-blue-400' },
            { value: '25 Seats', label: 'VIP Black Stallion Circle', color: 'text-white' },
          ].map(({ value, label, color }) => (
            <div key={label} className="text-center p-2.5 sm:p-3 bg-stallion-navy/60">
              <span className={`block text-base sm:text-xl font-serif font-black ${color}`}>
                {value}
              </span>
              <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 mt-0.5">
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
