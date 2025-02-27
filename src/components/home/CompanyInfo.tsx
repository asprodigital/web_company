import React from 'react';
import { Youtube, Facebook, Mail } from 'lucide-react';
import CompanyLogo from '../ui/CompanyLogo';
import SocialLink from '../ui/SocialLink';

const CompanyInfo = () => {
  return (
    <section id="info" className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-end">
            <CompanyLogo />
          </div>
          
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-light mb-3">ASPRO DIGITAL</h2>
            <p className="text-gray-500 text-lg mb-8">Innovative Solutions Development</p>
            
            <p className="text-gray-600 text-lg mb-12">
            ASPRO DIGITAL is a Malaysian company focused on developing mobile applications that offer educational and practical solution.
            </p>
            
            <div className="space-y-4">
              <SocialLink 
                icon={<Youtube size={20} />}
                label="Youtube Channel"
                href="https://youtube.com/@asprodigital"
              />
              {/* <SocialLink 
                icon={<Facebook size={20} />}
                label="Facebook Page"
                href="https://facebook.com/asprodigital"
              /> */}
              <SocialLink 
                icon={<Mail size={20} />}
                label="hello@asprodigital.com"
                href="mailto:hello@asprodigital.com"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;