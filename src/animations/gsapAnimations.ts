import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins once at module level – safe to call multiple times
gsap.registerPlugin(ScrollTrigger);

export { ScrollTrigger };

export const fadeInUp = (
  element: gsap.DOMTarget,
  delay = 0,
  duration = 1
): gsap.core.Tween =>
  gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration, delay, ease: 'power3.out' }
  );

export const staggerFadeIn = (
  targets: gsap.DOMTarget,
  stagger = 0.15,
  delay = 0
): gsap.core.Tween =>
  gsap.fromTo(
    targets,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, stagger, delay, duration: 0.9, ease: 'power2.out' }
  );

export const scrollReveal = (
  element: gsap.DOMTarget,
  scrub: boolean | number = false
): gsap.core.Tween =>
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element as Element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        scrub,
      },
    }
  );

export const heroEntrance = (
  headline: gsap.DOMTarget,
  subtitle: gsap.DOMTarget,
  cta: gsap.DOMTarget,
  badge?: gsap.DOMTarget
): gsap.core.Timeline => {
  // Respect reduced-motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set([headline, subtitle, cta, badge].filter(Boolean), { opacity: 1, y: 0 });
    return gsap.timeline();
  }

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  if (badge) {
    tl.fromTo(badge, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8 }, 0.2);
  }

  tl.fromTo(
    headline,
    { opacity: 0, y: 60, skewY: 2 },
    { opacity: 1, y: 0, skewY: 0, duration: 1.2 },
    0.4
  )
    .fromTo(subtitle, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, 0.7)
    .fromTo(cta, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.9);

  return tl;
};

export const animateCounter = (
  target: HTMLElement | null,
  endValue: number,
  prefix = '',
  suffix = '',
  duration = 2
): void => {
  if (!target) return;
  const obj = { val: 0 };
  gsap.to(obj, {
    val: endValue,
    duration,
    ease: 'power2.out',
    scrollTrigger: { trigger: target, start: 'top 90%', once: true },
    onUpdate: () => {
      target.textContent = `${prefix}${Math.floor(obj.val).toLocaleString()}${suffix}`;
    },
  });
};
