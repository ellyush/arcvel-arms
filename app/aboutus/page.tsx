import Navbar from "../component/navbar";
import Footer from "../component/footer";
import AboutSection from "../component/aboutus/AboutSection";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full bg-mywhite py-20">
        <h1 className="py-12 text-3xl lg:text-5xl text-myyellow text-center">
          About Us
        </h1>
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}
