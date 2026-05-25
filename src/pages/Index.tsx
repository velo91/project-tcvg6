import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Pricing />
        <Features />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;