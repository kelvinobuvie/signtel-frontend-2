import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // scroll threshold
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header className="flex justify-between px-2 items-center lg:px-16 backdrop-blur-2xl shadow-md fixed top-0 left-0 right-0 z-50 h-16 w-screen">
        <div className="flex space-x-2 items-center w-full px-2 md:px-8 lg:px-16">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-50"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="text-black" size={28} />
            ) : (
              <Menu className="text-white" size={28} />
            )}
          </button>

          {/* Logo */}
          <div className="logo text-base font-bold justify-center items-center  flex font-Poppins md:text-sm lg:text-2xl">
            <span className="text-orange">Signtel</span>
            <span> </span>
            <span className="text-green"> On-Demand</span>
          </div>

          {/* Desktop nav */}
          <nav
            className={`hidden md:flex text-lg items-center justify-center font-sans ${
              scrolled ? "text-green" : "text-white"
            } md:text-base lg:text-base`}
          >
            <a
              href="#home"
              className="hover:bg-green px-4 py-2 rounded-lg transition duration-500"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:bg-green px-4 py-2 rounded-lg transition duration-500"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:bg-green px-4 py-2 rounded-lg transition duration-500"
            >
              Become a Driver
            </a>
            <a
              href="#contact"
              className="hover:bg-green px-4 py-2 transition duration-500"
            >
              About
            </a>
          </nav>
        </div>

        {/* Right side nav */}
        <nav
          className={`flex lg:gap-6 items-center justify-center font-sans ${
            scrolled ? "text-green" : "text-white"
          }`}
        >
          <a
            href="#home"
            className="transition duration-500 hover:text-orange ease-in-out text-open-sans text-base py-1 px-3 rounded-md font-medium"
          >
            help
          </a>
          <a
            href="#contact"
            className="transition duration-500 hover:text-green hover:text-lg text-orange text-base py-2 px-2 font-semibold"
          >
            Login
          </a>
        </nav>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="fixed inset-0 bg-green-100 h-screen flex flex-col gap-6 text-2xl text-black z-40">
            <div className="mt-12 px-4 flex flex-col">
              <a
                className="py-2 px-2 hover:bg-orange hover:text-white"
                href="#home"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                className="py-2 px-2 hover:bg-orange hover:text-white"
                href="#about"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                className="py-2 px-2 hover:bg-orange hover:text-white"
                href="#contact"
                onClick={toggleMenu}
              >
                Become a Driver
              </a>
              <a
                className="py-2 px-2 hover:bg-orange hover:text-white"
                href="#contact"
                onClick={toggleMenu}
              >
                About
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
