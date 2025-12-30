"use client";
import Navbar from "../component/navbar";
import Image from "next/image";
import { useEffect } from "react";
import Footer from "../component/footer";

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

        <div className="relative z-10 flex flex-col h-full items-center justify-between py-52 text-center">
          <div className="text-mywhite">
            <h1 className="text-5xl md:text-6xl text-myyellow">
              Precision Leads to Perfection
            </h1>
          </div>
          <div className="max-w-6xl">
            <p className="mt-6 mb-6 text-xl">
              At Arcvel Arms, every weapon we create is a testament to
              precision, expertise, and innovation. Our products are
              meticulously designed and engineered by seasoned professionals
              with years of experience in the defense industry. From
              conceptualization to production, we ensure every detail meets the
              highest standards of quality, performance, and reliability.
            </p>
            <p className="mb-6 text-xl">
              We take pride in crafting exclusive, high-performance weaponry
              tailored to meet the specific needs of our clients. Whether for
              defense, law enforcement, or specialized tactical operations, our
              commitment to excellence guarantees that every firearm delivers
              unmatched accuracy, durability, and power. At Arcvel Arms, we
              don’t just manufacture weapons—we engineer superiority.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 text-center text-2xl">
            {/* Navigasi 1 */}
            <a
              href="#featured"
              className="flex items-center justify-center border-2 rounded-sm w-120 h-12 hover:-translate-y-2 transition cursor-pointer text-inherit hover:text-inherit"
            >
              <h1 className="font-bartle">Our Products</h1>
            </a>

            {/* Navigasi 2 */}
            <a
              href="#getstarted"
              className="flex items-center justify-center border-2 rounded-sm w-120 h-12 hover:-translate-y-2 transition cursor-pointer text-inherit hover:text-inherit"
            >
              <h1 className="font-bartle">Start With Us</h1>
            </a>

            {/* Navigasi 3 */}
            <a
              href="#whyus"
              className="flex items-center justify-center border-2 rounded-sm w-120 h-12 hover:-translate-y-2 transition cursor-pointer text-inherit hover:text-inherit"
            >
              <h1 className="font-bartle">Why Us?</h1>
            </a>
          </div>
        </div>
      </section>

      <section
        id="featured"
        className="relative min-h-[calc(100vh-80px)] bg-mywhite px-24 flex flex-col items-center justify-between py-32"
      >
        <h1 className="text-6xl text-myyellow text-center">
          FEATURED PRODUCTS
        </h1>
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
          className="bg-myred text-mywhite px-12 py-4 rounded-sm hover:bg-myred-700 transition text-xl font-semibold mt-8 cursor-pointer"
        >
          See All Products
        </button>
      </section>

      <section
        id="getstarted"
        className="relative min-h-[calc(100vh-80px)] bg-mywhite px-24 flex flex-col items-center justify-between py-32"
      >
        <div>
          <h1 className="text-6xl text-myyellow">GET STARTED WITH US</h1>
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

      <section
        id="whyus"
        className="relative min-h-[calc(100vh-80px)] bg-mywhite px-12 lg:px-24 flex items-center flex-col justify-between gap-24 py-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-12 text-center md:text-left">
          <div className="md:border-r border-mygray md:pr-12">
            <h2 className="text-3xl mb-6 text-myyellow">
              Engineered by Professionals
            </h2>
            <p className="text-mygray leading-relaxed">
              Designed and developed by professionals with hands-on experience
              in engineering, manufacturing, and defense-related environments,
              ensuring that every product is built based on practical
              operational requirements rather than theoretical concepts.
            </p>
          </div>

          <div className="md:border-r border-mygray md:px-12">
            <h2 className="text-3xl mb-6 text-myyellow">Global Distribution</h2>
            <p className="text-mygray leading-relaxed">
              Supported by a structured global logistics and distribution system
              that enables consistent delivery, regional availability, and
              long-term product support across multiple continents.
            </p>
          </div>

          <div className="md:pl-12">
            <h2 className="text-3xl mb-6 text-myyellow">Over 30 Countries</h2>
            <p className="text-mygray leading-relaxed">
              Actively distributed and utilized in over 30 international markets
              through authorized partners, reflecting sustained adoption across
              diverse operational, regulatory, and environmental conditions.
            </p>
          </div>
        </div>
        <div className="w-7/10 h-60 flex items-center justify-center gap-12">
          <img src="/arcvel.svg" alt="" className="h-60" />
          <p className="text-mygray text-justify text-xl h-60 items-center flex justify-center">
            At Arcvel Arms, we are committed to delivering firearms that combine
            cutting-edge technology, superior craftsmanship, and unmatched
            reliability. Whether for defense, hunting, or professional
            operations, our products are designed to give you the power,
            precision, and confidence to excel in any mission. Explore our
            lineup and experience the next level of firepower. When it comes to
            performance and dependability, trust only the best. Arcvel Arms –
            Precision Leads to Perfection.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
