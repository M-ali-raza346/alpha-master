'use client';
import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import pImage from "@/components/Images/logo1.png"; // Your laptop image

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const rotatingTexts = ["Frontend", "Backend", "Web", "Next.js", "MERN Stack", "Modern Stack"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(intervalId);
  }, [rotatingTexts.length]);

  return (
    <div className="bg-gradient-to-r p-12 from-[#FFFFFF] via-sky-50 to-sky-100 w-full min-h-[768px]">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Side - Logo, Heading, Text, and Button */}
        <div className="flex items-center w-full md:w-1/2 p-8">
      
          <div className="w-1 h-full flex items-start"></div>
          <div className="ml-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Learn & become the{" "}
              <span className="text-gradient-to-top from-tear-800 to-tear-300">
                Top 1% {rotatingTexts[textIndex]}
              </span>{" "}
              <span className="text-teal-800"> developer</span>
            </h1>
            {/* Updated Text */}
            <p className="text-sm md:text-lg mb-8 md:mb-14">
              Welcome to <strong>Nayi Manzil</strong>, your gateway to a thriving career in web development. 
              We offer expert-led courses in cutting-edge technologies like Frontend, Backend, and Full Stack Development. 
              Whether you are a beginner or aiming for mastery, our curriculum is designed to guide you toward success.
            </p>
            <Link
              href="#"
              className="mr-8 border border-transparent px-6 md:px-6 py-2 md:py-3 text-sm md:text-lg bg-teal-800 text-white w-40 md:w-60 h-10 md:h-14"
            >
              Join Alpha Badges
            </Link>
          </div>
        </div>

        {/* Right Side - Laptop Image */}
        <div className="relative w-full md:w-1/2 flex justify-center mt-12 md:mt-24">
          <Image src={pImage} alt="Laptop image" width={512} height={512} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;