import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { AnimatedSection } from '../components/AnimatedSection';
import {
  Heart,
  ShieldCheck,
  Stethoscope,
  Users,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  FileCheck,
} from 'lucide-react';

export const Charity: React.FC = () => {
  const [pledgeAmount, setPledgeAmount] = useState<number>(1000);
  const [customPledge, setCustomPledge] = useState<string>('');
  const [pledged, setPledged] = useState(false);

  const presetPledges = [500, 1000, 2500, 5000, 10000];
  const activeAmount = customPledge ? parseFloat(customPledge) || 0 : pledgeAmount;

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPledged(true);
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#10B981', '#34D399', '#D4AF37', '#F6E4A8'],
    });
  };

  return (
    <div className="min-h-screen bg-stallion-dark pt-28 pb-20">
      {/* ── Page Header ───────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-emerald-500/40 bg-stallion-card mb-4 text-xs font-bold uppercase tracking-widest text-emerald-400">
          <Heart className="w-3.5 h-3.5" />
          <span>The Proof Story &bull; Community &amp; Health Impact</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-stallion-champagne tracking-tight">
          &ldquo;YOUR EFFORT WILL IMPACT <br />
          <span className="text-emerald-400">MORE THAN 20,000 PEOPLE.&rdquo;</span>
        </h1>
        <div className="w-20 h-0.5 bg-stallion-gold mx-auto my-6" />
        <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
          The Stallion Marathon extends Lemerian's story into the city of Hyderabad.
          Through on-ground doctor health screenings, workplace wellbeing workshops, and student outreach,
          every stride creates verified real-world impact.
        </p>
      </div>

      {/* ── Section: 3 Pillars of Community Impact ────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Preventive Health */}
          <AnimatedSection delay={0.1} className="glass-panel p-8 rounded-2xl flex flex-col justify-between glass-panel-hover">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stallion-champagne mb-2">
                On-Ground Doctor Screenings
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Practising doctors on-site at the marathon evaluate key health metrics &mdash; blood pressure,
                cardiac vitals, and metabolic markers &mdash; catching what packed corporate calendars let slide.
              </p>
            </div>
            <div className="pt-4 border-t border-stallion-border/40 text-xs text-emerald-400 font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>Available to All Standard &amp; Premium Runners</span>
            </div>
          </AnimatedSection>

          {/* Pillar 2: Mental Health & Wellbeing Workshops */}
          <AnimatedSection delay={0.2} className="glass-panel p-8 rounded-2xl flex flex-col justify-between glass-panel-hover">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-400 mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stallion-champagne mb-2">
                Workplace Mind &amp; Body Workshops
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                11 interactive workshops covering attention spans, psychological resilience, nutrition,
                and self-defence. Helping working professionals build sustainable high performance.
              </p>
            </div>
            <div className="pt-4 border-t border-stallion-border/40 text-xs text-purple-400 font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>Conducted in Small Batches (30–100 Participants)</span>
            </div>
          </AnimatedSection>

          {/* Pillar 3: Student & Community Inclusivity */}
          <AnimatedSection delay={0.3} className="glass-panel p-8 rounded-2xl flex flex-col justify-between glass-panel-hover">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stallion-champagne mb-2">
                Student &amp; Youth Sponsorship
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Connecting with colleges and universities across Hyderabad (including GRIET GDGOC events),
                offering accessible entry points from 1 KM so every young runner can take part.
              </p>
            </div>
            <div className="pt-4 border-t border-stallion-border/40 text-xs text-blue-400 font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>Full Community Entry from ₹299</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section: Evidence & Verified Proof ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-stallion-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-stallion-gold font-bold">
                Section 12 of Concept Brief
              </span>
              <h2 className="text-3xl font-serif font-bold text-stallion-champagne">
                The Proof Story &amp; Evidence
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sponsors and partners want evidence that India's first Workin Café exists and changes lives.
                Lemerian is collecting verified written testimonials from regulars &mdash; with signatures,
                headshots, and documented stories of rebuilding focus and confidence.
              </p>

              {/* Labelled Placeholders as required by Content Restrictions */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-stallion-card/90 border border-stallion-border text-xs text-stallion-muted">
                  <span className="text-stallion-gold font-semibold block mb-1">
                    [Content Placeholder: Registered Non-Profit / NGO Partner Identification]
                  </span>
                  Official philanthropic partner MoUs and certified 80G tax registration numbers will be published upon final execution of the partnership agreements.
                </div>

                <div className="p-3.5 rounded-xl bg-stallion-card/90 border border-stallion-border text-xs text-stallion-muted">
                  <span className="text-stallion-gold font-semibold block mb-1">
                    [Content Placeholder: Verified Community Outreach Case Studies &amp; Signatures]
                  </span>
                  Full testimonial dossier with signed consent forms from Lemerian community regulars will lead the official sponsor deck and media releases.
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-500/40 bg-gradient-to-br from-blue-950/70 via-slate-900 to-blue-950/80 p-8 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-400/50 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-blue-400 font-bold block">Evidence Standard</span>
                  <span className="font-serif text-xl font-bold text-white block">Verifiable Community Impact</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-950/80 border border-blue-500/30 space-y-2">
                <span className="text-xs font-serif italic text-blue-200 block">
                  &ldquo;Your effort will impact more than 20,000 people.&rdquo;
                </span>
                <span className="text-[11px] text-slate-400 block">
                  Strictly backed by verified case studies, doctor attendance logs, and participant data.
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-300 border-t border-blue-900/50 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Doctor-led on-ground health screenings for all participants</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Subsidized community &amp; student runner access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Direct lead transfer and co-marketing rights for sponsors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section: Community Sponsor / Supporter Pledge Form ─────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-stallion-gold/40 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
              Community Health Fund
            </span>
            <h2 className="text-3xl font-serif font-black text-stallion-champagne mt-1">
              SUPPORT STUDENT &amp; RUNNER HEALTH CHECKS
            </h2>
            <p className="text-xs text-stallion-muted mt-2">
              Sponsor additional medical test kits, doctor hours, or student runner kits for Chapter I.
            </p>
          </div>

          {!pledged ? (
            <form onSubmit={handlePledgeSubmit} className="space-y-6">
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {presetPledges.map((amt) => (
                  <button
                    type="button"
                    key={amt}
                    onClick={() => {
                      setPledgeAmount(amt);
                      setCustomPledge('');
                    }}
                    className={`py-3 rounded-xl font-serif font-bold text-sm transition-all duration-200 border ${
                      pledgeAmount === amt && !customPledge
                        ? 'bg-stallion-gold text-stallion-dark border-stallion-gold shadow-lg shadow-stallion-gold/20 scale-105'
                        : 'bg-stallion-card border-stallion-border text-slate-200 hover:border-stallion-gold/50'
                    }`}
                  >
                    ₹{amt.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>

              <div className="relative max-w-xs mx-auto">
                <span className="absolute left-4 top-2.5 text-sm text-stallion-gold font-bold">₹</span>
                <input
                  type="number"
                  placeholder="Or enter custom pledge amount"
                  value={customPledge}
                  onChange={(e) => setCustomPledge(e.target.value)}
                  className="w-full bg-stallion-card border border-stallion-border rounded-xl pl-8 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-stallion-gold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your Name / Organization"
                  className="bg-stallion-card border border-stallion-border rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-stallion-gold"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="bg-stallion-card border border-stallion-border rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-stallion-gold"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="px-10 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 text-stallion-dark font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-emerald-500/20 hover:scale-105 transition"
                >
                  Pledge ₹{activeAmount.toLocaleString('en-IN')} to Health Initiative
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-stallion-champagne">
                Pledge Successfully Received!
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for contributing ₹{activeAmount.toLocaleString('en-IN')} toward on-ground
                health screenings and student participation for Stallion Marathon Chapter I.
              </p>
              <button
                onClick={() => setPledged(false)}
                className="px-6 py-2.5 rounded-full border border-stallion-border text-xs text-slate-300 hover:text-white"
              >
                Pledge Another Contribution
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
