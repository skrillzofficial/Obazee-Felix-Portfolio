import React from "react";
import { ExternalLink, Github } from "lucide-react";
import linkshort from "../assets/Link shortner.png";
import sentient from "../assets/sentient.png";
import BetaHouse from "../assets/Beta H.png";

const WorkComponent = () => {
  return (
    <section className="py-20 bg-black text-[#C7C7C7] relative overflow-hidden" id="work">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#D3E97A]/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D3E97A]/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container mx-auto w-11/12 relative z-10">
        <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
          {/* Left side */}
          <div className="w-full md:w-1/3">
            <h1 className="text-3xl md:text-4xl text-white font-bold">
              MY WORK
            </h1>
          </div>

          {/* Right side */}
          <div className="w-full md:w-2/3">
            <p className="text-lg mb-8">
              Here's a selection of projects I've worked on. Each one represents
              my passion for creating functional, user-friendly applications with clean code.
            </p>
          </div>
        </div>

        {/* Project 1 - Link Shortener */}
        <div className="flex flex-col md:flex-row gap-10 items-start mb-32">
          {/* Image container */}
          <div className="w-full md:w-1/2 relative group">
            <div className="bg-gray-300/10 rounded-lg p-6 flex flex-col h-full">
              <div className="md:mb-5 bg-black w-40 text-center rounded-full mb-4">
                <h3 className="text-lg font">Conceptual works</h3>
              </div>
              <div className="flex justify-center items-center p-4 h-80">
                <img
                  src={linkshort}
                  alt="Landing page for shorter links"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Content container*/}
          <div className="w-full md:w-1/2 mt-10">
            <h3 className="text-2xl font md:text-3xl font-bold text-white mb-4">
              More than just shorter links
            </h3>
            <p className="font mb-6 leading-relaxed">
              Independently architected and developed a responsive URL
              shortener. Delivered a complete product that effortlessly
              condenses long links into shareable, trackable URLs with a
              full suite of real-time performance analytics.
            </p>

            <div className="mb-4">
              <p className="text-white">PROJECT INFO</p>
            </div>

            <div className="flex flex-col gap-2 border-t border-gray-800 pt-2">
              <div className="flex font justify-between">
                <span>Year</span>
                <span>2025</span>
              </div>
              <div className="border-t font border-gray-800 pt-2">
                <div className="flex justify-between">
                  <span>Role</span>
                  <span>Front-end developer</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-6 pt-4 border-t border-gray-800">
              <a
                href="https://url-shortening-api-sable.vercel.app/"
                className="flex items-center gap-2 text-[#D3E97A] text-sm border border-t-0 border-l-0 border-r-0 border-b-[#D3E97A] hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font">LIVE DEMO</span>
                <ExternalLink size={16} />
              </a>
              <a
                href="https://github.com/skrillzofficial/URL-shortening-API"
                className="flex items-center gap-2 text-[#D3E97A] text-sm border border-t-0 border-l-0 border-r-0 border-b-[#D3E97A] hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font">SEE ON GITHUB</span>
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 - BetaHouse */}
        <div className="flex flex-col md:flex-row-reverse gap-10 items-start mb-32">
          {/* Image container*/}
          <div className="w-full md:w-1/2 relative group">
            <div className="bg-gray-300/10 rounded-lg p-6 flex flex-col h-full">
              <div className="flex justify-center items-center p-4 h-80 md:h-100">
                <img
                  src={BetaHouse}
                  alt="BetaHouse airBnb"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Content container*/}
          <div className="w-full md:w-1/2 mt-10">
            <h3 className="text-2xl font md:text-3xl font-bold text-white mb-4">
              Live like a local, not a tourist.
            </h3>
            <p className="font mb-6 leading-relaxed">
              Solo-built BetaHouse, a functional Airbnb clone. Developed a
              responsive front-end and scalable backend with user
              authentication, property listing management, and a secure
              search system to facilitate seamless property management
              between hosts and guests.
            </p>

            <div className="mb-4">
              <p className="font text-white">PROJECT INFO</p>
            </div>

            <div className="flex flex-col gap-2 border-t border-gray-800 pt-2">
              <div className="border-b border-gray-800 pb-2">
                <div className="flex font justify-between">
                  <span>Client</span>
                  <span>BetaHouse</span>
                </div>
              </div>

              <div className="flex font justify-between">
                <span>Year</span>
                <span>2025</span>
              </div>
              <div className="border-t border-gray-800 pt-2">
                <div className="flex font justify-between">
                  <span>Role</span>
                  <span>Full-stack developer</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-6 pt-4 border-t border-gray-800">
              <a
                href="https://beta-house-airbnb-front-end-18at.vercel.app/"
                className="flex items-center gap-2 text-[#D3E97A] text-sm border border-t-0 border-l-0 border-r-0 border-b-[#D3E97A] hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>VIEW PROJECT</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 - E-commerce */}
        <div className="flex flex-col md:flex-row gap-10 items-start mb-32">
          {/* Image container*/}
          <div className="w-full md:w-1/2 relative group">
            <div className="bg-gray-300/10 rounded-lg p-6 flex flex-col h-full">
              <div className="md:mb-5 bg-black w-30 text-center rounded-full mb-4">
                <h3 className="text-lg font">Challenge</h3>
              </div>
              <div className="flex justify-center items-center p-4 h-80">
                <img
                  src="https://tinyurl.com/24bufw83"
                  alt="E-commerce platform for sustainable products"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Content container */}
          <div className="w-full md:w-1/2 mt-10">
            <h3 className="text-2xl font md:text-3xl font-bold text-white mb-4">
              E-commerce platform for sustainable products
            </h3>
            <p className="mb-6 font leading-relaxed">
              Successfully built the backend logic and API endpoints for a
              dynamic product page, implementing robust cart functionality
              and a scalable service for image management, showcasing
              proficiency in server-side development.
            </p>

            <div className="mb-4">
              <p className="text-white font">PROJECT INFO</p>
            </div>

            <div className="flex flex-col gap-2 border-t border-gray-800 pt-2">
              <div className="flex font justify-between">
                <span>Year</span>
                <span>2025</span>
              </div>
              <div className="border-t border-gray-800 pt-2">
                <div className="flex font justify-between">
                  <span>Role</span>
                  <span>Full-stack developer</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-6 pt-4 border-t border-gray-800">
              <a
                href="https://backend-authentication-and-crud-api.onrender.com/"
                className="flex items-center gap-2 text-[#D3E97A] text-sm border border-t-0 border-l-0 border-r-0 border-b-[#D3E97A] hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LIVE DEMO</span>
                <ExternalLink size={16} />
              </a>
              <a
                href="https://github.com/skrillzofficial/Backend-Authentication-and-CRUD-API"
                className="flex items-center gap-2 text-[#D3E97A] text-sm border border-t-0 border-l-0 border-r-0 border-b-[#D3E97A] hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>SEE ON GITHUB</span>
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 - Sentient */}
        <div className="flex flex-col md:flex-row-reverse gap-10 items-start">
          {/* Image container*/}
          <div className="w-full md:w-1/2 relative group">
            <div className="bg-gray-300/10 rounded-lg p-6 flex flex-col h-full">
              <div className="flex justify-center items-center p-4 h-80 md:h-100">
                <img
                  src={sentient}
                  alt="Sentient"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Content container*/}
          <div className="w-full md:w-1/2 mt-10">
            <h3 className="text-2xl font md:text-3xl font-bold text-white mb-4">
              AI platform for agent battles.
            </h3>
            <p className="font mb-6 leading-relaxed">
              Co-developed Sentient struggle, a platform where AI meets survival. Collaborated on enabling users to create, and watch AI agents battle experiences. Key contributions included developing the real-time spectator system and implementing the payment infrastructure.
            </p>

            <div className="mb-4">
              <p className="font text-white">PROJECT INFO</p>
            </div>

            <div className="flex flex-col gap-2 border-t border-gray-800 pt-2">
              <div className="border-b border-gray-800 pb-2">
                <div className="flex font justify-between">
                  <span>Client</span>
                  <span>Sentient</span>
                </div>
              </div>

              <div className="flex font justify-between">
                <span>Year</span>
                <span>2025</span>
              </div>
              <div className="border-t border-gray-800 pt-2">
                <div className="flex font justify-between">
                  <span>Role</span>
                  <span>Full-stack developer</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-6 pt-4 border-t border-gray-800">
              <a
                href="https://sentient-jet.vercel.app//"
                className="flex items-center gap-2 text-[#D3E97A] text-sm border border-t-0 border-l-0 border-r-0 border-b-[#D3E97A] hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>VIEW PROJECT</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkComponent;