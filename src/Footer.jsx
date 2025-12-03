import React from "react";
import { assets } from "../src/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <div className="w-full lg:w-1/3 mb-8 md:mb-0">
          <div className="flex gap-1">
            <img
              src={assets.logo_main}
              alt="logo"
              className="w-8 h-8 lg:w-7 lg:h-6 lg:mt-1"
            />
            <h1 className="text-blue-900 font-bold font-serif text-2xl text-center">
              K<span className="text-white">.</span>U
            </h1>
          </div>
          <p className="text-gray-400 mt-4">
            At K-URCHTECH, we believe that finding your dream home should be a
            smooth and rewarding experience.
          </p>
        </div>
        <div className="w-full lg:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Home" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About Us
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact Us
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full lg:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe To Our Newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none md:w-auto"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2025 @ K-URCHTECH. All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
