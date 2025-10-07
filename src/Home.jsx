import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

function Home() {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overfull-hidden"
      style={{ backgroundImage: "url('/Header_img.jpg')" }}
      id="Home"
    >
      <div className="inset-0 bg-black/30 backdrop:backdrop-blur-sm">
        <Navbar />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        <h2 className="text-5xl sm:text-6xl md:text[82px] inline-block max-w-3xl font-semibold pt-20">
          Explore homes that fits your dreams
        </h2>
        <div className="space-x-6 mt-16">
          <a
            href="#Projects"
            className="border border-white px-8 py-3 rounded hover:bg-blue-500 hover:border-none transition"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="bg-blue-500 px-8 py-3 rounded transition"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
