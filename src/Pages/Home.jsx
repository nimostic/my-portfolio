import React from "react";
import Navbar from "../Components/Navbar";
import SocialSidebar from "../Components/SocialSidebar";
import ProjectCard from "../Components/ProjectCard";
import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import { ReactLenis } from "lenis/react";
import FloatingCV from "../Components/FloatingCV";
import Featured from "../Components/Featured";
import Skills from "../Components/Skills";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}
    >
      <div className="bg-[#0b0b0b] text-white min-h-screen font-sans selection:bg-[#ff6b35]/30">
        {/* outer glow border */}
        <div className="fixed inset-0 pointer-events-none z-60 ">
          <div
            className="w-full h-full border-10 md:border-20"
            style={{
              borderStyle: "solid",
              borderImageSource:
                "linear-gradient(to bottom right, #B5412B, #000000)",
              borderImageSlice: 1,
            }}
          ></div>
        </div>

        <Navbar />
        <SocialSidebar />
        <Hero />
        <Skills></Skills>
        <Featured />
        <FloatingCV></FloatingCV>
        <Contact />
        <Footer></Footer>
      </div>
    </ReactLenis>
  );
};

export default Home;
