import Footer from "../common/Footer/page";
import HeroSectionA from "../common/HeroSectionA/page";
import LearningPath from "../common/LearningPath/page";
import Navbar from "../common/Navbar/page";
import StackSection from "../common/StackSection/page";

export default function About() {
  return (
    <div className="bg-background w-full min-h-screen">
      {/* Navbar */}
      <Navbar where="about" />

      {/* HeroSectionA */}
      <HeroSectionA />

      {/* Stack Section */}
      <StackSection />

      {/* Learning Path Section */}
      <LearningPath />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
