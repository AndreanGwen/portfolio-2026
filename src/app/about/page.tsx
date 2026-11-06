"use client";
import ContactSection from "../common/ContactSection/page";
import Footer from "../common/Footer/page";
import HeroSectionA from "../common/HeroSectionA/page";
import LearningPath from "../common/LearningPath/page";
import Navbar from "../common/Navbar/page";
import StackSection from "../common/StackSection/page";
import { useStateContext } from "@/context/StateContext";

export default function About() {
  const { _dark_mode } = useStateContext();

  return (
    <div
      className={`${
        _dark_mode ? "bg-zinc-900" : "bg-background"
      } w-full min-h-screen`}
    >
      <Navbar where="about" />
      <HeroSectionA />
      <StackSection />
      <LearningPath />
      <ContactSection />
      <Footer />
    </div>
  );
}
