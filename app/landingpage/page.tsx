"use client";
import Navbar from "../component/navbar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Footer from "../component/footer";

export default function LandingPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("translate-y-50", "opacity-0");
            entry.target.classList.add("translate-y-0", "opacity-100");
            //observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">
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

        <div className="relative z-10 flex flex-col h-full items-center justify-center py-20 md:py-32 text-center">
          <div className="text-mywhite mt-16 md:mt-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-myyellow leading-tight">
              Precision Leads to Perfection
            </h1>
          </div>
          <div className="max-w-6xl my-8 md:my-12">
            <p className="mb-6 text-base md:text-lg text-white/90">
              At Arcvel Arms, every weapon we create is a testament to
              precision, expertise, and innovation. Our products are
              meticulously designed and engineered by seasoned professionals
              with years of experience in the defense industry. From
              conceptualization to production, we ensure every detail meets the
              highest standards of quality, performance, and reliability.
            </p>
            <p className="hidden md:block mb-6 text-lg text-white/90">
              We take pride in crafting exclusive, high-performance weaponry
              tailored to meet the specific needs of our clients. Whether for
              defense, law enforcement, or specialized tactical operations, our
              commitment to excellence guarantees that every firearm delivers
              unmatched accuracy, durability, and power. At Arcvel Arms, we
              don’t just manufacture weapons—we engineer superiority.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center text-lg md:text-2xl w-full max-w-4xl">
            <a
              href="#featured"
              className="flex items-center justify-center border-2 border-myyellow/50 hover:border-myyellow rounded-sm w-full md:py-2 hover:-translate-y-2 transition cursor-pointer text-mywhite hover:text-myyellow bg-black/20 hover:bg-black/40 backdrop-blur-sm"
            >
              <h1 className="font-bartle">Top Products</h1>
            </a>

            <a
              href="#getstarted"
              className="flex items-center justify-center border-2 border-myyellow/50 hover:border-myyellow rounded-sm w-full md:py-2 hover:-translate-y-2 transition cursor-pointer text-mywhite hover:text-myyellow bg-black/20 hover:bg-black/40 backdrop-blur-sm"
            >
              <h1 className="font-bartle">Start With Us</h1>
            </a>

            <a
              href="#whyus"
              className="flex items-center justify-center border-2 border-myyellow/50 hover:border-myyellow rounded-sm w-full md:py-2 hover:-translate-y-2 transition cursor-pointer text-mywhite hover:text-myyellow bg-black/20 hover:bg-black/40 backdrop-blur-sm"
            >
              <h1 className="font-bartle">Why Us?</h1>
            </a>
          </div>
        </div>
      </section>

      <section
        id="featured"
        className="relative min-h-screen bg-mywhite px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center py-20 md:py-32"
      >
        <h1 className="text-4xl md:text-5xl text-myyellow text-center mb-8 md:mb-0">
          FEATURED PRODUCTS
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-12 md:gap-24 py-8">
          <div className="relative group overflow-hidden rounded-lg shadow-lg md:shadow-none">
            <img
              src="/featuredgun.svg"
              alt=""
              className="w-full object-cover"
            />
            <div className="flex absolute inset-0 bg-black/80 lg:bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 items-center justify-center p-6">
              <div className="text-mywhite text-center w-full lg:w-2xl translate-y-8 group-hover:translate-y-0 transition duration-500">
                <h2 className="text-2xl font-bold mb-2">ARC-D7</h2>
                <p className="text-sm md:text-base">
                  The ARC-D7 is a 5.56×45mm NATO short-barrel carbine designed
                  for high precision, superior mobility, and unmatched
                  reliability. Built with an ergonomic, lightweight frame, it
                  ensures maximum control and ease of use in close-quarters and
                  mid-range combat.
                </p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg md:shadow-none">
            <img
              src="/featuredgun2.svg"
              alt=""
              className="w-full object-cover"
            />
            <div className="flex absolute inset-0 bg-black/80 lg:bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 items-center justify-center p-6">
              <div className="text-mywhite text-center w-full lg:w-2xl translate-y-8 group-hover:translate-y-0 transition duration-500">
                <h2 className="text-2xl font-bold mb-2">ARC-M18</h2>
                <p className="text-sm md:text-base">
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
          className="bg-myred text-mywhite px-8 py-3 md:px-12 md:py-4 rounded-sm hover:bg-myred-700 transition text-lg md:text-lg font-semibold mt-4 cursor-pointer w-full md:w-auto"
        >
          See All Products
        </button>
      </section>

      <section
        id="getstarted"
        className="relative min-h-screen bg-mywhite px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center py-20 md:py-32"
      >
        <div>
          <h1 className="text-4xl md:text-5xl text-myyellow text-center font-bartle">
            GET STARTED WITH US
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-8 md:gap-12 py-12">
          <div className="w-full relative h-64 md:h-auto group">
            <img
              src="/hunting.svg"
              alt=""
              className="w-full h-full object-cover rounded-sm"
            />
            <div className="z-10 absolute inset-0 text-center text-xl lg:text-2xl flex items-end justify-center pb-6 bg-linear-to-t from-black/80 to-transparent text-mywhite">
              <h2>Hunting</h2>
            </div>
          </div>
          <div className="w-full relative h-64 md:h-auto group">
            <img
              src="/professional.svg"
              alt=""
              className="w-full h-full object-cover rounded-sm"
            />
            <div className="z-10 absolute inset-0 text-center text-xl lg:text-2xl flex items-end justify-center pb-6 bg-linear-to-t from-black/80 to-transparent text-mywhite">
              <h2>Professional</h2>
            </div>
          </div>
          <div className="w-full relative h-64 md:h-auto group">
            <img
              src="/homedef.svg"
              alt=""
              className="w-full h-full object-cover rounded-sm"
            />
            <div className="z-10 absolute inset-0 text-center text-xl lg:text-2xl flex items-end justify-center pb-6 bg-linear-to-t from-black/80 to-transparent text-mywhite">
              <h2>Home Defense</h2>
            </div>
          </div>
        </div>
        <div>
          <p className="text-base md:text-lg text-mygray max-w-6xl text-center leading-relaxed">
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
        className="relative min-h-screen bg-mywhite px-6 md:px-12 lg:px-24 flex items-center flex-col justify-between gap-12 md:gap-24 py-20 md:py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-12 text-center lg:text-left">
          <div className="reveal opacity-0 translate-y-12 transition-all duration-700 ease-out lg:border-r border-mygray lg:pr-12">
            <h2 className="text-xl mb-4 md:mb-6 text-myyellow font-bartle">
              Engineered by Professionals
            </h2>
            <p className="text-mygray leading-relaxed text-sm md:text-base">
              Designed and developed by professionals with hands-on experience
              in engineering, manufacturing, and defense-related environments,
              ensuring that every product is built based on practical
              operational requirements rather than theoretical concepts.
            </p>
          </div>

          <div className="reveal opacity-0 translate-y-12 transition-all duration-700 delay-200 ease-out lg:border-r border-mygray lg:px-12">
            <h2 className="text-xl mb-4 md:mb-6 text-myyellow font-bartle">
              Global Distribution
            </h2>
            <p className="text-mygray leading-relaxed text-sm md:text-base">
              Supported by a structured global logistics and distribution system
              that enables consistent delivery, regional availability, and
              long-term product support across multiple continents.
            </p>
          </div>

          <div className="reveal opacity-0 translate-y-12 transition-all duration-700 delay-400 ease-out md:pl-12">
            <h2 className="text-xl mb-4 md:mb-6 text-myyellow font-bartle">
              Over 30 Countries
            </h2>
            <p className="text-mygray leading-relaxed text-sm md:text-base">
              Actively distributed and utilized in over 30 international markets
              through authorized partners, reflecting sustained adoption across
              diverse operational, regulatory, and environmental conditions.
            </p>
          </div>
        </div>
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 mt-12">
          <div className="shrink-0">
            <img src="/arcvel.svg" alt="" className="h-40 md:h-60 w-auto" />
          </div>
          <div className="flex-1">
            <p className="text-mygray text-center lg:text-justify text-base md:text-lg leading-relaxed">
              At Arcvel Arms, we are committed to delivering firearms that
              combine cutting-edge technology, superior craftsmanship, and
              unmatched reliability. Whether for defense, hunting, or
              professional operations, our products are designed to give you the
              power, precision, and confidence to excel in any mission. Explore
              our lineup and experience the next level of firepower. When it
              comes to performance and dependability, trust only the best.
              Arcvel Arms – Precision Leads to Perfection.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
