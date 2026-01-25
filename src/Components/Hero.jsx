import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-32 pt-28 lg:pt-20 overflow-hidden">
      <div className="flex-1 text-center lg:text-left">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center lg:justify-start gap-3 text-[#ff6b35] font-mono text-sm mb-4">
            <div className="w-10 h-px bg-[#ff6b35]"></div> Hello
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            I'm <span className="text-white">Abu Nayeem Riyad</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-sm mx-auto lg:mx-0">
            A full stack developer based in Dhaka.
          </p>
          
          <button className="bg-[#ff6b35] hover:bg-orange-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-sm font-semibold transition-all shadow-lg shadow-orange-950/20">
            Learn more
          </button>
        </motion.div>
      </div>

      <div className="flex-1 relative mt-12 lg:mt-0 flex justify-center items-center w-full">
        <motion.div 
          animate={{ 
            y: [0, -25, 0],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative w-full flex justify-center"
        >
           {/* Image Responsive Classes */}
           <img 
            src="/hero.png" 
            alt="3D Illustration" 
            className="w-[80%] md:w-[90%] lg:w-full max-w-[320px] md:max-w-112.5 lg:max-w-137.5 h-auto object-contain z-10 relative" 
           />
           
           {/* Decorative Squares - Scaled for responsiveness */}
           <div className="absolute top-0 right-[15%] md:right-10 w-10 h-10 md:w-16 md:h-16 bg-[#B5412B] rotate-12 z-0 rounded-sm shadow-2xl opacity-80 md:opacity-100"></div>
           
           <div className="absolute bottom-10 left-[15%] md:left-5 w-8 h-8 md:w-12 md:h-12 bg-gray-700 -rotate-12 z-0 rounded-sm shadow-xl opacity-80 md:opacity-100"></div>

           {/* Background Glow (Optional for better look) */}
           <div className="absolute inset-0 bg-orange-600/10 blur-[100px] rounded-full z-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;