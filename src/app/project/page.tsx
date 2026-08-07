import CardProject from "../common/CardProject/page";
import ContactSection from "../common/ContactSection/page";
import Footer from "../common/Footer/page";
import Navbar from "../common/Navbar/page";
import SectionProject from "../common/ProjectSection/page";

export default function Project() {
  return (
    <div className="bg-background w-full min-h-screen">
      {/* Navbar */}
      <Navbar where="project" />

      {/* Title Section */}
      <SectionProject />

      {/* Card Project */}
      <CardProject />

      {/* Connect Section */}
      <ContactSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
