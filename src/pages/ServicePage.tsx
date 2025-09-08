"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  ClipboardList,
  Users,
  BriefcaseBusiness,
  Gavel,
  BookCheck,
  CircleCheck,
} from "lucide-react";

function ServicePage() {
  const offers = [
    { icon: Calculator, title: "Payroll Management" },
    { icon: ClipboardList, title: "Statutory Compliance" },
    { icon: Users, title: "Recruitment" },
    { icon: BriefcaseBusiness, title: "Business Start-up Licenses" },
    { icon: Gavel, title: "Labour Law Advisory" },
    { icon: BookCheck, title: "Vendor Compliance Audit" },
  ];

  const WhyChooseUs = [
    "Expert Team",
    "Innovative Solutions",
    "Great Support",
    "Customized Approach",
  ];

  const VisionAndMission = [
    {
      title: "Vision",
      description: "To be the leading provider of innovative HR Solutions",
    },
    {
      title: "Mission",
      description: "To simplify and improve HR processes for businesses",
    },
  ];

  return (
    <div id="service" className="min-h-screen w-full text-white px-4 py-12">
      {/* Offers Section */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
        What We Offer
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] lg:grid-cols-3 gap-6 mb-12">
        {offers.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 shadow-xs hover:shadow-lg flex flex-col items-center text-center text-white/80 hover:text-white transition-all rounded-lg bg-white/5"
            >
              <IconComponent
                size={48}
                className="mb-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
              />
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                {item.title}
              </h3>
            </motion.div>
          );
        })}
      </div>

      {/* Why Choose Us Section */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
        Why Choose Us
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {WhyChooseUs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="flex flex-col items-center gap-4 flex-wrap "
          >
            <div className="flex flex-row gap-3">
              <CircleCheck
                size={24}
                className="bg-pink-600 text-white rounded-full"
              />
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                {item}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Vision and mission  */}
      <div className="flex gap-4 mt-6 justify-center">
        {VisionAndMission.map((item, index) => (
          <div
            key={index}
            className="w-full lg:w-1/3 p-1 flex rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600"
          >
            <div className="flex flex-col gap-3 p-4 bg-black/80 rounded-lg ">
              <h1 className="text-lg sm:text-xl font-bold text-white text-center">
                {item.title}
              </h1>
              <p className="text-sm sm:text-base text-white/80 text-center">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicePage;
