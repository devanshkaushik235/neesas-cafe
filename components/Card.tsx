
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'standard' | 'split' | 'feature' | 'text-only' | 'overlay';
  className?: string;
  image?: string;
  badge?: string;
}

const Card: React.FC<CardProps> = ({ children, variant = 'standard', className = '', image, badge }) => {
  const baseStyles = "rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1";
  const shadowStyles = "shadow-sm hover:shadow-xl hover:shadow-[#A68B77]/10";
  
  if (variant === 'split') {
    return (
      <div className={`${baseStyles} ${shadowStyles} bg-white flex flex-col md:flex-row ${className}`}>
        {image && (
          <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
            <img src={image} alt="Split Card Content" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        )}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          {children}
        </div>
      </div>
    );
  }

  if (variant === 'overlay') {
    return (
      <div className={`${baseStyles} relative h-96 group ${className}`}>
        {image && <img src={image} alt="Overlay Content" className="w-full h-full object-cover" />}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/80 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`${baseStyles} ${shadowStyles} bg-white border border-[#F5F1EA] ${className}`}>
      {image && (
        <div className="relative h-64 overflow-hidden">
          <img src={image} alt="Card Content" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          {badge && (
            <span className="absolute top-4 left-4 bg-[#FDFBF7]/90 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-[#A68B77]">
              {badge}
            </span>
          )}
        </div>
      )}
      <div className="p-8">
        {children}
      </div>
    </div>
  );
};

export default Card;
