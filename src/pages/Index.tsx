import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import MapSection from "@/components/MapSection";
import FAQSection from "@/components/FAQSection";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <MapSection />
      <FAQSection />
      <QuoteSection />
      <Footer />
    </div>
  );
};

export default Index;
