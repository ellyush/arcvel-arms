"use client";
import Navbar from "../component/navbar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Footer from "../component/footer";
import { motion } from "framer-motion";

export default function AboutUs() {
  useEffect(() => {
    const elements = document.querySelectorAll(".slide-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "-translate-x-50");
            entry.target.classList.add(
              "opacity-100",
              "translate-x-0",
              "transition-all",
              "duration-700"
            );
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });

  useEffect(() => {
    const elements = document.querySelectorAll(".slide-left");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-x-50");
            entry.target.classList.add(
              "opacity-100",
              "translate-x-0",
              "transition-all",
              "duration-700"
            );
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });

  return (
    <div>
      <Navbar />
      <div className="w-full h-full bg-mywhite py-20">
        <h1 className="py-12 text-5xl text-myyellow text-center">About Us</h1>
        <section className="w-3/4 mx-auto grid grid-cols-10 gap-8 h-120 mb-8">
          {/* IMAGE */}
          <div className="slide-right opacity-0 -translate-x-50 col-span-6 h-full">
            <img
              src="/industry.jpg"
              alt=""
              className="w-full h-120 object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="slide-left opacity-0 translate-x-50 col-span-4 bg-myyellow text-myblack py-12 px-12 flex flex-col justify-center">
            <h2 className="text-xl mb-4">Our Foundation</h2>
            <p className="text-md">
              Arcvel Arms was established with a clear and focused objective: to
              manufacture reliable, precise, and consistent weapon systems
              through disciplined processes and professional expertise.
              Operating as a dedicated firearms manufacturing facility, the
              company emphasizes controlled production environments, technical
              accuracy, and long-term sustainability. Every stage of development
              is structured to ensure that performance, durability, and
              consistency remain uncompromised across all product lines.
            </p>
          </div>
        </section>
        <section className="w-3/4 mx-auto grid grid-cols-10 gap-8 h-120 mb-8">
          {/* TEXT */}
          <div className="slide-right opacity-0 -translate-x-50 col-span-4 bg-myyellow text-myblack py-12 px-12 flex flex-col justify-center">
            <h2 className="text-xl mb-4">Advanced Manufacturing Technology</h2>
            <p className="text-md">
              To maintain high standards of quality and consistency, Arcvel Arms
              utilizes modern manufacturing technologies and
              precision-controlled assembly systems. Each component is produced
              and assembled using calibrated machinery designed to meet strict
              dimensional and material tolerances. This approach minimizes
              variation, ensures repeatability, and allows every unit to meet
              the same performance benchmarks regardless of production volume.
            </p>
          </div>

          {/* IMAGE */}
          <div className="slide-left opacity-0 translate-x-50 col-span-6 h-120">
            <img
              src="/machine.jpg"
              alt=""
              className="w-full h-120 object-cover"
            />
          </div>
        </section>
        <section className="w-3/4 mx-auto grid grid-cols-10 gap-8 h-120 mb-8">
          {/* IMAGE */}
          <div className="slide-right opacity-0 -translate-x-50 col-span-6 h-full">
            <img
              src="/expert.jpg"
              alt=""
              className="w-full h-120 object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="slide-left opacity-0 translate-x-50 col-span-4 bg-myyellow text-myblack py-12 px-12 flex flex-col justify-center">
            <h2 className="text-xl mb-4">Our Foundation</h2>
            <p className="text-md">
              Arcvel Arms was established with a clear and focused objective: to
              manufacture reliable, precise, and consistent weapon systems
              through disciplined processes and professional expertise.
              Operating as a dedicated firearms manufacturing facility, the
              company emphasizes controlled production environments, technical
              accuracy, and long-term sustainability. Every stage of development
              is structured to ensure that performance, durability, and
              consistency remain uncompromised across all product lines.
            </p>
          </div>
        </section>
        <section className="w-3/4 mx-auto grid grid-cols-10 gap-8 h-120 mb-8">
          {/* TEXT */}
          <div className="slide-right opacity-0 -translate-x-50 col-span-4 bg-myyellow text-myblack py-12 px-12 flex flex-col justify-center">
            <h2 className="text-xl mb-4">Advanced Manufacturing Technology</h2>
            <p className="text-md">
              To maintain high standards of quality and consistency, Arcvel Arms
              utilizes modern manufacturing technologies and
              precision-controlled assembly systems. Each component is produced
              and assembled using calibrated machinery designed to meet strict
              dimensional and material tolerances. This approach minimizes
              variation, ensures repeatability, and allows every unit to meet
              the same performance benchmarks regardless of production volume.
            </p>
          </div>

          {/* IMAGE */}
          <div className="slide-left opacity-0 translate-x-50 col-span-6 h-120">
            <img src="/rnd.jpg" alt="" className="w-full h-120 object-cover" />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
