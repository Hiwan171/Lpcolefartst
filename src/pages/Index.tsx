import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PartnersSection from "@/components/PartnersSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-surface-blend">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PartnersSection />
      <ProcessSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
