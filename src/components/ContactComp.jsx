import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  MessageCircle,
  ArrowUpRight,
  Calendar,
} from "lucide-react";

const ContactComp = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "obazeefelixadetayo@gmail.com",
      href: "mailto:obazeefelixadetayo@gmail.com",
      description: "Fastest response time",
      action: "Send message",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+234 704 621 1756",
      href: "tel:+2347046211756",
      description: "Call or WhatsApp",
      action: "Call now",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Lagos, Nigeria",
      description: "Remote collaboration",
      action: "View map",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/skrillzofficial",
      label: "GitHub",
      handle: "@skrillzofficial",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
      handle: "Obazee Felix",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      href: "https://x.com/dr_codee?s=21",
      label: "Twitter",
      handle: "@Dr_Codee",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-white text-gray-900 relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 79px, #000 79px, #000 81px, transparent 81px),
                           linear-gradient(transparent 79px, #000 79px, #000 81px, transparent 81px)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="container mx-auto w-11/12 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
            <span className="text-sm font-medium tracking-wider">CONTACT</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
            Let's Work <span className="font-medium">Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your next project to life? Let's discuss how we can
            create something exceptional together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Contact Methods */}
          {contactMethods.map((method, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 border border-gray-200 p-8 h-full transition-all duration-500 group-hover:border-gray-300 group-hover:bg-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {method.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {method.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-900 font-medium">{method.value}</p>
                  {method.href && (
                    <a
                      href={method.href}
                      className="group/btn inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <span className="text-sm font-medium">
                        {method.action}
                      </span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Social & Calendar */}
          <div className="space-y-12">
            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-8">
                Connect Online
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 border border-gray-200 hover:border-gray-300 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-medium text-gray-900">
                          {social.label}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-gray-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <p className="text-sm text-gray-600">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Calendar CTA */}
            <div className="bg-gray-900 text-white p-8">
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="w-6 h-6" />
                <h3 className="text-lg font-medium">Schedule a Call</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Let's find time to discuss your project in detail. Book a
                meeting that works for your schedule.
              </p>
              <a
                href="#"
                className="group/btn inline-flex items-center gap-2 text-white font-medium hover:text-gray-200 transition-colors"
              >
                <span>View Calendar</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 pt-12 border-t border-gray-200">
          <p className="text-gray-600 mb-6">
            Ready to start your next project?
          </p>
          <a
            href="mailto:obazeefelixadetayo@gmail.com"
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

export default ContactComp;
