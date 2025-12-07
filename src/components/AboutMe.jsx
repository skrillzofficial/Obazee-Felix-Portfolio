import React from "react";
import myimg from "../assets/Obazee Corporate.jpeg";
import { ArrowRight, Code, Palette, Database, Zap } from "lucide-react";

const AboutMe = () => {
  const skills = [
    { icon: <Code className="w-5 h-5" />, name: "Frontend", description: "React, TypeScript, Next.js" },
    { icon: <Database className="w-5 h-5" />, name: "Backend", description: "Node.js, PostgreSQL, MongoDB" },
    { icon: <Palette className="w-5 h-5" />, name: "Design", description: "Figma, UI/UX, Prototyping" },
    { icon: <Zap className="w-5 h-5" />, name: "DevOps", description: "AWS, Vercel, CI/CD" }
  ];

  return (
    <section className="py-20 bg-white text-gray-900 relative overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gray-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gray-50 rounded-full blur-3xl opacity-40"></div>

      <div className="w-11/12 container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column - Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-full">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <span className="text-sm font-medium tracking-wider">ABOUT ME</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light tracking-tight">
                From Data Science to<br />
                <span className="font-medium">Digital Solutions</span>
              </h1>
            </div>

            {/* Main Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a full-stack developer based in Lagos, Nigeria, passionate about 
                creating digital experiences that blend technical excellence with 
                intuitive design. I specialize in building scalable applications 
                from concept to deployment.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                My journey into technology began in Animal Genetics and Breeding, 
                where I developed a strong foundation in data analysis and systematic 
                problem-solving. I discovered my true passion lies in building the 
                tools that power innovation rather than just using them.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Today, I apply that analytical mindset to full-stack development, 
                ensuring every application is architecturally sound, performant, 
                and delivers exceptional user experiences.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {skills.map((skill, index) => (
                <div key={index} className="group p-4 border border-gray-200 hover:border-gray-300 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      {skill.icon}
                    </div>
                    <h3 className="font-medium text-gray-900">{skill.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="/about"
                className="group inline-flex items-center gap-3 text-gray-900 font-medium hover:text-gray-700 transition-all duration-300 border-b border-gray-900 pb-1 hover:border-gray-700"
              >
                <span>EXPLORE MY JOURNEY</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-gray-50 border border-gray-200">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={myimg} 
                    alt="Obazee Felix" 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Experience Badge */}
                <div className="absolute top-6 left-6 bg-white border border-gray-200 px-4 py-3 shadow-sm">
                  <div className="text-sm font-medium text-gray-900">2+ Years</div>
                  <div className="text-xs text-gray-500">Development</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t border-r border-gray-900"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b border-l border-gray-900"></div>

              {/* Floating Text */}
              <div className="absolute -bottom-8 right-8 bg-white border border-gray-200 px-6 py-4">
                <div className="text-sm font-medium text-gray-900">Based in Lagos</div>
                <div className="text-xs text-gray-500">Working Remotely</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">20+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">2+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">20+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">Full</div>
              <div className="text-sm text-gray-600">Stack Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;