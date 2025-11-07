import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-950 py-20"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Mail />
          Contact Me
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-6 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I'm always excited to discuss new projects or collaboration
          opportunities. Whether it's a question, a freelance job, or just to
          say hi — feel free to drop me an email!
        </motion.p>

        <motion.a
          href="mailto:parnandivarun@gmail.com"
          className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition-all text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope />
          Send an Email
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
