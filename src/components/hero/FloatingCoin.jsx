import React from 'react';
import { motion } from 'framer-motion';
import { Bitcoin } from 'lucide-react';

export function FloatingCoin({ className, initial, animate, variants, color = 'green' }) {
  const isGreen = color === 'green';

  // ── Use CSS variables instead of hardcoded color strings ──
  const bgClass     = isGreen ? 'bg-green' : 'bg-slate-400';
  const shadowColor = isGreen
    ? 'var(--shadow-coin-green)'
    : 'var(--shadow-coin-grey)';
  const borderColor = isGreen
    ? 'var(--color-green-soft)'
    : 'var(--color-metal-border)';
  const depthBorderClass = isGreen
    ? 'border-green-dark'
    : 'border-slate-600';
  const iconClass = isGreen ? 'text-white' : 'text-slate-200';

  return (
    <motion.div
      className={`relative w-24 h-24 rounded-full flex items-center justify-center ${bgClass} ${className}`}
      initial={initial}
      animate={animate}
      variants={variants}
      style={{
        transformStyle: 'preserve-3d',
        boxShadow: `inset -5px -5px 15px rgba(0,0,0,0.3), inset 5px 5px 15px rgba(255,255,255,0.4), 0 0 30px ${shadowColor}`,
        border: `4px solid ${borderColor}`,
      }}
    >
      {/* 3D Depth illusion */}
      <div
        className={`absolute inset-0 rounded-full border-r-8 border-b-8 ${depthBorderClass} opacity-50 mix-blend-multiply`}
      />
      <Bitcoin
        className={`w-12 h-12 relative z-10 drop-shadow-md ${iconClass}`}
      />
    </motion.div>
  );
}
