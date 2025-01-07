import React from 'react';

const CompanyLogo = () => {
  return (
    <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] relative">
      <div className="w-full h-full rounded-[60px] border-[3px] border-gray-800 flex items-center justify-center p-8">
        <div className="space-y-4">
          <div className="w-32 h-32 mx-auto">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M50 10 C25 10 10 25 10 50 C10 75 25 90 50 90 C75 90 90 75 90 50 C90 25 75 10 50 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <circle cx="35" cy="40" r="3" />
              <circle cx="65" cy="40" r="3" />
              <path
                d="M30 55 Q50 65 70 55"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light tracking-wider">ASPRO</div>
            <div className="bg-gray-800 text-white px-4 py-1 text-sm tracking-wider mt-2">
              DIGITAL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;