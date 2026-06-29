import React from 'react';
import { motion } from 'framer-motion';

export function DesktopCoin({ size = 180, glowIntensity = 1, style = {}, ...motionProps }) {
  const id = `c${size}${Math.round(glowIntensity * 10)}`;
  const w = size;
  const h = size * 0.65;      // face height (ellipse viewed at angle)
  const edgeH = size * 0.14;  // coin thickness / rim
  const totalH = h + edgeH;

  return (
    <motion.div
      style={{
        width: w,
        height: totalH,
        position: 'absolute',
        willChange: 'transform, opacity',
        filter: `
          drop-shadow(0 0 ${14 * glowIntensity}px rgba(255,255,255,1))
          drop-shadow(0 0 ${35 * glowIntensity}px rgba(255,255,255,0.85))
          drop-shadow(0 0 ${70 * glowIntensity}px rgba(220,255,240,0.6))
        `,
        ...style,
      }}
      {...motionProps}
    >
      <svg width={w} height={totalH} viewBox={`0 0 ${w} ${totalH}`} xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Face: clean white with slight off-white towards edges */}
          <radialGradient id={`f${id}`} cx="40%" cy="35%" r="65%">
            <stop offset="0%"   stopColor="#ffffff" />
            <stop offset="45%"  stopColor="#edfff6" />
            <stop offset="80%"  stopColor="#c8f0de" />
            <stop offset="100%" stopColor="#a0d8be" />
          </radialGradient>

          {/* Bottom rim — darker to show thickness */}
          <linearGradient id={`e${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#b8e8d0" />
            <stop offset="50%"  stopColor="#70b898" />
            <stop offset="100%" stopColor="#3a7858" />
          </linearGradient>

          {/* Top specular — bright white hotspot */}
          <radialGradient id={`s${id}`} cx="38%" cy="30%" r="42%">
            <stop offset="0%"   stopColor="rgba(255,255,255,0.95)" />
            <stop offset="50%"  stopColor="rgba(255,255,255,0.3)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        {/* Rim / edge */}
        <ellipse cx={w / 2} cy={h / 2 + edgeH} rx={w / 2} ry={h / 2} fill={`url(#e${id})`} />

        {/* Face disc */}
        <ellipse cx={w / 2} cy={h / 2} rx={w / 2} ry={h / 2} fill={`url(#f${id})`} />

        {/* Specular hotspot */}
        <ellipse
          cx={w * 0.38} cy={h * 0.36}
          rx={w * 0.28} ry={h * 0.22}
          fill={`url(#s${id})`}
          style={{ filter: 'blur(3px)' }}
        />

        {/* Subtle inner rim line */}
        <ellipse
          cx={w / 2} cy={h / 2}
          rx={w / 2 - 4} ry={h / 2 - 3}
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2"
        />
      </svg>
    </motion.div>
  );
}
