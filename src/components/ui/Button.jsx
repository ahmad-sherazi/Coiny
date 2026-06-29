import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Button({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-green hover:bg-green-dark text-white shadow-soft px-6 py-2.5",
    outline: "border border-border bg-surface hover:bg-surface-soft text-ink px-6 py-2.5",
    ghost: "text-muted hover:text-ink px-4 py-2.5",
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
