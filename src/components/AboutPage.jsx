import React from "react";
import myimg from "../assets/My image .png";
import github from "../assets/bxl-github.svg.png";
import linkedin from "../assets/bxl-linkedin.svg.png";
import { Download } from "lucide-react";

const AboutPage = () => {
  return (
    <section className="py-20 bg-black text-[#C7C7C7]">
      <div className="w-11/12 container mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left side */}
          <div className="w-full md:w-1/3">
            <h1 className="text-4xl md:text-4xl text-white font-bold">
              ABOUT ME
            </h1>
          </div>

          {/* Right side*/}
          <div className="w-full md:w-2/3">
            <div className="space-y-6">
              <p className="text-lg font leading-relaxed">
                I'm a full-stack developer from Lagos, Nigeria, who loves the
                entire journey of creation. I thrive on turning concepts into
                reality, architecting robust APIs on the back-end and building
                engaging, responsive experiences on the front-end.
              </p>

              <p className="text-lg font leading-relaxed">
                My journey into tech is unconventional. My academic background
                is in Animal Genetics and Breeding, a field deeply rooted in
                data analysis, pattern recognition, and systematic
                problem-solving. I discovered I was more passionate about
                building the tools that drive science than conducting the
                experiments themselves. Now, as a full-stack developer, I apply
                that same analytical mindset to architecting scalable back-end
                systems and creating intuitive front-end experiences, ensuring
                every part of the application is logically sound and performant.
              </p>

              <div className="flex flex-row items-center justify-start sm:items-center space-x-4 space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="bg-[#D3E97A] flex items-center px-3 rounded-full">
                  <button className="text-black text-[8px] font-bold md:text-lg px-3 py-2">
                    DOWNLOAD RESUME
                  </button>
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black ml-2">
                    <Download className="text-[#D3E97A] w-5 h-5" />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-300">
                    <a href="https://tinyurl.com/24fw857w" className="flex items-center justify-center">
                      <img
                        src={linkedin}
                        alt="linkedin logo"
                        className="w-5 h-5"
                      />
                    </a>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full hover:bg-gray-800 transition-colors duration-300">
                    <a href="https://github.com/skrillzofficial" className="flex items-center justify-center">
                      <img src={github} alt="github logo" className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="flex justify-center pt-16">
          <div className="w-64 h-64 md:w-150 md:h-80 lg:w-196 lg:h-96 overflow-hidden rounded-lg">
            <div className="w-full h-full flex items-center justify-center p-4">
              <img
                src={myimg}
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div className="flex flex-col md:flex-row gap-10 items-start pt-20">
          {/* Left side */}
          <div className="w-full md:w-1/3">
            <h1 className="text-3xl md:text-4xl text-white font-bold">
              MY CAPABILITIES
            </h1>
          </div>

          {/* Right side */}
          <div className="w-full md:w-2/3">
            <p className="text-lg font mb-8">
              I am a dedicated learner, constantly seeking to expand my skill
              set and tackle new challenges. I am committed to staying at the
              forefront of industry trends to deliver innovative solutions.
            </p>

            {/* Skills grid with icons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {/* HTML */}
              <div className="flex items-center font justify-center p-2 bg-black rounded-full border">
                <span className=" text-white ">HTML</span>
              </div>

              {/* CSS */}
              <div className="flex items-center font justify-center p-2 bg-black rounded-full border">
                <span className=" text-white">CSS</span>
              </div>

              {/* JavaScript */}
              <div className="flex items-center font justify-center p-2 bg-black rounded-full border">
                <span className=" text-white">JavaScript</span>
              </div>

              {/* React */}
              <div className="flex items-center font  justify-center p-2 bg-black rounded-full border">
                <span className="  text-white">React</span>
              </div>

              {/* Tailwind Css*/}
              <div className="flex items-center font justify-center p-2 bg-black rounded-full border">
                <span className="  text-white">Tailwind Css</span>
              </div>

              {/* Jquery */}
              <div className="flex items-center font justify-center p-2 bg-black rounded-full border">
                <span className="  text-white">Jquery</span>
              </div>

              {/* Accessibility */}
              <div className="flex items-center font justify-center p-2 bg-black rounded-full border">
                <span className="  text-white">Accessibility</span>
              </div>

              {/* Figma */}
              <div className="flex items-center font justify-center p-2 bg-black rounded-full border">
                <span className="  text-white">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
