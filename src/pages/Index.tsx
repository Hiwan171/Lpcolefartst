import BrandBar from "@/components/BrandBar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PartnersSection from "@/components/PartnersSection";
import AboutSection from "@/components/AboutSection";
import ContactModal from "@/components/ContactModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileContactBar from "@/components/MobileContactBar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-surface-blend pb-24 md:pb-0">
      <BrandBar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PartnersSection />
      <AboutSection />
      <ContactModal />
      <MobileContactBar />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default Index;
