import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const FloatingCV = () => {
  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2 }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-100"
    >
      <motion.a
        href="/CV_Developer.pdf"
        download="Abu_Nayeem_Riyad_CV.pdf"
        className="flex items-center justify-center gap-3 bg-[#ff6b35] text-white w-14 h-14 md:w-auto md:h-14 md:px-6 rounded-full font-bold shadow-[0_0_20px_rgba(255,107,53,0.4)] hover:bg-orange-600 transition-all group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: ["0 0 15px rgba(255,107,53,0.3)", "0 0 30px rgba(255,107,53,0.6)", "0 0 15px rgba(255,107,53,0.3)"] 
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="hidden md:block text-sm uppercase tracking-widest">Download CV</span>
        
        
        <FiDownload className="text-2xl md:text-xl" />
        <span className="absolute top-0 right-0 flex h-3 w-3 md:hidden">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </motion.a>
    </motion.div>
  );
};

export default FloatingCV;