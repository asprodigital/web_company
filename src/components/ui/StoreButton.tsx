import React from 'react';
import { Apple, PlayCircle } from 'lucide-react';

interface StoreButtonProps {
  store: 'apple' | 'google';
  href: string;
}

const StoreButton = ({ store, href }: StoreButtonProps) => {
  const getStoreIcon = () => {
    switch (store) {
      case 'apple':
        return <Apple className="w-8 h-8" />;
      case 'google':
        return <PlayCircle className="w-8 h-8" />;
    }
  };

  const getStoreText = () => {
    switch (store) {
      case 'apple':
        return {
          top: 'Available on the',
          bottom: 'App Store'
        };
      case 'google':
        return {
          top: 'Available on the',
          bottom: 'Google Store'
        };
    }
  };

  const storeText = getStoreText();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 hover:bg-white/20 transition-colors"
    >
      {getStoreIcon()}
      <div className="flex flex-col">
        <span className="text-xs text-gray-400">{storeText.top}</span>
        <span className="text-sm font-medium">{storeText.bottom}</span>
      </div>
    </a>
  );
};

export default StoreButton;