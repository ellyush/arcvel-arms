"use client";
import Navbar from "../component/navbar";
import Image from "next/image";
import LogoTicker from "../component/landing/logoticker";

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
            <p className="mt-6 text-xl">
              At Arcvel Arms, every weapon we create is a testament to
              precision, expertise, and innovation. Our products are
              meticulously designed and engineered by seasoned professionals
              with years of experience in the defense industry. From
              conceptualization to production, we ensure every detail meets the
              highest standards of quality, performance, and reliability.
            </p>
            <p className="mt-6 text-xl">
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

      <section className="relative min-h-[calc(100vh-80px)] bg-mywhite pt-20 py-32 px-24 flex flex-col items-center">
        <h1 className="text-6xl text-mygray text-center">FEATURED PRODUCTS</h1>
        <div className="grid grid-cols-2 w-full gap-24 py-12">
          <div className="relative group">
            <img src="/featuredgun.svg" alt="" className="w-full" />
            <div className="flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition items-center justify-center">
              <div className="text-mywhite text-center w-2xl group-hover:translate-y-0 translate-y-8 transition">
                <h2 className="text-2xl">ARC-D7</h2>
                <p>
                  The ARC-D7 is a 5.56×45mm NATO short-barrel carbine designed
                  for high precision, superior mobility, and unmatched
                  reliability. Built with an ergonomic, lightweight frame, it
                  ensures maximum control and ease of use in close-quarters and
                  mid-range combat.
                </p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src="/featuredgun2.svg" alt="" className="w-full" />
            <div className="flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition items-center justify-center">
              <div className="text-mywhite text-center w-2xl group-hover:translate-y-0 translate-y-8 transition">
                <h2 className="text-2xl">ARC-M18</h2>
                <p>
                  The ARC-M18 is a 7.62×51mm NATO long-barrel rifle designed for
                  mid-range superiority with an effective range beyond standard
                  marksman rifles. Combining exceptional accuracy, lightweight
                  construction, and full customization, it delivers unmatched
                  performance for military and law enforcement marksmen.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            window.location.href = "#";
          }}
          type="submit"
          className="bg-myred text-mywhite px-12 py-4 rounded-sm bottom-12 hover:bg-myred-700 transition text-xl font-semibold mt-8 cursor-pointer"
        >
          See All Products
        </button>
      </section>

      <section className="relative min-h-[calc(100vh-80px)] bg-mywhite pt-20 px-24 flex flex-col items-center">
        <div>
          <h1 className="text-6xl text-mygray">GET STARTED WITH US</h1>
        </div>
        <div className="grid grid-cols-3 w-full h-full gap-12 py-12">
          <div className="w-full relative">
            <img src="/hunting.svg" alt="" className="w-full object-cover" />
            <div className="z-10 absolute inset-0 text-center text-3xl flex items-end justify-center pb-6 bg-black/40">
              <h2>Hunting</h2>
            </div>
          </div>
          <div className="w-full relative">
            <img
              src="/professional.svg"
              alt=""
              className="w-full object-cover"
            />
            <div className="z-10 absolute inset-0 text-center text-3xl flex items-end justify-center pb-6 bg-black/40">
              <h2>Professional</h2>
            </div>
          </div>
          <div className="w-full relative">
            <img src="/homedef.svg" alt="" className="w-full object-cover" />
            <div className="z-10 absolute inset-0 text-center text-3xl flex items-end justify-center pb-6 bg-black/40">
              <h2>Home Defense</h2>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xl text-mygray max-w-6xl text-center">
            Whether you're securing your home, hunting in the wild, or operating
            in high-stakes professional environments, Arcvel Arms provides the
            perfect balance of precision, reliability, and adaptability. Our
            firearms are designed to meet the needs of every shooter, ensuring
            maximum performance in any situation. For home defense, our compact
            and reliable options are ready when you need them most. For hunters,
            we offer powerful and accurate rifles to take on any challenge in
            the field. And for military and law enforcement professionals, our
            battle-tested weaponry delivers unmatched performance and
            durability.
          </p>
        </div>
      </section>
    </div>
  );
}
