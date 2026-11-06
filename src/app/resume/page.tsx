"use client";
import CVSection from "../common/CVSection/page";
import Footer from "../common/Footer/page";
import Navbar from "../common/Navbar/page";
import ResumeSection from "../common/ResumeSection/page";
import { useStateContext } from "@/context/StateContext";

export default function Resume() {
  const { _dark_mode } = useStateContext();

  return (
    <div
      className={`${
        _dark_mode ? "bg-zinc-900" : "bg-background"
      } w-full min-h-screen`}
    >
      <Navbar where="resume" />
      <ResumeSection />
      <CVSection />
      <Footer />
    </div>
  );
}
