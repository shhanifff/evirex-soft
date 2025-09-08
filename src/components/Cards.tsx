"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type CardProps = {
  image: string |StaticImageData;
  title: string;
  description: string;
};

export default function Cards({ image, title, description }:CardProps) {
  return (
    <motion.div
      className="w-full py-10 h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div className="flex flex-col md:flex-row bg-gradient-to-r from-purple-700 via-purple-900 to-black  shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl">
        <motion.div
          className="md:w-1/3 w-full relative h-80 md:h-96"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="md:w-2/3 w-full p-6 flex flex-col justify-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-white">
            {title}
          </h3>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl">
            {description}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
