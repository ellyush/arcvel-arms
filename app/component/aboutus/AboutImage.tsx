"use client";
import SlideEffect from "@/app/hooks/SlideEffect";
type AboutImageProps = {
  SrcImg: string;
};
export default function AboutImage({ SrcImg }: AboutImageProps) {
  SlideEffect();
  return (
    <div className="slide-right opacity-0 -translate-x-50 col-span-1 lg:col-span-6 h-full order-1">
      <img src={SrcImg} alt="" className="w-full h-full object-cover" />
    </div>
  );
}
