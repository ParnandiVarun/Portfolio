// components/Projects.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiFirebase,
} from "react-icons/si";
import { Briefcase } from "lucide-react";

const iconMap = {
  MongoDB: <SiMongodb className="text-green-500" />,
  Express: <SiExpress className="text-gray-300" />,
  React: <SiReact className="text-blue-400" />,
  "Node.js": <SiNodedotjs className="text-green-400" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
};

const projects = [
  {
    title: "HealFit App",
    description:
      "A fitness matching app with real-time database and video library, built using MERN stack.",
    image: "/fitness.png",
    link: "https://github.com/ParnandiVarun/HealFit",
    demo: "https://heal-fit-ys7g.vercel.app/",
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Smart Inventory Management System",
    description:
      "A comprehensive inventory management system that allows users to track and manage their inventory in real-time. Built using the MERN stack.",
    image: "/teamcollab.png",
    link: "https://github.com/ParnandiVarun/Smart_Inventory",
    demo: "https://smart-inventory-red.vercel.app/",
    stack: ["React", "Firebase"],
  },
];

const allStacks = [...new Set(projects.flatMap((p) => p.stack))];

const Projects = () => {
  const [selectedStack, setSelectedStack] = useState("All");
  const filteredProjects =
    selectedStack === "All"
      ? projects
      : projects.filter((p) => p.stack.includes(selectedStack));

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-gray-900 py-20"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Briefcase />
          Projects
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedStack === "All"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-white hover:bg-blue-600"
            }`}
            onClick={() => setSelectedStack("All")}
          >
            All
          </button>
          {allStacks.map((stack) => (
            <button
              key={stack}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedStack === stack
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-white hover:bg-blue-600"
              }`}
              onClick={() => setSelectedStack(stack)}
            >
              {stack}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <motion.p
                className="text-gray-300 mb-4 text-sm md:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {project.description}
              </motion.p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <motion.span
                    key={tech}
                    className="flex items-center gap-1 text-xs bg-gray-700 px-2 py-1 rounded-full text-white relative group"
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="relative">
                      {iconMap[tech] || null}
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {tech}
                      </span>
                    </span>
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:underline text-sm md:text-base"
                >
                  <FaGithub /> View Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:underline text-sm md:text-base"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
