import React, { useState } from "react";
import { X, Linkedin, Github, Instagram } from "lucide-react";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subjet: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this data to an API or email service
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-20 bg-black text-[#C7C7C7]" id="contact">
      <div className="w-11/12 container mx-auto">
        <div className="">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            LET'S CONNECT
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Information */}
          <div className="w-full lg:w-2/5">
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex justify-center items-center gap-2">
                  <h3 className=" md:text-lg">Say hello at</h3>
                  <p className=" border border-t-0 border-l-0 border-r-0 border-b-[#D3E97A]">
                    Obazeefelixadetayo@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex justify-center items-center space-x-1.5">
                  <h3 className=" md:text-lg ">
                    For more info, here’s my
                  </h3>
                  <a
                    href="#"
                    className="border border-t-0 border-l-0 border-r-0 border-b-[#D3E97A]"
                  >
                    resume
                  </a>
                </div>
              </div>

              <div className="pt-1">
                <div className="flex ">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-[#D3E97A] "
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-[#D3E97A] "
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://X.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-[#D3E97A] "
                    aria-label="LinkedIn"
                  >
                    <X size={20} />
                  </a>
                  <a
                    href="https://Instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-[#D3E97A] "
                    aria-label="LinkedIn"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D3E97A] focus:border-transparent"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3focus:outline-none focus:ring-2 focus:ring-[#D3E97A] focus:border-transparent"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Subject
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3focus:outline-none focus:ring-2 focus:ring-[#D3E97A] focus:border-transparent"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="message" className="blockmb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3focus:outline-none focus:ring-2 focus:ring-[#D3E97A] focus:border-transparent"
                  placeholder=""
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#D3E97A] text-black font-medium py-3 px-6 rounded-full flex items-center hover:bg-[#c5da70] transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
