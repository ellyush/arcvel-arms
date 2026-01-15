"use client";
import RevealOnScroll from "@/app/hooks/RevealOnScroll";
import WhyUsItem from "./whyUsItem";

export default function WhyUsSection() {
  RevealOnScroll();

  return (
    <section
      id="whyus"
      className="relative min-h-screen bg-mywhite px-6 md:px-12 lg:px-24 flex items-center flex-col justify-between gap-12 md:gap-24 py-20 md:py-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-12 text-center lg:text-left">
        <WhyUsItem
          hasBorder
          title="Enginered By Professional"
          description="Designed and developed by professionals with hands-on experience in
            engineering, manufacturing, and defense-related environments,
            ensuring that every product is built based on practical operational
            requirements rather than theoretical concepts."
        />
        <WhyUsItem
          hasBorder
          title="Global Distribution"
          description="Supported by a structured global logistics and distribution system
            that enables consistent delivery, regional availability, and
            long-term product support across multiple continents."
        />

        <WhyUsItem
          title="Over 30 Countries"
          description="Actively distributed and utilized in over 30 international markets
            through authorized partners, reflecting sustained adoption across
            diverse operational, regulatory, and environmental conditions."
        />

        <div className="reveal opacity-0 translate-y-12 transition-all duration-700 delay-400 ease-out md:pl-12">
          <h2 className="text-xl mb-4 md:mb-6 text-myyellow font-bartle"></h2>
          <p className="text-mygray leading-relaxed text-sm md:text-base"></p>
        </div>
      </div>
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 mt-12">
        <div className="shrink-0">
          <img src="/arcvel.svg" alt="" className="h-40 md:h-60 w-auto" />
        </div>
        <div className="flex-1">
          <p className="text-mygray text-center lg:text-justify text-base md:text-lg leading-relaxed">
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
      </div>
    </section>
  );
}
