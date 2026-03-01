'use client'

import { ReactNode, CSSProperties } from 'react';
import { useParallax } from '@/hooks/useParallax';

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * ParallaxLayer Component
 * Wraps content with parallax scrolling effect
 *
 * @param speed - Parallax speed multiplier (0.5 = slower, 1.5 = faster)
 * @param children - Content to apply parallax effect to
 * @param className - Additional CSS classes
 * @param style - Additional inline styles
 */
export default function ParallaxLayer({
  children,
  speed = 0.5,
  className = '',
  style = {}
}: ParallaxLayerProps) {
  const offset = useParallax(speed);

  return (
    <div
      className={`parallax-container ${className}`}
      style={{
        ...style,
        transform: `translate3d(0, ${offset}px, 0)`,
        willChange: 'transform',
        // Scale background slightly to prevent empty space during parallax
        top: '-10%',
        height: '120%',
      }}
    >
      {children}
    </div>
  );
}
