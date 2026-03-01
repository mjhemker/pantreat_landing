'use client'

import { useState, useEffect } from 'react';

/**
 * Custom hook for parallax scrolling effects
 * Returns an offset value based on scroll position and speed multiplier
 *
 * @param speed - Parallax speed multiplier (0.5 = half scroll speed, 1.5 = faster than scroll)
 * @returns offset value to apply as transform
 */
export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    // Check if mobile device (disable parallax on mobile for performance)
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          // Parallax: backgrounds move slower by moving DOWN as we scroll DOWN
          // This counteracts the scroll, making them appear to lag behind
          const newOffset = scrolled * (1 - speed);
          setOffset(newOffset);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return offset;
}

/**
 * Hook for parallax based on element position in viewport
 * More performant for individual elements
 */
export function useElementParallax(elementRef: React.RefObject<HTMLElement>, speed: number = 0.5) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.pageYOffset;
          const windowCenter = window.pageYOffset + window.innerHeight / 2;
          const distanceFromCenter = windowCenter - elementTop;
          const newOffset = distanceFromCenter * (speed - 1);
          setOffset(newOffset);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementRef, speed]);

  return offset;
}
