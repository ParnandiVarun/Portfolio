import { Github, Linkedin, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/ParnandiVarun"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/varun-parnandi-b75845332/"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Varun Codes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
