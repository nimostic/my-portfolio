import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0b0b] py-12 px-6 lg:px-32 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo/Name Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xl font-bold tracking-tighter mb-2">
            <span className="text-white">Abu N.</span>
            <span className="text-[#ff6b35]"> Riyad</span>
          </div>
          <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">
            Handcrafted with passion © 2026
          </p>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="group flex flex-col items-center gap-2"
        >
          <div className="p-4 rounded-full border border-white/10 group-hover:border-[#ff6b35] transition-colors">
            <FiArrowUp className="text-gray-400 group-hover:text-[#ff6b35] text-xl" />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold group-hover:text-white transition-colors">
            Back to Top
          </span>
        </motion.button>

        {/* Quick Info/Links */}
        <div className="flex flex-col items-center md:items-end text-sm text-gray-500 font-medium">
          <p className="hover:text-white transition-colors cursor-default">Designed for Excellence</p>
          <p className="text-[10px] mt-1 text-gray-700 uppercase tracking-widest">Built with MERN & Framer Motion</p>
        </div>

      </div>
      
      {/* Bottom Sub-footer Decorative Line */}
      <div className="mt-12 w-full h-px bg-linear-to-r from-transparent via-[#ff6b35]/20 to-transparent" />
    </footer>
  );
};

export default Footer;