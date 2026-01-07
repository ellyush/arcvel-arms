"use client";

import Navbar from "../component/navbar";
import Footer from "../component/footer";
// Pastikan import Variants ada
import { motion, Variants } from "framer-motion";

// Pindahkan varian ke luar komponen (Best Practice)
const reveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen bg-mywhite py-20">
        <h1 className="py-12 text-5xl text-myyellow text-center font-bartle">
          About Us
        </h1>

        {/* --- SECTION 1 --- */}
        <section className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-10 gap-8 h-auto md:h-120 mb-8">
          {/* IMAGE */}
          <motion.div
            className="col-span-1 md:col-span-6 h-full overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/industry.jpg"
              alt="Industry"
              className="w-full h-full object-cover"
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            className="col-span-1 md:col-span-4 bg-myyellow text-myblack py-12 px-8 md:px-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl mb-4 font-bold">Our Foundation</h2>
            <p className="text-base md:text-md leading-relaxed">
              Arcvel Arms was established with a clear and focused objective: to
              manufacture reliable, precise, and consistent weapon systems
              through disciplined processes and professional expertise.
            </p>
          </motion.div>
        </section>

        {/* --- SECTION 2 --- */}
        <section className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-10 gap-8 h-auto md:h-120 mb-8">
          {/* TEXT (Kiri) */}
          <motion.div
            className="col-span-1 md:col-span-4 bg-myyellow text-myblack py-12 px-8 md:px-12 flex flex-col justify-center order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl mb-4 font-bold">
              Advanced Manufacturing Technology
            </h2>
            <p className="text-base md:text-md leading-relaxed">
              To maintain high standards of quality and consistency, Arcvel Arms
              utilizes modern manufacturing technologies and
              precision-controlled assembly systems.
            </p>
          </motion.div>

          {/* IMAGE (Kanan) */}
          <motion.div
            className="col-span-1 md:col-span-6 h-full overflow-hidden order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/machine.jpg"
              alt="Machine"
              className="w-full h-full object-cover"
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            />
          </motion.div>
        </section>

        {/* --- SECTION 3 --- */}
        <section className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-10 gap-8 h-auto md:h-120 mb-8">
          {/* IMAGE */}
          <motion.div
            className="col-span-1 md:col-span-6 h-full overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/expert.jpg"
              alt="Expert"
              className="w-full h-full object-cover"
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            className="col-span-1 md:col-span-4 bg-myyellow text-myblack py-12 px-8 md:px-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl mb-4 font-bold">Expertise & Precision</h2>
            <p className="text-base md:text-md leading-relaxed">
              Operating as a dedicated firearms manufacturing facility, the
              company emphasizes controlled production environments, technical
              accuracy, and long-term sustainability.
            </p>
          </motion.div>
        </section>

        {/* --- SECTION 2 --- */}
        <section className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-10 gap-8 h-auto md:h-120 mb-8">
          {/* TEXT (Kiri) */}
          <motion.div
            className="col-span-1 md:col-span-4 bg-myyellow text-myblack py-12 px-8 md:px-12 flex flex-col justify-center order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl mb-4 font-bold">
              Advanced Manufacturing Technology
            </h2>
            <p className="text-base md:text-md leading-relaxed">
              To maintain high standards of quality and consistency, Arcvel Arms
              utilizes modern manufacturing technologies and
              precision-controlled assembly systems.
            </p>
          </motion.div>

          {/* IMAGE (Kanan) */}
          <motion.div
            className="col-span-1 md:col-span-6 h-full overflow-hidden order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/machine.jpg"
              alt="Machine"
              className="w-full h-full object-cover"
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            />
          </motion.div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
