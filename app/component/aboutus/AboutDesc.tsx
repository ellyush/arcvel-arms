"use client";
import SlideEffect from "@/app/hooks/SlideEffect";
type AboutDescProps = {
  title: string;
  description: string;
  slide: "left" | "right";
};

export default function AboutDesc({
  title,
  description,
  slide,
}: AboutDescProps) {
  SlideEffect();

  return (
    <div
      className={`opacity-0 col-span-1 lg:col-span-4 bg-myyellow text-myblack py-8 lg:py-12 px-8 lg:px-12 flex flex-col justify-center order-1 ${slide === "left" ? "slide-left translate-x-50" : ""} ${slide === "right" ? "slide-right -translate-x-50" : ""} `}
    >
      <h2 className="text-lg lg:text-xl mb-4">{title}</h2>
      <p className="text-sm lg:text-md leading-relaxed">{description}</p>
    </div>
  );
}
