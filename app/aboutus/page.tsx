"use client";
import Navbar from "../component/navbar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Footer from "../component/footer";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="relative w-full h-full bg-mywhite">
        <section className="w-full h-full grid-cols-1 mx-auto">
          <div className="w-1/2 relative mx-auto">
            <img src="/industry.jpg" alt="" className="" />
          </div>
        </section>
      </div>
      <div className="relative w-full h-full bg-mywhite py-60">
        <section className="w-full h-full grid-cols-1 mx-auto">
          <div className="w-1/2 relative mx-auto">
            <img src="/industry.jpg" alt="" className="mx-auto object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-myyellow mt-62">
              <h1 className="text-4xl md:text-5xl font-bold text-center mt-8 text-myblack">
                About Us
              </h1>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
