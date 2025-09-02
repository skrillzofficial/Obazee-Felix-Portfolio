import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-[#C7C7C7] py-4">
      <div className="container mx-auto w-11/12 flex justify-between items-center">
        <a href="/"><div className="text-xl font-bold">OBAZEE FELIX</div>
</a>
     
        <div className="hidden md:flex space-x-8">
          <a
            href="/work"
            className="hover:text-white transition-colors duration-300"
          >
            Work
          </a>
          <a
            href="/about"
            className="hover:text-white transition-colors duration-300"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-[#C7C7C7]"></span>
          <span className="w-6 h-0.5 bg-[#C7C7C7]"></span>
          <span className="w-6 h-0.5 bg-[#C7C7C7]"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden container mx-auto w-11/12 mt-4 pb-4">
          <div className="flex flex-col space-y-3">
            <a
              href="/work"
              className="hover:text-white  transition-colors duration-300"
            >
              Work
            </a>
            <a
              href="/about"
              className="hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="/contact"
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
