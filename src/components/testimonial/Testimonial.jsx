import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight, Leaf } from 'lucide-react';
import { TESTIMONIAL_DATA } from '../../constants/testimonial';

export function Testimonial() {
  const starVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -45 },
    visible: (custom) => ({ 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { type: 'spring', stiffness: 200, damping: 10, delay: custom * 0.15 }
    }),
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.6 + (custom * 0.2) } 
    }),
  };

  const awardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut', delay: 1.4 + (custom * 0.2) } 
    }),
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex items-center justify-between">
          
          {/* Left Arrow */}
          <button className="hidden md:flex w-12 h-12 rounded-full border border-gray-200 items-center justify-center hover:bg-gray-50 transition-colors text-[#101624]">
            <ArrowLeft strokeWidth={1} size={20} />
          </button>

          {/* Main Content */}
          <div className="flex-1 flex flex-col items-center text-center px-4 md:px-12">
            
            {/* Stars */}
            <motion.div 
              className="flex gap-2 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[...Array(TESTIMONIAL_DATA.stars)].map((_, i) => (
                <motion.div key={i} custom={i} variants={starVariants}>
                  <Star className="w-6 h-6 md:w-8 md:h-8 text-green fill-green" />
                </motion.div>
              ))}
            </motion.div>

            {/* Text */}
            <motion.div 
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="font-serif text-2xl md:text-3xl lg:text-[2.5rem] leading-[1.4] text-[#101624] font-medium tracking-tight">
                {TESTIMONIAL_DATA.text.map((line, i) => (
                  <motion.span key={i} custom={i} className="block" variants={lineVariants}>
                    {line}
                  </motion.span>
                ))}
              </h2>
            </motion.div>

            {/* Awards */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {TESTIMONIAL_DATA.awards.map((award, i) => (
                <motion.div 
                  key={i} 
                  custom={i}
                  className="flex items-center gap-4"
                  variants={awardVariants}
                >
                  {/* Left Laurel Approximation */}
                  <Leaf className="w-6 h-6 text-[#101624] opacity-60 -scale-x-100" strokeWidth={1.5} />
                  
                  <div className="flex flex-col items-center">
                    <span className="font-serif font-bold text-lg text-[#101624]">{award.brand}</span>
                    <span className="text-[10px] font-bold tracking-widest text-[#101624] mt-1 uppercase text-center leading-tight">
                      {award.title}<br/>{award.subtitle}
                    </span>
                  </div>

                  {/* Right Laurel Approximation */}
                  <Leaf className="w-6 h-6 text-[#101624] opacity-60" strokeWidth={1.5} />
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Right Arrow */}
          <button className="hidden md:flex w-12 h-12 rounded-full border border-gray-200 items-center justify-center hover:bg-gray-50 transition-colors text-[#101624]">
            <ArrowRight strokeWidth={1} size={20} />
          </button>

        </div>
        
        {/* Mobile Arrows */}
        <div className="flex md:hidden justify-center gap-4 mt-12">
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-[#101624]">
            <ArrowLeft strokeWidth={1} size={20} />
          </button>
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-[#101624]">
            <ArrowRight strokeWidth={1} size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
