import React from "react";
import { motion } from "framer-motion";

const skillData = [
  {
    name: "MERN Stack",
    desc: "Building scalable full-stack applications with high performance.",
    tag: "Full Stack",
    size: "lg",
    details: "I specialize in building full-stack applications using the MongoDB, Express, React, and Node.js ecosystem. Expertise in creating REST APIs, State Management, and Database Schema design.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "REST API", "JWT"]
  },
  {
    name: "C / C++",
    desc: "Strong foundation in DSA and efficient memory management.",
    tag: "Problem Solving",
    size: "md",
  },
  {
    name: "Python",
    desc: "Deep understanding of Object Oriented Programming principles.",
    tag: "OOP Specialist",
    size: "md",
  },
  {
    name: "MySQL",
    desc: "Database design and complex query optimization.",
    tag: "Database",
    size: "sm",
  },
  {
    name: "Java",
    desc: "Familiarity with JVM and basic concepts.",
    tag: "Learning",
    size: "sm",
  },
];

const Skills = () => {
  return (
    <section id="highlights" className="px-6 lg:px-32 py-32 bg-[#0b0b0b] relative">
      <div className="absolute top-0 right-0 w-125 h-125 bg-[#ff6b35]/5 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <p className="text-[#ff6b35] font-mono tracking-widest text-sm mb-2">02. SPECIALIZATIONS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Technical <span className="text-gray-500">Arsenal.</span></h2>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skillData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className={`relative overflow-hidden group p-6 rounded-3xl border border-white/5 bg-linear-to-br from-white/5 to-transparent
                ${skill.size === "lg" ? "col-span-2 row-span-2 md:col-span-4 lg:col-span-3 min-h-80" : "h-45"}
                ${skill.size === "md" ? "col-span-2 md:col-span-2 lg:col-span-2" : ""}
                ${skill.size === "sm" ? "col-span-1 md:col-span-2 lg:col-span-1" : ""}
              `}
            >
              <div className="absolute -inset-full bg-linear-to-br from-[#ff6b35]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative h-full flex flex-col justify-between z-10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff6b35] bg-[#ff6b35]/10 px-2 py-1 rounded">{skill.tag}</span>
                  <h3 className={`font-bold mt-4 leading-none ${skill.size === "lg" ? "text-4xl md:text-5xl" : "text-xl text-white"}`}>{skill.name}</h3>
                  {skill.details && (
                    <div className="mt-6">
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{skill.details}</p>
                      <div className="flex flex-wrap gap-2">
                        {skill.techStack.map((tech) => (
                          <span key={tech} className="text-[10px] border border-white/10 px-2 py-1 rounded bg-white/5 text-gray-300">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-gray-500 text-sm font-medium mt-4">{skill.desc}</p>
              </div>

              <div className="absolute -bottom-2.5 -right-2.5 text-white/5 text-8xl font-black italic select-none">{skill.name[0]}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;