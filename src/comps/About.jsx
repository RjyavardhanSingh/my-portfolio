import React from 'react';
import { MouseEnterProvider } from '../components/ui/3D-Card';
import { CardContainer, CardBody, CardItem } from '../components/ui/3D-Card';
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

      {/* Cards */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:space-x-4 space-y-[3px] sm:space-y-0 w-full justify-center items-center">
        <MouseEnterProvider>
          {/* My Education Card */}
          <CardContainer className="inter-var">
            <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[18rem] h-[12rem] hover:h-[15rem] rounded-xl p-6 border overflow-hidden transition-all duration-500 ease-in-out">
              <CardItem translateZ="60" className="text-white text-lg font-bold">
                My Education
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 opacity-100 transition-opacity duration-300"
              >
                I graduated from JK Lakshmipat University with a focus on Computer Science and Engineering.
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* My Area of Interest Card */}
          <CardContainer className="inter-var">
            <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[18rem] h-[12rem] hover:h-[15rem] rounded-xl p-6 border overflow-hidden transition-all duration-500 ease-in-out">
              <CardItem translateZ="60" className="text-white text-lg font-bold">
                My Area of Interest
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 opacity-100 transition-opacity duration-300"
              >
                I am interested in front-end development, blockchain technology, and AI-powered applications.
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Hobbies Card */}
          <CardContainer className="inter-var">
            <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[18rem] h-[12rem] hover:h-[15rem] rounded-xl p-6 border overflow-hidden transition-all duration-500 ease-in-out">
              <CardItem translateZ="60" className="text-white text-lg font-bold">
                My Hobbies
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 opacity-100 transition-opacity duration-300"
              >
                I enjoy coding, traveling, and learning new technologies in my free time.
              </CardItem>
            </CardBody>
          </CardContainer>
        </MouseEnterProvider>
      </div>
    </section>
  );
}
