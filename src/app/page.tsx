import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FairsSection } from "@/components/home/FairsSection";
import { ConsultationForm } from "@/components/forms/ConsultationForm";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <FairsSection />
        <ConsultationForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
