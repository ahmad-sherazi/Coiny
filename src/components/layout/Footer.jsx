import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FOOTER_CONTENT } from '../../constants/footer';

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const FacebookIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);


export function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Left text lines come one by one
        delayChildren: 0.1
      }
    }
  };

  const lineVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const rightContentVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.6 } // Comes in after/with the left text
    }
  };

  const bottomVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 1.0 }
    }
  };

  return (
    <footer className="bg-white text-gray-900 pt-20 pb-10 border-t border-gray-200" ref={footerRef}>
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between mb-16 gap-12">
          
          {/* Left Text (Animated Line by Line) */}
          <motion.div 
            className="lg:w-1/3"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="text-4xl md:text-5xl font-sans tracking-tight leading-tight mb-6">
              <motion.div variants={lineVariant} className="font-medium">
                {FOOTER_CONTENT.heading.line1}
              </motion.div>
              <motion.div variants={lineVariant} className="text-gray-500 font-light">
                {FOOTER_CONTENT.heading.line2}
              </motion.div>
              <motion.div variants={lineVariant} className="text-gray-500 font-light">
                {FOOTER_CONTENT.heading.line3}
              </motion.div>
            </h2>
            
            <motion.div variants={lineVariant} className="flex gap-4">
              <a href={FOOTER_CONTENT.socials[0].url} className="text-gray-900 hover:text-green transition-colors">
                <LinkedinIcon size={24} />
              </a>
              <a href={FOOTER_CONTENT.socials[1].url} className="text-gray-900 hover:text-green transition-colors">
                <TwitterIcon size={24} />
              </a>
              <a href={FOOTER_CONTENT.socials[2].url} className="text-gray-900 hover:text-green transition-colors">
                <FacebookIcon size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Links (Animated all at once) */}
          <motion.div 
            className="lg:w-2/3 flex flex-wrap gap-8 md:gap-16 lg:justify-end"
            variants={rightContentVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {FOOTER_CONTENT.columns.map((col, idx) => (
              <div key={idx} className="min-w-[120px]">
                <h4 className="font-medium mb-4 text-gray-900">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a href={link.url} className="text-gray-500 hover:text-green transition-colors text-sm font-light">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Banners & Bottom */}
        <motion.div 
          variants={bottomVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Banners */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <a href={FOOTER_CONTENT.banners[0].url} className="flex-1 bg-gray-50 hover:bg-gray-100 transition-colors rounded-xl p-8 flex items-center relative overflow-hidden group border border-gray-200">
              <span className="font-medium text-lg relative z-10 text-gray-900">{FOOTER_CONTENT.banners[0].title}</span>
              {/* Decorative shapes to mimic the image */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-50 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-200 to-transparent group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-40 h-40 border-[10px] border-white/50 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.05)]"></div>
            </a>
            <a href={FOOTER_CONTENT.banners[1].url} className="flex-1 bg-gray-50 hover:bg-gray-100 transition-colors rounded-xl p-8 flex items-center relative overflow-hidden group border border-gray-200">
              <span className="font-medium text-lg relative z-10 text-gray-900">{FOOTER_CONTENT.banners[1].title}</span>
              {/* Decorative shapes to mimic the image */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-50 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-200 to-transparent group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-2xl rotate-12 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"></div>
            </a>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-sm text-gray-500 font-light gap-4">
            <div>{FOOTER_CONTENT.bottom.copyright}</div>
            <div className="flex gap-6">
              {FOOTER_CONTENT.bottom.links.map((link, idx) => (
                <a key={idx} href={link.url} className="hover:text-gray-900 transition-colors underline decoration-transparent hover:decoration-gray-900 underline-offset-4">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
