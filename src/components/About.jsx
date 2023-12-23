import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#fef2f2]  text-black-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-black'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. Nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>As a seasoned software developer, I thrive on the intricate dance of 
                code and design. My proficiency spans the spectrum, from molding responsive user interfaces with React,
                 HTML, CSS,  TYPESCRİPT and JavaScript to architecting efficient applications using React Hook Toolkit. 
                 On a parallel track, I immerse myself in the fascinating realm of deep learning and machine learning in
                  Python, where I explore the boundless potential of artificial intelligence. Let's go on this coding 
                  journey together.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;