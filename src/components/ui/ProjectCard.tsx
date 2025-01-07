import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  link: string;
}

const ProjectCard = ({ title, category, image, link }: ProjectCardProps) => {
  return (
    <a 
      href={link}
      className="group block relative aspect-[4/3] overflow-hidden"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl mb-1">{title}</h3>
            <p className="text-sm opacity-80">{category}</p>
          </div>
          <ArrowUpRight size={24} />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;