import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { AnimatedSection } from '../components/AnimatedSection';
import {
  Trophy,
  Heart,
  ChevronRight,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Brain,
  Zap,
  Activity,
  Crown,
  Shield,
  Stethoscope,
  Coffee,
  Calendar,
  MapPin,
} from 'lucide-react';

/* ─── Maya's 9 Distances & Exact Package Pricing ────────────────────────── */
const distancePricing = [
  { distance: '1 KM', basic: 299, standard: 345, premium: 455, desc: 'Introductory community dash suitable for all age groups and beginners.' },
  { distance: '2 KM', basic: 345, standard: 445, premium: 599, desc: 'A swift, energizing distance for families, students, and light runners.' },
  { distance: '3 KM', basic: 499, standard: 599, premium: 649, desc: 'Building momentum along Banjara Hills city circuits.' },
  { distance: '5 KM', basic: 799, standard: 999, premium: 1499, desc: 'The classic corporate and fitness challenge through central Hyderabad.' },
  { distance: '8 KM', basic: 999, standard: 1499, premium: 1899, desc: 'Stepping stone for endurance runners testing speed and stamina.' },
  { distance: '10 KM', basic: 1299, standard: 1899, premium: 2299, desc: 'Official benchmark distance for active runners and corporate teams.' },
  { distance: '12 KM', basic: 1499, standard: 2199, premium: 2499, desc: 'Extended intermediate course testing mental resolve and pacing.' },
  { distance: '15 KM', basic: 1699, standard: 2399, premium: 2699, desc: 'Long-distance challenge preparing athletes for half-marathon glory.' },
  { distance: '21 KM', basic: 1899, standard: 2599, premium: 2999, desc: 'The Half Marathon premier test of raw power, grit, and discipline.' },
];

export const Home: React.FC = () => {
  const [selectedDistanceIndex, setSelectedDistanceIndex] = useState(3); // default 5KM
  const activeDistance = distancePricing[selectedDistanceIndex];

  return (
    <div className="min-h-screen bg-stallion-dark text-slate-100">
      {/* 1. Cinematic Hero */}
      <Hero />

      {/* 2. Concept & Philosophy: Khoj Khud Ki (Pure Animated Web Experience) */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-stallion-dark via-blue-950/20 to-stallion-dark border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-blue-400">
              The Concept &bull; Chapter I
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white mt-3">
              KHOJ KHUD KI
            </h2>
            <div className="w-16 h-0.5 bg-blue-500 mx-auto my-5" />
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Everyone carries a strength they have never fully let loose. The Stallion Marathon is where they find it.
              Hosted by Lemerian Workin Café &mdash; India's first Workin Café &mdash; with the café as the start line, finish line and home base.
            </p>
          </AnimatedSection>

          {/* 3 Pillars from Concept Brief - Pure Web Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Pillar 1 */}
            <AnimatedSection delay={0.1} direction="up" className="glass-panel p-8 rounded-2xl glass-panel-hover flex flex-col justify-between border-blue-900/50">
              <div>
                <div className="w-12 h-12 rounded-xl border border-blue-500/40 bg-blue-950/60 flex items-center justify-center mb-6 text-blue-400">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">
                  The Metaphor
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  A stallion is not born tamed. Its power is natural, and what it chooses to do with it is its own.
                  The run asks participants to stop holding back, whatever their distance or pace.
                </p>
              </div>
              <Link to="/story" className="text-xs font-semibold uppercase tracking-wider text-blue-400 hover:text-white inline-flex items-center gap-1.5 transition">
                <span>Read The Story</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </AnimatedSection>

            {/* Pillar 2 */}
            <AnimatedSection delay={0.2} direction="up" className="glass-panel p-8 rounded-2xl glass-panel-hover flex flex-col justify-between border-blue-500/40 shadow-xl shadow-blue-600/10">
              <div>
                <div className="w-12 h-12 rounded-xl border border-blue-500/60 bg-blue-950/80 flex items-center justify-center mb-6 text-blue-400">
                  <Coffee className="w-6 h-6" />
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30 text-[10px] font-bold uppercase tracking-wider mb-2">
                  India's First Workin Café
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">
                  Why It Fits Lemerian
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Lemerian is where working professionals have rebuilt their work and their confidence.
                  The marathon extends that story from the café into the city of Hyderabad.
                </p>
              </div>
              <Link to="/story" className="text-xs font-semibold uppercase tracking-wider text-blue-400 hover:text-white inline-flex items-center gap-1.5 transition">
                <span>Discover Lemerian Roots</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </AnimatedSection>

            {/* Pillar 3 */}
            <AnimatedSection delay={0.3} direction="up" className="glass-panel p-8 rounded-2xl glass-panel-hover flex flex-col justify-between border-blue-900/50">
              <div>
                <div className="w-12 h-12 rounded-xl border border-blue-500/40 bg-blue-950/60 flex items-center justify-center mb-6 text-blue-400">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">
                  Body &amp; Health Checks
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  On-ground health check-ups with practising doctors catch what a packed calendar lets slide.
                  The sharpest minds belong in the strongest bodies.
                </p>
              </div>
              <Link to="/charity" className="text-xs font-semibold uppercase tracking-wider text-blue-400 hover:text-white inline-flex items-center gap-1.5 transition">
                <span>View Community Proof</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </AnimatedSection>
          </div>

          {/* Vision Callout Block - Native Interactive Presentation */}
          <div className="rounded-3xl border border-blue-500/40 bg-gradient-to-r from-blue-950/60 via-slate-900/90 to-blue-950/60 p-8 sm:p-12 shadow-2xl">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-blue-300 font-bold block">
                The Run &mdash; Vision Copy
              </span>
              <h3 className="text-3xl sm:text-5xl font-serif font-black text-white">
                &ldquo;BORN TO RUN, FREE.&rdquo;
              </h3>
              <div className="w-16 h-0.5 bg-blue-500 mx-auto" />
              <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed text-left max-w-3xl mx-auto">
                <p>
                  A stallion is never tamed &mdash; only trained. It channels its strength instead of losing it,
                  and that discipline is what turns raw power into a clean, fast stride.
                </p>
                <p className="text-slate-300">
                  High-performing professionals carry the same instinct, and ignore it just as often. Deadlines
                  come first, symptoms get waved off, and by the time the body insists on being heard, the cost
                  has already shown up everywhere &mdash; in focus, in output, in the work itself.
                </p>
                <p>
                  Stallion is built on a simple belief: <strong className="text-white">the sharpest minds belong in the strongest bodies.</strong> On
                  14th March 2027, Hyderabad's working professionals trade the desk for the start line &mdash; not
                  to escape the grind, but to meet it stronger.
                </p>
              </div>
              <div className="pt-2">
                <span className="font-serif italic text-base sm:text-lg text-blue-300">
                  &ldquo;The strongest stride is still the one you choose for yourself.&rdquo;
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Distance & Package Rate Calculator */}
      <section className="py-24 bg-stallion-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-blue-400">
                Official Race Categories
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-2">
                9 DISTANCES. 3 TIERS. ONE HYDERABAD.
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Select your distance below to view official package pricing in INR (₹).
              </p>
            </div>

            {/* Distance Selectors */}
            <div className="flex flex-wrap items-center gap-1.5 bg-stallion-card/90 p-1.5 rounded-2xl border border-blue-900/50">
              {distancePricing.map((item, idx) => (
                <button
                  key={item.distance}
                  onClick={() => setSelectedDistanceIndex(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                    selectedDistanceIndex === idx
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                      : 'text-slate-300 hover:text-white hover:bg-blue-950/60'
                  }`}
                >
                  {item.distance}
                </button>
              ))}
            </div>
          </div>

          {/* Distance Description Pill */}
          <div className="mb-8 p-4 rounded-xl bg-blue-950/50 border border-blue-500/30 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xl font-serif font-black text-blue-400">
                {activeDistance.distance} Course
              </span>
              <span className="text-xs text-slate-200">{activeDistance.desc}</span>
            </div>
            <span className="text-[11px] text-blue-300 uppercase tracking-wider font-semibold">
              Start & Finish: Lemerian Workin Café
            </span>
          </div>

          {/* 3 Tiers for Selected Distance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Basic Tier */}
            <div className="glass-panel rounded-3xl p-8 flex flex-col justify-between border border-blue-900/50 glass-panel-hover">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-slate-300 font-bold">General Entry</span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-blue-950 border border-blue-800 text-slate-200">Trot</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Basic Package</h3>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-serif font-black text-white">₹{activeDistance.basic}</span>
                  <span className="text-xs text-slate-300 ml-1.5">for {activeDistance.distance}</span>
                </div>
                <div className="space-y-3 pt-4 border-t border-blue-900/40 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Breakfast at Lemerian Workin Café</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Timing Bib (Official Tracked Chip)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Official Finisher Medal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Official E-Certificate of Completion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Hydration Stations along course</span>
                  </div>
                </div>
              </div>
              <Link
                to="/packages"
                className="mt-8 w-full py-3 rounded-xl border border-blue-500/40 hover:border-blue-400 text-white text-xs font-bold uppercase tracking-wider text-center block transition hover:bg-blue-900/40"
              >
                Choose Basic
              </Link>
            </div>

            {/* 2. Standard Tier (Featured) */}
            <div className="glass-panel rounded-3xl p-8 flex flex-col justify-between border-2 border-blue-500 shadow-2xl shadow-blue-600/20 relative glass-panel-hover md:scale-[1.02]">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-600 text-white font-extrabold text-[10px] uppercase tracking-widest shadow-md">
                Official T-Shirt Included
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-blue-400 font-bold">Recommended</span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/40 font-semibold">Standard</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Standard Package</h3>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-serif font-black text-blue-400">₹{activeDistance.standard}</span>
                  <span className="text-xs text-slate-300 ml-1.5">for {activeDistance.distance}</span>
                </div>
                <div className="space-y-3 pt-4 border-t border-blue-900/40 text-xs text-slate-200">
                  <div className="flex items-center gap-2 text-blue-300 font-semibold">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>All Basic features included, plus:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Official Stallion Dri-Fit Running T-Shirt</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Runner Goodie Bag with partner vouchers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Physiotherapy recovery access</span>
                  </div>
                </div>
              </div>
              <Link
                to="/packages"
                className="mt-8 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider text-center block transition shadow-lg shadow-blue-600/30"
              >
                Choose Standard
              </Link>
            </div>

            {/* 3. Premium Tier */}
            <div className="glass-panel rounded-3xl p-8 flex flex-col justify-between border border-blue-900/50 glass-panel-hover">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-slate-300 font-bold">Comprehensive Experience</span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-blue-950 border border-blue-800 text-slate-200">Canter</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Premium Package</h3>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-serif font-black text-white">₹{activeDistance.premium}</span>
                  <span className="text-xs text-slate-300 ml-1.5">for {activeDistance.distance}</span>
                </div>
                <div className="space-y-3 pt-4 border-t border-blue-900/40 text-xs text-slate-200">
                  <div className="flex items-center gap-2 text-blue-300 font-semibold">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>All Standard features included, plus:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Access to 1 Workshop session (Body, Mind, or Edge)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Full On-Ground Doctor Health Checkup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Priority Start Line Corrals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Lemerian VIP Recovery Café Lounge access</span>
                  </div>
                </div>
              </div>
              <Link
                to="/packages"
                className="mt-8 w-full py-3 rounded-xl border border-blue-500/40 hover:border-blue-400 text-white text-xs font-bold uppercase tracking-wider text-center block transition hover:bg-blue-900/40"
              >
                Choose Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The 3 Workshop Tracks Preview (Body, Mind, Edge) */}
      <section className="py-24 bg-gradient-to-b from-stallion-dark via-blue-950/20 to-stallion-dark border-t border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-blue-400">
              Work Efficiency &bull; 11 Sessions
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white mt-3">
              THE WORKSHOP CURRICULUM
            </h2>
            <div className="w-16 h-0.5 bg-blue-500 mx-auto my-5" />
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Workshops run separately from race day in small batches of 30 to 100 participants.
              Built for the working body and the working mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Track 1: Body */}
            <div className="glass-panel rounded-2xl p-6 border border-blue-900/50 glass-panel-hover">
              <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Track 1: BODY</h3>
              <span className="text-xs text-blue-400 block mb-4">3 Sessions &bull; Physical Optimization</span>
              <ul className="space-y-2.5 text-xs text-slate-300 border-t border-blue-900/40 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Diet for a working day</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Physical wellbeing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Self-defence</span>
                </li>
              </ul>
            </div>

            {/* Track 2: Mind */}
            <div className="glass-panel rounded-2xl p-6 border border-blue-500/50 shadow-xl shadow-blue-600/10 glass-panel-hover">
              <div className="w-10 h-10 rounded-xl bg-blue-900/60 border border-blue-400 flex items-center justify-center text-blue-300 mb-4">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Track 2: MIND</h3>
              <span className="text-xs text-blue-400 block mb-4">4 Sessions &bull; Cognitive Resilience</span>
              <ul className="space-y-2.5 text-xs text-slate-300 border-t border-blue-900/40 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Beating short attention span</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Cognitive intelligence</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Psychological wellbeing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>How gratitude makes you a millionaire</span>
                </li>
              </ul>
            </div>

            {/* Track 3: Edge */}
            <div className="glass-panel rounded-2xl p-6 border border-blue-900/50 glass-panel-hover">
              <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Track 3: EDGE</h3>
              <span className="text-xs text-blue-400 block mb-4">4 Sessions &bull; Professional Edge</span>
              <ul className="space-y-2.5 text-xs text-slate-300 border-t border-blue-900/40 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>AI and automation for professionals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Financial literacy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Personal branding & social media</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Public speaking & executive presence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Top Capped Tier: Black Stallion VIP Circle */}
      <section className="py-24 bg-stallion-dark relative overflow-hidden border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-amber-500/40 bg-gradient-to-r from-slate-900/90 via-blue-950/70 to-slate-900/90 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            {/* Brochure Header Ribbon */}
            <div className="flex items-center justify-between text-[11px] sm:text-xs uppercase tracking-[0.25em] text-blue-300 pb-4 border-b border-amber-500/30 mb-8">
              <span className="font-bold text-white">STALLION MARATHON &bull; CHAPTER I</span>
              <div className="h-px flex-1 mx-4 sm:mx-8 bg-gradient-to-r from-amber-500/20 via-amber-500/40 to-transparent" />
              <span className="font-serif italic text-amber-300 hidden sm:inline">HOW'S YOUR HORSE POWER?</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-5xl sm:text-6xl font-black text-amber-400">10.</span>
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-blue-300 font-bold block">
                      THE VIP CIRCLE &mdash; CAPPED AT 25 SEATS
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-serif font-black text-white mt-1">
                      BLACK STALLION CIRCLE
                    </h2>
                    <div className="w-16 h-1 bg-amber-400 mt-2" />
                  </div>
                </div>

                <p className="text-amber-300 text-sm font-semibold">
                  Title: &ldquo;Founding Stallion&rdquo; &bull; Stallion #01 to #25 Lifetime Designation &bull; ₹50,000
                </p>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  The absolute pinnacle of the Stallion Marathon. Sits above every distance and tier.
                  Includes custom-fitted black performance blazer, all 11 workshop passes, private pre-dawn warm-up with race ambassadors,
                  and lifelong VIP registration for all future Stallion chapters.
                </p>

                <div className="pt-2">
                  <Link
                    to="/packages"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-widest transition shadow-xl shadow-blue-600/30 hover:scale-105"
                  >
                    <span>View Black Stallion Circle</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-3xl border border-blue-500/40 bg-gradient-to-br from-blue-950/80 via-slate-900 to-blue-950/90 p-8 shadow-2xl flex flex-col justify-between space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-400/50 flex items-center justify-center">
                      <Crown className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-blue-400 font-bold">VIP Status</span>
                      <span className="block font-serif text-lg font-bold text-white">Founding Stallion</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-black text-xs">
                    ₹50,000
                  </span>
                </div>

                <div className="space-y-3 border-y border-blue-900/50 py-5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Custom-fitted Black Performance Blazer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>All 11 Workshop Passes across Body, Mind &amp; Edge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Private Pre-Dawn Warm-up with Race Ambassadors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Numbered Stallion #01 to #25 Designation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Lifelong VIP registration for all future chapters</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Strictly Capped at 25 Seats</span>
                  <span className="text-blue-300 font-semibold">Venue: Lemerian Café</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Chapter 12: Sponsors, Media & The Proof Story (Maya's Exact Layout) */}
      <section className="py-24 bg-gradient-to-b from-stallion-dark via-blue-950/30 to-stallion-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-amber-500/40 bg-gradient-to-b from-slate-900/90 to-blue-950/60 p-6 sm:p-12 shadow-2xl backdrop-blur-md">
            {/* Brochure Header Ribbon */}
            <div className="flex items-center justify-between text-[11px] sm:text-xs uppercase tracking-[0.25em] text-blue-300 pb-4 border-b border-amber-500/30 mb-8">
              <span className="font-bold text-white">STALLION MARATHON &bull; CHAPTER I</span>
              <div className="h-px flex-1 mx-4 sm:mx-8 bg-gradient-to-r from-amber-500/20 via-amber-500/40 to-transparent" />
              <span className="font-serif italic text-amber-300 hidden sm:inline">HOW'S YOUR HORSE POWER?</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-5xl sm:text-7xl font-black text-amber-400">12.</span>
                  <div>
                    <h2 className="font-serif text-2xl sm:text-4xl font-black tracking-tight text-white">
                      SPONSORS, MEDIA &amp; THE PROOF STORY
                    </h2>
                    <div className="w-16 h-1 bg-amber-400 mt-2" />
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Sponsors and media find it hard to believe that India's first Workin Café exists and has changed lives.
                  The answer is evidence.
                </p>

                {/* 4 Proof Pillars from Maya's Poster */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-950/50 border border-blue-900/50">
                    <div className="w-8 h-8 rounded-full border border-amber-400/50 bg-blue-900/60 flex items-center justify-center flex-shrink-0 text-amber-300 font-bold text-xs">
                      1
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                        TESTIMONIAL CASE STUDY
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Written testimonials from Lemerian regulars, each with signature, image and consent.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-950/50 border border-blue-900/50">
                    <div className="w-8 h-8 rounded-full border border-amber-400/50 bg-blue-900/60 flex items-center justify-center flex-shrink-0 text-amber-300 font-bold text-xs">
                      2
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                        TESTIMONY PROMPTS
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        What you do and where you work, how many times you have visited, and what impact Lemerian has had on your life.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-950/50 border border-blue-900/50">
                    <div className="w-8 h-8 rounded-full border border-amber-400/50 bg-blue-900/60 flex items-center justify-center flex-shrink-0 text-amber-300 font-bold text-xs">
                      3
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                        IMPACT MESSAGE
                      </h4>
                      <p className="text-xs font-serif italic text-amber-200 mt-0.5">
                        &ldquo;Your effort will impact more than 20,000 people.&rdquo;
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Only publish impact figures that can be backed up.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-950/50 border border-blue-900/50">
                    <div className="w-8 h-8 rounded-full border border-amber-400/50 bg-blue-900/60 flex items-center justify-center flex-shrink-0 text-amber-300 font-bold text-xs">
                      4
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                        HOW THE CASE STUDY IS USED
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        The case study leads the sponsor deck, the VIP pitch and the media outreach.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/charity"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-blue-500/40 hover:border-blue-400 bg-blue-950/60 hover:bg-blue-900/50 text-white font-semibold text-xs uppercase tracking-widest transition"
                  >
                    <span>Explore Community Impact Evidence</span>
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-blue-950/70 border border-blue-500/30 shadow-xl space-y-3">
                  <span className="text-3xl font-serif text-blue-400">&ldquo;</span>
                  <p className="text-xs sm:text-sm text-slate-200 italic -mt-2 leading-relaxed">
                    Lemerian is where working professionals have rebuilt their work and their confidence. The marathon extends that story from the café into the city of Hyderabad.
                  </p>
                  <div className="pt-2 border-t border-blue-900/50 text-[11px] text-blue-300 font-semibold">
                    &mdash; Lemerian Regulars Case Study
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900/80 border border-blue-900/60 shadow-xl space-y-2">
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block">
                    Verified Campaign Reach
                  </span>
                  <span className="text-2xl sm:text-3xl font-serif font-black text-white block">
                    20,000+ People
                  </span>
                  <p className="text-xs text-slate-300">
                    &ldquo;Your effort will impact more than 20,000 people.&rdquo; Verifiable community metrics across Hyderabad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
