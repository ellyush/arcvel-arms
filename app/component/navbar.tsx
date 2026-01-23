"use client"; // Wajib karena menggunakan useState

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-mywhite border-b-2 border-mygray fixed top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex justify-between items-center">
        {/* --- LOGO SECTION --- */}
        <div className="flex items-center gap-2 shrink-0">
          <Image
            alt="Arcvel Arms Logo"
            src="/arcvel.svg"
            width={50} // Sedikit diperkecil agar proporsional
            height={50}
            className="w-10 h-10 md:w-14 md:h-14" // Responsif size
          />
          <h1 className="text-base md:text-lg text-mygray font-bold tracking-wider">
            ARCVEL ARMS
          </h1>
        </div>

        {/* --- DESKTOP NAVIGATION (Hidden on Mobile) --- */}
        <div className="hidden lg:flex gap-8 lg:gap-12 text-lg lg:text-xl font-titillium text-myblack">
          <Link
            href="/"
            className="hover:text-myred-700 transition relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-myred-700 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/ourproducts"
            className="hover:text-myred-700 transition relative group"
          >
            Our Products
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-myred-700 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/aboutus"
            className="hover:text-myred-700 transition relative group"
          >
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-myred-700 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="#"
            className="hover:text-myred-700 transition relative group"
          >
            Contact Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-myred-700 transition-all group-hover:w-full"></span>
          </Link>
        </div>

        {/* --- DESKTOP SEARCH (Hidden on Mobile) --- */}
        <div className="hidden lg:flex items-center text-sm">
          <input
            type="search"
            placeholder="Search..."
            className="h-9 px-3 w-40 lg:w-48 rounded-l-sm border border-mygray/30 border-r-0 appearance-none outline-none focus:border-myred-700 transition bg-transparent placeholder:text-mygray/50"
          />
          <button
            type="submit"
            className="h-9 px-4 rounded-r-sm bg-myred text-white hover:bg-myred-700 transition font-semibold"
          >
            Search
          </button>
        </div>

        {/* --- MOBILE HAMBURGER BUTTON (Visible on Mobile) --- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-mygray focus:outline-none p-2"
        >
          {/* Icon Hamburger / Close */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {/* Hanya muncul jika isOpen === true dan di layar kecil */}
      {isOpen && (
        <div className="lg:hidden bg-mywhite border-b-2 border-mygray absolute top-20 left-0 w-full shadow-lg">
          <div className="flex flex-col px-6 py-6 space-y-6 text-myblack">
            {/* Mobile Links */}
            <div className="flex flex-col space-y-4 text-xl font-titillium text-center">
              <Link
                href="#"
                className="hover:text-myred-700 py-2 border-b border-mygray/10"
              >
                Home
              </Link>
              <Link
                href="#"
                className="hover:text-myred-700 py-2 border-b border-mygray/10"
              >
                Our Products
              </Link>
              <Link
                href="#"
                className="hover:text-myred-700 py-2 border-b border-mygray/10"
              >
                About Us
              </Link>
              <Link href="#" className="hover:text-myred-700 py-2">
                Contact Us
              </Link>
            </div>

            {/* Mobile Search */}
            <div className="flex w-full pt-4">
              <input
                type="search"
                placeholder="Search products..."
                className="h-10 px-4 w-full rounded-l-sm border border-mygray/30 border-r-0 appearance-none outline-none bg-white"
              />
              <button
                type="submit"
                className="h-10 px-6 rounded-r-sm bg-myred text-white hover:bg-myred-700 transition"
              >
                Go
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
