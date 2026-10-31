import React, { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import {
  Heart,
  Users,
  HandHeart,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  X,
  Mail,
  Sparkles,
} from 'lucide-react';

export const Charity: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-stallion-dark text-slate-100 pt-28 pb-24">
      {/* ── Page Header: Run for a Cause ───────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <AnimatedSection direction="up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-950/70 mb-6 text-xs font-bold uppercase tracking-widest text-blue-300">
            <Heart className="w-3.5 h-3.5 text-blue-400" />
            <span>Community Impact &bull; Chapter I</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black text-white tracking-tight mb-4">
            Run for a Cause
          </h1>

          <div className="w-20 h-0.5 bg-blue-500 mx-auto my-6" />

          {/* Intro */}
          <p className="max-w-2xl mx-auto text-slate-200 text-base sm:text-lg leading-relaxed font-light">
            Every stride you take can power someone else forward. The Stallion Marathon connects personal discipline
            with meaningful community support across Hyderabad.
          </p>
        </AnimatedSection>
      </section>

      {/* ── 4 Core Pillars of Cause & Partnership ──────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 1. Our Partner */}
          <AnimatedSection delay={0.1} direction="up" className="glass-panel rounded-3xl p-8 border border-blue-900/60 glass-panel-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-6">
                <HandHeart className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold block mb-1">
                Official Collaboration
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">
                Our Partner
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Partner announcements will be published once verified details and formal MoUs are confirmed by the organizing committee.
              </p>
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-900/50 text-xs text-slate-300">
                <strong className="text-white block mb-0.5">Partner Organization:</strong>
                Official non-profit foundation partner to be announced shortly.
              </div>
            </div>
          </AnimatedSection>

          {/* 2. Who It Helps */}
          <AnimatedSection delay={0.2} direction="up" className="glass-panel rounded-3xl p-8 border border-blue-900/60 glass-panel-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-6">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-widest text-blue-400 font-bold block mb-1">
                Beneficiaries &amp; Cause
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">
                Who It Helps
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Initiatives focused on youth athletic development, grassroots physical literacy, and preventive health screenings for underserved communities in Hyderabad.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Grassroots sports equipment &amp; coaching support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Free community medical &amp; preventive health camps</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* 3. How Your Registration Helps */}
          <AnimatedSection delay={0.3} direction="up" className="glass-panel rounded-3xl p-8 border border-blue-500/50 shadow-xl shadow-blue-600/10 glass-panel-hover md:col-span-2">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-blue-900/50">
              <div>
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold block mb-1">
                  Direct Pledge
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  How Your Registration Helps
                </h3>
              </div>
              <div className="px-4 py-2 rounded-xl bg-blue-600/20 border border-blue-500/30 text-xs font-semibold text-blue-300">
                100% Transparent Allocation
              </div>
            </div>

            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
              <p>
                A designated portion of every runner ticket fee will be directly allocated to our verified partner organization, providing tangible resources that help young runners and community members access equipment and health care.
              </p>
              <p>
                Full audited contribution receipts and community impact reports will be shared transparently with all registered participants following race day on 14 March 2027.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* ── CTA Button: Contribute / Learn More ────────────────────────────── */}
        <div className="text-center mt-12">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm uppercase tracking-[0.2em] shadow-xl shadow-blue-600/40 hover:scale-105 transition duration-300 border border-blue-400/50"
          >
            <span>Contribute / Learn More &rarr;</span>
          </button>
        </div>
      </section>

      {/* ── Modal: Contribute / Inquire ────────────────────────────────────── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="max-w-md w-full rounded-3xl bg-slate-900 border border-blue-500/40 p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => {
                setModalOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-400 flex items-center justify-center mx-auto text-blue-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif font-black text-white">
                  Message Received
                </h4>
                <p className="text-xs text-slate-300">
                  Thank you, <strong className="text-white">{name}</strong>. Our partnership and charity relations team will connect with you with the official partner brief.
                </p>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    setSubmitted(false);
                  }}
                  className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold block">
                    Community Desk
                  </span>
                  <h4 className="text-2xl font-serif font-bold text-white">
                    Contribute / Learn More
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Connect regarding charity sponsorships, CSR pledges, or non-profit partner inquiries.
                  </p>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2 rounded-xl bg-blue-950/50 border border-blue-900/60 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-blue-950/50 border border-blue-900/60 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">Message / Inquiry</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us how you would like to contribute or collaborate..."
                    className="w-full px-3.5 py-2 rounded-xl bg-blue-950/50 border border-blue-900/60 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-blue-600/30"
                >
                  Send Inquiry &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
