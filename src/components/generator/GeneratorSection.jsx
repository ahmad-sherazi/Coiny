import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { GENERATOR_TEXT } from '../../constants/generator';
import { Search, Sparkles } from 'lucide-react';

// Assets
import pic2 from '../../assets/images/Gemini_Generated_Image_j0zeufj0zeufj0ze-removebg-preview.png';
import pic3 from '../../assets/images/Gemini_Generated_Image_w63f3vw63f3vw63f.png';

export function GeneratorSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  
  // Animation Steps:
  // 0: Initial hidden state
  // 1: Text & Search bar fade in
  // 2: Typing animation
  // 3: Search bar out, Pic 2 in
  // 4: Pic 2 out, Pic 3 in
  const [step, setStep] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (isInView && step === 0) {
      setStep(1);
    }
  }, [isInView, step]);

  useEffect(() => {
    let timeout;
    
    // Step 1 -> Step 2 (Start Typing after search bar appears)
    if (step === 1) {
      timeout = setTimeout(() => {
        setStep(2);
      }, 800); // Wait 0.8s for initial animations
    }

    // Step 2 (Typing Effect)
    if (step === 2) {
      const fullText = GENERATOR_TEXT.typedPrompt;
      let currentIndex = 0;
      setTypedText(""); // Reset text on restart
      
      const typeInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          // Wait a moment after typing finishes, then go to Step 3
          setTimeout(() => setStep(3), 300);
        }
      }, 40); // 40ms per character

      return () => clearInterval(typeInterval);
    }

    // Step 3 -> Step 4 (Pic 2 to Pic 3)
    if (step === 3) {
      timeout = setTimeout(() => {
        setStep(4);
      }, 2500); // Show Pic 2 for 2.5 seconds so the scanning animation plays
    }
    
    // Step 4 -> Loop back to Step 1
    if (step === 4) {
      timeout = setTimeout(() => {
        setStep(1);
      }, 3000); // Wait 3 seconds at the final result before looping
    }

    return () => clearTimeout(timeout);
  }, [step]);

  // Text Animation Variants
  const textTitle1Variant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } }
  };
  const textTitle2Variant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } }
  };

  return (
    <section className="py-24 bg-generator-glow relative overflow-hidden min-h-screen flex flex-col justify-center" ref={containerRef}>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Header Text (Line by Line) */}
          <div className="text-center mb-16 h-[120px]">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-sans tracking-tight leading-tight">
              <motion.div 
                initial="hidden" 
                animate={step >= 1 ? "visible" : "hidden"} 
                variants={textTitle1Variant} 
                className="text-white font-medium"
              >
                {GENERATOR_TEXT.titleLine1}
              </motion.div>
              <motion.div 
                initial="hidden" 
                animate={step >= 1 ? "visible" : "hidden"} 
                variants={textTitle2Variant} 
                className="text-white font-medium"
              >
                {GENERATOR_TEXT.titleLine2}
              </motion.div>
            </h2>
          </div>

          {/* Dynamic Content Area (Search Bar -> Pic 2 -> Pic 3) */}
          <div className="w-full max-w-[800px] h-[400px] relative flex justify-center items-center">
            <AnimatePresence mode="wait">
              
              {/* State 1 & 2: Search Bar */}
              {step >= 1 && step <= 2 && (
                <motion.div 
                  key="search-bar"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: step === 1 ? 0.6 : 0 }}
                  className="w-full max-w-2xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-full p-4 md:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex items-center gap-4 relative z-10"
                >
                  <Search size={28} className="text-white/40 ml-2 shrink-0" />
                  
                  {/* Text Input Simulation */}
                  <div className="flex-1 flex items-center">
                    {step === 1 && (
                      <span className="text-white/40 text-xl md:text-2xl font-light">
                        {GENERATOR_TEXT.searchPlaceholder}
                      </span>
                    )}
                    {step === 2 && (
                      <div className="flex items-center">
                        <span className="text-white text-xl md:text-2xl font-light">
                          {typedText}
                        </span>
                        {/* Blinking Cursor */}
                        <motion.span 
                          animate={{ opacity: [1, 0] }} 
                          transition={{ repeat: Infinity, duration: 0.8 }}
                          className="w-0.5 h-6 md:h-8 bg-green ml-1 block"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="w-12 h-12 bg-gradient-to-br from-green to-green-mid rounded-full flex items-center justify-center shrink-0 shadow-lg">
                    <Sparkles size={20} className="text-white fill-white" />
                  </div>
                </motion.div>
              )}

              {/* State 3: Pic 2 (Loading/Generating state) */}
              {step === 3 && (
                <motion.div
                  key="pic-2"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full flex justify-center items-center"
                >
                  <img 
                    src={pic2} 
                    alt="AI Generating" 
                    className="w-full h-full object-contain max-h-[550px] drop-shadow-2xl"
                  />
                  {/* Overlay scanning effect */}
                  <motion.div 
                    initial={{ top: "0%" }}
                    animate={{ top: "100%" }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-green/50 shadow-[0_0_20px_var(--color-green)] z-20 hidden md:block"
                  />
                </motion.div>
              )}

              {/* State 4: Pic 3 (Final Result) */}
              {step === 4 && (
                <motion.div
                  key="pic-3"
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.0, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full flex justify-center items-center rounded-3xl overflow-hidden"
                >
                  <img 
                    src={pic3} 
                    alt="AI Generated Result" 
                    className="max-w-full h-auto max-h-[600px] object-cover mix-blend-lighten drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                    style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskComposite: 'source-in', maskComposite: 'intersect' }}
                  />
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
