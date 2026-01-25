import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';



const projectData = [
  {
    title: "X-ports",
    description: "X-ports is a dynamic, production-ready web application designed for creating, managing, and participating in diverse creative contests. From design challenges to business ideas, it provides a secure and seamless environment for creators to host competitions and for users to showcase their talents.",
    image: "/public/x.png", 
    tags: ["React","Node.js", "Express", "MongoDB", "Framer Motion", "Tailwind","Tailwind CSS", "DaisyUI","Firebase Authentication","Role-Based Dashboards"],
    liveLink: "https://fir-template-4b1dd.web.app/",
    githubLink: "https://github.com/nimostic/Xports"
  },
  {
    title: "KrishiLink",
    description: "KrishiLink is a modern agricultural social networking platform that redefines how farmers, traders, and consumers interact.",
    image: "/public/krishi.png",
    tags: ["React","Node.js", "Express", "MongoDB","Tailwind CSS", "DaisyUI","Firebase Authentication"],
    liveLink: "https://stalwart-kitsune-8da5a7.netlify.app/",
    githubLink: "https://github.com/nimostic/KrishiLink-Client"
  },
  {
    title: "ToySqueeze",
    description: "ToySqueeze is a vibrant and playful online marketplace designed to connect families with the best local toy sellers. It creates a digital space where parents can browse high-quality toys, view detailed information, and engage with sellers",
    image: "/public/toy.png",
    tags: ["React","Tailwind CSS", "DaisyUI","Firebase Authentication"],
    liveLink: "https://toysqueeze-e2756.web.app/",
    githubLink: "https://github.com/nimostic/ToySqueeze"
  }
];

const Featured = () => {
  return (
    <section id="works" className="px-6 lg:px-32 py-32 bg-[#0b0b0b] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Consistent with Skills Section */}
        <header className="mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#ff6b35] font-mono tracking-widest text-sm mb-2"
          >
            03. SELECTED WORKS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Featured <span className="text-gray-500 italic">Projects.</span>
          </motion.h2>
        </header>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <ProjectCard 
                title={project.title} 
                description={project.description}
                image={project.image}
                tags={project.tags}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;