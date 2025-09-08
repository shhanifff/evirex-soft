import Cards from "@/components/Cards";
import React from "react";
import CloudImage from "../../public/Images/Cloud-based Payroll Software.png";
import Biometric from "../../public/Images/Biometrics.png";

export default function ProductPage() {
  const products = [
    {
      image: CloudImage,
      title: "Cloud-based Payroll Software",
      description:
        "Simplify payroll processing with our cloud-based solution, saving time and increasing accuracy.",
    },
    {
      image: Biometric,
      title: "Biometric Attendance Software",
      description:
        "Track employee attendance accurately with advanced biometric software.",
    },
  ];

  return (
    <div id="product" className="max-h-full w-full text-white px-4 py-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
        Our Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <Cards
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}
