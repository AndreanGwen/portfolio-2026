"use client";
import HeroSection from "./common/HeroSection/page";
import Navbar from "./common/Navbar/page";
import DevelopmentSection from "./common/DevelopmentSection/page";
import AboutSection from "./common/AboutSection/page";
import LatestProjets from "./common/LatestProjects/page";
import ContactSection from "./common/ContactSection/page";
import Footer from "./common/Footer/page";

export default function Home() {
  return (
    <div className="bg-background w-full min-h-screen">
      {/* Navbar */}
      <Navbar where="home" />

      {/* HeroSection */}
      <HeroSection />

      {/* JobDesc Section */}
      <DevelopmentSection />

      {/* About Section */}
      <AboutSection />

      {/* Latest Projects */}
      <LatestProjets />

      {/* Connect Section */}
      <ContactSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
