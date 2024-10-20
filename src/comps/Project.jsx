import React, { useState, useEffect } from 'react';
import { MouseEnterProvider } from '../components/ui/3D-Card';
import { CardContainer, CardBody, CardItem } from '../components/ui/3D-Card';
import { ShootingStars } from '../components/ui/Shooting-Stars';
import { StarsBackground } from '../components/ui/Stars-Background';
import projectsData from '../data/projects.json'; 

export function ProjectSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData); 
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('project-section');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="project-section"
      className="relative h-screen w-screen flex flex-col justify-center items-center bg-neutral-900 overflow-hidden py-20"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ShootingStars />
        <StarsBackground />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <button
          className="absolute left-4 text-white bg-transparent hover:bg-gray-700 rounded-full p-2"
          onClick={prevProject}
        >
          &#10094;
        </button>

        <MouseEnterProvider>
          {projects.length > 0 && (
            <div
              key={currentIndex}
              className={`transform transition-transform duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-100'
              }`}
            >
              <CardContainer className="inter-var">
                <CardBody className="relative group/card border border-gray-300 rounded-xl p-6 transition-transform duration-500 ease-in-out bg-transparent">
                  <CardItem translateZ="60" className="text-white text-lg font-bold">
                    {projects[currentIndex].title}
                  </CardItem>
                  <CardItem translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 opacity-100">
                    {projects[currentIndex].description}
                  </CardItem>
                  <CardItem translateZ="60" className="relative h-40 w-full my-4">
                    <img src={projects[currentIndex].image} alt={projects[currentIndex].title} className="object-contain h-full w-full" />
                  </CardItem>
                  <CardItem translateZ="60" className="absolute bottom-4 text-emerald-500 font-semibold">
                    <a
                      href={projects[currentIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Link
                    </a>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          )}
        </MouseEnterProvider>

        <button
          className="absolute right-4 text-white bg-transparent hover:bg-gray-700 rounded-full p-2"
          onClick={nextProject}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}
