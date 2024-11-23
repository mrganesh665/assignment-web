import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
       
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              WashMate
            </a>
          </div>

      
          <div className="hidden md:flex space-x-8">
            <a
              href="#hero"
              className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-blue-200"
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-blue-200"
            >
              Services
            </a>
            <a
              href="#blog"
              className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-blue-200"
            >
              Blog
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-200"
            >
              FAQ
            </a>

            <a
              href="#locations"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-200"
            >
              Locations
            </a>

            <a
              href="#contact"
              className="block px-6 py-2 rounded-full text-base text-white bg-blue-700  hover:bg-blue-200"
            >
              Contact
            </a>
          </div>

       
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

  
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a
              href="#hero"
              className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-blue-200"
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-blue-200"
            >
              Services
            </a>
            <a
              href="#blog"
              className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-blue-200"
            >
              Blog
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-200"
            >
              FAQ
            </a>

            <a
              href="#locations"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-200"
            >
              Locations
            </a>

            <a
              href="#contact"
              className="block px-3 py-2 rounded-full bg-blue-700 text-white text-base font-medium hover:bg-blue-200"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
