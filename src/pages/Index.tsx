import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  console.log("Index component rendering...");
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <HowItWorks />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
