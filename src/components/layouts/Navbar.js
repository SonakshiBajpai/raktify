import React from "react";
import { Phone, Mail, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font bg-white shadow-lg">
      {/* Main navbar */}
      <div className="flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="w-48 h-12 object-contain" src="./rachitlogo.png" alt="Rachit Financial Services logo" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href='/' className="mr-8 hover:text-blue-600 font-semibold">Home</a>
          <a href='/about' className="mr-8 hover:text-blue-600 font-semibold">How We Work</a>
          <a href='/services' className="mr-8 hover:text-blue-600 font-semibold">Services</a>
          <a href='/resources' className="mr-8 hover:text-blue-600 font-semibold">Resources</a>
          
        </nav>
        <a href='/contact'>
          <button className="inline-flex items-center bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-full text-white mt-4 md:mt-0 transition-all duration-300 shadow-md hover:shadow-lg">
           Contact
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
