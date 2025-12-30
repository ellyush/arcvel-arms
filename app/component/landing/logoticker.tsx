import React from "react";

// 1. Definisikan Interface untuk tipe data
interface Company {
  name: string;
  logo: string; // Bisa diganti 'any' atau 'StaticImageData' jika pakai import gambar langsung
}

// 2. Data dummy dengan tipe yang sudah ditentukan
const companies: Company[] = [
  { name: "TACTICAL SYS", logo: "/logos/tactical.svg" },
  { name: "DEFENSE CORP", logo: "/logos/defense.svg" },
  { name: "ARMORY GROUP", logo: "/logos/armory.svg" },
  { name: "SECURE OPS", logo: "/logos/secure.svg" },
  { name: "VANGUARD", logo: "/logos/vanguard.svg" },
  { name: "IRON SIGHT", logo: "/logos/iron.svg" },
];

const LogoTicker: React.FC = () => {
  return (
    <section className="w-full py-12 bg-myblack overflow-hidden border-t border-white/10">
      <div className="text-center mb-8">
        <h3 className="text-myyellow text-xl font-bold tracking-[0.2em] font-bartle">
          TRUSTED PARTNERS
        </h3>
      </div>

      {/* Container Utama */}
      <div className="relative flex w-full max-w-5xl mx-auto overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        {/* LIST 1: Original */}
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll">
          {companies.map((company, index) => (
            <li key={`original-${index}`}>
              {/* Jika nanti pakai gambar, ganti span ini dengan <img src={company.logo} /> */}
              <span className="text-3xl font-bold text-white/30 whitespace-nowrap font-titillium uppercase">
                {company.name}
              </span>
            </li>
          ))}
        </ul>

        {/* LIST 2: Duplicate (untuk looping seamless) */}
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {companies.map((company, index) => (
            <li key={`duplicate-${index}`}>
              <span className="text-3xl font-bold text-white/30 whitespace-nowrap font-titillium uppercase">
                {company.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LogoTicker;
