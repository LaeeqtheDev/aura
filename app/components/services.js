// components/Services.js
import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: "Facial Treatments",
    description: "Rejuvenate your skin with our range of facial treatments designed to cleanse, exfoliate, and nourish your skin, leaving it feeling fresh and radiant.",
    imgSrc: "/Inactive.png", // Replace with actual path
    color: "text-teal-600",
  },
  {
    title: "Skin Tightening",
    description: "Our advanced skin tightening procedures use the latest technology to firm and tone your skin, reducing the appearance of wrinkles and sagging.",
    imgSrc: "/Active1.png", // Replace with actual path
    color: "text-blue-500",
  },
  {
    title: "Healthy Products",
    description: "Explore our selection of healthy products, including organic skincare and beauty items, all formulated to enhance your natural beauty without harmful chemicals.",
    imgSrc: "/Icon.png", // Replace with actual path
    color: "text-pink-600",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 bg-gray-50"> {/* Added id="services" */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Our Services</h2>
          <h1 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">Beauty Rituals Of Our Offer</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div key={index} className="max-w-sm m-4 text-center p-6  rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <Image src={service.imgSrc} alt={service.title} width={130} height={130} className="mx-auto" />
              </div>
              <h3 className={`text-xl font-semibold ${service.color}`}>{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
