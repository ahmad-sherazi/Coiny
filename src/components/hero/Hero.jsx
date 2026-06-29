import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <section className="relative min-h-screen md:h-screen pt-32 pb-16 overflow-hidden flex items-center" style={isDesktop ? { maxHeight: '100vh' } : {}}>

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green opacity-30 rounded-full blur-[150px] mix-blend-screen pointer-events-none hidden dark:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green opacity-40 rounded-full blur-[100px] mix-blend-screen pointer-events-none hidden dark:block" />

      {/* Structural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:100px_100px] opacity-[0.2] pointer-events-none" />

      {/* Animated Desktop Coins Sequence — desktop & laptop only */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block overflow-hidden">
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

      {/* Desktop Image — hidden on mobile & tablets */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none hidden lg:block">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 1.0 }}
        >
          <HeroMockup className="w-[290px] xl:w-[380px] transition-all duration-300" />
        </motion.div>
      </div>

      {/* Main Content Row */}
      <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col lg:flex-row justify-between items-center h-full pointer-events-auto">

        {/* ── Left Column: Headline ── */}
        <div className="max-w-xl w-full pl-0 md:pl-12 lg:pl-8 xl:pl-24 lg:mt-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            className="text-4xl md:text-[3.5rem] font-sans tracking-tight font-medium leading-[1.1] mb-6 text-ink text-center lg:text-left" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: isDesktop ? 1.5 : 0.0 }}
          >
            {HERO_TEXT.headline[0]} <br />
            {HERO_TEXT.headline.slice(1).map((line, i) => (
              <span key={i} className="text-ink/60">
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
            className="mt-12 lg:mt-16 relative"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 relative border border-black dark:border-white/60 flex items-center justify-center mx-auto lg:mx-0">
              {/* Square Corners */}
              <div className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-ink dark:bg-white" />
              <div className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-ink dark:bg-white" />
              <div className="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-ink dark:bg-white" />
              <div className="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-ink dark:bg-white" />

              {/* Blurred background coin */}
              <FloatingCoin className="w-16 h-16 md:w-20 md:h-20 absolute -translate-x-6 -translate-y-4 opacity-40 blur-[3px]" />
              {/* Foreground coin */}
              <FloatingCoin className="w-24 h-24 md:w-28 md:h-28 absolute z-10 translate-x-2 translate-y-2" />
            </div>
          </motion.div>
        </div>

        {/* ── Right Column: Stats & CTA ── */}
        <div className="relative w-full lg:w-auto flex flex-col items-center lg:items-end mt-12 lg:mt-4 gap-8 lg:gap-0 lg:justify-between lg:h-[480px] pointer-events-auto">

          {/* Stat Cards */}
          <motion.div
            className="w-full flex flex-col sm:flex-row lg:flex-col items-center lg:items-end justify-center gap-4 lg:pr-2 xl:pr-12"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: isDesktop ? 1.5 : 0.2 }}
          >
            {HERO_STATS.map((stat, i) => (
              <div
                key={stat.id}
                id={stat.id}
                className="relative border border-black dark:border-white/60 bg-surface/50 dark:bg-white/5 backdrop-blur-sm px-6 py-5 md:pl-8 md:pr-8 md:py-8 flex items-center gap-2 md:gap-3 w-max shadow-card"
              >
                {/* Square Corners */}
                <div className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-black dark:bg-white" />
                <div className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-black dark:bg-white" />
                <div className="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-black dark:bg-white" />
                <div className="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-black dark:bg-white" />

                {stat.id === 'stat-users' ? (
                  <>
                    <span className="text-[28px] md:text-[36px] font-medium text-green tracking-tight leading-none">{stat.value}</span>
                    <span className="text-[12px] md:text-[14px] text-black/70 dark:text-white/80 font-medium ml-1">{stat.label}</span>
                    <div className="w-8 h-8 md:w-11 md:h-11 rounded-full flex items-center justify-center border border-black/20 dark:border-white/40 shadow-sm z-10 ml-1 md:ml-2 bg-black/5 dark:bg-white/10 backdrop-blur-md">
                      <UserCircle size={18} className="text-black dark:text-white md:w-[22px] md:h-[22px]" strokeWidth={1.5} />
                    </div>
                  </>
                ) : (
                  <>
                    <span className="text-[12px] md:text-[14px] text-black/70 dark:text-white/80 font-medium">{stat.label}</span>
                    <span className="text-[28px] md:text-[36px] font-medium text-green tracking-tight leading-none">{stat.value}</span>
                  </>
                )}
              </div>
            ))}
          </motion.div>

          {/* Description & CTA */}
          <motion.div
            className="w-full max-w-sm flex flex-col items-center lg:items-end text-center lg:text-right mt-6 lg:mt-0 lg:pr-2 xl:pr-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: isDesktop ? 1.5 : 0.1 }}
          >
            <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-white/90 mb-6 leading-relaxed max-w-xs md:max-w-none">
              {HERO_TEXT.description}
            </p>
            <Link to="/signup">
              <Button
                variant="primary"
                className="flex rounded-full gap-2 text-white text-[13px] md:text-[14px] font-medium px-6 py-2.5 cursor-pointer shadow-[0_4px_24px_rgba(72,209,111,0.35)] dark:bg-white/10 dark:border dark:border-white/20 dark:backdrop-blur-lg dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)] dark:hover:bg-white/20"
              >
                {HERO_TEXT.cta} <ArrowRight size={16} />
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
