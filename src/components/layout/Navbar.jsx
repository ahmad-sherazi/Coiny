import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';
import { Layers, Menu, X } from 'lucide-react';
import { BRAND, NAV_LINKS, NAV_CTA } from '../../constants/navbar';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open — iOS-safe approach
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Save current scroll position and lock body using position:fixed (works on iOS)
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      // Restore scroll position when menu closes
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-open');
      // Restore the exact scroll position without visible jump
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-6 backdrop-blur-md border-b border-border/50">
      {/* Brand Logo */}
      <Link to="/" className="flex items-center gap-2">
        <Layers className="text-green w-8 h-8" />
        <span className="text-ink font-bold text-xl tracking-tight">{BRAND.name}</span>
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted h-full">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            id={link.id}
            href={link.href}
            className="hover:text-ink transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Desktop CTA Buttons & Theme Toggle */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="hidden md:flex items-center gap-2">
          <Link to="/login">
            <Button variant="outline" className="rounded-full px-5 py-2">
              {NAV_CTA.login.label}
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="primary" className="rounded-full px-5 py-2">
              {NAV_CTA.signup.label}
            </Button>
          </Link>
        </div>
        
        {/* Hamburger Icon (Mobile) */}
        <button 
          className="md:hidden p-2 text-ink hover:text-green transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open mobile menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-[100dvh] overflow-hidden touch-none bg-glass-bg backdrop-blur-xl z-[100] flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
              <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Layers className="text-green w-7 h-7" />
                <span className="text-white font-bold text-lg tracking-tight">{BRAND.name}</span>
              </Link>
              <button 
                className="p-2 text-white hover:text-green transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <X size={26} />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 flex flex-col px-6 py-8 gap-4">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  key={link.id}
                  href={link.href}
                  style={{ color: '#ffffff' }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      const hash = link.href.includes('#') ? link.href.split('#')[1] : null;
                      if (hash) {
                        const el = document.getElementById(hash);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 350);
                  }}
                  className="mobile-nav-link text-xl font-semibold hover:text-green transition-colors py-3 border-b border-white/10"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Footer/CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="px-6 pb-12 flex flex-col gap-4 mt-auto"
            >
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                <Button 
                  variant="outline" 
                  className="w-full rounded-full py-3 text-base border-white/30 text-white hover:bg-white/10 bg-white/5" 
                >
                  {NAV_CTA.login.label}
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                <Button 
                  variant="primary" 
                  className="w-full rounded-full py-3 text-base bg-green hover:bg-green-mid text-ink font-semibold border-none" 
                >
                  {NAV_CTA.signup.label}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
