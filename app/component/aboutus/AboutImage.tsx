"use client";
import SlideEffect from "@/app/hooks/SlideEffect";
type AboutImageProps = {
  srcImg: string;
  slide: "left" | "right";
};
export default function AboutImage({ srcImg, slide }: AboutImageProps) {
  SlideEffect();
  return (
    <div
      className={`slide-right opacity-0 -translate-x-50 col-span-1 lg:col-span-6 h-full order-2 lg:order-1 ${slide === "left" ? "slide-left translate-x-50" : ""} ${slide === "right" ? "slide-right -translate-x-50" : ""} `}
    >
      <img src={srcImg} alt="" className="w-full h-full object-cover" />
    </div>
  );
}
