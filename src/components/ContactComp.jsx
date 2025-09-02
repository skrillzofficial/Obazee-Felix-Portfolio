import React from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";

const ContactComp = () => {
  return (
    <section id="contact" className="py-20 bg-black text-[#C7C7C7] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#D3E97A]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D3E97A]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container mx-auto w-11/12 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start mb-16">
          {/* Left side */}
          <div className="w-full md:w-1/3">
            <h1 className="text-3xl md:text-4xl text-white font-bold">
              GET IN TOUCH
            </h1>
          </div>

          {/* Right side */}
          <div className="w-full md:w-2/3">
            <p className="text-lg mb-8">
              I'm currently available for freelance work and open to new opportunities. 
              If you have a project in mind or just want to say hello, feel free to reach out.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">CONTACT INFORMATION</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#D3E97A]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-[#D3E97A] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <a href="mailto:obazeefelix8@gmail.com" className="text-[#C7C7C7] hover:text-[#D3E97A] transition-colors duration-300">
                      obazeefelixadetayo@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#D3E97A]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-[#D3E97A] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Location</h3>
                    <p className="text-[#C7C7C7]">Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#D3E97A]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-[#D3E97A] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Phone</h3>
                    <p className="text-[#C7C7C7]">+234 7046211756</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">FOLLOW ME</h2>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/skrillzofficial" 
                  className="w-12 h-12 rounded-full bg-[#0A0A0A] flex items-center justify-center border border-[#484848] hover:bg-[#D3E97A] hover:text-black transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://tinyurl.com/24fw857w" 
                  className="w-12 h-12 rounded-full bg-[#0A0A0A] flex items-center justify-center border border-[#484848] hover:bg-[#D3E97A] hover:text-black transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://x.com/skrillzofficial?s=21" 
                  className="w-12 h-12 rounded-full bg-[#0A0A0A] flex items-center justify-center border border-[#484848] hover:bg-[#D3E97A] hover:text-black transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-[#D3E97A]/10 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-[#D3E97A]/20 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-[#D3E97A]/30 flex items-center justify-center">
                    <MessageCircle className="text-[#D3E97A] w-16 h-16" />
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#D3E97A] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#D3E97A] rounded-full opacity-30 animate-pulse delay-1000"></div>
              <div className="absolute top-12 -left-6 w-5 h-5 bg-[#D3E97A] rounded-full opacity-40 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h3 className="text-xl text-white font-semibold mb-6">Ready to start a project together?</h3>
        </div>
      </div>
    </section>
  );
};

export default ContactComp;