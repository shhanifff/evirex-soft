import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div
      id="home"
      className="min-h-screen w-full flex justify-center items-center flex-col text-white  text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-amatic text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-snug text-center"
      >
        Simplifying Payroll, Compliance, and People Operations
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-300"
      >
        with Smart HR Solutions
      </motion.h2>

     
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="bg-purple-700 hover:bg-purple-600 transition-all text-white font-semibold px-5 py-2 rounded-lg shadow-lg text-base sm:text-lg"
      >
        Get Started
      </motion.button>
    </div>
  );
}
