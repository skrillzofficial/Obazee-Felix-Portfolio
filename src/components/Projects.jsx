import React, { useState, useEffect } from "react";
import { ExternalLink, Github, ArrowUpRight, Sparkles } from "lucide-react";
import linkshort from "../assets/Link shortner.png";
import sentient from "../assets/sentient.png";
import BetaHouse from "../assets/Beta H.png";
import Eventra from "../assets/Eventra.png";

const Projects = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Your event, our entry",
      description: "Eventra is the all-in-one event management platform that empowers you to seamlessly plan, organize, and execute any event, from large corporate conferences to deeply personal wedding celebrations. Features real-time analytics, multi-vendor coordination, and automated workflows.",
      image: Eventra,
      tag: "Solo-Build",
      year: "2025",
      role: "Full-stack developer",
      liveUrl: "https://eventra-teal.vercel.app/",
      githubUrl: "https://github.com/skrillzofficial/Eventra",
      tech: ["React", "Node.js", "MongoDB", "WebSocket"]
    },
    {
      id: 2,
      title: "Live like a local, not a tourist",
      description: "Solo-built BetaHouse, a functional Airbnb clone with secure JWT authentication, advanced property search, real-time booking system, integrated messaging, and comprehensive review functionality. Built with scalable microservices architecture.",
      image: BetaHouse,
      tag: "Featured",
      year: "2025",
      role: "Full-stack developer",
      client: "BetaHouse",
      liveUrl: "https://beta-house-airbnb-front-end-18at.vercel.app/",
      tech: ["React", "Express", "PostgreSQL", "AWS"]
    },
    {
      id: 3,
      title: "AI platform for agent battles",
      description: "Co-developed Sentient struggle, a platform where AI meets survival. Collaborated on enabling users to create and watch AI agents battle. Key contributions included developing the real-time spectator system and implementing the payment infrastructure with Stripe.",
      image: sentient,
      tag: "Collaborative",
      year: "2025",
      role: "Full-stack developer",
      client: "Sentient",
      liveUrl: "https://sentient-jet.vercel.app/",
      tech: ["React", "WebSocket", "Stripe", "AI"]
    }
  ];

  return (
    <section className="py-20 bg-black text-[#C7C7C7] relative overflow-hidden" id="work">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at center, #D3E97A 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.05}px)`
          }}
        ></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#D3E97A]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D3E97A]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="w-11/12 container mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-20 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white relative">
              FEATURED PROJECTS
              <div className="absolute -bottom-2 left-0 h-1 w-24 bg-[#D3E97A] animate-[slideRight_0.8s_ease-out]"></div>
            </h2>
          </div>
          <p className="text-lg max-w-2xl mt-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            Here are some of the selected projects that showcase my passion for full-stack development, 
            innovative solutions, and creating exceptional user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-10 items-start opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]`}
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2 relative group">
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-800/50 transition-all duration-500 hover:border-[#D3E97A]/50 hover:shadow-2xl hover:shadow-[#D3E97A]/10 overflow-hidden">
                  {/* Tag Badge */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="bg-black/50 px-4 py-2 rounded-full border border-[#D3E97A]/30 backdrop-blur-sm">
                      <span className="text-sm text-[#D3E97A] font-medium flex items-center gap-2">
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-xl h-80 bg-black/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Tech Stack on Hover */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-black/80 backdrop-blur-sm text-[#D3E97A] text-xs font-medium rounded-full border border-[#D3E97A]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D3E97A]/5 to-transparent blur-xl"></div>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full md:w-1/2 mt-10 md:mt-0">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 hover:text-[#D3E97A] transition-colors duration-300 cursor-default">
                  {project.title}
                </h3>
                
                <p className="mb-8 leading-relaxed text-gray-300 text-base">
                  {project.description}
                </p>

                {/* Project Info */}
                <div className="mb-8">
                  <p className="text-white font-semibold mb-4 text-sm tracking-wider flex items-center gap-2">
                    PROJECT INFO
                    <div className="h-px flex-1 bg-gradient-to-r from-gray-800 to-transparent"></div>
                  </p>
                  
                  <div className="space-y-3">
                    {project.client && (
                      <div className="flex justify-between items-center py-3 border-b border-gray-800/50 hover:border-[#D3E97A]/30 transition-colors duration-300">
                        <span className="text-gray-400">Client</span>
                        <span className="text-white font-medium">{project.client}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center py-3 border-b border-gray-800/50 hover:border-[#D3E97A]/30 transition-colors duration-300">
                      <span className="text-gray-400">Year</span>
                      <span className="text-white font-medium">{project.year}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-800/50 hover:border-[#D3E97A]/30 transition-colors duration-300">
                      <span className="text-gray-400">Role</span>
                      <span className="text-white font-medium">{project.role}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-800/50">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="group flex items-center gap-2 px-6 py-3 bg-[#D3E97A] text-black font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-[#D3E97A]/20 hover:-translate-y-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="group flex items-center gap-2 px-6 py-3 border-2 border-[#D3E97A]/30 text-[#D3E97A] font-semibold rounded-lg transition-all duration-300 hover:bg-[#D3E97A]/10 hover:border-[#D3E97A] hover:-translate-y-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                      <span>VIEW CODE</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-32 text-center opacity-0 animate-[fadeInUp_0.8s_ease-out_1.5s_forwards]">
          <div className="inline-block">
            <a 
              href="work"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D3E97A] to-[#b8cc5e] text-black font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#D3E97A]/30 hover:-translate-y-1"
            >
              <span className="relative z-10">View All Projects</span>
              <ArrowUpRight size={20} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;