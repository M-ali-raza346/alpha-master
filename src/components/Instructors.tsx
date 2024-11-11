"use client";


import { AnimatedTooltip } from "./ui/animated-tooltip";
import aliImage from '@/components/Images/img.jpeg';


import faizanImage from '@/components/Images/faizan.jpeg';

const Instructors = [
  {
    id: 1,
    name: 'M Faizan Akram',
    designation: ' App Development Mentor',
    image: faizanImage, 
  },
  {
    id: 2,
    name: 'M Ali Raza',
    designation: 'web Development Mentor',
    image: aliImage, 
  },
  
];

function Instructor() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex flex-col items-center justify-center bg-cover bg-center"
    
    >
      {/* Semi-transparent overlay for better text contrast */}
      <div className="absolute inset-0 bg-white opacity-40"></div>

      <div className="relative z-10"> {/* Text above overlay */}
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-black font-bold text-center mb-8 drop-shadow">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-center mb-4 text-black drop-shadow">
          Discover the talented professionals who will guide your coding journey
        </p>
        <div className="flex flex-row items-center justify-center mb-6 w-full">
          <AnimatedTooltip items={Instructors} />
        </div>
      </div>
    </div>
  );
}

export default Instructor