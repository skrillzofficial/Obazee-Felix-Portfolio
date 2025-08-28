import React from "react";
import myimg from "../assets/obazee.jpeg";
import github from "../assets/bxl-github.svg.png";
import linkedin from "../assets/bxl-linkedin.svg.png";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-black text-[#C7C7C7] py-16 md:py-24">
      <div className="container mx-auto w-11/12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold mb-4">
            Hi, I'm Obazee Felix
          </h1>
          <h3 className="text-xl font md:text-2xl mb-8 leading-relaxed">
            I’m a full-stack developer based in Lagos Nigeria, with a strong
            focus on building seamless end-to-end web applications. From
            scalable APIs to responsive user experiences, I enjoy bringing ideas
            to life across the entire stack.
          </h3>
          <div className="flex flex-row items-center justify-start sm:items-center space-x-4 space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="bg-[#D3E97A] flex items-center px-3 rounded-full">
              <a href="#contact"><button className=" cursor-pointer  text-black px-3 py-2 font-medium ">
                CONTACT ME
              </button></a>
              <div className="w-3 h-3 hidden md:block rounded-full bg-black"></div>
              <ArrowUpRight className="text-black md:hidden" />
            </div>

            <div className="flex space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full">
                <a href="https://tinyurl.com/24fw857w" className="flex items-center justify-center">
                  <img src={linkedin} alt="linkedin logo" className="w-5 h-5" />
                </a>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full">
                <a href="https://github.com/skrillzofficial" className="flex items-center justify-center">
                  <img src={github} alt="github logo" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-100% h-75 md:w-80 md:h-80 lg:w-96 lg:h-96  overflow-hidden border rounded-lg border-[#333]">
              {/*   My image */}
              <div className="w-full h-full flex object-top object-cover items-center justify-center">
                <img src={myimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
