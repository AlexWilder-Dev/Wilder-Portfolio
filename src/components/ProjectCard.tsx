import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'website' | 'app' | 'misc';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  liveUrl,
  githubUrl,
  category
}) => {
  return (
    <div className="card group overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div className="relative overflow-hidden rounded-lg h-48 mb-4">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium uppercase">
          {category === 'website' && (
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full">Website</span>
          )}
          {category === 'app' && (
            <span className="bg-purple-500 text-white px-2 py-1 rounded-full">App</span>
          )}
          {category === 'misc' && (
            <span className="bg-amber-500 text-white px-2 py-1 rounded-full">Misc</span>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-secondary-600 mb-4">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Links */}
      <div className="flex gap-3 mt-4">
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-secondary-700 hover:text-primary-500 transition-colors"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
        )}
        
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-secondary-700 hover:text-primary-500 transition-colors ml-auto"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;