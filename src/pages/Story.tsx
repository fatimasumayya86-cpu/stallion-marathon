import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Compass, Sparkles, MapPin, Calendar, Award, Building, Heart, CheckCircle2 } from 'lucide-react';

export const Story: React.FC = () => {
  return (
    <div className="min-h-screen bg-stallion-dark pt-28 pb-20">
      {/* ── Page Header ───────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-stallion-gold/40 bg-stallion-card mb-4 text-xs font-bold uppercase tracking-widest text-stallion-gold">
          <Compass className="w-3.5 h-3.5" />
          <span>The Concept &bull; Chapter I &bull; Hyderabad</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-stallion-champagne tracking-tight">
          KHOJ KHUD KI
        </h1>
        <div className="w-20 h-0.5 bg-stallion-gold mx-auto my-6" />
        <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
          &ldquo;Untame Your Strength.&rdquo; The story of Hyderabad's premier community run,
          born at Lemerian Workin Café to bridge the working mind and the working body.
        </p>
      </div>

      {/* ── Section 1: Overview & Narrative ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left" className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-stallion-gold font-bold">
              1. Overview & Origins
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stallion-champagne">
              Where Everyone Carries a Strength Never Fully Let Loose
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              The Stallion Marathon is a multi-distance community run hosted by Lemerian Workin Café,
              India's first Workin Café. It is built on one idea: everyone carries a strength they have
              never fully let loose. The run is where they find it.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              The marathon takes its identity from the stallion &mdash; a symbol of raw power, freedom and
              pedigree &mdash; carrying forward the Khoj Khud Ki (&ldquo;discover yourself&rdquo;) story that
              sits at the heart of everything Lemerian does.
            </p>
            <div className="pt-2 flex items-center gap-8 border-t border-stallion-border/40">
              <div>
                <span className="block text-2xl font-serif font-bold text-stallion-gold">14 March</span>
                <span className="text-[11px] uppercase tracking-wider text-stallion-muted">2027 Race Day</span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-stallion-champagne">9 Distances</span>
                <span className="text-[11px] uppercase tracking-wider text-stallion-muted">1 to 21 KM</span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-emerald-400">₹11 Lakh</span>
                <span className="text-[11px] uppercase tracking-wider text-stallion-muted">Prize Pool</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="rounded-3xl border border-blue-500/40 bg-gradient-to-br from-blue-950/70 via-slate-900 to-blue-950/80 p-8 shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/30 border border-blue-400/50 flex items-center justify-center">
                <Compass className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold block">Flagship Event</span>
                <span className="font-serif text-2xl font-bold text-white block">Chapter I &bull; Hyderabad</span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 border-y border-blue-900/50 py-6 leading-relaxed">
              <p>
                <strong className="text-white">Start &amp; Finish Line:</strong> Lemerian Workin Café, Banjara Hills.
              </p>
              <p>
                <strong className="text-white">The Course:</strong> 9 Distances spanning 1, 2, 3, 5, 8, 10, 12, 15, and 21 KM across central Hyderabad circuits.
              </p>
              <p>
                <strong className="text-white">Medical Protocol:</strong> On-ground health check-ups conducted by practising doctors at the race village.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Date: 14 March 2027</span>
              <span className="text-blue-300 font-bold">India's First Workin Café</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section 2: Vision Copy ────────────────────────────────────────── */}
      <section className="bg-stallion-navy/40 py-20 border-y border-stallion-border mb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-widest text-stallion-gold font-bold">
            Vision Copy
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-stallion-champagne mt-2 mb-8">
            &ldquo;BORN TO RUN, FREE.&rdquo;
          </h2>

          <div className="text-left space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed glass-panel p-8 sm:p-12 rounded-3xl border-stallion-gold/30">
            <p>
              A stallion is never tamed &mdash; only trained. It channels its strength instead of losing it,
              and that discipline is what turns raw power into a clean, fast stride.
            </p>
            <p>
              High-performing professionals carry the same instinct, and ignore it just as often. Deadlines
              come first, symptoms get waved off, and by the time the body insists on being heard, the cost
              has already shown up everywhere &mdash; in focus, in output, in the work itself.
            </p>
            <p>
              Stallion is built on a simple belief: the sharpest minds belong in the strongest bodies. On
              14th March 2027, Hyderabad's working professionals trade the desk for the start line &mdash; not
              to escape the grind, but to meet it stronger. On-ground health check-ups with practising doctors
              catch what a packed calendar lets slide, and a full field of distances means there's a pace for
              whoever shows up, whatever shape they arrive in.
            </p>
            <div className="p-4 rounded-xl bg-stallion-card border-l-4 border-stallion-gold text-stallion-gold font-serif italic text-base">
              &ldquo;The strongest stride is still the one you choose for yourself.&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* ── Official Brand Mark & Identity Showcase ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-stallion-gold/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 sm:p-12 rounded-3xl glass-panel border border-stallion-gold/40 text-center shadow-2xl">
              <span className="text-xs uppercase font-extrabold tracking-widest text-stallion-gold mb-4">
                Official Marathon Insignia
              </span>
              <div className="w-full max-w-md h-56 sm:h-64 flex items-center justify-center p-4">
                <img
                  src="/assets/images/stallion-logo-official.png"
                  alt="Stallion Marathon Official Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-xs text-stallion-muted mt-3 font-mono font-bold tracking-wide">
                Royal Blue Jumping Stallion &bull; Official Mark (Transparent PNG)
              </span>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-widest text-stallion-gold font-bold">
                Section 4 of Concept Brief &bull; Brand Identity
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stallion-champagne">
                The Anatomy of the Stallion Mark
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                The Stallion Marathon identity pairs a minimal horse and jockey in full leaping stride with a clean,
                contemporary luxury-sport wordmark. It channels both disciplined athletic power and the freedom of the open road.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-stallion-card border border-stallion-border">
                  <span className="text-xs font-bold text-stallion-gold block mb-1">Deep Royal Blue</span>
                  <p className="text-[11px] text-stallion-muted">
                    The signature colour across official race bibs, banners, and commemorative merchandise.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-stallion-card border border-stallion-border">
                  <span className="text-xs font-bold text-stallion-gold block mb-1">Equestrian Line Mark</span>
                  <p className="text-[11px] text-stallion-muted">
                    Clean, dynamic silhouette capturing the horse-gait ladder from Trot to Canter and Gallop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Official Brand Mark & Identity Showcase ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-stallion-gold/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 sm:p-12 rounded-3xl glass-panel border border-stallion-gold/40 text-center shadow-2xl">
              <span className="text-xs uppercase font-extrabold tracking-widest text-stallion-gold mb-4">
                Official Marathon Insignia
              </span>
              <div className="w-full max-w-md h-56 sm:h-64 flex items-center justify-center p-4">
                <img
                  src="/assets/images/stallion-logo-official.png"
                  alt="Stallion Marathon Official Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-xs text-stallion-muted mt-3 font-mono font-bold tracking-wide">
                Royal Blue Jumping Stallion &bull; Official Mark (Transparent PNG)
              </span>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-widest text-stallion-gold font-bold">
                Section 4 of Concept Brief &bull; Brand Identity
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stallion-champagne">
                The Anatomy of the Stallion Mark
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                The Stallion Marathon identity pairs a minimal horse and jockey in full leaping stride with a clean,
                contemporary luxury-sport wordmark. It channels both disciplined athletic power and the freedom of the open road.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-stallion-card border border-stallion-border">
                  <span className="text-xs font-bold text-stallion-gold block mb-1">Deep Royal Blue</span>
                  <p className="text-[11px] text-stallion-muted">
                    The signature colour across official race bibs, banners, and commemorative merchandise.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-stallion-card border border-stallion-border">
                  <span className="text-xs font-bold text-stallion-gold block mb-1">Equestrian Line Mark</span>
                  <p className="text-[11px] text-stallion-muted">
                    Clean, dynamic silhouette capturing the horse-gait ladder from Trot to Canter and Gallop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Brand Identity & The Horse-Gait Ladder ─────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-stallion-gold font-bold">
            Identity & Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-stallion-champagne mt-2">
            THE HORSE-GAIT TIER LADDER
          </h2>
          <div className="w-16 h-0.5 bg-stallion-gold mx-auto my-5" />
          <p className="text-xs text-stallion-muted">
            Each step up means more speed, deeper access, and sustained personal growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Trot */}
          <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-stallion-muted block mb-2">
                Tier 1
              </span>
              <h3 className="text-2xl font-serif font-bold text-stallion-champagne mb-2">TROT</h3>
              <span className="text-xs text-stallion-gold block mb-4">General Entry</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                The foundational stride. Breakfast at Lemerian, timing bib with tracked chip, finisher medal,
                and digital e-certificate across any of the 9 distances.
              </p>
            </div>
            <div className="pt-4 border-t border-stallion-border/40 text-[11px] text-stallion-muted mt-6">
              Accessible entry point for all fitness levels.
            </div>
          </div>

          {/* Canter */}
          <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between border-stallion-gold/40 shadow-xl shadow-stallion-gold/5">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-stallion-gold block mb-2">
                Tier 2
              </span>
              <h3 className="text-2xl font-serif font-bold text-stallion-champagne mb-2">CANTER</h3>
              <span className="text-xs text-stallion-gold block mb-4">Premium Entry with Workshops</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Picking up momentum. Includes the official Stallion running t-shirt, on-ground doctor health
                screenings, recovery zone access, and 1 full workshop track (Body, Mind, or Edge).
              </p>
            </div>
            <div className="pt-4 border-t border-stallion-border/40 text-[11px] text-stallion-gold mt-6">
              For professionals seeking health & productivity edge.
            </div>
          </div>

          {/* Gallop / Black Stallion Circle */}
          <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between border border-stallion-border">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 block mb-2">
                Tier 3 &bull; Patronage
              </span>
              <h3 className="text-2xl font-serif font-bold text-stallion-champagne mb-2">GALLOP / VIP</h3>
              <span className="text-xs text-stallion-gold block mb-4">Black Stallion Circle</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Full gallop. Capped at 25 numbered founding seats (Stallion #01 to #25). Private lounge,
                founder dinner, all 11 workshops, coffee hamper, and permanent Founding Stallion status.
              </p>
            </div>
            <div className="pt-4 border-t border-stallion-border/40 text-[11px] text-emerald-400 mt-6">
              Founding patron status permanently recorded.
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Event Logistics & Placeholders ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-stallion-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-stallion-gold font-bold">
                Operations & Venue
              </span>
              <h3 className="text-2xl font-serif font-bold text-stallion-champagne">
                Lemerian Workin Café, Banjara Hills
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                The home base for Chapter I. Start line, finish line, registration desk, and post-run
                recovery zones will all be anchored at Lemerian Workin Café.
              </p>

              {/* Labelled Placeholders */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-stallion-card/80 border border-stallion-border text-xs text-stallion-muted">
                  <span className="text-stallion-gold font-semibold block mb-1">
                    [Content Placeholder: Certified Route Map & Hydration Checkpoint Stations]
                  </span>
                  Exact street-by-street GPS route waypoints and aid station coordinates across Banjara Hills and Jubilee Hills are undergoing municipal traffic clearance.
                </div>

                <div className="p-3.5 rounded-xl bg-stallion-card/80 border border-stallion-border text-xs text-stallion-muted">
                  <span className="text-stallion-gold font-semibold block mb-1">
                    [Pending Confirmation: Chief Guest Protocol]
                  </span>
                  A formal invitation is being prepared for the Chief Minister of Telangana to grace the event as Chief Guest.
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-500/40 bg-gradient-to-br from-blue-950/70 via-slate-900 to-blue-950/80 p-8 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-400/50 flex items-center justify-center">
                  <Building className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-blue-400 font-bold block">Race Village</span>
                  <span className="font-serif text-xl font-bold text-white block">Lemerian Workin Café</span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 border-y border-blue-900/50 py-5 leading-relaxed">
                <p>
                  <strong className="text-white">Start &amp; Finish Base:</strong> Road No. 12, Banjara Hills, Hyderabad.
                </p>
                <p>
                  <strong className="text-white">Runner Village:</strong> Pre-race warm-up zone, timing chip pickup, doctor screening pavilions, post-run recovery lounge.
                </p>
                <p>
                  <strong className="text-white">Hydration &amp; Medical:</strong> Water and electrolyte stations every 1.5 KM across all certified routes.
                </p>
              </div>

              <div className="text-[11px] text-blue-300 font-semibold">
                Official Marathon Host &bull; India's First Workin Café
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
