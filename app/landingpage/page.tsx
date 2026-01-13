import Navbar from "../component/navbar";
import Footer from "../component/footer";
import HeroSection from "../component/landing/HeroSection";
import FeaturedProducts from "../component/landing/FeaturedProducts";
import GetStrartedSection from "../component/landing/GetStartedSection";
import WhyUsSection from "../component/landing/WhyUsSection";

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
