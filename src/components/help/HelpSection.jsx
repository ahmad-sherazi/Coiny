import React from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRightLeft, MoreHorizontal, ArrowDown, ThumbsUp } from 'lucide-react';
import { HELP_TEXT } from '../../constants/help';
import centerImg from '../../assets/images/Gemini_Generated_Image_j0zeufj0zeufj0ze-removebg-preview.png';

export function HelpSection() {
  // 1. Text Line 1
  const line1Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    }
  };

  // 1. Text Line 2
  const line2Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } 
    }
  };

  // 2. Left Image comes in
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 }
    }
  };

  // 3. Right Text block comes in
  const rightTextVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.9 }
    }
  };

  // 4. Icons one by one: Top, Right, Left, Bottom
  const iconVariants = (delayTime) => ({
    hidden: { opacity: 0, scale: 0.5, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 220, damping: 15, delay: delayTime }
    }
  });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
        >
            {/* Header Text */}
            <div className="text-center mb-48 md:mb-56">
               <motion.h2 
                 variants={line1Variants} 
                 className="text-4xl md:text-5xl lg:text-[4rem] font-sans tracking-tight font-medium leading-[1.2] text-[#101624]"
               >
                 {HELP_TEXT.headingLine1}
               </motion.h2>
               <motion.h2 
                 variants={line2Variants} 
                 className="text-4xl md:text-5xl lg:text-[4rem] font-sans tracking-tight font-medium leading-[1.2] text-[#768196]"
               >
                 {HELP_TEXT.headingLine2}
               </motion.h2>
            </div>

            {/* Bottom Content */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-16 md:gap-8 max-w-5xl mx-auto">
                
                {/* Left Side: Image and Floating Icons */}
                <div className="flex-1 w-full max-w-[450px] flex items-center justify-center mt-12 mb-8 md:mt-0 md:mb-0">
                  <div className="relative w-[180px] sm:w-[240px] md:w-full z-10">
                    <motion.img 
                      variants={imageVariants} 
                      src={centerImg} 
                      alt="Balance" 
                      className="w-full relative z-10" 
                    />
                    
                    {/* Floating Icons */}
                    {/* Top: Send */}
                    <motion.div 
                      variants={iconVariants(0.8)} 
                      className="absolute -top-16 sm:-top-16 md:-top-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl md:rounded-[1.75rem] shadow-[0_15px_30px_-10px_rgba(148,163,184,0.45)] md:shadow-[0_25px_50px_-12px_rgba(148,163,184,0.45)] border border-[#f3f4f6] py-2 px-4 md:py-4 md:px-8 flex flex-col items-center gap-1 z-20"
                    >
                       <Send size={18} className="text-[#101624] md:w-6 md:h-6" strokeWidth={1.5} />
                       <span className="text-[11px] md:text-[14px] font-medium text-[#768196]">{HELP_TEXT.icons.top}</span>
                    </motion.div>
                    
                    {/* Right: Swap */}
                    <motion.div 
                      variants={iconVariants(0.95)} 
                      className="absolute top-1/2 -right-16 sm:-right-20 md:-right-16 -translate-y-1/2 bg-white rounded-2xl md:rounded-[1.75rem] shadow-[0_15px_30px_-10px_rgba(148,163,184,0.45)] md:shadow-[0_25px_50px_-12px_rgba(148,163,184,0.45)] border border-[#f3f4f6] py-2 px-4 md:py-4 md:px-8 flex flex-col items-center gap-1 z-20"
                    >
                       <ArrowRightLeft size={18} className="text-[#101624] md:w-6 md:h-6" strokeWidth={1.5} />
                       <span className="text-[11px] md:text-[14px] font-medium text-[#768196]">{HELP_TEXT.icons.right}</span>
                    </motion.div>
                    
                    {/* Left: Receive */}
                    <motion.div 
                      variants={iconVariants(1.1)} 
                      className="absolute top-1/2 -left-16 sm:-left-20 md:-left-16 -translate-y-1/2 bg-white rounded-2xl md:rounded-[1.75rem] shadow-[0_15px_30px_-10px_rgba(148,163,184,0.45)] md:shadow-[0_25px_50px_-12px_rgba(148,163,184,0.45)] border border-[#f3f4f6] py-2 px-4 md:py-4 md:px-8 flex flex-col items-center gap-1 z-20"
                    >
                       <ArrowDown size={18} className="text-[#101624] md:w-6 md:h-6" strokeWidth={1.5} />
                       <span className="text-[11px] md:text-[14px] font-medium text-[#768196]">{HELP_TEXT.icons.left}</span>
                    </motion.div>

                    {/* Bottom: More */}
                    <motion.div 
                      variants={iconVariants(1.25)} 
                      className="absolute -bottom-16 sm:-bottom-16 md:-bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl md:rounded-[1.75rem] shadow-[0_15px_30px_-10px_rgba(148,163,184,0.45)] md:shadow-[0_25px_50px_-12px_rgba(148,163,184,0.45)] border border-[#f3f4f6] py-2 px-4 md:py-4 md:px-8 flex flex-col items-center gap-1 z-20"
                    >
                       <MoreHorizontal size={18} className="text-[#101624] md:w-6 md:h-6" strokeWidth={1.5} />
                       <span className="text-[11px] md:text-[14px] font-medium text-[#768196]">{HELP_TEXT.icons.bottom}</span>
                    </motion.div>
                  </div>
                </div>

                {/* Right Side: Text */}
                <motion.div variants={rightTextVariants} className="flex-1 max-w-[320px] ml-0 md:ml-12 mt-16 md:mt-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#48d16f] to-[#36b059] rounded-[1.25rem] flex items-center justify-center text-white mb-8 shadow-[0_12px_30px_rgba(72,209,111,0.25)]">
                        <ThumbsUp size={24} className="fill-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-3xl font-sans font-medium text-[#101624] mb-4 tracking-tight">
                       {HELP_TEXT.rightSection.title}
                    </h3>
                    <p className="text-[#768196] text-[15px] leading-relaxed">
                       {HELP_TEXT.rightSection.description}
                    </p>
                </motion.div>

            </div>
        </motion.div>
      </div>
    </section>
  );
}
