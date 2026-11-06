"use client";
import CardProject from "../common/CardProject/page";
import ContactSection from "../common/ContactSection/page";
import Footer from "../common/Footer/page";
import Navbar from "../common/Navbar/page";
import SectionProject from "../common/ProjectSection/page";
import { useStateContext } from "@/context/StateContext";

export default function Project() {
  const { _dark_mode } = useStateContext();

  return (
    <div
      className={`${
        _dark_mode ? "bg-zinc-900" : "bg-background"
      } w-full min-h-screen`}
    >
      <Navbar where="project" />
      <SectionProject />
      <CardProject />
      <ContactSection />
      <Footer />
    </div>
  );
}
