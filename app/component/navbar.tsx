import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-mywhite flex justify-between text-mygray items-center px-10 h-20 fixed top-0 z-50 w-full border-b border-mygray">
      <div className="w-60 flex items-center justify-center gap-2">
        <Image
          alt="Arcvel Arms Logo"
          src="/arcvel.svg"
          width={80}
          height={80}
          className=""
        />
        <h1 className="text-lg text-mygray">ARCVEL ARMS</h1>
      </div>
      <div className="flex gap-20 text-xl">
        <a href="#" className="hover:text-myred-700 transition">
          Home
        </a>
        <a href="#" className="hover:text-myred-700 transition">
          Our Products
        </a>
        <a href="#" className="hover:text-myred-700 transition">
          About Us
        </a>
        <a href="#" className="hover:text-myred-700 transition">
          Contact Us
        </a>
      </div>
      <div className="flex items-center w-60 text-sm justify-center">
        <input
          type="search"
          placeholder="Search products..."
          className="h-9 px-3 rounded-l-sm border border-r-0 appearance-none outline-none focus:outline-none"
        />
        <button
          type="submit"
          className="h-9 px-4 rounded-r-sm bg-myred text-white hover:bg-myred-700 transition"
        >
          Search
        </button>
      </div>
    </nav>
  );
}
