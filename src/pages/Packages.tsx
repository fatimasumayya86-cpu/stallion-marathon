import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { AnimatedSection } from '../components/AnimatedSection';
import {
  CheckCircle2,
  Calendar,
  MapPin,
  Sparkles,
  ArrowRight,
  X,
  Star,
  Activity,
  Brain,
  Zap,
} from 'lucide-react';

/* ── 5 KM & Above Distance Pricing Catalog ─────────────────────────────── */
const distances5Up = [
  { distance: '5 KM', basic: 799, standard: 999, premium: 1499, desc: 'The classic city challenge through central Hyderabad.' },
  { distance: '8 KM', basic: 999, standard: 1499, premium: 1899, desc: 'Stepping stone for runners building sustained endurance.' },
  { distance: '10 KM', basic: 1299, standard: 1899, premium: 2299, desc: 'Official benchmark distance for active runners.' },
  { distance: '12 KM', basic: 1499, standard: 2199, premium: 2499, desc: 'Extended course. Premium includes Stallion water bottle.' },
  { distance: '15 KM', basic: 1699, standard: 2399, premium: 2699, desc: 'Advanced endurance test across Hyderabad city circuits.' },
  { distance: '21 KM', basic: 1899, standard: 2599, premium: 2999, desc: 'Half Marathon distance. Includes 1-week membership with Standard.' },
];

export const Packages: React.FC = () => {
  const [selectedDist, setSelectedDist] = useState(distances5Up[0]); // default 5KM
  const [activeModal, setActiveModal] = useState<{
    tier: string;
    distance: string;
    price: number | string;
  } | null>(null);

  const [bookingDone, setBookingDone] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleOpenBooking = (tier: string, distance: string, price: number | string) => {
    setActiveModal({ tier, distance, price });
    setBookingDone(false);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingDone(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#1D63FF', '#60A5FA', '#FFFFFF', '#0047AB'],
    });
  };

  return (
    <div className="min-h-screen bg-stallion-dark text-slate-100 pt-28 pb-24">
      {/* ── Page Header ───────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <AnimatedSection direction="up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-950/70 mb-6 text-xs font-bold uppercase tracking-widest text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Chapter I &bull; 14 March 2027</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black text-white tracking-tight mb-4">
            Choose Your Run
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Pick a distance, then pick a package. Workshops are booked separately.
          </p>

          <div className="w-20 h-0.5 bg-blue-500 mx-auto my-6" />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-950/60 border border-blue-500/30 text-xs sm:text-sm text-slate-200">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span>14 March 2027 &bull; Lemerian Workin Caf&eacute;, Banjara Hills, Hyderabad</span>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Section 1: STUD Short-Distance Runs ────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <AnimatedSection direction="up">
          <div className="rounded-3xl border border-blue-500/40 bg-gradient-to-br from-blue-950/60 via-slate-900/90 to-blue-950/70 p-8 sm:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-blue-900/50">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-blue-400 block mb-1">
                  Short Runs &bull; 1, 2, and 3 KM
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">
                  STUD
                </h2>
                <p className="text-slate-300 text-sm mt-1">
                  Our short-distance runs: 1, 2, and 3 KM. Perfect for first-timers, students, and families.
                </p>
              </div>

              <div className="text-xs text-blue-300 font-medium px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 w-fit">
                Untimed Fun Runs &bull; Participation Certificate
              </div>
            </div>

            {/* STUD Price Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { dist: '1 KM', price: 455, desc: 'Introductory community dash suitable for all age groups.' },
                { dist: '2 KM', price: 599, desc: 'A swift, energizing distance for beginners.' },
                { dist: '3 KM', price: 649, desc: 'Build momentum along the Banjara Hills course.' },
              ].map(({ dist, price, desc }) => (
                <div
                  key={dist}
                  className="glass-panel p-6 rounded-2xl border border-blue-900/60 glass-panel-hover flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-400">STUD Run</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-blue-950 text-blue-300">Untimed</span>
                    </div>
                    <h3 className="text-2xl font-serif font-black text-white">{dist}</h3>
                    <p className="text-xs text-slate-300 mt-1">{desc}</p>
                    <div className="mt-4 pt-4 border-t border-blue-900/50">
                      <span className="text-3xl font-serif font-black text-white">₹{price}</span>
                      <span className="text-xs text-slate-400 ml-1">all-inclusive</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenBooking('STUD', dist, price)}
                    className="w-full py-2.5 rounded-xl bg-blue-600/80 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition shadow-md hover:shadow-blue-600/30"
                  >
                    Register for {dist} &rarr;
                  </button>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Section 2: 5 KM and Above (Basic, Standard, Premium) ───────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-blue-400">
            5 KM to 21 KM Runs
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white mt-2">
            Distance Packages
          </h2>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto my-4" />
          <p className="text-slate-300 text-sm sm:text-base">
            First select your distance below, then choose between Basic, Standard, and Premium packages.
          </p>

          {/* Distance Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {distances5Up.map((d) => (
              <button
                key={d.distance}
                onClick={() => setSelectedDist(d)}
                className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 ${
                  selectedDist.distance === d.distance
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105 border border-blue-400'
                    : 'bg-stallion-card/80 text-slate-300 hover:text-white hover:bg-blue-950/70 border border-blue-900/40'
                }`}
              >
                {d.distance}
              </button>
            ))}
          </div>

          <p className="text-xs text-blue-300 mt-4">
            Viewing packages for <strong className="text-white">{selectedDist.distance}</strong>: {selectedDist.desc}
          </p>
        </AnimatedSection>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1. Basic */}
          <AnimatedSection delay={0.1} direction="up" className="glass-panel rounded-3xl p-8 border border-blue-900/50 glass-panel-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-slate-300 font-bold">General Entry</span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-blue-950 border border-blue-800 text-slate-300">
                  {selectedDist.distance}
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Basic</h3>
              <p className="text-xs text-slate-300 mt-1 mb-4">
                For 5 KM and above. Run at your own pace.
              </p>

              <div className="mt-2 mb-6">
                <span className="text-3xl font-serif font-black text-white">₹{selectedDist.basic}</span>
                <span className="text-xs text-slate-400 ml-1.5">for {selectedDist.distance}</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-blue-900/40 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Breakfast</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Event T-shirt</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Race BIB</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Refreshments</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Untimed run</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Participation certificate</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleOpenBooking('Basic', selectedDist.distance, selectedDist.basic)}
              className="mt-8 w-full py-3.5 rounded-xl border border-blue-500/40 hover:border-blue-400 text-white text-xs font-bold uppercase tracking-wider text-center block transition hover:bg-blue-900/40"
            >
              Choose Basic &rarr;
            </button>
          </AnimatedSection>

          {/* 2. Standard ⭐ Most Popular */}
          <AnimatedSection delay={0.2} direction="up" className="glass-panel rounded-3xl p-8 border-2 border-blue-500 shadow-2xl shadow-blue-600/20 relative glass-panel-hover flex flex-col justify-between md:scale-105 bg-blue-950/30">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Most Popular</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-xs uppercase tracking-wider text-blue-400 font-bold">Timed &amp; Medal</span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/40 font-semibold">
                  {selectedDist.distance}
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Standard</h3>
              <p className="text-xs text-slate-300 mt-1 mb-4">
                For runners who want a timed run and a medal
              </p>

              <div className="mt-2 mb-6">
                <span className="text-3xl font-serif font-black text-blue-300">₹{selectedDist.standard}</span>
                <span className="text-xs text-slate-400 ml-1.5">for {selectedDist.distance}</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-blue-900/40 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="font-semibold text-white">Timed run</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Finisher certificate and medal</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Breakfast (8 KM and above)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Health check-up</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>One-week Lemerian membership with the 21 KM run</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleOpenBooking('Standard', selectedDist.distance, selectedDist.standard)}
              className="mt-8 w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider text-center block transition shadow-lg shadow-blue-600/30 hover:scale-105"
            >
              Choose Standard &rarr;
            </button>
          </AnimatedSection>

          {/* 3. Premium */}
          <AnimatedSection delay={0.3} direction="up" className="glass-panel rounded-3xl p-8 border border-blue-900/50 glass-panel-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-slate-300 font-bold">All-Inclusive</span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-blue-950 border border-blue-800 text-slate-300">
                  {selectedDist.distance}
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Premium</h3>
              <p className="text-xs text-slate-300 mt-1 mb-4">
                The full experience
              </p>

              <div className="mt-2 mb-6">
                <span className="text-3xl font-serif font-black text-white">₹{selectedDist.premium}</span>
                <span className="text-xs text-slate-400 ml-1.5">for {selectedDist.distance}</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-blue-900/40 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="font-semibold text-white">Buffet breakfast</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>BIB delivered to your home (selected distances)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>One-month Lemerian membership (selected distances)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Water bottle with the 12 KM run</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Health check-up</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleOpenBooking('Premium', selectedDist.distance, selectedDist.premium)}
              className="mt-8 w-full py-3.5 rounded-xl border border-blue-500/40 hover:border-blue-400 text-white text-xs font-bold uppercase tracking-wider text-center block transition hover:bg-blue-900/40"
            >
              Choose Premium &rarr;
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section 3: Workshops (Optional Add-on) ─────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <AnimatedSection direction="up">
          <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-950/60 via-slate-900/80 to-blue-950/60 p-8 sm:p-10 shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-blue-900/40">
              <div>
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold block mb-1">
                  Optional Add-on
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-white">
                  Workshops
                </h3>
                <p className="text-slate-300 text-sm mt-2 max-w-xl">
                  Add a Body, Mind, or Edge workshop to your registration. See the Story page for topics.
                </p>
              </div>

              <div className="text-left md:text-right">
                <span className="text-xs uppercase tracking-wider text-slate-400 block">Workshop Pricing</span>
                <span className="text-xl font-serif font-bold text-blue-300">Prices: to be confirmed</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-900/40">
                <span className="text-xs font-bold text-blue-300 uppercase block mb-1">Track 1: Body</span>
                <span className="text-xs text-slate-300">Diet for a working day &bull; Physical wellbeing &bull; Self-defence</span>
              </div>
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-900/40">
                <span className="text-xs font-bold text-blue-300 uppercase block mb-1">Track 2: Mind</span>
                <span className="text-xs text-slate-300">Attention span &bull; Cognitive intelligence &bull; Psychological wellbeing &bull; Gratitude</span>
              </div>
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-900/40">
                <span className="text-xs font-bold text-blue-300 uppercase block mb-1">Track 3: Edge</span>
                <span className="text-xs text-slate-300">Pitch &amp; sell &bull; Internships &bull; Data &amp; cybercrime &bull; Handling bullies</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-900/40 flex justify-between items-center flex-wrap gap-4">
              <span className="text-xs text-slate-400">
                Conducted at Lemerian Workin Caf&eacute; in small batches of 30 to 100 participants.
              </span>
              <Link
                to="/story"
                className="text-xs font-bold text-blue-400 hover:text-white inline-flex items-center gap-1 transition"
              >
                <span>Read workshop syllabus on Story page &rarr;</span>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Booking / Registration Modal ───────────────────────────────────── */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="max-w-md w-full rounded-3xl bg-slate-900 border border-blue-500/40 p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingDone ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-400 flex items-center justify-center mx-auto text-blue-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif font-black text-white">
                  Registration Confirmed!
                </h4>
                <p className="text-xs text-slate-300">
                  Thank you, <strong className="text-white">{fullName}</strong>! You are officially registered for the{' '}
                  <strong className="text-blue-300">{activeModal.distance} ({activeModal.tier})</strong> run.
                </p>
                <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-900/60 text-xs text-slate-300 text-left space-y-1">
                  <div><strong>Date:</strong> 14 March 2027</div>
                  <div><strong>Venue:</strong> Lemerian Workin Caf&eacute;, Banjara Hills</div>
                  <div><strong>Amount:</strong> ₹{activeModal.price}</div>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold block">
                    Registration Desk
                  </span>
                  <h4 className="text-2xl font-serif font-bold text-white">
                    {activeModal.tier} Package &bull; {activeModal.distance}
                  </h4>
                  <span className="text-base font-serif font-bold text-blue-300">
                    Total: ₹{activeModal.price}
                  </span>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
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
                  <label className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2 rounded-xl bg-blue-950/50 border border-blue-900/60 text-white text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-blue-600/30"
                  >
                    Confirm &amp; Proceed to Pay ₹{activeModal.price} &rarr;
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center">
                  Official timing chip, runner BIB &amp; race kit details sent via email &amp; SMS.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
