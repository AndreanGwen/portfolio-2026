"use client";
import CardEducation from "../common/CardEducation/page";
import ContactSection from "../common/ContactSection/page";
import Footer from "../common/Footer/page";
import Navbar from "../common/Navbar/page";
import SectionEducation from "../common/SectionEducation/page";
import { useStateContext } from "@/context/StateContext";

export default function Education() {
  const { _dark_mode } = useStateContext();

  return (
    <div
      className={`${
        _dark_mode ? "bg-zinc-900" : "bg-background"
      } w-full min-h-screen`}
    >
      <Navbar where="education" />
      <SectionEducation />
      <CardEducation />
      <ContactSection />
      <Footer />
    </div>
  );
}
