import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-6 border-b shadow-sm bg-white">
      {/* Left Section: Logo & Browse */}
      <div className="flex items-center space-x-4">
        <img src="/Logo.png" alt="MyCourse.io" className="h-8" />
        <button className="text-gray-700 font-medium flex items-center">
          Browse
          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      {/* Middle Section: Search Bar */}
      <div className="flex items-center w-1/3">
        <input
          type="text"
          placeholder="Search for course"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
        <button className="ml-2 p-2 text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zm-6 4a6 6 0 1110.89 3.476l3.817 3.817a1 1 0 01-1.414 1.414l-3.817-3.817A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      {/* Right Section: Buttons & Cart */}
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-700 font-medium">
          Become Instructor
        </a>
        <button className="text-gray-700">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 2a2 2 0 012-2h4a2 2 0 012 2h4a1 1 0 110 2h-1.258l-.88 9.764A4 4 0 0110 18H8a4 4 0 01-3.862-4.236L3.258 4H2a1 1 0 110-2h4zm2 2h4V2H8v2z"></path>
          </svg>
        </button>
        <button className="px-4 py-2 border rounded-lg">Login</button>
        <button className="px-4 py-2 bg-teal-500 text-white rounded-lg">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
