import React from 'react';
import { motion } from 'framer-motion';

// Assets
import mobileImg from '../../assets/images/Gemini_Generated_Image_4irrnc4irrnc4irr-removebg-preview.png';
import leftTopImg from '../../assets/images/Gemini_Generated_Image_cvfjjacvfjjacvfj-removebg-preview.png';
import leftBottomImg from '../../assets/images/Gemini_Generated_Image_6mssy6mssy6mssy6-removebg-preview.png';
import rightBottomImg from '../../assets/images/Gemini_Generated_Image_j84oh5j84oh5j84o-removebg-preview.png';

export function ShowcaseSection() {
  // 1. Center Mobile
  const mobileVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut', delay: 0 } 
    }
  };

  // 2. Top Left & Bottom Right
  const groupOneVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 } 
    }
  };

  // 3. Top Right & Bottom Left
  const groupTwoVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.9 } 
    }
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden hidden md:block">
      {/* Container must be tall enough to hold absolutely positioned elements */}
      <div className="container mx-auto px-4 max-w-7xl relative h-[100vh] min-h-[600px] flex justify-center items-center">
        
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           className="relative w-full h-full flex justify-center items-center"
        >
          {/* Center Mobile */}
          <motion.img 
            variants={mobileVariants}
            src={mobileImg} 
            alt="App Interface Showcase" 
            className="relative z-30 h-[80vh] w-auto max-w-[280px] lg:max-w-[340px] drop-shadow-2xl object-contain"
          />

          {/* Top Left: Insurance Coverage */}
          <motion.img 
            variants={groupOneVariants}
            src={leftTopImg} 
            alt="Insurance Coverage" 
            className="absolute top-[5%] lg:top-[8%] left-0 lg:left-[5%] w-[260px] lg:w-[320px] z-20 drop-shadow-xl"
          />

          {/* Bottom Right: Fee Transparency */}
          <motion.img 
            variants={groupOneVariants}
            src={rightBottomImg} 
            alt="Fee Transparency" 
            className="absolute bottom-[5%] lg:bottom-[10%] right-0 lg:right-[5%] w-[260px] lg:w-[320px] z-20 drop-shadow-xl"
          />

          {/* Bottom Left: Grade Security */}
          <motion.img 
            variants={groupTwoVariants}
            src={leftBottomImg} 
            alt="Grade Security" 
            className="absolute bottom-[5%] lg:bottom-[8%] left-[5%] lg:left-[10%] w-[200px] lg:w-[260px] z-10 drop-shadow-xl"
          />

          {/* Top Right: Custom Crypto Icons Box */}
          <motion.div 
            variants={groupTwoVariants}
            className="absolute top-[25%] lg:top-[30%] right-[5%] lg:right-[15%] bg-white rounded-3xl shadow-[0_20px_40px_rgba(148,163,184,0.15)] p-4 lg:p-6 flex items-center gap-3 lg:gap-4 z-10"
          >
            {/* Bitcoin */}
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#f7931a] flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path d="M14.5 10c1.5 0 2.5-.8 2.5-2.2 0-1.5-1.2-2.3-2.7-2.3H10V2H8v3.5H6.5v2H8v6H6.5v2H8V19h2v-3.5h4.8c1.8 0 3.2-1 3.2-2.8 0-1.4-1-2.2-2.2-2.5.8-.3 1.7-1 1.7-2.2zM10 7.5h4c.8 0 1.2.4 1.2 1s-.4 1-1.2 1H10v-2zm4.5 6H10v-2h4.5c.8 0 1.2.4 1.2 1s-.4 1-1.2 1z"/>
              </svg>
            </div>
            {/* Tether */}
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#26a17b] flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-5H8V9h8v2h-3v5z"/>
              </svg>
            </div>
            {/* Avalanche */}
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#e84142] flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path d="M12 4L4 20h16L12 4zm0 3.8L16.2 17H7.8L12 7.8z"/>
              </svg>
            </div>
            {/* Stacks */}
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#5546ff] flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-white" strokeWidth="2.5" fill="none" strokeLinecap="round">
                <path d="M6 10h12M6 14h12" />
              </svg>
            </div>
          </motion.div>

        </motion.div>
      </div>
      
      {/* Mobile Fallback - Linear stacking instead of absolute positioning */}
      <div className="container mx-auto px-4 md:hidden py-12 flex flex-col items-center gap-12">
          <motion.img 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={mobileImg} 
            className="w-[85%] drop-shadow-2xl object-contain"
          />
          <motion.img 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={leftTopImg} 
            className="w-[90%] drop-shadow-xl rounded-[2rem]"
          />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-[90%] bg-white rounded-[2rem] shadow-[0_20px_40px_rgba(148,163,184,0.15)] p-6 flex justify-center items-center gap-4"
          >
             {/* Same icons for mobile */}
            <div className="w-12 h-12 rounded-full bg-[#f7931a] flex items-center justify-center"><span className="text-white font-bold text-xl">B</span></div>
            <div className="w-12 h-12 rounded-full bg-[#26a17b] flex items-center justify-center"><span className="text-white font-bold text-xl">T</span></div>
            <div className="w-12 h-12 rounded-full bg-[#e84142] flex items-center justify-center"><span className="text-white font-bold text-xl">A</span></div>
            <div className="w-12 h-12 rounded-full bg-[#5546ff] flex items-center justify-center"><span className="text-white font-bold text-xl">S</span></div>
          </motion.div>
          <motion.img 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={leftBottomImg} 
            className="w-[90%] drop-shadow-xl rounded-[2rem]"
          />
          <motion.img 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={rightBottomImg} 
            className="w-[90%] drop-shadow-xl rounded-[2rem]"
          />
      </div>
    </section>
  );
}
