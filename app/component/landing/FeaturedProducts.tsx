"use client";
import FeaturedProductCard from "./FeaturedProductCard";

export default function FeaturedProducts() {
  return (
    <section
      id="featured"
      className="relative min-h-screen bg-mywhite px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center py-20 md:py-32"
    >
      <h1 className="text-4xl md:text-5xl text-myyellow text-center mb-8 md:mb-0">
        FEATURED PRODUCTS
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-12 md:gap-24 py-8">
        <FeaturedProductCard
          imgSrc="/featuredgun.svg"
          title="ARC-D7"
          description="The ARC-D7 is a 5.56×45mm NATO short-barrel carbine designed for high precision, superior mobility, and unmatched reliability. Built with an ergonomic, lightweight frame, it ensures maximum control and ease of use in close-quarters and mid-range combat."
        />
        <FeaturedProductCard
          imgSrc="/featuredgun2.svg"
          title="ARC-M18"
          description="The ARC-M18 is a 7.62×51mm NATO long-barrel rifle designed for
                mid-range superiority with an effective range beyond standard
                marksman rifles. Combining exceptional accuracy, lightweight
                construction, and full customization, it delivers unmatched
                performance for military and law enforcement marksmen."
        />
      </div>
      <button
        onClick={() => {
          window.location.href = "#";
        }}
        type="submit"
        className="bg-myred text-mywhite px-8 py-3 md:px-12 md:py-4 rounded-sm hover:bg-myred-700 transition text-lg md:text-lg font-semibold mt-4 cursor-pointer w-full md:w-auto"
      >
        See All Products
      </button>
    </section>
  );
}
