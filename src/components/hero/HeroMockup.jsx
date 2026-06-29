import React from 'react';
import mockupImg from '../../assets/images/Gemini_Generated_Image_lihnf5lihnf5lihn-removebg-preview.png';

export function HeroMockup({ className, src }) {
  return (
    <div className={`relative ${className ?? ''}`}>
      <img
        src={src || mockupImg}
        alt="Mobile Mockup"
        className="w-full h-auto max-h-[88vh] object-contain block drop-shadow-[0_-20px_60px_rgba(72,209,111,0.25)]"
      />
    </div>
  );
}
