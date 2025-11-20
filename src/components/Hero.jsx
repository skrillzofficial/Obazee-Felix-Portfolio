import React from "react";
import myimg from "../assets/obazee.jpeg";
import github from "../assets/bxl-github.svg.png";
import linkedin from "../assets/bxl-linkedin.svg.png";
import { ArrowUpRight, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-white text-gray-900 py-16 md:py-24 relative overflow-hidden">
      {/* Minimal background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gray-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gray-50 rounded-full blur-3xl opacity-40"></div>
      
      <div className="container mx-auto w-11/12 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Content - Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Location Badge */}
          <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 mb-6">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">LAGOS, NIGERIA</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 leading-tight">
            Full-Stack
            <br />
            <span className="font-medium text-gray-900">Developer</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
            I build scalable web applications with clean architecture and 
            intuitive user experiences. Specializing in end-to-end development 
            from robust APIs to responsive interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <a 
              href="#contact" 
              className="group bg-gray-900 text-white px-8 py-4 rounded-none font-medium hover:bg-gray-800 transition-all duration-300 border border-gray-900 flex items-center gap-2"
            >
              START A PROJECT
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            
            <div className="flex space-x-3">
              <a 
                href="https://linkedin.com/in/yourprofile" 
                className="w-14 h-14 flex items-center justify-center bg-gray-900 rounded-none hover:bg-gray-800 transition-all duration-300 border border-gray-300"
              >
                <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/skrillzofficial" 
                className="w-14 h-14 flex items-center justify-center bg-gray-900 rounded-none hover:bg-gray-800 transition-all duration-300 border border-gray-300"
              >
                <img src={github} alt="GitHub" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500">
            <div className="text-center">
              <div className="font-medium text-gray-900">20+</div>
              <div>Projects</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="font-medium text-gray-900">2+</div>
              <div>Years</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="font-medium text-gray-900">Full-Stack</div>
              <div>Specialization</div>
            </div>
          </div>
        </div>

        {/* Right Content - Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] overflow-hidden bg-gray-50 border border-gray-200">
              <img 
                src={myimg} 
                alt="Obazee Felix" 
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-gray-900"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-gray-900"></div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white border border-gray-200 px-4 py-3">
              <div className="text-sm font-medium text-gray-900">2+ Years</div>
              <div className="text-xs text-gray-500">Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-12 bg-gray-300 animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;