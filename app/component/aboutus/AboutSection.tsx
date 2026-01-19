import AboutImage from "./AboutImage";
import AboutDesc from "./AboutDesc";

export default function AboutSection() {
  return (
    <section>
      <section className="w-full max-w-6xl px-4 mx-auto grid grid-cols-1 lg:grid-cols-10 gap-4 mb-4">
        <AboutImage srcImg="/industry.jpg" slide="right" />
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
          slide="left"
        />
      </section>
      <section className="w-full max-w-6xl px-4 mx-auto grid grid-cols-1 lg:grid-cols-10 gap-4 mb-4">
        <AboutDesc
          title="Advanced Manufacturing Technology"
          description="To maintain high standards of quality and consistency, Arcvel Arms
            utilizes modern manufacturing technologies and precision-controlled
            assembly systems. Each component is produced and assembled using
            calibrated machinery designed to meet strict dimensional and
            material tolerances. This approach minimizes variation, ensures
            repeatability, and allows every unit to meet the same performance
            benchmarks regardless of production volume."
          slide="right"
        />
        <AboutImage srcImg="/machine.jpg" slide="left" />
      </section>
      <section className="w-full max-w-6xl px-4 mx-auto grid grid-cols-1 lg:grid-cols-10 gap-4 mb-4">
        <AboutImage srcImg="/expert.jpg" slide="right" />
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
          slide="left"
        />
      </section>
      <section className="w-full max-w-6xl px-4 mx-auto grid grid-cols-1 lg:grid-cols-10 gap-4 mb-4">
        <AboutDesc
          title="Advanced Manufacturing Technology"
          description="To maintain high standards of quality and consistency, Arcvel Arms
            utilizes modern manufacturing technologies and precision-controlled
            assembly systems. Each component is produced and assembled using
            calibrated machinery designed to meet strict dimensional and
            material tolerances. This approach minimizes variation, ensures
            repeatability, and allows every unit to meet the same performance
            benchmarks regardless of production volume."
          slide="right"
        />
        <AboutImage srcImg="/rnd.jpg" slide="left" />
      </section>
    </section>
  );
}
