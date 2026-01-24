"use client";

import { desc } from "framer-motion/client";

type productCardProps = {
  categories: string;
  title: string;
  desc: string;
  imgSrc: string;
};

export default function ProductCard({
  categories,
  title,
  desc,
  imgSrc,
}: productCardProps) {
  return (
    <div className="group border-b border-mygray/10 w-3/4 mx-auto hover:bg-mygray/5 transition duration-300">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10 px-6 items-center">
        <div className="md:col-span-7 flex flex-col gap-4">
          <div className="space-y-2">
            <span className="text-myred font-bold tracking-widest text-xs uppercase">
              {categories}
            </span>
            <h2 className="text-myblack text-4xl font-bartle font-bold">
              {title}
            </h2>
          </div>

          <p className="text-mygray/80 text-base leading-relaxed text-justify">
            {desc}
          </p>

          <button
            onClick={() => (window.location.href = "#")}
            className="group/btn flex items-center gap-2 text-myred font-semibold text-lg mt-4 w-fit transition"
          >
            View Specs
            <span className="group-hover/btn:translate-x-2 transition-transform duration-300">
              →
            </span>
          </button>
        </div>

        <div className="md:col-span-5 flex justify-center items-center relative">
          <div className="absolute w-40 h-40 bg-myred/5 rounded-full blur-2xl -z-10"></div>
          <img
            src={imgSrc}
            alt="ARC-D7"
            className="h-40 md:h-52 object-contain drop-shadow-xl group-hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </div>
  );
}
