import React, { useState, useEffect } from "react";
import { ExternalLink, Github, ArrowUpRight, Code2, Sparkles } from "lucide-react";
import linkshort from "../assets/Link shortner.png";
import sentient from "../assets/sentient.png";
import BetaHouse from "../assets/Beta H.png";
import Eventra from "../assets/Eventra.png";
import Inklune from "../assets/inklune.png"

const WorkComponent = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Eventra",
      subtitle: "Transform Every Moment into a Masterpiece",
      description: "An all-in-one event management ecosystem that seamlessly orchestrates corporate conferences, intimate wedding celebrations, and everything in between. Built with advanced registration systems, real-time analytics, and intelligent resource allocation to empower organizers and create unforgettable attendee experiences.",
      image: Eventra,
      tag: "Solo-Build",
      year: "2025",
      role: "Full-stack Developer",
      liveUrl: "https://eventra-teal.vercel.app/",
      githubUrl: "https://github.com/skrillzofficial/Eventra",
      tech: ["React", "Node.js", "MongoDB", "WebSocket"],
      highlights: ["Multi-vendor coordination", "Live attendee tracking", "Automated workflows"]
    },
    {
      id: 2,
      title: "LinkSphere",
      subtitle: "Beyond URL Shortening",
      description: "A sophisticated link management platform engineered with performance analytics at its core. Features real-time click tracking, geographic insights, device analytics, and QR code generation. Built with scalable architecture to handle enterprise-level traffic while maintaining sub-100ms response times.",
      image: linkshort,
      tag: "Conceptual",
      year: "2025",
      role: "Front-end Developer",
      liveUrl: "https://url-shortening-api-sable.vercel.app/",
      githubUrl: "https://github.com/skrillzofficial/URL-shortening-API",
      tech: ["React", "REST API", "Chart.js", "Redis"],
      highlights: ["Real-time analytics", "Custom aliases", "Performance dashboard"]
    },
    {
      id: 3,
      title: "BetaHouse",
      subtitle: "Live Like a Local, Not a Tourist",
      description: "A feature-rich vacation rental marketplace mirroring Airbnb's sophistication. Implements secure JWT authentication, advanced property search with multiple filters, real-time booking system, integrated messaging between hosts and guests, and a comprehensive review system. Built with scalable microservices architecture.",
      image: BetaHouse,
      tag: "Featured",
      year: "2025",
      role: "Full-stack Developer",
      client: "BetaHouse",
      liveUrl: "https://beta-house-airbnb-front-end-18at.vercel.app/",
      tech: ["React", "Express", "PostgreSQL", "AWS S3"],
      highlights: ["Smart search filters", "Secure payments", "Host dashboard"]
    },
    {
      id: 4,
      title: "EcoCommerce",
      subtitle: "Sustainable Shopping, Scalable Solutions",
      description: "Backend-focused e-commerce platform specializing in sustainable products. Architected with RESTful APIs, robust cart management, dynamic pricing engine, and cloud-based image optimization service. Features include inventory management, order processing, and comprehensive admin analytics.",
      image: "https://tinyurl.com/24bufw83",
      tag: "Challenge",
      year: "2025",
      role: "Backend Developer",
      liveUrl: "https://backend-authentication-and-crud-api.onrender.com/",
      githubUrl: "https://github.com/skrillzofficial/Backend-Authentication-and-CRUD-API",
      tech: ["Node.js", "MongoDB", "AWS", "JWT"],
      highlights: ["RESTful API", "Cloud storage", "Admin dashboard"]
    },
    {
      id: 5,
      title: "Sentient Struggle",
      subtitle: "Where AI Meets Survival",
      description: "An innovative AI agent battle platform where users create, deploy, and spectate autonomous AI agents in competitive survival scenarios. Co-developed key features including real-time WebSocket-powered spectator system, Stripe payment integration, agent customization interface, and live battle analytics dashboard.",
      image: sentient,
      tag: "Collaborative",
      year: "2025",
      role: "Full-stack Developer",
      client: "Sentient",
      liveUrl: "https://sentient-jet.vercel.app/",
      tech: ["React", "WebSocket", "Stripe", "TensorFlow.js"],
      highlights: ["Real-time battles", "AI agent creation", "Live spectator mode"]
    },
    {
      id: 6,
      title: "InkLune",
      subtitle: "Where Ideas Take Flight",
      description: "A modern blogging platform with rich text editing capabilities, markdown support, and social features. Built with full CRUD functionality, user authentication, image uploads, comment system, and content categorization. Features include author profiles, reading time estimates, and engagement analytics.",
      image: Inklune,
      tag: "Challenge",
      year: "2025",
      role: "Full-stack Developer",
      liveUrl: "https://inklune-zrq6.vercel.app",
      githubUrl: "",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      highlights: ["Rich text editor", "Social features", "Analytics"]
    }
  ];

  return (
    <section className="py-20 bg-black text-[#C7C7C7] relative overflow-hidden" id="work">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#D3E97A 1px, transparent 1px),  linear-gradient(90deg, #D3E97A 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.1}px)`
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D3E97A]/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D3E97A]/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto w-11/12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-10 items-start mb-20 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
          <div className="w-full md:w-1/3">
            <div className="inline-block">
              <h1 className="text-4xl md:text-5xl text-white font-bold mb-2 relative">
                MY WORK
                <div className="absolute -bottom-2 left-0 h-1 w-20 bg-[#D3E97A] animate-[slideRight_0.8s_ease-out]"></div>
              </h1>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <p className="text-lg leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease-out_0.3s_forwards]">
              A curated collection of projects showcasing expertise in full-stack development, 
              scalable architecture, and innovative problem-solving. Each solution demonstrates 
              a commitment to clean code, optimal performance, and exceptional user experience.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-10 items-start mb-32 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]`}
            style={{ animationDelay: `${index * 0.2}s` }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Image Container */}
            <div className="w-full md:w-1/2 relative group">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-800/50 transition-all duration-500 hover:border-[#D3E97A]/50 hover:shadow-2xl hover:shadow-[#D3E97A]/10">
                {/* Tag */}
                <div className="flex justify-between items-center mb-6">
                  <div className="bg-black/50 px-4 py-2 rounded-full border border-[#D3E97A]/30">
                    <span className="text-sm text-[#D3E97A] font-medium flex items-center gap-2">
                      {project.tag}
                    </span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Code2 size={20} className="text-[#D3E97A]" />
                  </div>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden rounded-xl h-80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover Tech Stack */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-black/80 backdrop-blur-sm text-[#D3E97A] text-xs rounded-full border border-[#D3E97A]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-6 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D3E97A]"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="w-full md:w-1/2 mt-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 hover:text-[#D3E97A] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-[#D3E97A] text-lg mb-6 font-medium">
                {project.subtitle}
              </p>
              <p className="mb-8 leading-relaxed text-gray-300">
                {project.description}
              </p>

              {/* Project Info */}
              <div className="mb-6">
                <p className="text-white font-semibold mb-4 text-sm tracking-wider">PROJECT INFO</p>
                
                <div className="space-y-3">
                  {project.client && (
                    <div className="flex justify-between items-center py-3 border-b border-gray-800/50">
                      <span className="text-gray-400">Client</span>
                      <span className="text-white font-medium">{project.client}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center py-3 border-b border-gray-800/50">
                    <span className="text-gray-400">Year</span>
                    <span className="text-white font-medium">{project.year}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-800/50">
                    <span className="text-gray-400">Role</span>
                    <span className="text-white font-medium">{project.role}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-gray-800/50">
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
                    <span>CODE</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
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
            width: 5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WorkComponent;