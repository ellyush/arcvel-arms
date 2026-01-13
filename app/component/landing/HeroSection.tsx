import Image from "next/image";

export default function HeroSection() {
  return (
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
            At Arcvel Arms, every weapon we create is a testament to precision,
            expertise, and innovation. Our products are meticulously designed
            and engineered by seasoned professionals with years of experience in
            the defense industry. From conceptualization to production, we
            ensure every detail meets the highest standards of quality,
            performance, and reliability.
          </p>
          <p className="hidden md:block mb-6 text-lg text-white/90">
            We take pride in crafting exclusive, high-performance weaponry
            tailored to meet the specific needs of our clients. Whether for
            defense, law enforcement, or specialized tactical operations, our
            commitment to excellence guarantees that every firearm delivers
            unmatched accuracy, durability, and power. At Arcvel Arms, we don’t
            just manufacture weapons—we engineer superiority.
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
  );
}
