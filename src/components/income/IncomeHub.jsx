import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { INCOME_HUB_TEXT } from '../../constants/income';
import mobileImg from '../../assets/images/Gemini_Generated_Image_1gllzb1gllzb1gll-removebg-preview.png';

export function IncomeHub() {
  // Mobile from right
  const mobileVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.4, ease: 'easeOut' } 
    }
  };

  // Icon from left
  const iconVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.4, ease: 'easeOut' } 
    }
  };

  // Heading from left, fast
  const headingVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.4, ease: 'easeOut', delay: 0.1 } 
    }
  };

  // Description from left
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.4, ease: 'easeOut', delay: 0.2 } 
    }
  };

  return (
    <section className="bg-white relative z-50 py-16 lg:py-24">
      <div className="bg-navy py-16 lg:py-24 relative">
        <div className="container mx-auto px-4 md:px-12 max-w-7xl w-full relative">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8"
        >
          {/* Left Side Content */}
          <div className="flex-1 max-w-lg z-20 w-full relative flex flex-col items-center md:items-start text-center md:text-left mx-auto md:mx-0">
            {/* Green Icon Box */}
            <motion.div 
              variants={iconVariants}
              className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#48d16f] to-[#36b059] rounded-[1.25rem] flex items-center justify-center text-pure-white mb-6 shadow-[0_12px_30px_rgba(72,209,111,0.25)] mx-auto md:mx-0"
            >
              <Sparkles size={28} className="text-pure-white fill-pure-white" strokeWidth={1.5} />
            </motion.div>

            {/* Heading */}
            <motion.h2 
              variants={headingVariants}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-sans tracking-tight font-medium text-pure-white mb-4 leading-tight text-center md:text-left"
            >
              {INCOME_HUB_TEXT.title}
            </motion.h2>

            {/* Description Text */}
            <motion.p 
              variants={textVariants}
              className="text-navy-muted text-[15px] md:text-[17px] leading-relaxed max-w-[360px] text-center md:text-left mx-auto md:mx-0"
            >
              {INCOME_HUB_TEXT.description}
            </motion.p>
          </div>

          {/* Right Side Image (Absolutely positioned on desktop to avoid stretching the navy background) */}
          <div className="hidden md:block absolute right-0 lg:right-12 top-1/2 -translate-y-1/2 z-20">
            <motion.img 
              variants={mobileVariants}
              src={mobileImg} 
              alt="Income Hub Mobile View" 
              className="w-full max-w-[320px] lg:max-w-[380px] object-contain drop-shadow-2xl rounded-[2.5rem] lg:rounded-[3rem]"
            />
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
