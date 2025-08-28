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
  const [errors, setErrors] = useState({});

  // Email validation pattern
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

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form 
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS 
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

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Information */}
          <div className="w-full lg:w-2/5">
          <div className="">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            LET'S CONNECT
          </h1>
        </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex justify-center items-center gap-2">
                  <h3 className="md:text-lg font">Say hello at</h3>
                  <a
                    href="mailto:Obazeefelixadetayo@gmail.com"
                    className="border font border-t-0 border-l-0 border-r-0 border-b-[#D3E97A] hover:text-[#D3E97A] transition-colors"
                  >
                    Obazeefelixadetayo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex justify-center items-center space-x-1.5">
                  <h3 className="md:text-lg font">For more info, here's my</h3>
                  <a
                    href=""
                    className="border font disabled border-t-0 border-l-0 border-r-0 border-b-[#D3E97A] hover:text-[#D3E97A] transition-colors"
                  >
                    resume
                  </a>
                </div>
              </div>

              <div className="pt-1">
                <div className="flex">
                  <a
                    href="https://tinyurl.com/24fw857w"
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-[#D3E97A] "
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/skrillzofficial"
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-[#D3E97A] "
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://x.com/skrillzofficial?s=21"
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-[#D3E97A] "
                  >
                    <X size={20} />
                  </a>
                  <a
                    href="https://tinyurl.com/26ecctka"
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
                <label htmlFor="name" className="block font mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-gray-900 border ${
                    errors.name ? "border-red-500" : "border-gray-800"
                  } rounded-lg px-4 py-3 `}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block font mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-gray-900 border ${
                    errors.email ? "border-red-500" : "border-gray-800"
                  } rounded-lg px-4 py-3`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block font mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-gray-900 border ${
                    errors.subject ? "border-red-500" : "border-gray-800"
                  } rounded-lg px-4 py-3 `}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block font mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full bg-gray-900 border ${
                    errors.message ? "border-red-500" : "border-gray-800"
                  } rounded-lg px-4 py-3 `}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-3 bg-green-900/30 border font border-green-800 rounded-lg text-green-300">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-3 bg-red-900/30 border border-red-800 font rounded-lg text-red-300">
                  Sorry, there was an error sending your message. Please try
                  again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#D3E97A] text-black font-semibold py-3 px-6 rounded-full flex items-center justify-center hover:bg-[#c5da70] transition-colors duration-300 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader size={18} className="animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    SUBMIT
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