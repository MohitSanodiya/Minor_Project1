// components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ logoRef }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Department", "Contact Us"];

  return (
    <nav className="w-full bg-blue-600 py-4 shadow-xl fixed top-0 z-50 nav-slide">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div
          ref={logoRef}
          className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide drop-shadow-md"
        >
          Kampus see
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-lg font-medium">
          {navLinks.map((name, index) => (
            <Link
              key={index}
              to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
              className={`cursor-pointer text-white hover:text-yellow-300 transition-all duration-300 ${
                location.pathname === (name === "Home" ? "/" : `/${name.toLowerCase()}`)
                  ? "border-b-2 border-yellow-300 pb-1"
                  : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-4 pt-2 space-y-2">
          {navLinks.map((name, index) => (
            <Link
              key={index}
              to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-white hover:text-yellow-300 transition-all duration-300 ${
                location.pathname === (name === "Home" ? "/" : `/${name.toLowerCase()}`)
                  ? "border-b-2 border-yellow-300 pb-1"
                  : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
