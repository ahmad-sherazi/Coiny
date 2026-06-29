import React from 'react';
import { cn } from './Button';

export function GlassCard({ children, className, ...props }) {
  return (
    <div 
      className={cn(
        "relative backdrop-blur-xl bg-surface-soft border border-border rounded-xl p-6 shadow-soft",
        className
      )}
      {...props}
    >
      {/* Decorative corners similar to the design */}
      <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-white -translate-x-[3px] -translate-y-[3px]" />
      <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-white translate-x-[3px] -translate-y-[3px]" />
      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-white -translate-x-[3px] translate-y-[3px]" />
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-white translate-x-[3px] translate-y-[3px]" />
      
      {children}
    </div>
  );
}
