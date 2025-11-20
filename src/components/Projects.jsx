import React, { useState, useEffect } from "react";
import { ExternalLink, Github, ArrowUpRight, Calendar, User, Building } from "lucide-react";
import linkshort from "../assets/Link shortner.png";
import sentient from "../assets/sentient.png";
import BetaHouse from "../assets/Beta H.png";
import Eventra from "../assets/Eventra.png";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Eventra",
      subtitle: "Your event, our entry",
      description: "Eventra is the all-in-one event management platform that empowers you to seamlessly plan, organize, and execute any event, from large corporate conferences to deeply personal wedding celebrations.",
      image: Eventra,
      tag: "Solo Build",
      year: "2025",
      role: "Full-stack Developer",
      liveUrl: "https://eventra-teal.vercel.app/",
      githubUrl: "https://github.com/skrillzofficial/Eventra",
      tech: ["React", "Node.js", "MongoDB", "WebSocket"],
      category: "Web Platform"
    },
    {
      id: 2,
      title: "BetaHouse",
      subtitle: "Live like a local, not a tourist",
      description: "Solo-built Airbnb clone with secure JWT authentication, advanced property search, real-time booking system, integrated messaging, and comprehensive review functionality.",
      image: BetaHouse,
      tag: "Featured",
      year: "2025",
      role: "Full-stack Developer",
      client: "BetaHouse",
      liveUrl: "https://beta-house-airbnb-front-end-18at.vercel.app/",
      tech: ["React", "Express", "PostgreSQL", "AWS"],
      category: "Marketplace"
    },
    {
      id: 3,
      title: "Sentient",
      subtitle: "AI platform for agent battles",
      description: "Co-developed platform where AI meets survival. Collaborated on enabling users to create and watch AI agents battle with real-time spectator system and payment infrastructure.",
      image: sentient,
      tag: "Collaborative",
      year: "2025",
      role: "Full-stack Developer",
      client: "Sentient",
      liveUrl: "https://sentient-jet.vercel.app/",
      tech: ["React", "WebSocket", "Stripe", "AI"],
      category: "AI Platform"
    }
  ];

  const getTagColor = (tag) => {
    switch (tag) {
      case "Featured": return "bg-gray-900 text-white";
      case "Solo Build": return "bg-gray-100 text-gray-900";
      case "Collaborative": return "bg-gray-100 text-gray-900";
      default: return "bg-gray-100 text-gray-900";
    }
  };

  return (
    <section className="py-20 bg-white text-gray-900 relative overflow-hidden" id="work">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, transparent 79px, #000 79px, #000 81px, transparent 81px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="w-11/12 container mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
            <span className="text-sm font-medium tracking-wider">SELECTED WORK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Featured <span className="font-medium">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A curated selection of projects showcasing full-stack development expertise, 
            innovative solutions, and user-centered design principles.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative ${
                index % 2 === 0 ? '' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Image Container */}
                <div className="w-full lg:w-7/12 relative">
                  <div className="relative overflow-hidden bg-gray-50 border border-gray-200">
                    {/* Image */}
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1.5 text-xs font-medium tracking-wide ${getTagColor(project.tag)}`}>
                        {project.tag}
                      </span>
                    </div>

                    {/* Tech Stack */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-700 text-xs font-medium border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-500 text-xs font-medium border border-gray-200">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Project Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                      <div className="w-px h-4 bg-gray-300"></div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{project.role}</span>
                      </div>
                      {project.client && (
                        <>
                          <div className="w-px h-4 bg-gray-300"></div>
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            <span>{project.client}</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-lg text-gray-600 font-light italic">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="group/btn flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium transition-all duration-300 hover:bg-gray-800 border border-gray-900"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="group/btn flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium border border-gray-300 transition-all duration-300 hover:border-gray-900 hover:bg-gray-50"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < projects.length - 1 && (
                <div className="hidden lg:block absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-gray-600 max-w-md">
              Interested in seeing more? Explore the complete collection of my work and case studies.
            </p>
            <a 
              href="/work"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-medium transition-all duration-300 hover:bg-gray-800 border border-gray-900"
            >
              <span>View All Projects</span>
              <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;