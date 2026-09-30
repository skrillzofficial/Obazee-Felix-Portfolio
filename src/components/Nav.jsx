import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled ? "border-gray-200 shadow-sm" : "border-transparent"
      }`}
    >
      <div className="container mx-auto w-11/12 flex justify-between items-center py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3" onClick={closeMenu}>
         <span className="font-display text-2xl tracking-wider text-gray-900">
            OBAZEE FELIX
          </span>
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Available for work
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-gray-700 hover:text-gray-900 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="group inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Hire me
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 -mr-2 text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-80 border-t border-gray-200" : "max-h-0"
        }`}
      >
        <div className="container mx-auto w-11/12 flex flex-col py-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="py-3 text-lg text-gray-800 border-b border-gray-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={closeMenu}
            className="mt-4 inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 font-medium"
          >
            Hire me <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;