'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import React from 'react';
import Image from "next/image";
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  item,
  active,
  children,
}: {
  setActive: (item: string | null) => void; 
  item: string;
  active: string | null; 
  children?: React.ReactNode;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)} 
      onMouseLeave={() => setActive(null)} 
      className="relative"
    >
      <motion.p
        transition={transition} 
        className={`cursor-pointer text-white hover:text-gray-300 ${active === item ? 'font-bold' : ''}`} 
      >
        {children}
      </motion.p>
    </div>
  );
};

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="relative rounded-full border border-transparent bg-black shadow-input flex justify-center space-x-4 px-8 py-6">
      {children}
    </nav>
  );
};

export const HoveredLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <Link href={href} className="text-gray-300 dark:text-gray-400 hover:text-white">
      {children}
    </Link>
  );
};

// ProductItem Component
export const ProductItem = ({
  title,
  description,
  imageUrl,
  onClick,
}: {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}) => {
  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={onClick}>
      <Image src={imageUrl} alt={title} className="rounded-lg mb-2" />
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );
};

// Example usage of Menu and ProductItem
const ExampleUsage = () => {
  const [activeMenuItem, setActiveMenuItem] = React.useState<string | null>(null);

  const handleProductClick = () => {
    console.log('Product clicked!');
  };

  return (
    <Menu>
      <MenuItem setActive={setActiveMenuItem} item="Home" active={activeMenuItem}>
        <HoveredLink href="/">Home</HoveredLink>
      </MenuItem>
      <MenuItem setActive={setActiveMenuItem} item="Products" active={activeMenuItem}>
        <HoveredLink href="/products">Products</HoveredLink>
      </MenuItem>
      {/* Add more MenuItems as needed */}
      
      {/* Example ProductItems */}
      <div className="mt-4 flex space-x-4">
        <ProductItem
          title="Sample Product 1"
          description="This is a sample product description."
          imageUrl="/path/to/image1.jpg"
          onClick={handleProductClick}
        />
        <ProductItem
          title="Sample Product 2"
          description="This is another sample product description."
          imageUrl="/path/to/image2.jpg"
          onClick={handleProductClick}
        />
      </div>
    </Menu>
  );
};

export default ExampleUsage;
