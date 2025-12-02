import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Amigo Innoapps Pvt Ltd",
      date: "January 2023 - March 2023",
      description: [
        "Developed the complete frontend of the Online Tourism Guide using HTML, CSS, Bootstrap, and JavaScript.",
        "Built responsive and visually appealing UI for pages such as Home, Packages, Contact, Login, and Place Details.",
        "Collaborated with the backend team to ensure seamless integration and improve overall performance and code quality.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900/50 py-20"
    >
      <div className="container mx-auto px-6 flex flex-col items-center">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3 text-white"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Briefcase /> Professional Experience
        </motion.h2>

        {/* Center single experience card */}
        <div className="w-full max-w-3xl flex justify-center">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
