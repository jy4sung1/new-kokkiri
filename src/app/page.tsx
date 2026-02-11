import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BestSeller from "@/components/BestSeller";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BestSeller />
      <InstagramSection />
      <Footer />
    </div>
  );
}
