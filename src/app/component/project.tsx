import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Project=()=>{
    return(
        <div id='Project'>
         <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Project Showcase
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
I have developed a range of projects showcasing my skills in JavaScript, TypeScript, Tailwind CSS, HTML , CSS and NextJS.js.



For more details and to view my work, visit my GitHub and LinkedIn profiles.
      </p>
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
        {/** Project */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/data/picture/2024-10-03 (2).png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Personal Book Library
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              ***Book Library***
            </h1>
            <p className="leading-relaxed line-clamp-2">
            This project was developed using HTML and CSS, showcasing a clean. It highlights the power of these foundational web technologies to create visually appealing and user-friendly interfaces.
            </p>
            <Link 
            target='_blank' 
            href={'https://github.com/mahnoort123456/CodeAlpha-Book-Library'}>
            <p className='leading-relaxed text-blue-500 hover:underline'>
                View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/data/picture/2024-10-03 (1).png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            Facebook Page
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              ***FB Page***
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I have created this page using Next.js, leveraging its powerful features for building dynamic and efficient web applications. Join me to explore the world of Next.js and share our experiences together!.
            </p>
            <Link target='_blank'
             href={'https://github.com/mahnoort123456/Facebook-PAGE'}>
            <p className='leading-relaxed text-blue-500 hover:underline'>
                View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/data/picture/WhatsApp Image 2024-07-05 at 12.52.12 PM.jpeg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            ATM Simulation
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              ***ATM***
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I developed an ATM Simulation using JavaScript , TypeScript & Inquirer. This project simulates basic ATM functionalities, allowing users to perform actions such as balance inquiries, withdrawals, and deposits.
            </p>
            <Link target='_blank' 
            href={'https://github.com/mahnoort123456/ATM'}>
            <p className='leading-relaxed text-blue-500 hover:underline'>
                View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/data/picture/WhatsApp Image 2024-07-05 at 12.52.14 PM.jpeg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            BMI Calculator
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              ***BMI***
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I developed a BMI Calculator using Inquirer, TypeScript, and JavaScript. This tool helps users calculate their Body Mass Index (BMI) based on their height and weight, providing valuable health insights.
            </p>
            <Link target='_blank' 
            href={'https://github.com/mahnoort123456/BMI-Calculator'}>
            <p className='leading-relaxed text-blue-500 hover:underline'>
                View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/data/picture/2024-10-03 (3).png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            Music Player
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              ***Music Player***
            </h1>
            <p className="leading-relaxed line-clamp-2">
            This project was developed using HTML and CSS, showcasing a clean. It highlights the power of these foundational web technologies to create visually appealing and user-friendly interfaces.
            </p>
            <Link target='_blank'
             href={'https://github.com/mahnoort123456/CodeAlpha_Project_Music_Player'}>
            <p className='leading-relaxed text-blue-500 hover:underline'>
                View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/data/picture/WhatsApp Image 2024-07-05 at 12.19.37 PM.jpeg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Currency Converter
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              ***Converter***
            </h1>
            <p className="leading-relaxed line-clamp-2">
            I developed a Currency Conveter Project by using JavaScript , TypeScript & Inquirer. This tool allows users to convert amounts from one currency to another based on real-time exchange rates.
            </p>
            <Link 
            target='_blank' 
            href={'https://github.com/mahnoort123456/Currency-Converter'}>
            <p className='leading-relaxed text-blue-500 hover:underline'>
                View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
        </div>
      </div>
      </section>
    </div>
     );
}
export default Project