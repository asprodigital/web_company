import React from 'react';

interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const SocialLink = ({ icon, label, href }: SocialLinkProps) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors group"
    >
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
        {icon}
      </span>
      <span className="text-lg">{label}</span>
    </a>
  );
};

export default SocialLink;