// components/Skills.jsx
import { Code } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiGithub,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiPostman,
} from "react-icons/si";
import { FaHtml5, FaCss3 } from "react-icons/fa";

const skills = [
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "React.js", icon: <SiReact className="text-blue-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "Git & GitHub", icon: <SiGithub className="text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-300" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3 className="text-blue-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
];

const duplicatedSkills = [...skills, ...skills];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-gray-950 py-20 overflow-x-hidden"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3 text-white"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Code /> My Tech Stack
        </motion.h2>

        <div className="relative space-y-10">
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-gray-950 to-transparent z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-gray-950 to-transparent z-10"></div>

          <div className="w-full overflow-hidden group">
            <div className="flex animate-marquee-left group-hover:[animation-play-state:paused] space-x-6 w-max">
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-gray-800/50 px-6 py-3 rounded-full text-white shadow-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300 flex-shrink-0 "
                >
                  {skill.icon}
                  <span className="text-lg font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full overflow-hidden group">
            <div className="flex animate-marquee-right group-hover:[animation-play-state:paused] space-x-6 w-max">
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-gray-800/50 px-6 py-3 rounded-full text-white shadow-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300 flex-shrink-0"
                >
                  {skill.icon}
                  <span className="text-lg font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          /* --- FIX IS HERE --- */
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .animate-marquee-left {
            display: flex;
            animation: marquee-left 60s linear infinite;
          }

          .animate-marquee-right {
            display: flex;
            animation: marquee-right 60s linear infinite;
          }

          /* Speed up animation on smaller screens */
          @media (max-width: 768px) {
            .animate-marquee-left,
            .animate-marquee-right {
              animation-duration: 45s;
            }
          }
         
      `}</style>
    </section>
  );
};

export default Skills;
