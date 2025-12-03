import React from "react";
import { assets } from "../src/assets";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated To Your Vision
      </p>
      <div className="flex flex-col lg:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.project00}
          alt=""
          className="w-full sm:w1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-4 max-w-lg">
            At K-URCHTECH, we believe that finding your dream home should be a
            smooth and rewarding experience.
          </p>
          <p className="my-4 max-w-lg">
            With a team of dedicated professionals, we specialize in helping
            clients buy, sell and invest in quality properties across prime
            locations. Our mission is to connect people with homes that reflect
            their lifestyle and aspirations.
          </p>
          <p className="my-4 max-w-lg">
            From modern apartments to luxury estates, we offer trusted guidance
            every step of the way, to ensuring transparency, reliability, and
            Customer satisfaction.
          </p>
          <p className="my-4 max-w-lg">
            At K-URCHTECH, your comfort is our priority, and your dream property
            is our goal.
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
