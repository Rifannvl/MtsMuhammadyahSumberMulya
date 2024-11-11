import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle state menu
  };

  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" title="Home" className="flex">
              {" "}
              {/* Ganti a dengan Link */}
              <img
                className="w-auto h-8 lg:h-10"
                src="https://appmadrasah.kemenag.go.id/__statics/img/logo.png"
                alt="Logo"
              />
            </Link>
          </div>

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-gray-800 hover:bg-gray-800"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <div className="hidden md:flex md:items-center md:space-x-10">
            <Link
              to="/"
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              Home
            </Link>

            <Link
              to="/profile"
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              Profile
            </Link>

            <Link
              to="/resources"
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              Resources
            </Link>

            <Link
              to="/pricing"
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              Pricing
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <nav
          className={`min-h-screen px-4 py-10 text-center bg-black md:hidden transition-all duration-300 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="flex flex-col items-center mt-10 space-y-2">
            <Link
              to="/features"
              className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
            >
              Features
            </Link>

            <Link
              to="/solutions"
              className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
            >
              Solutions
            </Link>

            <Link
              to="/resources"
              className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
            >
              Resources
            </Link>

            <Link
              to="/pricing"
              className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
            >
              Pricing
            </Link>
          </nav>
        </nav>
      </div>
    </header>
  );
}
