import React from "react";
import myimg from "../assets/obazee.jpeg";
import github from "../assets/bxl-github.svg.png";
import linkedin from "../assets/bxl-linkedin.svg.png";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-black text-[#C7C7C7] py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-[#D3E97A]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D3E97A]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container mx-auto w-11/12 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold mb-4">
            Hi, I'm Obazee Felix
          </h1>
          <h3 className="text-xl font md:text-2xl mb-8 leading-relaxed">
            I'm a full-stack developer based in Lagos Nigeria, with a strong
            focus on building seamless end-to-end web applications. From
            scalable APIs to responsive user experiences, I enjoy bringing ideas
            to life across the entire stack.
          </h3>
          <div className="flex flex-row items-center justify-start sm:items-center space-x-4 space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="bg-[#D3E97A] flex items-center px-3 rounded-full group hover:scale-105 transition-transform duration-300">
              <a href="#contact"><button className="cursor-pointer text-black px-3 py-2 font-medium">
                CONTACT ME
              </button></a>
              <div className="w-3 h-3 hidden md:block rounded-full bg-black ml-2 group-hover:animate-bounce"></div>
              <ArrowUpRight className="text-black md:hidden" />
            </div>

            <div className="flex space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-110">
                <a href="https://tinyurl.com/24fw857w" className="flex items-center justify-center">
                  <img src={linkedin} alt="linkedin logo" className="w-5 h-5" />
                </a>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-110">
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
            {/* Decorative frame elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#D3E97A]/20 to-transparent rounded-lg blur-lg opacity-50"></div>
            <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-[#D3E97A] rounded-tr-lg"></div>
            <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-[#D3E97A] rounded-bl-lg"></div>
            
            <div className="w-100% h-75 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden border rounded-lg border-[#333] relative z-10 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A]">
              {/* Image container with subtle gradient overlay */}
              <div className="w-full h-full flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10"></div>
                <img 
                  src={myimg} 
                  alt="Obazee Felix" 
                  className="w-full h-full object-cover object-top relative z-0 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#D3E97A] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -top-4 -left-4 w-6 h-6 bg-[#D3E97A] rounded-full opacity-30 animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;