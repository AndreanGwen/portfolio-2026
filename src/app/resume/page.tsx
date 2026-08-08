import CVSection from "../common/CVSection/page";
import Footer from "../common/Footer/page";
import Navbar from "../common/Navbar/page";
import ResumeSection from "../common/ResumeSection/page";

export default function Resume() {
  return (
    <div className="bg-background w-full min-h-screen">
      {/* Navbar */}
      <Navbar where="resume" />

      {/* Resume Section */}
      <ResumeSection />

      {/* CV Section */}
      <CVSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
