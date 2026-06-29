import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES_TEXT } from '../../constants/features';
import img1 from '../../assets/images/Gemini_Generated_Image_de6p6vde6p6vde6p-removebg-preview.png';
import img2 from '../../assets/images/Gemini_Generated_Image_oxtij2oxtij2oxti-removebg-preview.png';

export function Features() {
  // Text fades and slides up first
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    }
  };

  // Cards slide in from the right corner, staggered one by one
  const cardVariants = {
    hidden: { opacity: 0, x: 200, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 14,
        delay: 0.8 + (custom * 0.25) // Wait for text (0.8s) then stagger each card
      }
    })
  };

  return (
    <section className="py-24 bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }} // Triggers when section is closer to center
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
            <motion.h2 
              variants={textVariants}
              className="text-5xl md:text-6xl lg:text-[4.5rem] font-sans tracking-tight leading-[1.1] max-w-3xl"
            >
              <span className="text-gray-500 font-medium">{FEATURES_TEXT.headingPart1}</span><br />
              <span className="text-gray-700 font-semibold">{FEATURES_TEXT.headingPart2}</span>
            </motion.h2>
            
            <motion.p 
              variants={textVariants}
              className="text-gray-500 md:text-right max-w-xs text-sm md:text-base font-medium leading-relaxed"
            >
              {FEATURES_TEXT.description}
            </motion.p>
          </div>

          {/* Cards Scrollable Row */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 lg:gap-8 hide-scrollbar pb-8 pt-4 -mx-4 px-4 md:mx-0 md:px-0">
            {FEATURES_TEXT.cards.map((card, i) => (
              <motion.div 
                key={card.id}
                custom={i}
                variants={cardVariants}
                className="bg-transparent rounded-[2rem] overflow-hidden shadow-card flex flex-col h-[400px] border border-gray-200 relative min-w-[85vw] md:min-w-[320px] lg:min-w-[380px] snap-center shrink-0 cursor-grab active:cursor-grabbing"
              >
                {/* Image Background */}
                <img 
                  src={i === 0 ? img1 : img2} 
                  alt={card.title} 
                  className="w-full h-full object-cover absolute inset-0"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
