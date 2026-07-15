import CardEducation from "../common/CardEducation/page";
import ContactSection from "../common/ContactSection/page";
import Footer from "../common/Footer/page";
import Navbar from "../common/Navbar/page";
import SectionEducation from "../common/SectionEducation/page";

export default function Education() {
  return (
    <div className="bg-background w-full min-h-screen">
      {/* Navbar */}
      <Navbar where="education" />

      {/* Title Section */}
      <SectionEducation />

      {/* Card Education Section */}
      <CardEducation />

      {/* Connect Section */}
      <ContactSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
