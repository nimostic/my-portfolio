import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Highlights", href: "#highlights" },
    { name: "Works", href: "#works" },
    { name: "Linkedin", href: "#linkedin" },
  ];

  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-100 px-4">
      <nav 
        className={`relative transition-all duration-500 ease-in-out flex items-center justify-between px-6 md:px-8 py-3 
        ${isScrolled || isOpen
          ? "w-full md:w-[90%] lg:w-[70%] bg-white/10 backdrop-blur-xl border border-white/10 rounded-4xl shadow-2xl" 
          : "w-full md:w-[95%] lg:w-[85%] bg-transparent border border-transparent rounded-none"
        }`}
      >
        {/* Logo */}
        <div className="text-lg font-bold tracking-tighter cursor-pointer relative z-110">
          <span className="text-white">Abu N.</span>
          <span className="text-[#ff6b35]"> Riyad</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] font-semibold tracking-[0.2em] uppercase">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-300 hover:text-[#ff6b35] transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Action Button */}
        <div className="hidden md:block">
          <a href="#contact" className="bg-[#ff6b35] text-white text-[10px] font-bold uppercase px-6 py-2.5 rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-orange-900/20">
            Get in touch
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div 
          className="flex md:hidden flex-col gap-1.5 cursor-pointer z-110 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block"
          ></motion.span>
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white block"
          ></motion.span>
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block"
          ></motion.span>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-[110%] left-0 w-full bg-black/80 backdrop-blur-2xl border border-white/10 rounded-4xl p-6 flex flex-col items-center gap-6 md:hidden z-105"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-white text-md font-medium tracking-widest uppercase hover:text-[#ff6b35]"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-[#ff6b35] text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm"
              >
                Get in touch
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;