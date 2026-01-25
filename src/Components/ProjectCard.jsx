import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ title, description, image, tags, liveLink, githubLink }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-[#121212] rounded-4xl overflow-hidden border border-white/5 hover:border-[#ff6b35]/50 transition-all duration-500"
    >
      {/* Project Image Area */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-900">
        <img 
          src={image || "https://via.placeholder.com/600x400"} 
          alt={title} 
          className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0b0b0b] via-transparent to-transparent opacity-80" />

        {/* Action Buttons (Floating on Hover) */}
        <div className="absolute top-4 right-4 flex gap-2 -translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <a href={githubLink} target="_blank" rel="noreferrer" className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-[#ff6b35] transition-colors">
            <FiGithub size={18} />
          </a>
          <a href={liveLink} target="_blank" rel="noreferrer" className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-[#ff6b35] transition-colors">
            <FiExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-8 relative">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tag) => (
            <span key={tag} className="text-[10px] font-mono text-[#ff6b35] border border-[#ff6b35]/20 px-2 py-0.5 rounded-full bg-[#ff6b35]/5">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ff6b35] transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>

        {/* Bottom Link Style */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 group-hover:text-white transition-colors">
          <span>Explore Case Study</span>
          <div className="h-px w-8 bg-gray-700 group-hover:w-12 group-hover:bg-[#ff6b35] transition-all" />
        </div>
      </div>

      {/* Bottom Corner Accent */}
      <div className="absolute top-0 left-0 w-2 h-0 bg-[#ff6b35] group-hover:h-full transition-all duration-500" />
    </motion.div>
  );
};

export default ProjectCard;