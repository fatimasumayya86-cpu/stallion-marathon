import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 15 },
        { opacity: 1, y: 0, duration: prefersReduced ? 0 : 0.55, ease: 'power2.out' }
      );
    }, el);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="w-full min-h-screen">
      {children}
    </div>
  );
};
