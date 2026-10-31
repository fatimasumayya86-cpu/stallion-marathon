import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from '../animations/gsapAnimations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Respect reduced-motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      gsap.set(el, { opacity: 1, x: 0, y: 0 });
      return;
    }

    let x = 0;
    let y = 0;
    if (direction === 'up') y = 40;
    if (direction === 'down') y = -40;
    if (direction === 'left') x = 40;
    if (direction === 'right') x = -40;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, x, y },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.9,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, direction]);

  return (
    <div ref={sectionRef} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};
