import React from "react";
import myimg from "../assets/My image .png";

const AboutMe = () => {
  return (
    <section className="py-20 bg-black text-[#C7C7C7]" id="about">
      <div className="w-11/12 container mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left side */}
          <div className="w-full md:w-1/3">
            <h1 className="text-4xl hidden md:block md:text-5xl font-bold text-white">
              ABOUT ME
            </h1>
          </div>

          {/* Right side*/}
          <div className="w-full md:w-2/3">
            <div className="space-y-6">
              <p className="text-xl font leading-relaxed">
                I'm a full-stack developer from Lagos, Nigeria, who loves the
                entire journey of creation. I thrive on turning concepts into
                reality, architecting robust APIs on the back-end and building
                engaging, responsive experiences on the front-end.
              </p>

              <p className="text-xl font hidden md:block leading-relaxed">
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

              <div className="w-30">
                <a
                  href="/about"
                  className="flex items-center gap-2 text-[#D3E97A] text-sm border border-t-0 border-l-0 border-r-0 border-b-[#D3E97A]"
                >
                  <span>MORE ABOUT ME</span>
                </a>
              </div>
            </div>
            {/* image */}
            <div className="md:w-1/2 flex justify-center md:justify-end pt-10">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 md:hidden rounded-lg overflow-hidden border border-[#333]">
                  {/*My image */}
                  <div className="w-full h-full  flex items-center justify-center">
                    <img src={myimg} alt="" />
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

export default AboutMe;
