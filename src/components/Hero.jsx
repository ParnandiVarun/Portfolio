import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // 🔹 UPDATED RESUME LINKS
  const resumePreview =
    "https://drive.google.com/file/d/1uWp4yoq74PtR_qv3UuPHVVk0ldyELJ_Z/view?usp=sharing";

  const resumeDownload =
    "https://drive.google.com/uc?export=download&id=1uWp4yoq74PtR_qv3UuPHVVk0ldyELJ_Z";

  // 🔹 HANDLER: OPEN + DOWNLOAD
  const handleResumeClick = (e) => {
    e.preventDefault();

    // Open in new tab
    window.open(resumePreview, "_blank");

    // Trigger download
    const link = document.createElement("a");
    link.href = resumeDownload;
    link.download = "Varun_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen  flex items-center justify-center px-4 bg-gray-950 overflow-hidden"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#0f172a" } },
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 5 } },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: { default: "bounce" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT SIDE */}
        <div className="flex-1 text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm Varun
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Full Stack MERN Developer 🚀
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-300 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>

            {/* 🔹 UPDATED DOWNLOAD RESUME BUTTON */}
            <motion.a
              href="#"
              onClick={handleResumeClick}
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-cyan-400 hover:text-gray-950 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            className="flex gap-6 ml-4 mt-10 justify-start text-white text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <a
              href="https://github.com/ParnandiVarun"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/varun-parnandi-b75845332/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          className="flex-1 flex justify-center items-center ml-[5rem]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-md animate-pulse"></div>
            <img
              src="/newProfile.jpg"
              alt="A photo of Varun"
              className="relative w-full h-full rounded-full object-cover border-4 border-gray-900"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
