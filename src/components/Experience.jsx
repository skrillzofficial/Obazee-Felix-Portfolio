import React from "react";
import { Calendar, MapPin, Code, Users, Palette } from "lucide-react";

const experiences = [
  {
    title: "Freelance Full-Stack Developer",
    company: "Self-employed",
    location: "Lagos, Nigeria · Remote",
    period: "2025 – Present", 
    type: "Freelance",
    icon: Code,
    highlights: [
      "Build and ship full-stack web apps end to end, from API design to deployment",
      "Delivered Hive (e-commerce), Eventra (event management) and BetaHouse (property rental)",
      "Co-developed Sentient, a real-time AI agent battle platform with payments",
    ],
    skills: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"], 
  },
  {
    title: "AI Training Lead",
    company: "Alchemy AI Training (Co-lead)",
    location: "Remote",
    period: "2025 – Present", 
    type: "Leadership",
    icon: Users,
    highlights: [
      "Trained and supported communities of 3,000+ people for AI work",
      "People trained have collectively earned $100K+",
      "Platforms covered: Outlier/Scale AI, Mercor, Handshake and RWS",
    ],
    skills: ["Training & Mentoring", "Community Leadership", "AI Data Work"],
  },
  {
    title: "Junior Front-End Developer",
    company: "Innox Tech Nigeria",
    location: "Ibadan, Nigeria",
    period: "2019",
    type: "Internship",
    icon: Palette,
    highlights: [
      "Built responsive landing pages and websites for client businesses",
      "Learnt the foundations of web development and client delivery",
    ],
    skills: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
];

const Experience = () => {
  return (
    <section className="py-20 bg-white text-gray-900 relative overflow-hidden" id="experience">
      <div className="w-11/12 container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
            <span className="text-sm font-medium tracking-wider">PROFESSIONAL JOURNEY</span>
          </div>
          <h2 className="text-4xl md:text-5xl tracking-wide mb-6">Work Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building for the web since 2019, from landing pages to full-stack products,
            alongside leading AI training communities.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200"></div>

          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div key={exp.title} className="flex relative mb-12 last:mb-0 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center z-10">
                  <Icon className="text-white w-5 h-5" />
                </div>

                <div className="ml-6 md:ml-8 flex-1 bg-gray-50 border border-gray-200 p-6 md:p-8 group-hover:border-gray-400 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl tracking-wide text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-600">
                        <span className="font-medium">{exp.company}</span>
                        <span className="flex items-center gap-1 text-sm">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex md:flex-col items-center md:items-end gap-2">
                      <span className="flex items-center gap-2 text-sm font-medium text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((point) => (
                      <li key={point} className="flex gap-3 text-gray-600 leading-relaxed">
                        <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-900"></span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-white text-gray-700 text-sm font-medium border border-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;