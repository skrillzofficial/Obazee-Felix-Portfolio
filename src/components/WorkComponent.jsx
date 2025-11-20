import React, { useState, useEffect } from "react";
import { ExternalLink, Github, ArrowUpRight, Code2, Calendar, User, Building } from "lucide-react";
import linkshort from "../assets/Link shortner.png";
import sentient from "../assets/sentient.png";
import BetaHouse from "../assets/Beta H.png";
import Eventra from "../assets/Eventra.png";
import Inklune from "../assets/inklune.png";

const WorkComponent = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Eventra",
      subtitle: "Transform Every Moment into a Masterpiece",
      description: "An all-in-one event management ecosystem that seamlessly orchestrates corporate conferences, intimate wedding celebrations, and everything in between. Built with advanced registration systems, real-time analytics, and intelligent resource allocation.",
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
      title: "LinkSphere",
      subtitle: "Beyond URL Shortening",
      description: "A sophisticated link management platform engineered with performance analytics at its core. Features real-time click tracking, geographic insights, device analytics, and QR code generation.",
      image: linkshort,
      tag: "Conceptual",
      year: "2025",
      role: "Front-end Developer",
      liveUrl: "https://url-shortening-api-sable.vercel.app/",
      githubUrl: "https://github.com/skrillzofficial/URL-shortening-API",
      tech: ["React", "REST API", "Chart.js", "Redis"],
      category: "Analytics Tool"
    },
    {
      id: 3,
      title: "BetaHouse",
      subtitle: "Live Like a Local, Not a Tourist",
      description: "A feature-rich vacation rental marketplace mirroring Airbnb's sophistication. Implements secure JWT authentication, advanced property search, real-time booking system, and integrated messaging.",
      image: BetaHouse,
      tag: "Featured",
      year: "2025",
      role: "Full-stack Developer",
      client: "BetaHouse",
      liveUrl: "https://beta-house-airbnb-front-end-18at.vercel.app/",
      tech: ["React", "Express", "PostgreSQL", "AWS S3"],
      category: "Marketplace"
    },
    {
      id: 4,
      title: "EcoCommerce",
      subtitle: "Sustainable Shopping, Scalable Solutions",
      description: "Backend-focused e-commerce platform specializing in sustainable products. Architected with RESTful APIs, robust cart management, dynamic pricing engine, and cloud-based image optimization service.",
      image: "https://tinyurl.com/24bufw83",
      tag: "Challenge",
      year: "2025",
      role: "Backend Developer",
      liveUrl: "https://backend-authentication-and-crud-api.onrender.com/",
      githubUrl: "https://github.com/skrillzofficial/Backend-Authentication-and-CRUD-API",
      tech: ["Node.js", "MongoDB", "AWS", "JWT"],
      category: "E-commerce"
    },
    {
      id: 5,
      title: "Sentient Struggle",
      subtitle: "Where AI Meets Survival",
      description: "An innovative AI agent battle platform where users create, deploy, and spectate autonomous AI agents in competitive survival scenarios. Features real-time WebSocket-powered spectator system.",
      image: sentient,
      tag: "Collaborative",
      year: "2025",
      role: "Full-stack Developer",
      client: "Sentient",
      liveUrl: "https://sentient-jet.vercel.app/",
      tech: ["React", "WebSocket", "Stripe", "TensorFlow.js"],
      category: "AI Platform"
    },
    {
      id: 6,
      title: "InkLune",
      subtitle: "Where Ideas Take Flight",
      description: "A modern blogging platform with rich text editing capabilities, markdown support, and social features. Built with full CRUD functionality, user authentication, and engagement analytics.",
      image: Inklune,
      tag: "Challenge",
      year: "2025",
      role: "Full-stack Developer",
      liveUrl: "https://inklune-zrq6.vercel.app",
      githubUrl: "",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      category: "Content Platform"
    }
  ];

  const getTagColor = (tag) => {
    switch (tag) {
      case "Featured": return "bg-gray-900 text-white";
      case "Solo Build": return "bg-gray-100 text-gray-900";
      case "Collaborative": return "bg-gray-100 text-gray-900";
      case "Conceptual": return "bg-gray-100 text-gray-900";
      case "Challenge": return "bg-gray-100 text-gray-900";
      default: return "bg-gray-100 text-gray-900";
    }
  };

  return (
    <section className="py-20 bg-white text-gray-900 relative overflow-hidden" id="work">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, transparent 79px, #000 79px, #000 81px, transparent 81px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto w-11/12 max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
            <span className="text-sm font-medium tracking-wider">PORTFOLIO</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
            Selected <span className="font-medium">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A curated collection showcasing expertise in full-stack development, 
            scalable architecture, and innovative problem-solving across diverse domains.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-start`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Container */}
              <div className="w-full lg:w-7/12">
                <div className="relative bg-gray-50 border border-gray-200 group-hover:border-gray-300 transition-all duration-500">
                  {/* Image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Tag */}
                  <div className="absolute top-6 left-6">
                    <span className={`px-4 py-2 text-sm font-medium tracking-wide ${getTagColor(project.tag)}`}>
                      {project.tag}
                    </span>
                  </div>

                  {/* Tech Stack */}
                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-gray-700 text-xs font-medium border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-gray-500 text-xs font-medium border border-gray-200">
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
                    <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-light italic">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Category */}
                  <div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium border border-gray-200">
                      {project.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="group/btn flex items-center gap-3 px-6 py-3 bg-gray-900 text-white font-medium transition-all duration-300 hover:bg-gray-800 border border-gray-900"
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
                        className="group/btn flex items-center gap-3 px-6 py-3 bg-white text-gray-900 font-medium border border-gray-300 transition-all duration-300 hover:border-gray-900 hover:bg-gray-50"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 pt-12 border-t border-gray-200">
          <p className="text-gray-600 mb-6">Interested in collaborating on your next project?</p>
          <a 
            href="#contact"
            className="group inline-flex items-center gap-3 px-12 py-5 bg-gray-900 text-white text-lg font-medium hover:bg-gray-800 transition-all duration-300 border border-gray-900"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkComponent;