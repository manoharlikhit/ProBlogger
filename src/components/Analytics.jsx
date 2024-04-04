import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>ProBlogger Dashboard</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage your Blog Pages and Posts</h1>
          <p>
					In the digital landscape, blogging stands as a powerful medium for sharing ideas, insights, and experiences. Whether you're a seasoned writer or just starting your journey, the right platform can significantly enhance your blogging experience. With our cutting-edge features, we provide a professional environment where you can thrive, offering unparalleled 
					control over privacy settings and personalized subscription options.  </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
