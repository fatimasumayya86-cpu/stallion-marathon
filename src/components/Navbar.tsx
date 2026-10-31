import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trophy, Compass, Shield, Heart, Sparkles, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Trophy },
    { name: 'Story & Overview', path: '/story', icon: Compass },
    { name: 'Packages', path: '/packages', icon: Shield },
    { name: 'Charity', path: '/charity', icon: Heart },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stallion-dark/95 backdrop-blur-md border-b border-blue-900/50 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-stallion-dark/95 via-stallion-dark/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Lockup */}
        <Link to="/" className="flex items-center gap-3.5 group flex-shrink-0 mr-4 lg:mr-8 min-w-max">
          <div className="relative h-11 w-16 sm:w-18 flex items-center justify-center transition-all duration-300 flex-shrink-0">
            <img
              src="/assets/images/stallion-logo-official.png"
              alt="Official Stallion Marathon Logo"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="border-l border-blue-500/40 pl-3.5 whitespace-nowrap flex-shrink-0 select-none">
            <span className="block font-serif text-lg tracking-[0.2em] font-black text-white group-hover:text-blue-400 transition-colors leading-tight whitespace-nowrap">
              STALLION
            </span>
            <span className="block text-[9.5px] sm:text-[10px] tracking-[0.25em] text-blue-400 uppercase font-bold whitespace-nowrap mt-0.5">
              MARATHON &bull; CHAPTER I
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-shrink-0" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-1 text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-blue-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Event Context */}
        <div className="hidden md:flex items-center gap-5">
          <div className="text-right border-r border-blue-500/30 pr-4">
            <span className="block text-[10px] uppercase tracking-wider text-slate-400">
              14 MARCH 2027
            </span>
            <span className="block text-[11px] font-semibold text-blue-300">
              Banjara Hills, Hyderabad
            </span>
          </div>

          <Link
            to="/packages"
            className="relative group overflow-hidden px-5 py-2.5 rounded-full border border-blue-400/50 text-xs font-bold tracking-widest uppercase text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/30 flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-200 group-hover:rotate-12 transition-transform" />
            <span>Register Now &rarr;</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-blue-400 hover:bg-stallion-card transition"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-stallion-dark/98 backdrop-blur-xl border-b border-blue-900/50 px-6 py-6 transition-all duration-300 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between py-2 text-sm font-medium tracking-wide ${
                    isActive ? 'text-blue-400 font-bold' : 'text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-blue-400" />
                    <span>{link.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
            <div className="pt-4 border-t border-blue-900/50">
              <div className="mb-3 text-xs text-slate-400">
                <span className="block text-white font-semibold">14 March 2027</span>
                <span>Lemerian Workin Caf&eacute;, Banjara Hills, Hyderabad</span>
              </div>
              <Link
                to="/packages"
                className="w-full block text-center py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs tracking-widest uppercase shadow-lg shadow-blue-600/30 transition"
              >
                Register Now &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
