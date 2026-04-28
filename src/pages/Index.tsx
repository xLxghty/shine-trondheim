import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import BeforeAfter from "@/components/sections/BeforeAfter";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Reviews from "@/components/sections/Reviews";
import About from "@/components/sections/About";
import Booking from "@/components/sections/Booking";
import Location from "@/components/sections/Location";
import Footer from "@/components/sections/Footer";
import FloatingCTA from "@/components/sections/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <BeforeAfter />
        <WhyChooseUs />
        <Reviews />
        <About />
        <Booking />
        <Location />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
