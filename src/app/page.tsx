import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsMarquee";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import StatsCounter from "@/components/home/StatsCounter";
import InstallationsGallery from "@/components/home/InstallationsGallery";
import ClientsCarousel from "@/components/home/ClientsCarousel";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProductsSection />
      <WhyChooseUs />
      <IndustriesGrid />
      <StatsCounter />
      <InstallationsGallery />
      <ClientsCarousel />
      <FAQSection />
      <CTASection />
    </main>
  );
}
