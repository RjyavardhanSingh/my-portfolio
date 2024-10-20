import React from 'react';
import { MouseEnterProvider } from '../components/ui/3D-Card';
import { CardContainer, CardBody, CardItem } from '../components/ui/3D-Card';

export function ThreeDCardDemo() {
  

  return (
    <MouseEnterProvider>
      <CardContainer className="inter-var">
        <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            I code Websites am a WEBER
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src="pfp.jpeg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Download CV
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </MouseEnterProvider>
  );
}
