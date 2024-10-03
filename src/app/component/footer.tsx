import React from 'react'

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link"
import Image from 'next/image';

const Footer=()=>{
    return(
        <div className='bg-blue-50'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image
      src={require("../../../public/data/picture/port.png")}
      alt="Next.js Developer" 
      width={200} 
      height={150}
      className="w-[58px]"
      />
      <span className="ml-3 text-xl">Mahnoor Tahir</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Mahnoor Tahir —
      <a
        href="https://www.instagram.com/mahnoor_mk14/"
        className="text-gray-600 ml-1"
        rel="noopener noreferrer"
        target="_blank"
      >
        @mahnoor_mk14
      </a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      
      <Link
      target='_blank'
       href={'https://github.com/mahnoort123456'}
        className="ml-3 text-gray-500">
      <FaGithub  className='text-3xl hover:text-[#181717]'/>
      </Link>
      <Link 
      target='_blank'
       href={'https://www.linkedin.com/in/mahnoortahir29/'}
       className="ml-3 text-gray-500">
      <FaLinkedin className='text-3xl hover:text-[#0A66C2]' />
      </Link>

    </span>
  </div>
  
</footer>
</div>

    )
};
export default Footer