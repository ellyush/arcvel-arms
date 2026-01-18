"use client";
import SlideEffect from "@/app/hooks/SlideEffect";
type AboutDescProps = {
  title: string;
  description: string;
};

export default function AboutDesc({ title, description }: AboutDescProps) {
  SlideEffect();

  return (
    <div className="slide-left opacity-0 translate-x-50 col-span-1 lg:col-span-4 bg-myyellow text-myblack py-8 lg:py-12 px-8 lg:px-12 flex flex-col justify-center order-2">
      <h2 className="text-lg lg:text-xl mb-4">{title}</h2>
      <p className="text-sm lg:text-md leading-relaxed">{description}</p>
    </div>
  );
}
