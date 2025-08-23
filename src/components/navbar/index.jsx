import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-40 top-0 left-0 transition-colors ${
        isHome
          ? "bg-transparent"
          : "bg-gray-900/80 backdrop-blur-md shadow-md text-slate-50"
      }`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Logo"
          />
          <span className="text-2xl font-semibold text-white">Bappa</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-red-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1bsZ1dVf0sdUo3_gkYRVqlmL-Vr-UsSc1/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
          >
            Download CV
          </a>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden z-50 flex items-center justify-center p-2 rounded-lg text-white hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {/* Mobile Menu Container */}
      <div className="md:hidden absolute top-full left-0 w-full z-30">
        <div
          className={`bg-gray-900 text-white flex flex-col items-center space-y-6 py-8 transition-transform duration-300 ease-in-out ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="hover:text-red-600 transition-colors text-xl font-semibold"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="https://drive.google.com/file/d/1bsZ1dVf0sdUo3_gkYRVqlmL-Vr-UsSc1/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
