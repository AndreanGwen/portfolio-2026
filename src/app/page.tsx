"use client";
import HeroSection from "./common/HeroSection/page";
import Navbar from "./common/Navbar/page";
import DevelopmentSection from "./common/DevelopmentSection/page";
import AboutSection from "./common/AboutSection/page";
import LatestProjets from "./common/LatestProjects/page";
import ContactSection from "./common/ContactSection/page";
import Footer from "./common/Footer/page";
import { useStateContext } from "@/context/StateContext";

export default function Home() {
  const { _dark_mode, _handle_set_dark_mode } = useStateContext();

  return (
    <div
      className={`${
        _dark_mode ? "bg-zinc-900" : "bg-background"
      } w-full min-h-screen`}
    >
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
