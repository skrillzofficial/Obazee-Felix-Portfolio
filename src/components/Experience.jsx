import React from "react";
import { MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-20 bg-black text-[#C7C7C7]">
      <div className="w-11/12 container mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            EXPERIENCE
          </h1>
          <p className="text-xl  max-w-2xl">
            My professional journey and the projects I've contributed to along
            the way.
          </p>
        </div>

        {/* Experience 1 */}
        <div className="flex flex-col md:flex-row mb-16 relative">
          <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
            <div className="md:pr-8">
              <p className="text-[#D3E97A] font-medium mb-2">2025 - Present</p>
              <h3 className="text-2xl font-bold text-white mb-2">
                Fullstack Web Developer
              </h3>
              <div className="flex items-center  mb-3">
                <MapPin size={16} className="mr-2" />
                <span>TechStudio Academy., Lagos</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-[#D3E97A]">
              <p className="mb-4">
                Developed full-stack applications for various clients, focusing
                on scalable solutions and user experience. Contributed to both
                frontend and backend development.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800  px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-gray-800  px-3 py-1 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="bg-gray-800  px-3 py-1 rounded-full text-sm">
                  Next.js
                </span>
                <span className="bg-gray-800  px-3 py-1 rounded-full text-sm">
                  MongoDB
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="flex flex-col md:flex-row mb-16 relative">
          <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
            <div className="md:pr-8">
              <p className="text-[#D3E97A] font-medium mb-2">2019 - 2019</p>
              <h3 className="text-2xl font-bold text-white mb-2">
                Junior Front-end Developer
              </h3>
              <div className="flex items-center text-gray-400 mb-3">
                <MapPin size={16} className="mr-2" />
                <span>Innox Tech Nigeria, Ibadan</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-[#D3E97A]">
              <p className="mb-4">
                Started my professional journey building landing page websites
                for various clients. Gained foundational knowledge in web
                technologies and best practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800ext-gray-300 px-3 py-1 rounded-full text-sm">
                  HTML/CSS
                </span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  JavaScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mt-20 w-11/12 mx-auto container">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          EDUCATION
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-[#D3E97A]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  BSc in Animal Science
                </h3>
                <p className="text-[#D3E97A]">Obafemi Awolowo University</p>
              </div>
              <div className="text-right">
                <p>2015 - 2023</p>
                <p>Osun, Nigeria</p>
              </div>
            </div>
            <p className="text-gray-400">
              Animal Science graduate specializing in Breeding & Genetics, now a
              Full-Stack Developer. Leverages a strong foundation in data
              analysis, systematic problem-solving, and understanding complex
              systems from genetics to build efficient and scalable web
              applications. Proficient in the MERN stack (MongoDB, Express.js,
              React, Node.js) and driven by a hypothesis-driven approach to
              creating clean, user-focused digital solutions.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-[#D3E97A]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Full Stack Web Development
                </h3>
                <p className="text-[#D3E97A]">
                  TechStudio Academy Certification
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-400">2025</p>
              </div>
            </div>
            <p className="text-gray-400">
              Completed comprehensive curriculum covering frontend and backend
              technologies, including JavaScript, React, Node.js, and databases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
