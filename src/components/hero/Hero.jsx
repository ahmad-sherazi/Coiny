import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeroMockup } from './HeroMockup';
import mobileMockupImg from '../../assets/images/Gemini_Generated_Image_4irrnc4irrnc4irr-removebg-preview.png';
import { DesktopCoin } from './DesktopCoin';
import { FloatingCoin } from './FloatingCoin';
import { Button } from '../ui/Button';
import { ArrowRight, UserCircle } from 'lucide-react';
import { HERO_TEXT, HERO_STATS } from '../../constants/hero';

export function Hero() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 768);
    checkSize(); // Check immediately on mount
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <section className="relative h-screen pt-32 pb-12 overflow-hidden flex items-center" style={{ maxHeight: '100vh' }}>

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green opacity-30 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green opacity-40 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

      {/* Structural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:100px_100px] opacity-[0.2] pointer-events-none" />

      {/* Animated Desktop Coins Sequence — desktop only */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden md:block overflow-hidden">
        {/* Coin 1 — appears first, swings right as it drops */}
        <DesktopCoin
          size={180}
          glowIntensity={1}
          style={{ top: 0, left: '45%' }}
          initial={{ x: 0, y: -200, opacity: 1, rotate: 0 }}
          animate={{
            x:      [0,    180,   120,   80],
            y:      [-200, 150,   350,  520],
            opacity:[1,    1,     1,     0],
            rotate: [0,    25,    50,   70],
          }}
          transition={{ duration: 1.1, times: [0, 0.4, 0.75, 1], ease: 'easeIn' }}
        />

        {/* Coin 2 — bigger, stronger glow, swings left, comes 0.7s after */}
        <DesktopCoin
          size={240}
          glowIntensity={1.4}
          style={{ top: 0, left: '42%' }}
          initial={{ x: 0, y: -260, opacity: 0, rotate: 0 }}
          animate={{
            x:      [0,    -80,   -40,   80],
            y:      [-260,  120,  320,  530],
            opacity:[0,    1,     1,     0],
            rotate: [0,    -25,  -50,  -70],
          }}
          transition={{ duration: 1.1, delay: 0.4, times: [0, 0.4, 0.75, 1], ease: 'easeIn' }}
        />
      </div>

      {/* Desktop Image — hidden on mobile */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none hidden md:block">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 1.0 }}
        >
          <HeroMockup className="w-[380px]" />
        </motion.div>
      </div>

      {/* Mobile Image — hidden on desktop, right side on mobile */}
      <div className="absolute -bottom-3 sm:bottom-4 right-0 sm:right-4 z-10 pointer-events-none md:hidden">
        <motion.div
          initial={{ y: 250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.5 }}
        >
          <HeroMockup src={mobileMockupImg} className="w-[160px] sm:w-[200px] transition-all" />
        </motion.div>
      </div>

      {/* Main Content Row */}
      <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col lg:flex-row justify-between items-center h-full pointer-events-auto">

        {/* ── Left Column: Headline ── */}
        <div className="max-w-xl w-full pl-0 md:pl-12 lg:pl-24">
          <motion.h1
            className="text-4xl md:text-[3.5rem] font-sans tracking-tight font-medium leading-[1.1] mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: isDesktop ? 1.5 : 0.0 }}
          >
            {HERO_TEXT.headline[0]} <br />
            {HERO_TEXT.headline.slice(1).map((line, i) => (
              <span key={i} className="text-white/60">
                {line}
                {i < HERO_TEXT.headline.length - 2 && <br />}
              </span>
            ))}
          </motion.h1>

          {/* Coin Box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: isDesktop ? 1.5 : 0.4 }}
            className="mt-16 relative"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 relative border border-white/60 flex items-center justify-center">
              {/* Square Corners */}
              <div className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-white" />
              <div className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-white" />
              <div className="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-white" />
              <div className="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-white" />

              {/* Blurred background coin */}
              <FloatingCoin className="w-16 h-16 md:w-20 md:h-20 absolute -translate-x-6 -translate-y-4 opacity-40 blur-[3px]" />
              {/* Foreground coin */}
              <FloatingCoin className="w-24 h-24 md:w-28 md:h-28 absolute z-10 translate-x-2 translate-y-2" />
            </div>
          </motion.div>
        </div>

        {/* ── Right Column: Stats & CTA ── */}
        <div className="absolute top-2 right-0 sm:right-4 md:relative md:top-auto md:right-auto w-auto lg:w-64 h-auto lg:h-[600px] flex flex-col justify-start md:justify-between items-end mt-0 md:mt-20 lg:mt-0 z-30 pointer-events-auto">

          {/* Stat Cards */}
          <motion.div
            className="w-full lg:-ml-24 flex flex-col items-end pr-0 md:pr-4 lg:pr-12 mt-0 md:mt-16 scale-[0.70] sm:scale-[0.80] origin-top-right md:scale-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: isDesktop ? 1.5 : 0.2 }}
          >
            {HERO_STATS.map((stat, i) => (
              <div
                key={stat.id}
                id={stat.id}
                className={`relative border border-white/60 bg-white/5 backdrop-blur-sm px-6 py-5 md:pl-8 md:pr-8 md:py-8 flex items-center gap-2 md:gap-3 w-max shadow-card ${i > 0 ? 'mt-4 md:mt-6' : ''}`}
              >
                {/* Square Corners */}
                <div className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-white" />
                <div className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-white" />
                <div className="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-white" />
                <div className="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-white" />

                {stat.id === 'stat-users' ? (
                  <>
                    <span className="text-[28px] md:text-[36px] font-medium text-green tracking-tight leading-none">{stat.value}</span>
                    <span className="text-[12px] md:text-[14px] text-white/80 font-medium ml-1">{stat.label}</span>
                    <div className="w-8 h-8 md:w-11 md:h-11 rounded-full flex items-center justify-center border border-white/40 shadow-sm z-10 ml-1 md:ml-2 bg-white/10 backdrop-blur-md">
                      <UserCircle size={18} className="text-white md:w-[22px] md:h-[22px]" strokeWidth={1.5} />
                    </div>
                  </>
                ) : (
                  <>
                    <span className="text-[12px] md:text-[14px] text-white/80 font-medium">{stat.label}</span>
                    <span className="text-[28px] md:text-[36px] font-medium text-green tracking-tight leading-none">{stat.value}</span>
                  </>
                )}
              </div>
            ))}
          </motion.div>

          {/* Description & CTA */}
          <motion.div
            className="w-[280px] sm:w-80 flex flex-col items-end text-right pr-0 md:pr-4 lg:pr-12 -mt-8 sm:-mt-4 md:mt-0 scale-[0.65] sm:scale-100 origin-top-right md:scale-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: isDesktop ? 1.5 : 0.1 }}
          >
            <p className="hidden md:block text-[14px] md:text-[15px] text-white/90 mb-6 md:mb-8 leading-relaxed">
              {HERO_TEXT.description}
            </p>
            <Button
              variant="outline"
              className="flex rounded-full gap-2 border border-white/20 bg-white/10 backdrop-blur-lg text-white text-[13px] md:text-[14px] font-medium shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:bg-white/20"
            >
              {HERO_TEXT.cta} <ArrowRight size={16} />
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
