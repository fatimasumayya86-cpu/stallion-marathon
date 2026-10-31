import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { AnimatedSection } from '../components/AnimatedSection';
import {
  Check,
  Sparkles,
  Crown,
  ChevronDown,
  X,
  CheckCircle2,
  Calendar,
  MapPin,
  Coffee,
  Heart,
  Stethoscope,
  Shield,
} from 'lucide-react';

/* ─── Maya's Complete Pricing Table across 9 Distances ─────────────────── */
const distanceCatalog = [
  { distance: '1 KM', basic: 299, standard: 345, premium: 455 },
  { distance: '2 KM', basic: 345, standard: 445, premium: 599 },
  { distance: '3 KM', basic: 499, standard: 599, premium: 649 },
  { distance: '5 KM', basic: 799, standard: 999, premium: 1499, note: 'Confirmed standard rate ₹999 per costing workbook' },
  { distance: '8 KM', basic: 999, standard: 1499, premium: 1899 },
  { distance: '10 KM', basic: 1299, standard: 1899, premium: 2299 },
  { distance: '12 KM', basic: 1499, standard: 2199, premium: 2499 },
  { distance: '15 KM', basic: 1699, standard: 2399, premium: 2699 },
  { distance: '21 KM', basic: 1899, standard: 2599, premium: 2999 },
];

export const Packages: React.FC = () => {
  const [selectedDistance, setSelectedDistance] = useState('5 KM');
  const [activeModal, setActiveModal] = useState<{
    tier: string;
    distance?: string;
    price: number;
    isVip?: boolean;
  } | null>(null);

  const [vipSeatNumber, setVipSeatNumber] = useState<number>(7);
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');
  const [attendeePhone, setAttendeePhone] = useState('');
  const [workshopTrackChoice, setWorkshopTrackChoice] = useState('Body');
  const [bookingDone, setBookingDone] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const currentDistObj =
    distanceCatalog.find((d) => d.distance === selectedDistance) || distanceCatalog[3];

  const handleOpenBooking = (tier: string, price: number, isVip = false) => {
    setActiveModal({
      tier,
      distance: isVip ? 'All Access (1–21 KM)' : selectedDistance,
      price,
      isVip,
    });
    setBookingDone(false);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingDone(true);
    confetti({
      particleCount: 110,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F6E4A8', '#0C1322', '#FFFFFF'],
    });
  };

  const faqs = [
    {
      q: 'Where do the run packages start and finish?',
      a: 'All 9 race distances start and finish at Lemerian Workin Café, Banjara Hills, Hyderabad on Sunday, 14 March 2027.',
    },
    {
      q: 'When and where are the 11 workshop sessions conducted?',
      a: 'Workshops are conducted separately from race day in small batches of 30 to 100 participants across three tracks: Body (3 sessions), Mind (4 sessions), and Edge (4 sessions).',
    },
    {
      q: 'What is the Black Stallion VIP Circle?',
      a: 'The VIP tier is founding patronage of Chapter I: a one-time, strictly capped 25-seat circle (numbered Stallion #01 to #25). Patrons receive private lounge access, pre-run founder dinner, all workshops, and permanently carry the title Founding Stallion.',
    },
    {
      q: 'Are on-ground health check-ups included?',
      a: 'Yes, on-ground health check-ups with practising doctors are included in the Standard, Premium, and Black Stallion VIP packages.',
    },
  ];

  return (
    <div className="min-h-screen bg-stallion-dark pt-28 pb-20">
      {/* ── Page Header ───────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-stallion-gold/40 bg-stallion-card mb-4 text-xs font-bold uppercase tracking-widest text-stallion-gold">
          <Crown className="w-3.5 h-3.5" />
          <span>Race Packages &amp; Pricing &bull; Chapter I</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-stallion-champagne tracking-tight">
          CHOOSE YOUR STRIDE
        </h1>
        <div className="w-20 h-0.5 bg-stallion-gold mx-auto my-6" />
        <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
          Select from 9 certified distances (1 to 21 KM) across three comprehensive packages,
          or claim one of 25 founding seats in the prestigious Black Stallion Circle.
        </p>
      </div>

      {/* ── Distance Selector Bar ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="p-4 rounded-3xl glass-panel border border-stallion-gold/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-stallion-border/40">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-stallion-gold block">
                Step 1: Choose Distance
              </span>
              <span className="text-base font-serif font-bold text-stallion-champagne">
                Active Selection: {selectedDistance}
              </span>
            </div>
            <span className="text-xs text-stallion-muted">
              14 March 2027 &bull; Lemerian Workin Café, Hyderabad
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-9 gap-2 pt-4">
            {distanceCatalog.map((d) => (
              <button
                key={d.distance}
                onClick={() => setSelectedDistance(d.distance)}
                className={`py-3 rounded-xl font-serif font-bold text-sm transition-all duration-200 border ${
                  selectedDistance === d.distance
                    ? 'bg-stallion-gold text-stallion-dark border-stallion-gold shadow-lg shadow-stallion-gold/20 scale-105'
                    : 'bg-stallion-card border-stallion-border text-slate-300 hover:text-white hover:border-stallion-gold/50'
                }`}
              >
                {d.distance}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 Main Run Packages for Selected Distance ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* 1. Basic Package */}
          <AnimatedSection delay={0.1} className="glass-panel rounded-3xl p-8 flex flex-col justify-between border border-stallion-border/70 glass-panel-hover">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-stallion-muted font-bold">
                  General Entry
                </span>
                <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-stallion-navy border border-stallion-border text-slate-300">
                  Trot
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stallion-champagne">Basic Package</h3>
              <p className="text-xs text-stallion-muted mt-1">Core race entry &amp; breakfast</p>

              <div className="my-6 pt-4 border-t border-stallion-border/40">
                <span className="text-xs text-stallion-muted block">Entry Fee</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-serif font-black text-stallion-gold">
                    ₹{currentDistObj.basic}
                  </span>
                  <span className="text-xs text-stallion-muted">for {selectedDistance}</span>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <span className="block text-[11px] uppercase font-bold tracking-wider text-stallion-champagne">
                  What's Included:
                </span>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-stallion-gold flex-shrink-0 mt-0.5" />
                  <span>Breakfast at Lemerian Workin Café</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-stallion-gold flex-shrink-0 mt-0.5" />
                  <span>Timing Bib with official tracked chip</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-stallion-gold flex-shrink-0 mt-0.5" />
                  <span>Finisher Medal</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-stallion-gold flex-shrink-0 mt-0.5" />
                  <span>E-Certificate of Completion</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-stallion-gold flex-shrink-0 mt-0.5" />
                  <span>Course Hydration &amp; Medical Aid Stations</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleOpenBooking('Basic', currentDistObj.basic)}
              className="mt-8 w-full py-3.5 rounded-xl border border-stallion-border hover:border-stallion-gold text-stallion-champagne hover:bg-stallion-card text-xs font-bold uppercase tracking-widest transition"
            >
              Select Basic (₹{currentDistObj.basic})
            </button>
          </AnimatedSection>

          {/* 2. Standard Package (Recommended) */}
          <AnimatedSection delay={0.2} className="glass-panel rounded-3xl p-8 flex flex-col justify-between border-2 border-stallion-gold shadow-2xl shadow-stallion-gold/15 relative glass-panel-hover lg:scale-[1.03]">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-stallion-gold text-stallion-dark font-extrabold text-[10px] uppercase tracking-widest shadow-md">
              Most Popular
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-stallion-gold font-bold">
                  Race Gear &amp; Health
                </span>
                <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-stallion-gold/20 text-stallion-gold">
                  Standard
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stallion-champagne">Standard Package</h3>
              <p className="text-xs text-stallion-muted mt-1">Official T-Shirt &amp; Doctor health check</p>

              <div className="my-6 pt-4 border-t border-stallion-border/40">
                <span className="text-xs text-stallion-muted block">Entry Fee</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-serif font-black text-stallion-gold">
                    ₹{currentDistObj.standard}
                  </span>
                  <span className="text-xs text-stallion-muted">for {selectedDistance}</span>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-slate-200">
                <span className="block text-[11px] uppercase font-bold tracking-wider text-stallion-gold">
                  Everything in Basic, plus:
                </span>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-stallion-gold flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-white">Official Stallion Dri-Fit Running T-Shirt</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-stallion-gold flex-shrink-0 mt-0.5" />
                  <span>Goodie Bag with partner vouchers</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-stallion-gold flex-shrink-0 mt-0.5" />
                  <span className="text-emerald-400 font-semibold">On-ground health check-up with practising doctors</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleOpenBooking('Standard', currentDistObj.standard)}
              className="mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-stallion-gold via-stallion-gold-light to-stallion-gold text-stallion-dark text-xs font-black uppercase tracking-widest transition shadow-lg shadow-stallion-gold/20 hover:scale-[1.02]"
            >
              Select Standard (₹{currentDistObj.standard})
            </button>
          </AnimatedSection>

          {/* 3. Premium Package */}
          <AnimatedSection delay={0.3} className="glass-panel rounded-3xl p-8 flex flex-col justify-between border border-stallion-border/70 glass-panel-hover">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-stallion-muted font-bold">
                  Run + Workshop
                </span>
                <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-stallion-navy border border-stallion-border text-slate-300">
                  Canter
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stallion-champagne">Premium Package</h3>
              <p className="text-xs text-stallion-muted mt-1">Includes 1 Workshop Track &amp; Recovery</p>

              <div className="my-6 pt-4 border-t border-stallion-border/40">
                <span className="text-xs text-stallion-muted block">Entry Fee</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-serif font-black text-stallion-gold">
                    ₹{currentDistObj.premium}
                  </span>
                  <span className="text-xs text-stallion-muted">for {selectedDistance}</span>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <span className="block text-[11px] uppercase font-bold tracking-wider text-stallion-gold">
                  Everything in Standard, plus:
                </span>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-stallion-gold flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-white">Access to 1 Workshop Track (Body, Mind, or Edge)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-stallion-gold flex-shrink-0 mt-0.5" />
                  <span>Post-run Recovery Zone access (Physio / Ice Bath)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-stallion-gold flex-shrink-0 mt-0.5" />
                  <span>Lemerian Café voucher for post-race refreshment</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleOpenBooking('Premium', currentDistObj.premium)}
              className="mt-8 w-full py-3.5 rounded-xl border border-stallion-gold/60 hover:bg-stallion-gold hover:text-stallion-dark text-stallion-champagne text-xs font-bold uppercase tracking-widest transition"
            >
              Select Premium (₹{currentDistObj.premium})
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section: The VIP Circle — Black Stallion Circle (₹50,000) ──────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border-2 border-stallion-gold relative overflow-hidden shadow-2xl shadow-stallion-gold/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stallion-gold/20 text-stallion-gold text-xs font-bold uppercase tracking-widest">
                <Crown className="w-4 h-4" />
                <span>Founding Patronage &bull; Strictly Capped at 25 Seats</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-black text-stallion-champagne">
                BLACK STALLION CIRCLE
              </h2>

              <p className="font-serif italic text-base text-stallion-gold">
                &ldquo;Stallions aren't born tamed. They're untamed by choice. Twenty-five people will stand at the front of Chapter I. Stallion #__ is yours.&rdquo;
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                The VIP tier is not a race entry. It is founding patronage of Chapter I: a one-time, limited,
                numbered seat at the start of something new. Chapter I can never be repeated, and early patrons
                carry that status permanently.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stallion-gold flex-shrink-0" />
                  <span>Private lounge at Lemerian with dedicated host</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stallion-gold flex-shrink-0" />
                  <span>Pre-run dinner/breakfast with founder &amp; sponsors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stallion-gold flex-shrink-0" />
                  <span>All 11 Workshop Sessions included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stallion-gold flex-shrink-0" />
                  <span>Personalised bib &amp; custom finisher keepsake</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stallion-gold flex-shrink-0" />
                  <span>Coffee hamper from Lemerian sourcing model</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stallion-gold flex-shrink-0" />
                  <span>Lemerian Coworking pass / café credit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stallion-gold flex-shrink-0" />
                  <span>Name permanently on the Lemerian Wall</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stallion-gold flex-shrink-0" />
                  <span>Reusable professional photography &amp; video package</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-stallion-card/90 border border-stallion-border text-center">
              <span className="text-xs uppercase tracking-widest text-stallion-muted font-bold">
                Founding Seat
              </span>
              <span className="text-4xl sm:text-5xl font-serif font-black text-stallion-gold mt-2 mb-1">
                ₹50,000
              </span>
              <span className="text-[11px] text-stallion-muted mb-6">
                11 of 25 seats remaining
              </span>

              {/* Numbered Seat Picker */}
              <div className="w-full mb-6 text-left">
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Select Your Stallion Seat Number:
                </label>
                <select
                  value={vipSeatNumber}
                  onChange={(e) => setVipSeatNumber(Number(e.target.value))}
                  className="w-full bg-stallion-navy border border-stallion-border rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-stallion-gold"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map(
                    (num) => (
                      <option key={num} value={num}>
                        Stallion #{num < 10 ? `0${num}` : num} &mdash; Founding Patron
                      </option>
                    )
                  )}
                </select>
              </div>

              <button
                onClick={() => handleOpenBooking('Black Stallion VIP Circle', 50000, true)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-stallion-gold via-stallion-gold-light to-stallion-gold text-stallion-dark font-black text-xs uppercase tracking-widest shadow-xl shadow-stallion-gold/25 hover:scale-105 transition"
              >
                Claim Stallion #{vipSeatNumber < 10 ? `0${vipSeatNumber}` : vipSeatNumber}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section: Full 9-Distance Rate Matrix Table ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-stallion-gold font-bold">
            Transparent Pricing
          </span>
          <h2 className="text-3xl font-serif font-bold text-stallion-champagne mt-1">
            ALL 9 DISTANCES RATE MATRIX
          </h2>
        </div>

        <div className="glass-panel rounded-2xl overflow-x-auto border border-stallion-border">
          <table className="w-full text-left text-xs min-w-[500px]">
            <thead className="bg-stallion-navy/80 text-stallion-champagne border-b border-stallion-border uppercase font-serif tracking-wider">
              <tr>
                <th className="py-4 px-6 font-bold">Distance</th>
                <th className="py-4 px-6 text-center font-bold">Basic (Trot)</th>
                <th className="py-4 px-6 text-center font-bold text-stallion-gold">Standard</th>
                <th className="py-4 px-6 text-center font-bold">Premium (Canter)</th>
                <th className="py-4 px-6 text-center font-bold">Select</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stallion-border/40 text-slate-300">
              {distanceCatalog.map((row) => (
                <tr
                  key={row.distance}
                  className={`hover:bg-stallion-navy/40 transition ${
                    selectedDistance === row.distance ? 'bg-stallion-navy/30' : ''
                  }`}
                >
                  <td className="py-4 px-6 font-bold text-stallion-champagne">{row.distance}</td>
                  <td className="py-4 px-6 text-center">₹{row.basic}</td>
                  <td className="py-4 px-6 text-center font-semibold text-stallion-gold">₹{row.standard}</td>
                  <td className="py-4 px-6 text-center">₹{row.premium}</td>
                  <td className="py-4 px-6 text-center">
                    <button
                      onClick={() => setSelectedDistance(row.distance)}
                      className="px-3 py-1 rounded-lg text-[10px] uppercase font-bold border border-stallion-border hover:border-stallion-gold text-slate-300 hover:text-white"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-stallion-gold font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-serif font-bold text-stallion-champagne mt-1">
            PACKAGE &amp; REGISTRATION DETAILS
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={faq.q}
              className="glass-panel rounded-xl border border-stallion-border overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full py-4 px-6 text-left flex items-center justify-between text-sm font-semibold text-stallion-champagne hover:text-stallion-gold transition"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-stallion-gold transition-transform duration-300 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-4 text-xs text-slate-300 leading-relaxed border-t border-stallion-border/40 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Booking Modal ─────────────────────────────────────────────────── */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-stallion-dark border border-stallion-gold/60 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingDone ? (
              <form onSubmit={handleBookingSubmit} className="space-y-5">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-stallion-gold">
                    {activeModal.isVip ? 'Founding Patronage' : 'Runner Registration'}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-stallion-champagne mt-0.5">
                    {activeModal.tier}
                  </h3>
                  <p className="text-xs text-slate-300">
                    Distance: <strong>{activeModal.distance}</strong> &bull; Total: ₹{activeModal.price.toLocaleString('en-IN')}
                  </p>
                </div>

                {activeModal.tier === 'Premium' && (
                  <div>
                    <label className="block text-xs font-semibold text-stallion-champagne mb-1.5">
                      Select Your Workshop Track:
                    </label>
                    <select
                      value={workshopTrackChoice}
                      onChange={(e) => setWorkshopTrackChoice(e.target.value)}
                      className="w-full bg-stallion-card border border-stallion-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-stallion-gold"
                    >
                      <option value="Body">Track 1: BODY (Diet, Physical Wellbeing, Self-Defence)</option>
                      <option value="Mind">Track 2: MIND (Attention Span, Cognitive &amp; Psych Wellbeing, Gratitude)</option>
                      <option value="Edge">Track 3: EDGE (Pitch &amp; Sell, Internships, Cybercrime, Bullies)</option>
                    </select>
                  </div>
                )}

                {activeModal.isVip && (
                  <div className="p-3.5 rounded-xl bg-stallion-card border border-stallion-gold/40 text-xs">
                    <span className="text-stallion-gold font-bold block mb-1">
                      Assigned Founding Seat: Stallion #{vipSeatNumber < 10 ? `0${vipSeatNumber}` : vipSeatNumber}
                    </span>
                    <span className="text-slate-300 text-[11px]">
                      Permanent recognition as Founding Stallion on the Lemerian Wall.
                    </span>
                  </div>
                )}

                <div className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={attendeeName}
                    onChange={(e) => setAttendeeName(e.target.value)}
                    className="w-full bg-stallion-card border border-stallion-border rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-stallion-gold"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={attendeeEmail}
                    onChange={(e) => setAttendeeEmail(e.target.value)}
                    className="w-full bg-stallion-card border border-stallion-border rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-stallion-gold"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={attendeePhone}
                    onChange={(e) => setAttendeePhone(e.target.value)}
                    className="w-full bg-stallion-card border border-stallion-border rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-stallion-gold"
                  />
                </div>

                <div className="pt-3 border-t border-stallion-border flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-stallion-muted">Total Amount</span>
                    <span className="block text-2xl font-serif font-black text-stallion-gold">
                      ₹{activeModal.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-stallion-gold via-stallion-gold-light to-stallion-gold text-stallion-dark font-black text-xs uppercase tracking-widest hover:scale-105 transition shadow-lg shadow-stallion-gold/20"
                  >
                    Confirm Registration
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-stallion-gold/20 text-stallion-gold flex items-center justify-center mx-auto border border-stallion-gold">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-stallion-champagne">
                  Registration Confirmed!
                </h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Welcome to Stallion Marathon Chapter I, <strong>{attendeeName || 'Participant'}</strong>!
                  Your entry for <strong>{activeModal.tier} ({activeModal.distance})</strong> has been logged.
                </p>
                <div className="p-3.5 rounded-xl bg-stallion-card border border-stallion-border text-xs text-stallion-gold font-mono">
                  REG ID: #STM-HYD-{Math.floor(100000 + Math.random() * 900000)}
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-8 py-3 rounded-full bg-stallion-gold text-stallion-dark text-xs font-bold uppercase tracking-widest"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
