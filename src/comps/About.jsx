import React from 'react';
import { FaGithub, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDocker, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion'; 
import { ShootingStars } from '../components/ui/Shooting-Stars';
import { StarsBackground } from "../components/ui/Stars-Background";

export function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } }, 
  };

  const cardFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section
      id="about-section"
      className="relative h-screen w-screen flex flex-col justify-center items-center bg-neutral-900 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <ShootingStars />
        <StarsBackground />
      </div>

     
      <motion.div
        className="relative z-10 w-full max-w-md px-4 text-center sm:hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h2 className="text-white text-2xl font-bold mb-4">About Me</h2>
        <p className="text-neutral-300 text-lg mb-4">
          Undergraduate from JK Lakshmipat University with a focus on Computer Science and Engineering. I'm passionate about front-end development, blockchain technology, and AI-powered applications. I also enjoy coding, traveling, and learning new technologies in my free time.
        </p>
      </motion.div>

   
      <div className="hidden sm:flex sm:flex-row sm:space-x-8 w-full justify-center items-center">
     
        <motion.div
          className="bg-neutral-800 text-white w-auto sm:w-[20rem] h-auto rounded-xl p-6 border border-neutral-700"
          initial="hidden"
          animate="visible"
          variants={cardFadeIn} 
        >
          <h3 className="text-lg font-bold mb-2">My Education</h3>
          <p className="text-neutral-400 text-sm mb-4">
            Undergraduate from JK Lakshmipat University with a focus on Computer Science and Engineering.
          </p>
        </motion.div>

     
        <motion.div
          className="bg-neutral-800 text-white w-auto sm:w-[20rem] h-auto rounded-xl p-6 border border-neutral-700"
          initial="hidden"
          animate="visible"
          variants={cardFadeIn} 
        >
          <h3 className="text-lg font-bold mb-2">My Area of Interest</h3>
          <p className="text-neutral-400 text-sm mb-4">
            I am interested in front-end development, blockchain technology, and AI-powered applications.
          </p>
        </motion.div>

    
        <motion.div
          className="bg-neutral-800 text-white w-auto sm:w-[20rem] h-auto rounded-xl p-6 border border-neutral-700"
          initial="hidden"
          animate="visible"
          variants={cardFadeIn} 
        >
          <h3 className="text-lg font-bold mb-2">My Hobbies</h3>
          <p className="text-neutral-400 text-sm mb-4">
            I enjoy coding, traveling, and learning new technologies in my free time.
          </p>
        </motion.div>
      </div>

    
      <motion.div
        className="mt-8 text-white text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h3 className="text-2xl font-bold mb-4">Skills</h3>
        <div className="flex justify-center space-x-4">
        
          <motion.div whileHover={{ scale: 1.1 }}>
            <FaGithub className="text-black text-3xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <FaHtml5 className="text-orange-600 text-3xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <FaCss3Alt className="text-blue-600 text-3xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <FaJsSquare className="text-yellow-500 text-3xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <FaReact className="text-cyan-500 text-3xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <SiTailwindcss className="text-teal-400 text-3xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <FaDocker className="text-blue-600 text-3xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <SiMongodb className="text-green-600 text-3xl" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <FaNode className="text-green-600 text-3xl" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
