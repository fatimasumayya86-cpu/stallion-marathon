import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import {
  Compass,
  Calendar,
  MapPin,
  Route,
  Layers,
  Sparkles,
  CheckCircle2,
  Activity,
  Brain,
  Zap,
  ArrowRight,
  Mail,
  Send,
  X,
} from 'lucide-react';

export const Story: React.FC = () => {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-stallion-dark text-slate-100 pt-28 pb-24">
      {/* ── Page Header & The Story Behind Stallion ────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <AnimatedSection direction="up" className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-950/70 mb-6 text-xs font-bold uppercase tracking-widest text-blue-300">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            <span>Chapter I &bull; Hyderabad</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black text-white tracking-tight mb-8">
            The Story Behind Stallion
          </h1>
          <div className="w-20 h-0.5 bg-blue-500 mx-auto mb-10" />

          {/* 3 Core Story Paragraphs */}
          <div className="space-y-6 text-left sm:text-center text-slate-200 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-light">
            <p className="p-6 rounded-2xl bg-blue-950/40 border border-blue-900/50 shadow-lg text-slate-100">
              A stallion doesn&rsquo;t wait for the pack. It sets the pace, and the rest follow.
              That&rsquo;s the idea behind <strong className="text-white font-semibold">STALLION MARATHON</strong>: a race led by a stallion,
              with runners of every level behind it.
            </p>

            <p>
              Chapter I is where it begins. It takes place on <strong className="text-white font-medium">14 March 2027</strong>, hosted by
              Lemerian Workin Caf&eacute; in Banjara Hills, Hyderabad. There are nine distances, from a 1 KM fun run to a full 21 KM,
              so first-timers and seasoned runners can all take part.
            </p>

            <p>
              The theme is simple: <em className="text-blue-300 font-serif italic text-lg sm:text-xl font-normal">&ldquo;How&rsquo;s your horse power?&rdquo;</em> It&rsquo;s about strength, stamina,
              and the drive to keep going. We want you to finish the race feeling stronger than when you started.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Race Day at a Glance ───────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <AnimatedSection direction="up">
          <div className="rounded-3xl border border-blue-500/40 bg-gradient-to-br from-blue-950/70 via-slate-900/90 to-blue-950/80 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-blue-400">
                Official Event Guide
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-2">
                Race Day at a Glance
              </h2>
              <div className="w-16 h-0.5 bg-blue-500 mx-auto my-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
              {/* Date */}
              <div className="p-6 rounded-2xl bg-blue-950/50 border border-blue-900/50 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">Date</span>
                  <span className="text-lg font-serif font-bold text-white block mt-0.5">14 March 2027</span>
                  <span className="text-xs text-blue-300">Sunday morning &bull; Race day</span>
                </div>
              </div>

              {/* Venue */}
              <div className="p-6 rounded-2xl bg-blue-950/50 border border-blue-900/50 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">Venue</span>
                  <span className="text-lg font-serif font-bold text-white block mt-0.5">Lemerian Workin Caf&eacute;</span>
                  <span className="text-xs text-slate-300">Banjara Hills, Hyderabad</span>
                </div>
              </div>

              {/* Distances */}
              <div className="p-6 rounded-2xl bg-blue-950/50 border border-blue-900/50 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Route className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">Distances</span>
                  <span className="text-lg font-serif font-bold text-white block mt-0.5">9 Distances</span>
                  <span className="text-xs text-slate-300">1, 2, 3, 5, 8, 10, 12, 15, and 21 KM</span>
                </div>
              </div>

              {/* Categories */}
              <div className="p-6 rounded-2xl bg-blue-950/50 border border-blue-900/50 flex items-start gap-4 md:col-span-2 lg:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">Categories</span>
                  <span className="text-base font-serif font-bold text-white block mt-0.5">
                    STUD for short runs &bull; Basic, Standard &amp; Premium for 5 KM and above
                  </span>
                  <span className="text-xs text-slate-300 mt-1 block">
                    Choose untimed fun runs (STUD / Basic) or timed benchmark runs with medals (Standard / Premium).
                  </span>
                </div>
              </div>

              {/* Workshops */}
              <div className="p-6 rounded-2xl bg-blue-950/50 border border-blue-900/50 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">Workshops</span>
                  <span className="text-base font-serif font-bold text-white block mt-0.5">Body, Mind &amp; Edge</span>
                  <span className="text-xs text-blue-300">Booked separately from race registration</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Workshops Section ──────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-blue-400">
            Knowledge &amp; Resilience
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white mt-3">
            Workshops
          </h2>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto my-5" />
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            Three tracks, all at Lemerian Workin Caf&eacute;. Each one is booked separately from your race registration.
          </p>
        </AnimatedSection>

        {/* 3 Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Body */}
          <AnimatedSection delay={0.1} direction="up" className="glass-panel rounded-3xl p-8 border border-blue-900/50 glass-panel-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-600/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider mb-2">
                Track 1
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Body</h3>
              <ul className="space-y-3 text-sm text-slate-200 border-t border-blue-900/40 pt-4">
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
            <div className="mt-8 pt-4 border-t border-blue-900/30 text-xs text-slate-400">
              Held at Lemerian Workin Caf&eacute;
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
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Mind</h3>
              <ul className="space-y-3 text-sm text-slate-200 border-t border-blue-900/40 pt-4">
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
            <div className="mt-8 pt-4 border-t border-blue-900/30 text-xs text-slate-400">
              Held at Lemerian Workin Caf&eacute;
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
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Edge</h3>
              <ul className="space-y-3 text-sm text-slate-200 border-t border-blue-900/40 pt-4">
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
            <div className="mt-8 pt-4 border-t border-blue-900/30 text-xs text-slate-400">
              Held at Lemerian Workin Caf&eacute;
            </div>
          </AnimatedSection>
        </div>

        {/* Optional line for trainers and brands */}
        <AnimatedSection direction="up" className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-blue-500/40 bg-gradient-to-r from-blue-950/70 via-slate-900/80 to-blue-950/70 p-6 sm:p-8 text-center space-y-4 shadow-xl">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-bold block">
              For Trainers &amp; Brands
            </span>
            <p className="text-white text-base sm:text-lg font-medium">
              Want to run a workshop? Get in touch. Your name goes on it: <br />
              <span className="font-serif italic text-blue-300 font-normal">
                [Workshop Name], powered by [Your Brand].
              </span>
            </p>
            <div>
              <button
                onClick={() => setPartnerModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-400/60 bg-blue-600/30 hover:bg-blue-600/60 text-white text-xs font-bold uppercase tracking-wider transition"
              >
                <Mail className="w-3.5 h-3.5 text-blue-300" />
                <span>Inquire to Host a Workshop</span>
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action Button */}
        <div className="text-center mt-16">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm uppercase tracking-[0.2em] shadow-xl shadow-blue-600/40 hover:scale-105 transition duration-300 border border-blue-400/50"
          >
            <span>Register Now &rarr;</span>
          </Link>
        </div>
      </section>

      {/* ── Partner Modal ──────────────────────────────────────────────────── */}
      {partnerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="max-w-md w-full rounded-2xl bg-slate-900 border border-blue-500/40 p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => {
                setPartnerModalOpen(false);
                setPartnerSubmitted(false);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {partnerSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-blue-400 mx-auto" />
                <h4 className="text-xl font-serif font-bold text-white">Inquiry Received</h4>
                <p className="text-xs text-slate-300">
                  Thank you! The Stallion Marathon workshop curation team will review your workshop proposal and get back to you.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setPartnerSubmitted(true);
                }}
                className="space-y-4"
              >
                <h4 className="text-xl font-serif font-bold text-white">Host a Workshop</h4>
                <p className="text-xs text-slate-300">
                  Brand or trainer partnership for the Stallion Marathon workshop series.
                </p>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">Your Name / Organization</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Ramesh / Wellness Studio"
                    className="w-full px-3.5 py-2 rounded-xl bg-blue-950/50 border border-blue-900/60 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-blue-950/50 border border-blue-900/60 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">Proposed Workshop Name</label>
                  <input
                    type="text"
                    required
                    placeholder="[Workshop Name], powered by [Your Brand]"
                    className="w-full px-3.5 py-2 rounded-xl bg-blue-950/50 border border-blue-900/60 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition"
                >
                  Submit Proposal
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
