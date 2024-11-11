'use client';

import React from 'react';
import { FaUsers, FaEye, FaLink } from 'react-icons/fa';
import CountUp from 'react-countup';

const StatsSection = () => {
  const stats = [
    { icon: <FaUsers size={32} />, label: 'Happy Learners', target: 37 },
    { icon: <FaEye size={32} />, label: 'Monthly Views', target: 1000000 },
    { icon: <FaLink size={32} />, label: 'New Monthly Subscribers', target: 20 },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-12 text-white">
      <h2 className="text-center text-2xl font-bold mb-6">
        Pakistan MOST LOVED CODING COMMUNITY ❤️
      </h2>
      <div className="flex justify-center items-center space-x-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-white mb-2">{stat.icon}</div>
            <CountUp start={0} end={stat.target} duration={3} separator="," suffix="+" className="text-3xl font-bold" />
            <p className="mt-1 text-sm font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
