import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#00a6ed] hover:text-[#3AAFB9]'> Taran</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/taranpreetdev/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg  hover:bg-[#00a6ed] hover:text-[#ffffff] shadow-gray-400 p-6 cursor-pointer hover:scale-150 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/Taranpreetdev'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg  hover:bg-[#00a6ed] hover:text-[#ffffff] shadow-gray-400 p-6 cursor-pointer hover:scale-150 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='mailto:taranpreet1712@gmail.com'>
              <div className='rounded-full shadow-lg  hover:bg-[#00a6ed] hover:text-[#ffffff] shadow-gray-400 p-6 cursor-pointer hover:scale-150 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg  hover:bg-[#00a6ed] hover:text-[#ffffff] shadow-gray-400 p-6 cursor-pointer hover:scale-150 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
