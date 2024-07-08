
import Image from "next/image";
import React from "react";
const About=()=>{
    return(
        <div id="About">
            <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto w-[300px] h-[350px]"
        alt="hero"
        src={require("../../../public/data/picture/pic.png")}
        width={300}
        height={500}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
        
      </h1>
      <p className="mb-5 leading-relaxed">
      I am a matriculation student at TCF School with a strong passion for computer science and IT, specializing in TypeScript and Next.js. Through courses in freelancing and communication skills at DigiSkills.
      </p>

      <p className="mb-5 leading-relaxed">
      I am currently interning at CodeAlpha and AL-NAFI, gaining hands-on experience in software development and project management. My ultimate career goal is to integrate my technical skills with a lifelong passion for aviation by joining the Air Forces. Beyond academics, I actively pursue aviation interests and seek opportunities in IT and software development to contribute meaningfully and achieve personal growth.
      </p>
      <div className="flex justify-center">
        <a href={"/data/cv/cv.pdf"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View My Resume
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}
export default About