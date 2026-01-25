"use client";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import ProductCard from "../component/ourproducts/ProductCard";
export default function OurProducts() {
  return (
    <section className="grid">
      <Navbar />
      <div className="flex pt-20">
        <Sidebar />
        <div className="w-full h-full bg-mywhite py-20">
          <ProductCard
            categories="Assault Rifle"
            title="ARC-D7 HB"
            desc="Designed for operators who prioritize maximum stability and sustained accuracy, the ARC-D7 Heavy Barrel variant excels in prolonged engagements. Its reinforced barrel profile minimizes heat distortion and recoil impulse, allowing consistent shot placement during high-volume fire. Ideal for scenarios where precision under pressure and endurance matter most, without compromising the ARC-D7’s core reliability."
            imgSrc="/ARCD7.png"
          />
          <ProductCard
            categories="Assault Rifle"
            title="ARC-D7 MB"
            desc="The ARC-D7 Medium Barrel variant strikes the perfect balance between control and agility. Optimized for versatility, it delivers reliable accuracy with improved maneuverability, making it suitable for dynamic operations across varied environments. This variant maintains excellent heat management while keeping the carbine responsive and adaptable."
            imgSrc="/ARCD7.png"
          />
          <ProductCard
            categories="Assault Rifle"
            title="ARC-D7 LB"
            desc="Built for speed, mobility, and rapid handling, the ARC-D7 Light Barrel variant is engineered for fast-paced operations. Its reduced barrel weight enhances maneuverability and target transitions, making it ideal for close to mid-range engagements where responsiveness is critical. Despite its lightweight profile, it retains the precision and dependability expected from the ARC-D7 platform."
            imgSrc="/ARCD7.png"
          />
          <ProductCard
            categories="Marksman Rifle"
            title="ARC-M18 HB"
            desc="Built for speed, mobility, and rapid handling, the ARC-D7 Light Barrel variant is engineered for fast-paced operations. Its reduced barrel weight enhances maneuverability and target transitions, making it ideal for close to mid-range engagements where responsiveness is critical. Despite its lightweight profile, it retains the precision and dependability expected from the ARC-D7 platform."
            imgSrc="/ARCM18.png"
          />
          <ProductCard
            categories="Marksman Rifle"
            title="ARC-M18 MB"
            desc="Built for speed, mobility, and rapid handling, the ARC-D7 Light Barrel variant is engineered for fast-paced operations. Its reduced barrel weight enhances maneuverability and target transitions, making it ideal for close to mid-range engagements where responsiveness is critical. Despite its lightweight profile, it retains the precision and dependability expected from the ARC-D7 platform."
            imgSrc="/ARCM18.png"
          />
          <ProductCard
            categories="Marksman Rifle"
            title="ARC-M18 LB"
            desc="Built for speed, mobility, and rapid handling, the ARC-D7 Light Barrel variant is engineered for fast-paced operations. Its reduced barrel weight enhances maneuverability and target transitions, making it ideal for close to mid-range engagements where responsiveness is critical. Despite its lightweight profile, it retains the precision and dependability expected from the ARC-D7 platform."
            imgSrc="/ARCM18.png"
          />
          <ProductCard
            categories="Hunting Rifle"
            title="ARC-S600 HB"
            desc="Built for speed, mobility, and rapid handling, the ARC-D7 Light Barrel variant is engineered for fast-paced operations. Its reduced barrel weight enhances maneuverability and target transitions, making it ideal for close to mid-range engagements where responsiveness is critical. Despite its lightweight profile, it retains the precision and dependability expected from the ARC-D7 platform."
            imgSrc="/ARCS600.png"
          />
          <ProductCard
            categories="Hunting Rifle"
            title="ARC-S600 MB"
            desc="Built for speed, mobility, and rapid handling, the ARC-D7 Light Barrel variant is engineered for fast-paced operations. Its reduced barrel weight enhances maneuverability and target transitions, making it ideal for close to mid-range engagements where responsiveness is critical. Despite its lightweight profile, it retains the precision and dependability expected from the ARC-D7 platform."
            imgSrc="/ARCS600.png"
          />
          <ProductCard
            categories="Hunting Rifle"
            title="ARC-S600 LB"
            desc="Built for speed, mobility, and rapid handling, the ARC-D7 Light Barrel variant is engineered for fast-paced operations. Its reduced barrel weight enhances maneuverability and target transitions, making it ideal for close to mid-range engagements where responsiveness is critical. Despite its lightweight profile, it retains the precision and dependability expected from the ARC-D7 platform."
            imgSrc="/ARCS600.png"
          />
        </div>
      </div>

      <Footer />
    </section>
  );
}
