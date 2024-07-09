"use client"
// components/About.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    title: "Neptune",
    category: "Accessories",
    price: "Rs.1200",
    imgSrc: "/p1.jpg", // Replace with actual image path
  },
  {
    title: "The 400 Blows",
    category: "Serums",
    price: "Rs.1840",
    imgSrc: "/OIP.jpeg", // Replace with actual image path
  },
  {
    title: "The Catalyzer",
    category: "Hair",
    price: "Rs.1600",
    imgSrc: "/OIP 1.jpeg", // Replace with actual image path
  },
  {
    title: "Shooting Stars",
    category: "Whitening",
    price: "Rs.2115",
    imgSrc: "/OIP 2.jpeg", // Replace with actual image path
  },
];

const About = () => {
  const phoneNumber = "+923024569714"; // Replace with your phone number

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello, I'm interested in buying this product.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="text-gray-600 body-font px-24">
      <div className="container py-24 px-12 mx-auto">
        <div className="text-center mb-20">
          <h1 className="font-bold title-font text-gray-900 text-5xl mb-4">Our Products</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Check out our range of products designed to cater to your needs.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#74B1C9] inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {items.map((item, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt={item.title}
                  className="object-contain object-center w-full h-full block"
                  src={item.imgSrc}
                  width={820}
                  height={260}
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {item.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {item.title}
                </h2>
                <p className="mt-1">{item.price}</p>
                <button
                  className="mt-4 inline-block text-white bg-[#74B1C9]/60 border-0 py-2 px-4 focus:outline-none hover:bg-[#74B1C9] rounded text-lg"
                  onClick={openWhatsApp}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
