// components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaRocket } from "react-icons/fa";
import { User } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      // className="py-20 px-6 max-w-5xl mx-auto text-center bg-gray-900 "
      className="min-h-screen flex items-center justify-center bg-gray-900 py-20"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <User size={30} />
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I’m a passionate{" "}
          <span className="text-blue-400 font-semibold">
            Full Stack Developer
          </span>{" "}
          with a love for building web applications using the{" "}
          <span className="text-green-400 font-semibold">MERN stack</span>{" "}
          (MongoDB, Express, React, Node.js). I specialize in turning complex
          problems into simple, elegant solutions. My goal is to create
          impactful digital experiences through clean code and modern design.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaCode className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Code & Craft
            </h3>
            <p className="text-gray-400 text-sm">
              I focus on writing clean, scalable, and maintainable code that
              solves real-world problems efficiently.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaLightbulb className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Creative Thinking
            </h3>
            <p className="text-gray-400 text-sm">
              Innovation drives me. I love finding unique ways to bring ideas to
              life through design and development.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaRocket className="text-pink-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Growth & Goals
            </h3>
            <p className="text-gray-400 text-sm">
              I'm constantly learning new tech and frameworks to stay ahead and
              grow as a developer every day.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
