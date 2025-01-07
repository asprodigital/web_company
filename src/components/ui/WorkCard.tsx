import React from 'react';
import StoreButton from './StoreButton';

interface WorkCardProps {
  title: string;
  description: string;
  image: string;
  appStoreLink: string;
  playStoreLink: string;
  isActive: boolean;
}

const WorkCard = ({ title, description, image, appStoreLink, playStoreLink, isActive }: WorkCardProps) => {
  return (
    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-95 blur-sm'}`}>
      <div className="max-w-md mx-auto bg-white rounded-2xl overflow-hidden">
        <img src={image} alt={title} className="w-full aspect-square object-cover" />
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