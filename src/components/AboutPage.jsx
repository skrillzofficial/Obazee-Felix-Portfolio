import React from "react";
import myimg from "../assets/My image .png";
import github from "../assets/bxl-github.svg.png";
import linkedin from "../assets/bxl-linkedin.svg.png";
import {
  Download,
  BookOpen,
  Code,
  Server,
  Palette,
  Database,
  Cpu,
  Zap,
} from "lucide-react";

const AboutPage = () => {
  return (
    <section className="py-20 bg-black text-[#C7C7C7] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#D3E97A]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D3E97A]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="w-11/12 container mx-auto relative z-10">
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
              <p className="text-[20px] font text-white leading-relaxed">
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
                <div className="bg-[#D3E97A] flex items-center px-3 rounded-full group hover:scale-105 transition-transform duration-300">
                  <button className="text-black disabled text-[10px] font-bold md:text-lg px-3 py-2">
                    DOWNLOAD RESUME
                  </button>
                  <div className="w-3 h-3 flex items-center justify-center rounded-full bg-black ml-2 group-hover:animate-bounce">
                    <Download className="text-[#D3E97A] md:hidden w-5 h-5" />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-110">
                    <a
                      href="https://tinyurl.com/24fw857w"
                      className="flex items-center justify-center"
                    >
                      <img
                        src={linkedin}
                        alt="linkedin logo"
                        className="w-5 h-5"
                      />
                    </a>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-110">
                    <a
                      href="https://github.com/skrillzofficial"
                      className="flex items-center justify-center"
                    >
                      <img src={github} alt="github logo" className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="flex justify-center pt-16 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#D3E97A]/20 to-transparent rounded-lg blur-lg opacity-50"></div>
          <div className="w-full max-w-4xl h-[500px] md:h-[600px] overflow-hidden rounded-lg relative z-10 border border-[#484848]/30">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={myimg}
                alt="Profile"
                className="w-full h-full object-cover object-top rounded-lg hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Education section */}
        <div className="flex flex-col md:flex-row gap-10 items-start pt-20">
          {/* Left side */}
          <div className="w-full md:w-1/3">
            <h1 className="text-3xl md:text-4xl text-white font-bold">
              EDUCATION
            </h1>
          </div>

          {/* Right side */}
          <div className="w-full md:w-2/3">
            <div className="space-y-10 relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#484848]/50"></div>

              {/* Education item 1 */}
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D3E97A] flex items-center justify-center z-10">
                  <BookOpen className="text-black w-5 h-5" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-white">
                    Full Stack Development Program
                  </h3>
                  <p className="text-[#D3E97A]">TechStudio Academy</p>
                  <p className="text-sm text-[#999]">2025 - 2025</p>
                  <p className="mt-2 font">
                    Comprehensive training in modern web development including
                    React, Node.js, databases, and deployment strategies.
                  </p>
                </div>
              </div>

              {/* Education item 2 */}
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#484848] flex items-center justify-center z-10 border border-[#D3E97A]/30">
                  <BookOpen className="text-[#D3E97A] w-5 h-5" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-white">
                    BSc in Animal Science
                  </h3>
                  <p className="text-[#D3E97A]">Obafemi Awolowo University</p>
                  <p className="text-sm text-[#999]">2016 - 2023</p>
                  <p className="mt-2 font">
                    Developed strong analytical and problem-solving skills
                    through rigorous scientific training and data analysis.
                  </p>
                </div>
              </div>
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

            {/* Skills categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Frontend */}
              <div className="bg-[#0A0A0A] p-6 rounded-lg border border-[#484848]/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#D3E97A]/10 flex items-center justify-center mr-3">
                    <Palette className="text-[#D3E97A] w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center w-fit font justify-center py-1 px-5 bg-black rounded-full border border-[#484848]">
                    <span className="text-white">HTML</span>
                  </div>
                  <div className="flex items-center font w-fit justify-center p-2 bg-black border-[#484848] rounded-full border">
                    <span className="text-white">CSS</span>
                  </div>
                  <div className="flex items-center font w-fit justify-center p-2 bg-black border-[#484848] rounded-full border">
                    <span className="text-white">JAVASCRIPT</span>
                  </div>
                  <div className="flex items-center font w-fit justify-center p-2 bg-black border-[#484848] rounded-full border">
                    <span className="text-white">REACT</span>
                  </div>
                  <div className="flex items-center font w-fit justify-center p-2 bg-black border-[#484848] rounded-full border">
                    <span className="text-white">TAILWIND CSS</span>
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className="bg-[#0A0A0A] p-6 rounded-lg border border-[#484848]/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#D3E97A]/10 flex items-center justify-center mr-3">
                    <Server className="text-[#D3E97A] w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center font w-fit justify-center p-2 bg-black border-[#484848] rounded-full border">
                    <span className="text-white">NODE.JS</span>
                  </div>
                  <div className="flex items-center font w-fit justify-center p-2 bg-black border-[#484848] rounded-full border">
                    <span className="text-white">EXPRESS</span>
                  </div>
                  <div className="flex items-center font w-fit justify-center p-2 bg-black border-[#484848] rounded-full border">
                    <span className="text-white">REST APIs</span>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div className="bg-[#0A0A0A] p-6 rounded-lg border border-[#484848]/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#D3E97A]/10 flex items-center justify-center mr-3">
                    <Cpu className="text-[#D3E97A] w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center font w-fit justify-center p-2 bg-black border-[#484848] rounded-full border">
                    <span className="text-white">GIT</span>
                  </div>
                  <div className="flex items-center font w-fit justify-center p-2 bg-black border-[#484848] rounded-full border">
                    <span className="text-white">FIGMA</span>
                  </div>
                  <div className="flex items-center font w-fit justify-center p-2 bg-black border-[#484848] rounded-full border">
                    <span className="text-white">JQUERY</span>
                  </div>
                </div>
              </div>

              {/* Database */}
              <div className="bg-[#0A0A0A] p-6 rounded-lg border border-[#484848]/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#D3E97A]/10 flex items-center justify-center mr-3">
                    <Database className="text-[#D3E97A] w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Database</h3>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center font w-fit justify-center p-2 bg-black border-[#484848] rounded-full border">
                    <span className="text-white">MONGODB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
