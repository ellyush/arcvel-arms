"use client";

import { notFound } from "next/navigation"; // Opsional: untuk handle jika data tidak ketemu
import Image from "next/image";
import Sidebar from "../component/sidebar"; // Sesuaikan path import
import Navbar from "../component/navbar"; // Sesuaikan path import
import Footer from "../component/footer"; // Sesuaikan path import

// --- 1. DATA HARDCODE (Simulasi Database) ---
const productData = [
  {
    slug: "arc-d7-hb", // Unique ID untuk URL
    categories: "Assault Rifle",
    title: "ARC-D7 HB",
    desc: "Designed for operators who prioritize maximum stability and sustained accuracy, the ARC-D7 Heavy Barrel variant excels in prolonged engagements. Its reinforced barrel profile minimizes heat distortion and recoil impulse, allowing consistent shot placement during high-volume fire. Ideal for scenarios where precision under pressure and endurance matter most, without compromising the ARC-D7’s core reliability.",
    imgSrc: "/ARCD7.png",
    // Tambahan Data Spesifikasi Khusus untuk Halaman Detail
    specs: {
      caliber: "5.56x45mm NATO",
      barrelLength: "20 inch (Heavy Barrel)",
      weight: "3.8 kg (Empty)",
      effectiveRange: "600m",
      action: "Gas-operated, rotating bolt",
      magCapacity: "30 Rounds",
    },
  },
  {
    slug: "arc-d7-mb",
    categories: "Assault Rifle",
    title: "ARC-D7 MB",
    desc: "The ARC-D7 Medium Barrel variant strikes the perfect balance between control and agility. Optimized for versatility, it delivers reliable accuracy with improved maneuverability, making it suitable for dynamic operations across varied environments. This variant maintains excellent heat management while keeping the carbine responsive and adaptable.",
    imgSrc: "/ARCD7.png",
    specs: {
      caliber: "5.56x45mm NATO",
      barrelLength: "16 inch (Medium Barrel)",
      weight: "3.4 kg (Empty)",
      effectiveRange: "500m",
      action: "Gas-operated, rotating bolt",
      magCapacity: "30 Rounds",
    },
  },
  // ... Tambahkan data produk lainnya di sini jika perlu
];

export default function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  // --- 2. LOGIKA MENCARI DATA (Simulasi Fetching) ---
  // Kita cari produk yang slug-nya cocok dengan URL
  // Jika Anda ingin test tanpa routing, ganti 'params.slug' dengan string manual misal "arc-d7-hb"
  const product = productData.find((p) => p.slug === params.slug);

  // Jika produk tidak ditemukan (opsional)
  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex flex-col bg-mywhite">
      <Navbar />

      <div className="flex flex-1 pt-20">
        <Sidebar />

        {/* --- MAIN CONTENT AREA --- */}
        <div className="w-full px-8 py-10 lg:px-16">
          {/* Breadcrumb sederhana */}
          <div className="text-sm text-gray-500 mb-6">
            <span className="hover:underline cursor-pointer">Products</span> /
            <span className="hover:underline cursor-pointer ml-1">
              {product.categories}
            </span>{" "}
            /
            <span className="font-semibold ml-1 text-black">
              {product.title}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Bagian Kiri: Gambar */}
            <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center border border-gray-200">
              <div className="relative w-full h-[300px] lg:h-[400px]">
                {/* Pastikan width/height sesuai atau gunakan fill */}
                <Image
                  src={product.imgSrc}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Bagian Kanan: Detail & Spesifikasi */}
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-indigo-600 font-bold uppercase tracking-wide text-sm mb-2">
                  {product.categories}
                </h4>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                  {product.title}
                </h1>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {product.desc}
                </p>
              </div>

              {/* Tabel Spesifikasi */}
              <div className="mt-4 border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-1 gap-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div
                      key={key}
                      className="grid grid-cols-2 border-b border-gray-100 pb-2 last:border-0"
                    >
                      <span className="text-gray-500 capitalize font-medium">
                        {key.replace(/([A-Z])/g, " $1").trim()}{" "}
                        {/* Regex untuk spasi CamelCase */}
                      </span>
                      <span className="text-gray-900 font-semibold text-right lg:text-left">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tombol Action (Opsional) */}
              <div className="flex gap-4 mt-4">
                <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                  Contact Sales
                </button>
                <button className="border border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
