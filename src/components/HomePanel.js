// components/About.js
import React from 'react';

const HomePanel = () => {
  return (
    <section className="bg-red-600 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        {/* Left Section: Image and Text */}
        <div className="md:w-1/2 px-6">
          <h1 className="text-4xl font-bold mb-6">
           Raktify
          </h1>
        
      
          <p className="text-gray-200 mb-6">
          Raktify is an innovative blood donation platform that fosters an inclusive community of donors and recipients. It offers features like live blood requests, an advanced slot booking system, and a donor health tracker to make donating safe, efficient, and rewarding. Gamified elements such as badges and leaderboards and the delightful Blood Mascot ensure an engaging experience while saving lives..{" "}
            <a href="/about" className="text-yellow-400 font-semibold hover:underline">
              Read More
            </a>
          </p>
        </div>

        {/* Right Section: Call to Action */}
        <div className="md:w-1/2 flex flex-col items-center md:items-end">
        <div className="bg-teal-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500">

            <h2 className="text-2xl font-bold mb-4">
              Contact
            </h2>
            <p className="text-gray-300 mb-6">
             Take some time out to make an impact
            </p>
            <a
              href="/contact"
              className="inline-block bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow hover:bg-red-700 transition duration-300"
            >
              Register Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePanel;
