import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  const [isHome, setIsHome] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ensure the navbar stays visible on mobile screens
  useEffect(() => {
    if (isMobile) {
      setIsVisible(true); // Always visible on small screens
    }
  }, [isMobile]);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScrollCheck = () => {
      const homeSection = document.getElementById("home-section");
      if (homeSection) {
        const sectionTop = homeSection.getBoundingClientRect().top;
        setIsHome(sectionTop >= -10);
      }
    };

    window.addEventListener("scroll", handleScrollCheck);
    return () => {
      window.removeEventListener("scroll", handleScrollCheck);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 flex items-center p-4 transition-all duration-300 shadow-lg ${
        isHome ? "bg-transparent" : "bg-transparent"
      } ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
    >
      {isMobile ? (
        <>
          <img src="./pfp.jpeg" alt="Profile" className="h-10 w-10 rounded-full mr-4" />
          <div className="flex-grow text-center">
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/RjyavardhanSingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.instagram.com/_rajya_var_dhan_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rvd2003/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </>
      ) : (
        <div className={`flex space-x-6 ${!isHome ? "justify-center w-full" : ""}`}>
          <div
            onClick={() => handleScroll("home-section")}
            className="text-white font-mono text-lg hover:text-gray-300 cursor-pointer"
          >
            Home
          </div>
          <div
            onClick={() => handleScroll("about-section")}
            className="text-white font-mono text-lg hover:text-gray-300 cursor-pointer"
          >
            About
          </div>
          <div
            onClick={() => handleScroll("projects-section")}
            className="text-white font-mono text-lg hover:text-gray-300 cursor-pointer"
          >
            Projects
          </div>
          <div
            onClick={() => handleScroll("feedback-section")}
            className="text-white font-mono text-lg hover:text-gray-300 cursor-pointer"
          >
            Contact Me
          </div>
        </div>
      )}
      {isMobileMenuOpen && isMobile && (
        <div className="absolute top-16 right-0 bg-transparent p-4">
          <div className="flex flex-col items-end space-y-2">
            <div onClick={() => handleScroll("home-section")} className="text-white font-mono text-lg hover:text-gray-300 cursor-pointer bg-transparent">
              Home
            </div>
            <div onClick={() => handleScroll("about-section")} className="text-white font-mono text-lg hover:text-gray-300 cursor-pointer bg-transparent">
              About
            </div>
            <div onClick={() => handleScroll("projects-section")} className="text-white font-mono text-lg hover:text-gray-300 cursor-pointer bg-transparent">
              Projects
            </div>
            <div onClick={() => handleScroll("feedback-section")} className="text-white font-mono text-lg hover:text-gray-300 cursor-pointer bg-transparent">
              Contact Me
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
