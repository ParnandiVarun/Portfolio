import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Database Designer Intern",
      company: "Amigo Inno Apps Pvt Ltd",
      date: "Jan 2023 - March 2023",
      description: [
        "Worked as part of a team of four to develop an Online Tourism Guide web application during the internship.",
        "Designed and managed the database architecture using MySQL and Python for efficient data storage and retrieval.",
        "Collaborated with teammates to ensure smooth integration between frontend and backend components.",
        "Optimized database queries and improved performance for faster data access and scalability.",
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
