"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-cards";
import Link from "next/link";
import courseData from "@/Data/code_courses.json";

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lgnext build md:text-7xl text-center font-sans font-bold mb-8 text-white">
        All courses ({courseData.courses.length})
      </h1>
      <div className="flex flex-wrap justify-center">
        {courseData.courses.map((course) => (
          <CardContainer key={course.id} className="inter-var text-white m-4">
            <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-[#1a1a1a] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height={1000}
                  width={1000}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={course.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={`/${course.slug}`}
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;