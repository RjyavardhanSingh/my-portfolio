import React, { useEffect, useState } from "react";
import NavBar from "./comps/NavBar";
import { ThreeDCardDemo } from "./comps/test";
import { ShootingStarsAndStarsBackgroundDemo } from "./comps/bg";
import { AboutSection } from "./comps/About";
import { ProjectSection } from "./comps/Project";
import { FeedbackSection } from "./comps/FeedbackSection";
import Footer from "./comps/Footer";
import { Timeline } from "./comps/Timeline";
import { motion } from "framer-motion"; // Import motion from framer-motion

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

  return (
    <div className="relative">
      <NavBar onScrollToSection={handleScrollToSection} />

      <section id="home-section" className="relative flex h-screen">
        <ShootingStarsAndStarsBackgroundDemo />

        {isMobile && (
          <motion.div
            className="absolute top-40 left-0 right-0 flex justify-center z-10"
            animate={{ y: [0, -10, 0] }} // Floating animation
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
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
      </section>

      <section id="about-section" className="relative flex h-screen">
        <AboutSection />
      </section>

      <section id="timeline-section" className="relative flex h-screen bg-gray-800">
        <Timeline />
      </section>

      <section id="projects-section" className="relative flex h-screen">
        <ProjectSection />
      </section>

      <section id="feedback-section" className="relative flex h-screen">
        <FeedbackSection />
      </section>

      <Footer />
    </div>
  );
}
