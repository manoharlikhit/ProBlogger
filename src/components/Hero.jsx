import React from 'react';
import Typed from 'react-typed';
import backgroundImage from '../assets/bg.gif';

const Hero = () => {
  return (
    <div className='text-white' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          BLOG YOUR IDEAS !!
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          ProBlogger.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='text-4xl font-bold py-4'> {/* Reduced text size */}
            Technology, Ideas together for
          </p>
          <Typed
            className='text-4xl font-bold pl-2' 
            strings={['Blogging', 'Sharing', 'Interacting']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'> Maintain your blogs with privacy.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
