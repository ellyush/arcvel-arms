"use client";
type FeaturedProductCardProps = {
  imgSrc: string;
  title: string;
  description: string;
};

export default function FeaturedProductCard({
  imgSrc,
  title,
  description,
}: FeaturedProductCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg md:shadow-none">
      <img src={imgSrc} alt={title} className="w-full object-cover" />
      <div className="flex absolute inset-0 bg-black/80 lg:bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 items-center justify-center p-6">
        <div className="text-mywhite text-center w-full lg:w-2xl translate-y-8 group-hover:translate-y-0 transition duration-500">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-sm md:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}
