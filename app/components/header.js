"use client"
// components/Header.js
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={100} height={40} />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-[#74B1C9]">
              Services
            </Link>
            <Link href="#products" className="text-gray-600 hover:text-[#74B1C9]">
              Products
            </Link>
            <Link href="#stats" className="text-gray-600 hover:text-[#74B1C9]">
              Stats
            </Link>
            <Link href="#testimonial" className="text-gray-600 hover:text-[#74B1C9]">
              Testimonial
            </Link>
            <a
              href="whatsapp://send?phone=+923024569714"
              className="text-gray-600 hover:text-[#74B1C9] flex items-center gap-3"
            >
              <img src='/whatsapp.svg' alt='WhatsApp' height={20} width={20}/>
              +92 302 4569714
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61562487111280"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#74B1C9]"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                />
              </svg>
            </a>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <nav className="md:hidden">
            <ul className="flex flex-col space-y-4 mt-4">
              <li>
                <Link href="#services" className="text-gray-600 hover:text-[#74B1C9]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-gray-600 hover:text-[#74B1C9]">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#stats" className="text-gray-600 hover:text-[#74B1C9]">
                  Stats
                </Link>
              </li>
              <li>
                <Link href="#testimonial" className="text-gray-600 hover:text-gray-800">
                  Testimonial
                </Link>
              </li>
              <li>
                <a
                  href="whatsapp://send?phone=+923024569714"
                  className="text-gray-600 flex items-center hover:text-[#74B1C9]"
                >
                  <img src='/whatsapp.svg' alt='WhatsApp' height={20} width={20}/>
                  Whatsapp
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61562487111280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#74B1C9] flex items-center"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                    />
                  </svg>
                  Facebook
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
