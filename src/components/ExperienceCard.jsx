import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { Building } from "lucide-react";

const ExperienceCard = ({ experience }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="flex justify-center w-full">
      <motion.div
        className="w-full md:w-7/12 bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-800"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {/* Top section with icon and date */}
        <div className="flex items-center gap-3 mb-3">
          <motion.div
            className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center shadow-md"
            initial={{ scale: 0 }}
            animate={{ scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Building className="w-4 h-4 text-white" />
          </motion.div>
          <p className="text-cyan-400 font-semibold text-sm">
            {experience.date}
          </p>
        </div>

        {/* Role and company */}
        <h3 className="text-2xl font-bold text-white mb-1">
          {experience.role}
        </h3>
        <p className="text-gray-400 mb-5">{experience.company}</p>

        {/* Description */}
        <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
          {experience.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;
