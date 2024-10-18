import React, { useEffect, useState } from "react";
import NavBar from "./comps/NavBar";
import { ThreeDCardDemo } from "./comps/test";
import { ShootingStarsAndStarsBackgroundDemo } from "./comps/bg";
import { AboutSection } from "./comps/About";
import { ProjectSection } from "./comps/Project";
import { FeedbackSection } from "./comps/FeedbackSection";
import Footer from "./comps/Footer";
import { motion } from "framer-motion";

export default function App() {
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const textTimeout = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(textTimeout);
  }, []);

  const handleScrollToSection = (sectionId) => {
    setPaused(sectionId !== "home-section");
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  // Floating animation for the profile picture
  const floatingAnimation = {
    hidden: { y: 0 },
    visible: {
      y: [0, -10, 0], // Float up and down
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 3,
      },
    },
  };

  return (
    <div className="relative">
      <NavBar onScrollToSection={handleScrollToSection} />

      {/* Home Section */}
      <motion.section
        id="home-section"
        className="relative flex h-screen"
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
      >
        <ShootingStarsAndStarsBackgroundDemo />

        {isMobile && (
          <motion.div
            className="absolute top-40 left-0 right-0 flex justify-center z-10"
            initial="hidden"
            animate="visible"
            variants={floatingAnimation}
          >
            <img
              src="./pfp.jpeg" 
              alt="Profile"
              className="w-32 h-32 rounded-full" 
            />
          </motion.div>
        )}

        <div className="absolute inset-y-0 left-0 z-10 flex items-center w-full p-8 lg:w-3/5 lg:justify-start lg:text-left mt-32"> {/* Added mt-32 for spacing below the profile picture */}
          <div
            className={`transition-opacity ease-out duration-1000 ${
              showText ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-white font-mono text-lg lg:text-2xl">
              Hi! I am Rajyavardhan, a passionate web developer. I enjoy creating dynamic and responsive web applications. My expertise includes front-end technologies and a keen eye for design. Let's build something amazing together!
            </p>
          </div>
        </div>

        {!isMobile && (
          <div className="absolute inset-y-0 right-0 z-10 flex items-center justify-center w-2/5 p-8">
            <ThreeDCardDemo />
          </div>
        )}
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about-section"
        className="relative flex h-screen"
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
      >
        <AboutSection />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects-section"
        className="relative flex h-screen bg-gray-800"
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
      >
        <ProjectSection />
      </motion.section>

      {/* Feedback Section */}
      <motion.section
        id="feedback-section"
        className="relative flex h-screen bg-gray-700"
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
      >
        <FeedbackSection />
      </motion.section>

      <Footer />
    </div>
  );
}
