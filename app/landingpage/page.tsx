import Navbar from "../component/navbar";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="">
      <Navbar />
      <section className="relative h-screen w-full">
        <Image
          src="/hero.jpg"
          alt="Hero Image"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col h-full items-center justify-center px-10 text-center">
          <div className="text-mywhite">
            <h1 className="text-5xl md:text-6xl font-bold">
              Precision Leads to Perfection
            </h1>
          </div>
          <div className="max-w-6xl">
            <p className="mt-6 text-lg md:text-xl opacity-90">
              At Arcvel Arms, every weapon we create is a testament to
              precision, expertise, and innovation. Our products are
              meticulously designed and engineered by seasoned professionals
              with years of experience in the defense industry. From
              conceptualization to production, we ensure every detail meets the
              highest standards of quality, performance, and reliability.
            </p>
            <p className="mt-6 text-lg md:text-xl opacity-90">
              We take pride in crafting exclusive, high-performance weaponry
              tailored to meet the specific needs of our clients. Whether for
              defense, law enforcement, or specialized tactical operations, our
              commitment to excellence guarantees that every firearm delivers
              unmatched accuracy, durability, and power. At Arcvel Arms, we
              don’t just manufacture weapons—we engineer superiority.
            </p>
          </div>
        </div>
      </section>
      <section className="relative h-screen bg-myyellow"></section>
    </div>
  );
}
