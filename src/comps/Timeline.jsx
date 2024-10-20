import React, { useState, useEffect } from 'react';
import timelineData from '../data/timeline.json'; 
import { ShootingStarsAndStarsBackgroundDemo } from './bg';

export function Timeline() {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    setTimeline(timelineData); 
  }, []);

  return (
    <section className="py-20 bg-gray-100">
        <div className='absolute inset-0 z-0'>
            <ShootingStarsAndStarsBackgroundDemo/>
        </div>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="flex flex-col space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative border-l-4 border-blue-600 pl-6">
              <div className="absolute -left-4 top-0 h-4 w-4 rounded-full bg-blue-600"></div>
              <h3 className="text-2xl font-bold text-white">{item.company}</h3>
              <p className="text-sm text-rose-600">{item.duration}</p>
              <h4 className="text-xl font-medium text-white">{item.role}</h4>
              <p className="mt-4 text-white">{item.description}</p>
              <div className="mt-2">
                <span className="font-semibold text-white">Tech Stack: </span>
                <p className='text-white'>{item.techStack.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
