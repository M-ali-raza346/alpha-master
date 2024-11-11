"use client";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/components/Images/lodo.png";
import React, { useState } from "react";

const Navbar = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);

  return (
    <nav className="fixed border border-solid border-customBrown w-full h-[79px] flex items-center bg-gradient-to-r from-[#FFFFFF] via-sky-50 to-sky-100 z-40">
      {/* Logo */}
      <div className="pl-8 pb-4">
        <Image
          src={logoImage}
          alt="beauty.skin logo"
          width={180}
          height={10}
          className="object-contain"
        />
      </div>

      {/* Hamburger menu button for small screens */}
      <div className="lg:hidden ml-auto mr-8">
        <button
          onClick={() => setIsProductOpen(!isProductOpen)}
          className="text-customBrown focus:outline-none focus:text-white"
          aria-label={isProductOpen ? "Close menu" : "Open menu"}
          title={isProductOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <div
        className={`flex-grow lg:flex items-center justify-center space-x-8 text-lg hidden ${
          isProductOpen ? "block" : "hidden"
        } lg:block`}
      >
        <div
          className="relative"
          onMouseEnter={() => setIsProductOpen(true)}
          onMouseLeave={() => setIsProductOpen(false)}
        >
          <span className="hover:text-customBrown cursor-pointer">Products</span>
          {isProductOpen && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-[600px] p-2 text-sm grid grid-cols-2 gap-14">
              <div className="flex flex-col items-center text-center">
                <Image src={logoImage} alt="Algochurn" width={60} height={30} />
                <p className="font-semibold text-xs mt-2">Frontend</p>
                <p className="text-xs">Basic to advance.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image src={logoImage} alt="Tailwind Master Kit" width={60} height={30} />
                <p className="font-semibold text-xs mt-2">Backend</p>
                <p className="text-xs">Change your future with nayi manzil</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image src={logoImage} alt="Moonbeam" width={60} height={30} />
                <p className="font-semibold text-xs mt-2">Mern stack</p>
                <p className="text-xs">Change your future with nayi manzil.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image src={logoImage} alt="Rogue" width={60} height={30} />
                <p className="font-semibold text-xs mt-2">Modern stack</p>
                <p className="text-xs">Change your future with nayi manzil.</p>
              </div>
            </div>
          )}
        </div>
        <Link href="/" className="hover:text-customBrown">
          Home
        </Link>
        <Link href="/courses" className="hover:text-customBrown">
          Our Courses
        </Link>
        <Link href="/contact" className="hover:text-customBrown">
          Contact
        </Link>
      </div>
      <Link
        href="#"
        className="hidden lg:block mr-8 px-4 py-1 text-lg text-customBrown hover:text-gray-200"
      >
        Log In
      </Link>
      <Link
        href="#"
        className="hidden lg:block mr-8 border border-solid border-customBrown px-4 py-1 text-lg text-customBrown hover:bg-customBrown hover:text-white"
      >
        Sign In
      </Link>

      {/* Mobile menu (only visible when the menu is open) */}
      {isProductOpen && (
        <div className="lg:hidden absolute top-[79px] left-0 w-full bg-light-beige border-t border-customBrown">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/" className="hover:text-customBrown">
              Home
            </Link>
            <Link href="/courses" className="hover:text-customBrown">
              Our Courses
            </Link>
            <Link href="/contact" className="hover:text-customBrown">
              Contact
            </Link>
            <Link
              href="#"
              className="mt-4 border border-solid border-customBrown px-4 py-2 text-center text-customBrown hover:bg-customBrown hover:text-white"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
