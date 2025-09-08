"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const options = [
    { option: "Home", id: "home" },
    { option: "About Us", id: "about" },
    { option: "Products", id: "product" },
    { option: "Services", id: "service" },
    { option: "Contact", id: "contact" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 w-full bg-gradient-to-r from-purple-600 to-black text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold font-amatic cursor-pointer"
        >
          Peopleworkx Technologies
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          {options.map((item) => (
            <motion.button
              key={item.option}
              onClick={() => handleScroll(item.id)}
              className="px-3 py-2 rounded transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              {item.option}
            </motion.button>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center gap-4 py-4">
            {options.map((item) => (
              <button
                key={item.option}
                onClick={() => handleScroll(item.id)}
                className="block w-full text-center py-2 rounded transition-all text-white/80 hover:text-white"
              >
                {item.option}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
