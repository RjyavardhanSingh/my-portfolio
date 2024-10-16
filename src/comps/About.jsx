import React from 'react';
import { FaGithub, FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { ShootingStars } from '../components/ui/Shooting-Stars';
import { StarsBackground } from "../components/ui/Stars-Background";

export function AboutSection() {
  return (
    <section
      id="about-section"
      className="relative h-screen w-screen flex flex-col justify-center items-center bg-neutral-900 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <ShootingStars />
        <StarsBackground />
      </div>

      {/* Content for small screens */}
      <div className="relative z-10 w-full max-w-md px-4 text-center sm:hidden">
        <h2 className="text-white text-2xl font-bold mb-4">About Me</h2>
        <p className="text-neutral-300 text-lg mb-4">
          I graduated from JK Lakshmipat University with a focus on Computer Science and Engineering. I'm passionate about front-end development, blockchain technology, and AI-powered applications. I also enjoy coding, traveling, and learning new technologies in my free time.
        </p>

        {/* Skills section */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-3xl" />
          </a>
          <FaHtml5 className="text-orange-600 text-3xl" />
          <FaCss3Alt className="text-blue-600 text-3xl" />
          <FaJsSquare className="text-yellow-500 text-3xl" />
          <SiTailwindcss className="text-teal-400 text-3xl" />
          <FaReact className="text-cyan-500 text-3xl" />
        </div>
      </div>

      {/* Content for larger screens */}
      <div className="hidden sm:flex sm:flex-row sm:space-x-8 w-full justify-center items-center">
        {/* My Education Card */}
        <div className="bg-neutral-800 text-white w-auto sm:w-[20rem] h-auto rounded-xl p-6 border border-neutral-700">
          <h3 className="text-lg font-bold mb-2">My Education</h3>
          <p className="text-neutral-400 text-sm mb-4">
            I graduated from JK Lakshmipat University with a focus on Computer Science and Engineering.
          </p>
          <div className="flex justify-start space-x-4">
            <FaHtml5 className="text-orange-600 text-2xl" />
            <FaCss3Alt className="text-blue-600 text-2xl" />
            <FaJsSquare className="text-yellow-500 text-2xl" />
          </div>
        </div>

        {/* My Area of Interest Card */}
        <div className="bg-neutral-800 text-white w-auto sm:w-[20rem] h-auto rounded-xl p-6 border border-neutral-700">
          <h3 className="text-lg font-bold mb-2">My Area of Interest</h3>
          <p className="text-neutral-400 text-sm mb-4">
            I am interested in front-end development, blockchain technology, and AI-powered applications.
          </p>
          <div className="flex justify-start space-x-4">
            <FaReact className="text-cyan-500 text-2xl" />
            <SiTailwindcss className="text-teal-400 text-2xl" />
          </div>
        </div>

        {/* My Hobbies Card */}
        <div className="bg-neutral-800 text-white w-auto sm:w-[20rem] h-auto rounded-xl p-6 border border-neutral-700">
          <h3 className="text-lg font-bold mb-2">My Hobbies</h3>
          <p className="text-neutral-400 text-sm mb-4">
            I enjoy coding, traveling, and learning new technologies in my free time.
          </p>
          <div className="flex justify-start space-x-4">
            <FaGithub className="text-white text-2xl" />
            <FaJsSquare className="text-yellow-500 text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
