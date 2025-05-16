import React, { useState } from 'react';
import StoreButton from './StoreButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WorkCardProps {
  title: string;
  description: string;
  images: string[];
  appStoreLink: string;
  playStoreLink: string;
  isActive: boolean;
}

const WorkCard = ({ title, description, images, appStoreLink, playStoreLink, isActive }: WorkCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((current) => 
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((current) => 
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-95 blur-sm'}`}>
      <div className="max-w-md mx-auto bg-white rounded-2xl overflow-hidden">
        {/* Image Gallery */}
        <div className="relative aspect-square">
          <img 
            src={images[currentImageIndex]} 
            alt={`${title} - Image ${currentImageIndex + 1}`} 
            className="w-full h-full object-contain bg-gray-50"
          />
          
          {/* Image Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePreviousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
              
              {/* Image Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-white w-4' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-6 text-center">
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <StoreButton store="apple" href={appStoreLink} />
            <StoreButton store="google" href={playStoreLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;