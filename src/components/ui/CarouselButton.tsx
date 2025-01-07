import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const CarouselButton = ({ direction, onClick }: CarouselButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 z-20 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
      style={{ [direction]: '2rem' }}
    >
      {direction === 'left' ? (
        <ChevronLeft size={24} />
      ) : (
        <ChevronRight size={24} />
      )}
    </button>
  );
};

export default CarouselButton;