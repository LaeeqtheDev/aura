// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    
    <div
      className="bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: 'url(/hero.png)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-4 md:space-y-0">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold  text-black">
              Suitable For All
              <br/>
              Skin Problems 
            </h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-black">
            Nature's Essence, Your Radiant Glow
            </p>
            <button className='bg-[#74B1C9]/60 px-12 py-2 rounded-xl hover:bg-[#74B1C9] '>Explore More</button>
          </div>
          <div className="md:w-1/2">
            {/* Add any additional content here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
