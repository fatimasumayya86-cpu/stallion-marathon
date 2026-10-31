import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { AnimatedSection } from '../components/AnimatedSection';
import {
  ArrowRight,
  CheckCircle2,
  Brain,
  Zap,
  Activity,
  Calendar,
  MapPin,
  Sparkles,
  ChevronRight,
  Shield,
  Award,
} from 'lucide-react';

/* ─── 9 Distances ──────────────────────────────────────────────────────────── */
interface DistanceInfo {
  distance: string;
  category: string;
  type: string;
  priceNote: string;
  desc: string;
}

const distances: DistanceInfo[] = [
  { distance: '1 KM', category: 'STUD', type: 'Untimed / Fun Run', priceNote: '₹455', desc: 'Short community dash suitable for all ages and first-timers.' },
  { distance: '2 KM', category: 'STUD', type: 'Untimed / Fun Run', priceNote: '₹599', desc: 'An energizing run for students, families, and beginners.' },
  { distance: '3 KM', category: 'STUD', type: 'Untimed / Fun Run', priceNote: '₹649', desc: 'Build your momentum along the Banjara Hills city route.' },
  { distance: '5 KM', category: 'Classic', type: 'Timed or Untimed', priceNote: 'Basic, Standard & Premium', desc: 'The classic city challenge. Run at your own pace or race the clock.' },
  { distance: '8 KM', category: 'Intermediate', type: 'Timed or Untimed', priceNote: 'Basic, Standard & Premium', desc: 'Stepping stone for endurance runners building sustained stamina.' },
  { distance: '10 KM', category: 'Benchmark', type: 'Timed or Untimed', priceNote: 'Basic, Standard & Premium', desc: 'Official benchmark distance for active runners and corporate teams.' },
  { distance: '12 KM', category: 'Endurance', type: 'Timed or Untimed', priceNote: 'Basic, Standard & Premium', desc: 'Includes complimentary Stallion water bottle with Premium tier.' },
  { distance: '15 KM', category: 'Advanced', type: 'Timed or Untimed', priceNote: 'Basic, Standard & Premium', desc: 'Extended endurance course testing mental resolve and pacing.' },
  { distance: '21 KM', category: 'Half Marathon', type: 'Timed or Untimed', priceNote: 'Basic, Standard & Premium', desc: 'The premier Half Marathon distance. 1-week membership with Standard.' },
];

export const Home: React.FC = () => {
  const [selectedDistance, setSelectedDistance] = useState<DistanceInfo>(distances[3]); // default 5KM

  return (
    <div className="min-h-screen bg-stallion-dark text-slate-100">
      {/* 1. Cinematic Hero */}
      <Hero />

      {/* 2. Section: Pick Your Distance */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-stallion-dark via-blue-950/20 to-stallion-dark border-y border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-blue-400">
              The Herd &bull; 9 Distances
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white mt-3">
              Pick Your Distance
            </h2>
            <div className="w-16 h-0.5 bg-blue-500 mx-auto my-5" />
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Whether it&rsquo;s your first 1 KM or your 21 KM best, there&rsquo;s a distance for you.
              Short runs, long runs, timed or untimed. Pick yours and run with the herd.
            </p>
          </AnimatedSection>

          {/* Distance Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {distances.map((item) => {
              const isSelected = selectedDistance.distance === item.distance;
              return (
                <button
                  key={item.distance}
                  onClick={() => setSelectedDistance(item)}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/40 scale-105 border border-blue-400'
                      : 'bg-stallion-card/80 text-slate-300 hover:text-white hover:bg-blue-950/70 border border-blue-900/40'
                  }`}
                >
                  <span>{item.distance}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-blue-950 text-blue-300'
                  }`}>
                    {item.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Distance Highlight Card */}
          <AnimatedSection direction="up" className="max-w-4xl mx-auto">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-blue-500/40 shadow-2xl relative overflow-hidden bg-gradient-to-br from-blue-950/60 via-slate-900/90 to-blue-950/70">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-blue-900/50">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30 text-xs font-bold uppercase tracking-wider mb-2">
                    {selectedDistance.category} Category &bull; {selectedDistance.type}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-serif font-black text-white">
                    {selectedDistance.distance} Course
                  </h3>
                  <p className="text-slate-300 text-sm mt-1 max-w-xl">
                    {selectedDistance.desc}
                  </p>
                </div>

                <div className="text-left md:text-right">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Available In</span>
                  <span className="text-xl sm:text-2xl font-serif font-bold text-blue-300">
                    {selectedDistance.priceNote}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-xs text-slate-300">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-blue-950/40 border border-blue-900/40">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Start &amp; finish: Lemerian Workin Caf&eacute;</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-blue-950/40 border border-blue-900/40">
                  <Calendar className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Sunday, 14 March 2027</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-blue-950/40 border border-blue-900/40">
                  <Award className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Official Race BIB &amp; Certificate</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-300 text-center sm:text-left">
                  STUD runs (1-3 KM) are standalone. 5 KM and above offer Basic, Standard, and Premium tiers.
                </span>
                <Link
                  to="/packages"
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-widest shadow-lg shadow-blue-600/30 transition flex items-center justify-center gap-2 hover:scale-105"
                >
                  <span>See Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Section: More Than a Run */}
      <section className="py-24 bg-stallion-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-blue-400">
              Workshops &bull; Body, Mind &amp; Edge
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white mt-3">
              More Than a Run
            </h2>
            <div className="w-16 h-0.5 bg-blue-500 mx-auto my-5" />
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Join one of our workshops on health, mindset, and career skills, held at the caf&eacute; before or after the race.
              Workshops are booked separately.
            </p>
          </AnimatedSection>

          {/* 3 Workshop Tracks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Body */}
            <AnimatedSection delay={0.1} direction="up" className="glass-panel rounded-3xl p-8 border border-blue-900/50 glass-panel-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-6">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-600/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider mb-2">
                  Track 1
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Body</h3>
                <p className="text-xs text-slate-300 mb-6">
                  Physical optimization, nutrition, and self-preservation for demanding days.
                </p>
                <ul className="space-y-3 text-xs text-slate-200 border-t border-blue-900/40 pt-4">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Diet for a working day</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Physical wellbeing</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Self-defence</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-blue-900/30">
                <Link to="/story" className="text-xs font-bold text-blue-400 hover:text-white inline-flex items-center gap-1.5 transition">
                  <span>Learn more about Body track</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Mind */}
            <AnimatedSection delay={0.2} direction="up" className="glass-panel rounded-3xl p-8 border border-blue-500/50 shadow-xl shadow-blue-600/10 glass-panel-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-900/70 border border-blue-400 flex items-center justify-center text-blue-300 mb-6">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-600/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider mb-2">
                  Track 2
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Mind</h3>
                <p className="text-xs text-slate-300 mb-6">
                  Mental clarity, emotional resilience, and deep cognitive focus.
                </p>
                <ul className="space-y-3 text-xs text-slate-200 border-t border-blue-900/40 pt-4">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Beating a short attention span</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Cognitive intelligence</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Psychological wellbeing</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>How gratitude makes you a millionaire</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-blue-900/30">
                <Link to="/story" className="text-xs font-bold text-blue-400 hover:text-white inline-flex items-center gap-1.5 transition">
                  <span>Learn more about Mind track</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Edge */}
            <AnimatedSection delay={0.3} direction="up" className="glass-panel rounded-3xl p-8 border border-blue-900/50 glass-panel-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-600/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider mb-2">
                  Track 3
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Edge</h3>
                <p className="text-xs text-slate-300 mb-6">
                  Practical commercial, leadership, and digital survival skills.
                </p>
                <ul className="space-y-3 text-xs text-slate-200 border-t border-blue-900/40 pt-4">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>How to pitch and sell</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Internships</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Protecting your data from cybercrime</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Handling bullies</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-blue-900/30">
                <Link to="/story" className="text-xs font-bold text-blue-400 hover:text-white inline-flex items-center gap-1.5 transition">
                  <span>Learn more about Edge track</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. Final call to action: Ready to Run? */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-t from-blue-950/80 via-stallion-dark to-stallion-dark border-t border-blue-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up" className="rounded-3xl border border-blue-500/40 bg-gradient-to-br from-blue-950/70 via-slate-900/90 to-blue-950/70 p-10 sm:p-16 shadow-2xl relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Stallion Marathon &bull; Chapter I</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black text-white tracking-tight">
              Ready to Run?
            </h2>

            <p className="text-base sm:text-xl text-slate-200 font-light max-w-xl mx-auto mt-4 mb-8 leading-relaxed">
              Grab your ticket for the first marathon led by a stallion.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/packages"
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm uppercase tracking-[0.2em] shadow-xl shadow-blue-600/40 hover:scale-105 transition duration-300 flex items-center justify-center gap-2 border border-blue-400/50"
              >
                <span>Register Now &rarr;</span>
              </Link>
              <Link
                to="/packages"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-blue-500/40 hover:border-blue-400 bg-slate-900/80 hover:bg-blue-950/70 text-white font-semibold text-xs uppercase tracking-widest transition"
              >
                <span>See Packages</span>
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-900/40 text-xs text-slate-400">
              14 March 2027 &bull; Lemerian Workin Caf&eacute;, Banjara Hills, Hyderabad
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
