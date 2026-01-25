import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const SocialSidebar = () => {
  return (
    <div className="fixed left-6 md:left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8 text-gray-400 z-40">
      <a href="https://www.instagram.com/riyad_reverie" className="hover:text-[#ff6b35] transition-colors text-lg"><FaInstagram /></a> {/* Instagram */}
      <a href="https://x.com/abunayeemriyad" className="hover:text-[#ff6b35] transition-colors text-lg"><FaSquareXTwitter /></a> {/* Twitter */}
      <a href="https://www.facebook.com/riyadreverie" className="hover:text-[#ff6b35] transition-colors text-lg"><FaFacebook /></a> {/* Facebook */}
      <a href="https://linkedin.com/in/abunayeemriyad" className="hover:text-[#ff6b35] transition-colors text-lg"><FaLinkedin /></a> 
      
      <div className="h-20 w-px bg-gray-800 my-4"></div>
      
      <p className="rotate-90 text-[10px] tracking-[0.4em] uppercase mt-16 whitespace-nowrap origin-left">
        Scroll Down
      </p>
    </div>
  );
};

export default SocialSidebar;