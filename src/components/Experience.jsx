import React from "react";

const Experience = () => {
  return (
    <section className="py-20 bg-black text-[#C7C7C7]">
      <div className="w-11/12 container mx-auto">
        {/* Experience 1 */}
        <div className="flex flex-col md:flex-row mb-16 relative">
          <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0">
            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                EXPERIENCE
              </h1>
            </div>
            {/* Left column */}
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="text-2xl font font-bold">
                Fullstack Web Developer
              </h3>
              <p className="font-medium font">2025 - Present</p>
            </div>
            <p className=" text-[#D3E97A] font mb-3">
              TechStudio Academy, Lagos
            </p>
            <p className="mb-4 font">
              Developed full-stack applications for various clients, focusing on
              scalable solutions and user experience. Contributed to both
              frontend and backend development.
            </p>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="flex flex-col md:flex-row mb-16 relative">
          <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0">
            {/* Left column */}
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="text-2xl font font-bold">
                Junior Front-end Developer
              </h3>
              <p className=" font-medium font">2019 - 2019</p>
            </div>
            <p className="mb-3 text-[#D3E97A] font">
              Innox Tech Nigeria, Ibadan
            </p>
            <p className="mb-4 font">
              Started my professional journey building landing page websites for
              various clients. Gained foundational knowledge in web technologies
              and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
