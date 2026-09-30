import React from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
  ArrowUpRight,
  AtSign,
  Check,
  Calendar,
} from "lucide-react";

const EMAIL = "obazeefelixadetayo@gmail.com";
const BOOKING_URL = "https://cal.com/felix-adetayo-obazee-n9cekd/30min";

const contactMethods = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    description: "Best for project details and job offers",
    action: "Send an email",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "WhatsApp",
    value: "+234 905 671 8817",
    href: "https://wa.me/2349056718817",
    description: "Messages only, no calls please",
    action: "Chat on WhatsApp",
    external: true,
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Location",
    value: "Lagos, Nigeria",
    description: "Available for remote work worldwide",
  },
];

const socialLinks = [
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/felix-obazee-5436ba1b2/",
    label: "LinkedIn",
    handle: "Felix Obazee",
  },
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/skrillzofficial",
    label: "GitHub",
    handle: "@skrillzofficial",
  },
  {
    icon: <AtSign className="w-5 h-5" />,
    href: "https://x.com/Dr_codee",
    label: "X",
    handle: "@Dr_codee",
  },
];

const openTo = [
  "Full-time and contract full-stack roles (remote or Lagos)",
  "Freelance projects: web apps, SaaS, MVPs, e-commerce and business websites",
  "Research collaborations in genomics, bioinformatics and computational biology",
  "AI training partnerships and speaking",
];

const ContactComp = () => {
  return (
    <section id="contact" className="py-20 bg-white text-gray-900 relative overflow-hidden">

      <div className="container mx-auto w-11/12 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
            <span className="text-sm font-medium tracking-wider">CONTACT</span>
          </div>
          <h1 className="text-5xl md:text-7xl tracking-wide mb-6">Let's Work Together</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a project, a role or a collaboration in mind? Reach out; I usually
            reply within 24 hours.
          </p>
        </div>

        {/* Contact methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method) => {
            const Card = method.href ? "a" : "div";
            return (
              <Card
                key={method.title}
                {...(method.href && {
                  href: method.href,
                  ...(method.external && { target: "_blank", rel: "noopener noreferrer" }),
                })}
                className={`group bg-gray-50 border border-gray-200 p-8 flex flex-col transition-colors duration-300 ${
                  method.href ? "hover:border-gray-900 hover:bg-white" : ""
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center">
                    {method.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl tracking-wide text-gray-900">{method.title}</h2>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                </div>
                <p className="text-gray-900 font-medium break-all mb-4">{method.value}</p>
                {method.action && (
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    {method.action}
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                )}
              </Card>
            );
          })}
        </div>

        {/* Social links + What I'm open to */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div>
            <h2 className="text-3xl tracking-wide text-gray-900 mb-6">Connect Online</h2>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-white border border-gray-200 hover:border-gray-900 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-gray-900">{social.label}</span>
                    <p className="text-sm text-gray-600">{social.handle}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gray-900" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 text-white p-8 md:p-10 flex flex-col">
            <h2 className="text-3xl tracking-wide mb-6">What I'm Open To</h2>
            <ul className="space-y-4 mb-8">
              {openTo.map((item) => (
                <li key={item} className="flex gap-3 text-gray-300 leading-relaxed">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-white" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col sm:flex-row gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-4 font-medium hover:bg-gray-100 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Book a 30-min Call
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="group flex-1 inline-flex items-center justify-center gap-2 border border-white/40 text-white px-6 py-4 font-medium hover:border-white transition-colors"
              >
                Send an Email
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
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

export default ContactComp;