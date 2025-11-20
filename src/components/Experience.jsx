import React from "react";
import { Calendar, MapPin, ArrowUpRight, Code, Palette } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Fullstack Web Developer",
      company: "TechStudio Academy",
      location: "Lagos, Nigeria",
      period: "2025 - Present",
      description: "Developed full-stack applications for various clients, focusing on scalable solutions and user experience. Contributed to both frontend and backend development.",
      type: "Full-time",
      category: "Education & Development",
      skills: ["React", "Node.js", "MongoDB", "TypeScript"]
    },
    {
      title: "Junior Front-end Developer",
      company: "Innox Tech Nigeria",
      location: "Ibadan, Nigeria",
      period: "2019 - 2019",
      description: "Started my professional journey building landing page websites for various clients. Gained foundational knowledge in web technologies and best practices.",
      type: "Internship",
      category: "Professional Start",
      skills: ["HTML", "CSS", "JavaScript", "jQuery"]
    }
  ];

  return (
    <section className="py-20 bg-white text-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gray-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gray-50 rounded-full blur-3xl opacity-40"></div>

      <div className="w-11/12 container mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
            <span className="text-sm font-medium tracking-wider">PROFESSIONAL JOURNEY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Work <span className="font-medium">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My path through the tech industry, from foundational frontend development 
            to full-stack expertise and continuous learning.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="flex relative mb-12 last:mb-0 group">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center z-10 group-hover:bg-gray-800 transition-colors duration-300">
                  {index === 0 ? (
                    <Code className="text-white w-6 h-6" />
                  ) : (
                    <Palette className="text-white w-6 h-6" />
                  )}
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-gray-50 border border-gray-200 p-8 group-hover:border-gray-300 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-4">
                      <div>
                        <h3 className="text-2xl font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-600 mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Period & Type */}
                      <div className="flex flex-col items-start lg:items-end gap-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                        <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium border border-gray-200">
                        {exp.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1.5 bg-white text-gray-700 text-sm font-medium border border-gray-300 hover:border-gray-400 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Connecting Line (except for last item) */}
                  {index < experiences.length - 1 && (
                    <div className="absolute -bottom-6 left-6 w-0.5 h-6 bg-gray-200"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Progress Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-gray-50 border border-gray-200">
            <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></div>
            <p className="text-gray-600">
              Continuously expanding skills and taking on new challenges in full-stack development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;