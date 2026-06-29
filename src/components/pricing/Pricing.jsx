import React from 'react';
import { motion } from 'framer-motion';
import { PRICING_TEXT } from '../../constants/pricing';
import { Check } from 'lucide-react';
import premiumBgImg from '../../assets/images/Gemini_Generated_Image_9p3cun9p3cun9p3c-removebg-preview.png';

export function Pricing() {
  // Staggered text animations
  const textSubtitleVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } }
  };
  
  const textTitle1Variant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } }
  };

  const textTitle2Variant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.5 } }
  };

  // Core box arrives right after text
  const coreBoxVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.9 } }
  };

  // Premium image arrives after core box
  const premiumImageVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 1.5 } }
  };

  // Premium left text arrives after image
  const premiumContentVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 2.2 } }
  };

  // Premium features list line by line staggered animation
  const featureListVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.3, 
        delayChildren: 2.5 
      }
    }
  };
  
  const featureItemVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden min-h-[100vh] flex flex-col justify-center">
      <div className="container mx-auto px-4 max-w-4xl relative">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
           className="flex flex-col items-center"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.p 
              variants={textSubtitleVariant}
              className="text-gray-400 font-medium mb-4"
            >
              {PRICING_TEXT.subtitle}
            </motion.p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-sans tracking-tight leading-tight">
              <motion.div variants={textTitle1Variant} className="text-gray-900 font-medium">
                {PRICING_TEXT.titleLine1}
              </motion.div>
              <motion.div variants={textTitle2Variant} className="text-gray-900 font-medium">
                {PRICING_TEXT.titleLine2}
              </motion.div>
            </h2>
          </div>

          {/* Pricing Cards Container */}
          <div className="w-full max-w-[800px] flex flex-col items-center relative">
            
            {/* Core Box */}
            <motion.div 
              variants={coreBoxVariant}
              className="w-full bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-medium text-gray-900">{PRICING_TEXT.corePlan.name}</h3>
                  <span className="text-[10px] md:text-xs font-semibold tracking-wider text-gray-400 bg-gray-100 px-2 py-1 rounded-sm uppercase">
                    {PRICING_TEXT.corePlan.badge}
                  </span>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-4xl md:text-5xl font-medium text-gray-900">{PRICING_TEXT.corePlan.price}</span>
                  <span className="text-gray-500 font-medium mb-1 md:mb-2">{PRICING_TEXT.corePlan.duration}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {PRICING_TEXT.corePlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check size={18} className="text-green-500" />
                    <span className="text-gray-500 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Premium Box (Image Background) */}
            <motion.div 
              variants={premiumImageVariant}
              className="w-full mt-6 relative z-20 rounded-3xl overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.25)] bg-[#101624]"
            >
              {/* The Image Background */}
              <img 
                src={premiumBgImg} 
                alt="Premium Plan Background" 
                className="absolute inset-0 w-full h-full object-cover scale-[1.05] opacity-90"
              />
              
              {/* The Overlay Content (Relative to dictate container height) */}
              <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 min-h-[280px]">
                
                {/* Left Side (Text and Button) */}
                <motion.div 
                  variants={premiumContentVariant}
                  className="flex flex-col h-full justify-between"
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-light text-white mb-2">{PRICING_TEXT.premiumPlan.name}</h3>
                    <div className="flex items-end gap-1 mb-6">
                      <span className="text-4xl md:text-5xl font-light text-white border border-white/30 p-2 rounded-lg">{PRICING_TEXT.premiumPlan.price}</span>
                      <span className="text-white/70 font-light mb-2">{PRICING_TEXT.premiumPlan.duration}</span>
                    </div>
                  </div>
                  <button className="bg-[#48d16f] hover:bg-[#36b059] transition-colors text-white font-medium py-3 px-6 rounded-full shadow-[0_8px_20px_rgba(72,209,111,0.3)] w-fit mt-4">
                    {PRICING_TEXT.premiumPlan.buttonText}
                  </button>
                </motion.div>

                {/* Right Side (Staggered Features List) */}
                <motion.div 
                  variants={featureListVariant}
                  className="flex flex-col gap-4 mt-4 md:mt-0"
                >
                  {PRICING_TEXT.premiumPlan.features.map((feature, index) => (
                    <motion.div variants={featureItemVariant} key={index} className="flex items-center gap-3">
                      <Check size={18} className="text-[#48d16f]" />
                      <span className="text-white font-light text-sm md:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

          </div>
          
          {/* Custom Plan Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 3.5, duration: 0.6 }}
            className="mt-16"
          >
            <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-900 font-medium px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
              {PRICING_TEXT.customPlan.text}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
