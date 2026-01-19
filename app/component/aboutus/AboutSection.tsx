import AboutImage from "./AboutImage";
import AboutDesc from "./AboutDesc";

export default function AboutSection() {
  return (
    <section className="w-full max-w-6xl px-4 mx-auto grid grid-cols-1 lg:grid-cols-10 gap-4 mb-4">
      <AboutImage SrcImg="/industry.jpg" />
      <AboutDesc
        title="Our Foundation"
        description="Arcvel Arms was established with a clear and focused objective: to
                      manufacture reliable, precise, and consistent weapon systems
                      through disciplined processes and professional expertise.
                      Operating as a dedicated firearms manufacturing facility, the
                      company emphasizes controlled production environments, technical
                      accuracy, and long-term sustainability. Every stage of development
                      is structured to ensure that performance, durability, and
                      consistency remain uncompromised across all product lines."
      />
    </section>
  );
}
