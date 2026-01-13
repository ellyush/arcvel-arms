export default function GetStrartedSection() {
  return (
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
          we offer powerful and accurate rifles to take on any challenge in the
          field. And for military and law enforcement professionals, our
          battle-tested weaponry delivers unmatched performance and durability.
        </p>
      </div>
    </section>
  );
}
