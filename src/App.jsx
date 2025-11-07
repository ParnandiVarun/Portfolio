import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  Menu,
  X,
  Code,
  User,
  Briefcase,
  Mail,
  Linkedin,
  Github,
} from "lucide-react";
import Experience from "./components/Experience";

const smoothScrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "skills",
      "experience",
      "projects",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const navLinks = [
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "experience", title: "Experience" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm shadow-md">
      <div className="w-full px-6 py-4 max-w-none">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("hero");
            }}
            className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300"
          >
            <div className="flex items-center text-white space-x-1 text-lg font-semibold">
              {/* <Code size={24} className="text-blue-400" /> */}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                Varun | Portfolio
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(link.id);
                }}
                className={`relative text-lg font-medium transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.title}
                {activeSection === link.id && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-8 bg-cyan-400 rounded-full"></span>
                )}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  smoothScrollTo(link.id);
                }}
                className={`text-xl ${
                  activeSection === link.id ? "text-cyan-400" : "text-gray-300"
                }`}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
  return (
    <>
      <div className="bg-gray-950 min-h-screen w-full text-gray-300 text-black font-sans">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
