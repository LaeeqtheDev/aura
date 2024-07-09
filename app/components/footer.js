// components/Footer.js
import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png'; // Adjust the path according to your project structure

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image src={logo} alt="Logo" width={100} height={100} className="" />

        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024  — Aura Herbal
          
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
