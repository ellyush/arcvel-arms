"use client";
import RevealOnScroll from "@/app/hooks/RevealOnScroll";

type WhyUsItemProps = {
  title: string;
  description: string;
  hasBorder?: boolean;
};
export default function WhyUsItem({
  title,
  description,
  hasBorder = false,
}: WhyUsItemProps) {
  RevealOnScroll;
  return (
    <div
      className={`reveal opacity-0 translate-y-12 transition-all duration-700 ease-out 
        ${hasBorder ? "lg:border-r border-mygray lg:pr-12" : ""}`}
    >
      <h2 className="text-xl mb-4 md:mb-6 text-myyellow font-bartle">
        {title}
      </h2>
      <p className="text-mygray leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}
