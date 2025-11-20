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
  MapPin,
  Calendar,
  Award,
} from "lucide-react";
import cv from "../assets/Obazee_Felix_Tech_CV.pdf";

const AboutPage = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Palette className="w-5 h-5" />,
      items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
    },
    {
      category: "Backend",
      icon: <Server className="w-5 h-5" />,
      items: ["Node.js", "Express", "REST APIs"]
    },
    {
      category: "Tools",
      icon: <Cpu className="w-5 h-5" />,
      items: ["Git", "Figma", "jQuery"]
    },
    {
      category: "Database",
      icon: <Database className="w-5 h-5" />,
      items: ["MongoDB"]
    }
  ];

  return (
    <section className="py-20 bg-white text-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gray-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gray-50 rounded-full blur-3xl opacity-40"></div>

      <div className="w-11/12 container mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
            <span className="text-sm font-medium tracking-wider">ABOUT ME</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            From Science to <span className="font-medium">Software</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A unique journey from animal genetics to full-stack development, 
            combining analytical thinking with creative problem-solving.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
          {/* Left Column - Image */}
          <div className="w-full lg:w-2/5">
            <div className="relative">
              <div className="bg-gray-50 border border-gray-200">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={myimg}
                    alt="Obazee Felix"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Location Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 px-6 py-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Lagos, Nigeria</div>
                    <div className="text-xs text-gray-500">Based here</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-3/5 space-y-8">
            {/* Introduction */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a full-stack developer from Lagos, Nigeria, passionate about 
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

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900 mb-1">20+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900 mb-1">2+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900 mb-1">Full</div>
                <div className="text-sm text-gray-600">Stack</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900 mb-1">20+</div>
                <div className="text-sm text-gray-600">Clients</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-300 border border-gray-900"
              >
                <Download className="w-5 h-5" />
                <span>DOWNLOAD RESUME</span>
              </a>

              <div className="flex gap-3">
                <a
                  href="https://tinyurl.com/24fw857w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200 transition-all duration-300"
                >
                  <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/skrillzofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200 transition-all duration-300"
                >
                  <img src={github} alt="GitHub" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="py-16 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Header */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                Education & <span className="font-medium">Background</span>
              </h2>
            </div>

            {/* Timeline */}
            <div className="w-full lg:w-2/3">
              <div className="space-y-12 relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                {/* Education Item 1 */}
                <div className="flex relative">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center z-10">
                    <Award className="text-white w-6 h-6" />
                  </div>
                  <div className="ml-8 flex-1">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      Full Stack Development Program
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="font-medium">TechStudio Academy</span>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>2025</span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Comprehensive training in modern web development including React, 
                      Node.js, databases, and deployment strategies. Focused on building 
                      production-ready applications.
                    </p>
                  </div>
                </div>

                {/* Education Item 2 */}
                <div className="flex relative">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 border border-gray-300 rounded-full flex items-center justify-center z-10">
                    <BookOpen className="text-gray-700 w-6 h-6" />
                  </div>
                  <div className="ml-8 flex-1">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      BSc in Animal Science
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="font-medium">Obafemi Awolowo University</span>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>2016 - 2023</span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Developed strong analytical and problem-solving skills through 
                      rigorous scientific training, data analysis, and research methodology. 
                      This foundation in systematic thinking translates directly to software architecture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="py-16 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Header */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                Technical <span className="font-medium">Capabilities</span>
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                I am a dedicated learner, constantly expanding my skill set to 
                tackle new challenges and stay at the forefront of industry trends.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                        {skill.icon}
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">{skill.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200 hover:border-gray-300 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;