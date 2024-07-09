// components/Stats.js
import React from 'react';
import Image from 'next/image';

const stats = () => {
  return (
    <section className="text-gray-600 body-font px-24">
      <div className="container py-24 px-12 mx-auto flex flex-wrap">
        <div className="text-center mb-20 w-full">
          <h1 className="text-5xl text-center font-bold title-font text-gray-900 mb-4">Our <span className='text-[#74B1C9]'>Achievements</span></h1>
          <p className="text-base text-center leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Discover the numbers behind our success. Our stats speak for themselves.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#74B1C9] inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">2.7K+</h2>
            <p className="leading-relaxed">Clients</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">1.8K+</h2>
            <p className="leading-relaxed">Products Sold</p>
          </div>

          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 className="title-font font-medium text-3xl text-gray-900">50+</h2>
          <p className="leading-relaxed">Team</p>
        </div>
        
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">4+</h2>
            <p className="leading-relaxed">Products</p>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <Image
            className="object-cover object-center w-full h-full"
            src="/R.jpeg"
            alt="stats"
            width={600}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default stats;
