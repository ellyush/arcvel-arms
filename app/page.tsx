import Navbar from "../app/component/navbar";
import Footer from "../app/component/footer";
import HeroSection from "../app/component/landing/HeroSection";
import FeaturedProducts from "../app/component/landing/FeaturedProducts";
import GetStrartedSection from "../app/component/landing/GetStartedSection";
import WhyUsSection from "../app/component/landing/WhyUsSection";

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <GetStrartedSection />
      <WhyUsSection />
      <Footer />
    </div>
  );
}
