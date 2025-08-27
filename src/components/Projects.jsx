import React from "react";
import { ExternalLink, Github } from "lucide-react";
import linkshort from "../assets/Link shortner.png"
import betahouse from "../assets/Beta H.png";
const Projects = () => {
  return (
    <div>
      {/* Featured Projects */}
      <section className="py-20 bg-black text-[#C7C7C7]" id="work">
        <div className="w-11/12 container mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              FEATURED PROJECTS
            </h2>
            <p className=" font max-w-md">
              Here are some of the selected projects that showcase my passion
              for front-end development.
            </p>
          </div>

          <div className="space-y-32">
            {/* Project 1 */}
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Image container  */}
              <div className="w-full md:w-1/2">
                <div className="bg-gray-300/10 rounded-lg p-6 flex flex-col">
                  {/* Conceptual works header */}
                  <div className="md:mb-5 bg-black w-40 text-center rounded-full">
                    <h3 className="text-lg font">Conceptual works</h3>
                  </div>

                  {/* Centered image */}
                  <div className="flex justify-center items-center p-4 h-80">
                    <img
                      src={linkshort}
                      alt="Landing page for shorter links"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Content container*/}
              <div className="w-full md:w-1/2 mt-10">
                <h3 className="text-2xl font md:text-3xl font-bold text-white mb-4">
                  More than just shorter links
                </h3>
                <p className=" font mb-6 leading-relaxed">
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
                    className="flex items-center gap-2 text-[#D3E97A] text-sm border border-t-0 border-l-0 border-r-0 border-b-[#D3E97A]"
                  >
                    <span className="font">LIVE DEMO</span>
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href="https://github.com/skrillzofficial/URL-shortening-API"
                    className="flex items-center gap-2 text-[#D3E97A] text-sm border border-t-0 border-l-0 border-r-0 border-b-[#D3E97A]"
                  >
                    <span className="font">SEE ON GITHUB</span>
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Image container*/}
              <div className="w-full md:w-1/2">
                <div className="bg-gray-300/10 rounded-lg p-6 flex flex-col">
                  <div className="flex justify-center items-center p-4 h-100">
                    <img
                      src={betahouse}
                      alt="BetaHouse airBnb"
                      className="max-h-full max-w-full object-contain"
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
                  between hosts and guests..
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
                    href="https://beta-house-airbnb-front-end.vercel.app/"
                    className="flex items-center gap-2 text-[#D3E97A] text-sm border border-t-0 border-l-0 border-r-0 border-b-[#D3E97A]"
                  >
                    <span>VIEW PROJECT</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Image container*/}
              <div className="w-full md:w-1/2">
                <div className="bg-gray-300/10 rounded-lg p-6 flex flex-col">
                  <div className="md:mb-5 bg-black w-30 text-center rounded-full">
                    <h3 className="text-lg font">Challenge</h3>
                  </div>
                  <div className="flex justify-center items-center p-4 h-80">
                    <img
                      src="https://tinyurl.com/24bufw83"
                      alt="E-commerce platform for sustainable products"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Content container */}
              <div className="w-full md:w-1/2 mt-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
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
                    className="flex items-center gap-2 text-[#D3E97A] text-sm border border-t-0 border-l-0 border-r-0 border-b-[#D3E97A]"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href="https://github.com/skrillzofficial/Backend-Authentication-and-CRUD-API"
                    className="flex items-center gap-2 text-[#D3E97A] text-sm border border-t-0 border-l-0 border-r-0 border-b-[#D3E97A]"
                  >
                    <span>SEE ON GITHUB</span>
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
