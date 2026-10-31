import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stallion-dark border-t border-blue-900/50 relative overflow-hidden pt-16 pb-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-blue-900/40">
          {/* Brand info (Span 5 of 12 on desktop) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-20 flex items-center justify-center flex-shrink-0">
                <img
                  src="/assets/images/stallion-logo-official.png"
                  alt="Official Stallion Marathon Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="border-l border-blue-500/40 pl-3.5">
                <span className="font-serif text-xl sm:text-2xl font-black tracking-widest text-white block">
                  STALLION MARATHON
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-blue-400 font-bold block">
                  Chapter I &bull; 14 March 2027
                </span>
              </div>
            </div>

            <p className="font-serif italic text-sm text-blue-300">
              How&rsquo;s Your Horse Power?
            </p>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              The first marathon led by a stallion. A multi-distance community run across Hyderabad, starting and ending at Lemerian Workin Caf&eacute;, Banjara Hills.
            </p>

            <div className="text-xs text-slate-300 space-y-2 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span>Lemerian Workin Caf&eacute;, Banjara Hills, Hyderabad</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span>Sunday, 14 March 2027</span>
              </div>
            </div>
          </div>

          {/* Quick Links: Event & Concept (Span 2 of 12) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4">
              The Event
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-white transition">
                  Story &amp; Overview
                </Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-white transition">
                  Workshops (Body, Mind, Edge)
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-white transition">
                  9 Distances (1 to 21 KM)
                </Link>
              </li>
            </ul>
          </div>

          {/* Packages (Span 2 of 12) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4">
              Packages
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/packages" className="hover:text-white transition">
                  STUD Runs (1, 2, 3 KM)
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-white transition">
                  Basic Package
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-white transition">
                  Standard Package
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-white transition">
                  Premium Package
                </Link>
              </li>
              <li>
                <Link to="/charity" className="hover:text-white transition">
                  Run for a Cause
                </Link>
              </li>
            </ul>
          </div>

          {/* Organizer Credit & Notice (Span 3 of 12) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4">
              Event Details
            </h4>
            <div className="p-4 rounded-xl bg-blue-950/50 border border-blue-900/60 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold">
                <Award className="w-4 h-4 text-blue-400" />
                <span>Stallion Marathon Chapter I</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-300">
                14 March 2027 &bull; Lemerian Workin Caf&eacute;, Banjara Hills, Hyderabad.
              </p>
              <div className="pt-2 border-t border-blue-900/40 text-[10px] text-blue-300 font-semibold">
                9 Distances &bull; 3 Workshop Tracks
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>&copy; 2027 Stallion Marathon. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/story" className="hover:text-white transition">Story</Link>
            <Link to="/packages" className="hover:text-white transition">Packages</Link>
            <Link to="/charity" className="hover:text-white transition">Charity</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
