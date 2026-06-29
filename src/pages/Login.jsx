import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { LoginForm } from '../components/auth/LoginForm';
import { motion } from 'framer-motion';

export function Login() {
  return (
    <div className="min-h-screen bg-page text-ink font-sans transition-colors duration-300 flex flex-col relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-green-mid/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-green/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:100px_100px] opacity-[0.15] pointer-events-none" />

      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center pt-32 pb-16 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full flex justify-center"
        >
          <LoginForm />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
