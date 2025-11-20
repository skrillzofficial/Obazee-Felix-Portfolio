import React, { useState } from "react";
import { Linkedin, Github, Mail, Loader, ArrowUpRight, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
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

      setTimeout(() => {
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");

      setTimeout(() => {
        setSubmitStatus(null);
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: "https://tinyurl.com/24fw857w",
      label: "LinkedIn"
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/skrillzofficial",
      label: "GitHub"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:Obazeefelixadetayo@gmail.com",
      label: "Email"
    }
  ];

  return (
    <section className="py-20 bg-white text-gray-900 relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gray-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gray-50 rounded-full blur-3xl opacity-40"></div>

      <div className="w-11/12 container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
            <span className="text-sm font-medium tracking-wider">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Let's Build <span className="font-medium">Something Great</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can collaborate 
            to create exceptional digital experiences.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Information */}
          <div className="w-full lg:w-2/5">
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 border border-gray-200 hover:border-gray-300 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <Mail className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email me at</p>
                    <a
                      href="mailto:Obazeefelixadetayo@gmail.com"
                      className="text-gray-900 font-medium hover:text-gray-700 transition-colors"
                    >
                      Obazeefelixadetayo@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-gray-200 hover:border-gray-300 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <MapPin className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Based in</p>
                    <p className="text-gray-900 font-medium">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              {/* Resume Download */}
              <div className="p-6 bg-gray-50 border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">Looking for my resume?</h3>
                <p className="text-sm text-gray-600 mb-4">Download my CV to learn more about my experience and skills.</p>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-700 transition-colors"
                >
                  <span>Download Resume</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <p className="text-sm font-medium text-gray-900">Follow my work</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200 hover:border-gray-300 transition-all duration-300"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-white border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } px-4 py-3 transition-colors duration-300 focus:border-gray-900 focus:outline-none`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-white border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } px-4 py-3 transition-colors duration-300 focus:border-gray-900 focus:outline-none`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-white border ${
                    errors.subject ? "border-red-500" : "border-gray-300"
                  } px-4 py-3 transition-colors duration-300 focus:border-gray-900 focus:outline-none`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`w-full bg-white border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } px-4 py-3 transition-colors duration-300 focus:border-gray-900 focus:outline-none resize-none`}
                  placeholder="Tell me about your project..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-700">
                  Message sent successfully! I'll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700">
                  Sorry, there was an error sending your message. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white font-medium py-4 px-6 flex items-center justify-center hover:bg-gray-800 transition-all duration-300 border border-gray-900"
              >
                {isSubmitting ? (
                  <>
                    <Loader size={18} className="animate-spin mr-2" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowUpRight size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Obazee Felix. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Connect;