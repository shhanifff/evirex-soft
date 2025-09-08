"use client";
import AboutUsPage from "@/pages/AboutUsPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import ServicePage from "@/pages/ServicePage";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-2">
        <HomePage />
        <AboutUsPage />
        <ProductPage />
        <ServicePage />
      </div>
      <ContactPage />
    </>
  );
}
