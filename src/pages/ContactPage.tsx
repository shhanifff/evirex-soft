"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Twitter,
  Facebook,
  Linkedin,
  MessageCircle,
  Instagram,
} from "lucide-react";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#2a0134] text-white py-12 px-6 md:px-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between gap-10"
      >
        {/* Form */}
        <div className="flex-1">
          <p className="text-xs uppercase mb-4 tracking-wider text-gray-400">
            Contact Us
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="bg-[#f7f6f1] text-black p-3 outline-none rounded"
            />
            <input
              type="email"
              placeholder="Your email"
              className="bg-[#f7f6f1] text-black p-3 outline-none rounded"
            />
            <textarea
              placeholder="Your enquiry"
              className="bg-[#f7f6f1] text-black p-3 outline-none resize-none h-24 rounded"
            />
            <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-600 transition-all text-white font-semibold px-6 py-2 rounded shadow-lg text-base sm:text-lg"
            >
              Send
            </button>
          </form>
        </div>

        {/* addres section */}
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-400">
              Call us on
            </p>
            <p className="text-lg font-semibold">+91 0114 430 0145</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-gray-400">
              Or Email
            </p>
            <p className="text-lg font-semibold">hello@wearearise.com</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
              Social Us
            </p>
            <div className="flex gap-5">
              <Twitter className="w-6 h-6 hover:text-gray-300 cursor-pointer transition-transform hover:scale-110" />
              <Facebook className="w-6 h-6 hover:text-gray-300 cursor-pointer transition-transform hover:scale-110" />
              <Linkedin className="w-6 h-6 hover:text-gray-300 cursor-pointer transition-transform hover:scale-110" />
              <MessageCircle className="w-6 h-6 hover:text-gray-300 cursor-pointer transition-transform hover:scale-110" />
              <Instagram className="w-6 h-6 hover:text-gray-300 cursor-pointer transition-transform hover:scale-110" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-3"
      >
        <p>© 2020 We Are Arise LTD</p>
        <p>Arise, Brincliffe House, 59 Wostenholm Rd, Sheffield, S7 1LE, UK</p>
        <div className="flex gap-6">
          <p className="hover:text-white cursor-pointer transition">Credits</p>
          <p className="hover:text-white cursor-pointer transition">
            Privacy Policy
          </p>
          <p className="hover:text-white cursor-pointer transition">
            Web Design Sheffield
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
