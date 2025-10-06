import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Education />
      <TechStack />
      <FeaturedProjects />
      <Experience />
      <Highlights />
      <About />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
