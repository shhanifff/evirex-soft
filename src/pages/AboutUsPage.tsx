import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import HRimage from "../../public/Images/HR_image-Photoroom-removebg-preview crop.png";

export default function AboutUsPage() {
  return (
    <div
      id="about"
      className="w-full min-h-screen text-white flex flex-col md:flex-row items-center justify-center gap-8"
    >
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          About Us
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed">
          We are committed to simplifying Payroll, Compliance, and People
          Operations with smart, efficient solutions designed to help your
          business thrive.
        </p>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-end"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image src={HRimage} alt="HR Illustration" width={500} height={400} />
      </motion.div>
    </div>
  );
}
