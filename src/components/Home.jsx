import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#f5cab3]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-black'>Hi, my name is Çimen :)</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#fbfbfd]'>
         
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#fbfcfd]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-black py-4 max-w-[700px]'>
        Step into the realm where creativity meets functionality! I am a dedicated software developer with a knack for crafting seamless web experiences using React, HTML, CSS, and JavaScript. My expertise extends to leveraging the power of React Hook Toolkit to build robust, efficient, and scalable applications. Beyond the frontend, I delve into the world of deep learning and machine learning in Python, exploring the limitless possibilities of artificial intelligence to create intelligent and data-driven solutions.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#a8d3da] hover:border-[#a8d3da]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;