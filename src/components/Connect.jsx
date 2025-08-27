import React, { useState } from "react";
import { X, Linkedin, Github, Instagram, Mail, Loader } from "lucide-react";
import emailjs from "emailjs-com";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS credentials - you need to complete these
      const serviceID = "service_tkcteca";
      const templateID = "template_y7q38am";
      const userID = "G9VrsnJ4gKxaJPO20";

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "Obazeefelixadetayo@gmail.com",
        },
        userID
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset status after 2 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");

      // Reset status after 2 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
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
                  <h3 className="md:text-lg">Say hello at</h3>
                  <a
                    href="mailto:Obazeefelixadetayo@gmail.com"
                    className="border border-t-0 border-l-0 border-r-0 border-b-[#D3E97A] hover:text-[#D3E97A] transition-colors"
                  >
                    Obazeefelixadetayo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex justify-center items-center space-x-1.5">
                  <h3 className="md:text-lg">For more info, here's my</h3>
                  <a
                    href="#"
                    className="border border-t-0 border-l-0 border-r-0 border-b-[#D3E97A] hover:text-[#D3E97A] transition-colors"
                  >
                    resume
                  </a>
                </div>
              </div>

              <div className="pt-1">
                <div className="flex">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-[#D3E97A] "
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-[#D3E97A] "
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-[#D3E97A] "
                  >
                    <X size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-[#D3E97A] "
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
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D3E97A] focus:border-transparent"
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
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D3E97A] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D3E97A] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D3E97A] focus:border-transparent"
                ></textarea>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-3 bg-green-900/30 border border-green-800 rounded-lg text-green-300">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-3 bg-red-900/30 border border-red-800 rounded-lg text-red-300">
                  Sorry, there was an error sending your message. Please try
                  again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#D3E97A] text-black font-medium py-3 px-6 rounded-full flex items-center justify-center hover:bg-[#c5da70] transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader size={18} className="animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail size={18} className="mr-2" />
                    Submit
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        <p className="pt-10 md:pt-0">
          &copy; {new Date().getFullYear()} Obazee Felix
        </p>
      </div>
    </section>
  );
};

export default Connect;
