import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-mygray text-mywhite pt-20 pb-8 border-t-4 border-myyellow">
      <div className="max-w-7xl mx-auto px-8">
        {/* --- GRID CONTENT (4 KOLOM) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          {/* Kolom 1: Connect With Us */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bartle text-2xl text-myyellow mb-6 uppercase tracking-wider">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              {/* Social Icons */}
              <Link
                href="#"
                className="hover:scale-110 transition duration-300"
              >
                <img
                  src="/instagram.svg"
                  alt="Instagram"
                  className="w-8 h-8 invert opacity-70 hover:opacity-100"
                />
              </Link>
              <Link
                href="#"
                className="hover:scale-110 transition duration-300"
              >
                <img
                  src="/facebook.svg"
                  alt="Facebook"
                  className="w-8 h-8 opacity-70 hover:opacity-100"
                />
              </Link>
              <Link
                href="#"
                className="hover:scale-110 transition duration-300"
              >
                <img
                  src="/youtube.svg"
                  alt="YouTube"
                  className="w-8 h-8 opacity-70 hover:opacity-100"
                />
              </Link>
              <Link
                href="#"
                className="hover:scale-110 transition duration-300"
              >
                <img
                  src="/twiter.svg"
                  alt="Twitter"
                  className="w-8 h-8 opacity-70 hover:opacity-100"
                />
              </Link>
            </div>
          </div>

          {/* Kolom 2: Main HQ */}
          <div>
            <h3 className="font-bartle text-2xl text-myyellow mb-6 uppercase tracking-wider">
              Main HQ
            </h3>
            <div className="font-titillium text-white/80 space-y-2">
              <p>56th Warfighter Way</p>
              <p>Black Creek, GA 31308</p>
              <p className="mt-4 text-white/50 text-sm">
                Monday - Friday 8AM - 5PM EST
              </p>
            </div>
          </div>

          {/* Kolom 3: Call Center */}
          <div>
            <h3 className="font-bartle text-2xl text-myyellow mb-6 uppercase tracking-wider">
              Call Center
            </h3>
            <div className="font-titillium text-white/80 space-y-2">
              <p className="text-xl font-bold tracking-widest">
                +1 444 525 333
              </p>
              <p className="text-white/50 text-sm">24 Hours / 7 Days a Week</p>
            </div>
          </div>

          {/* Kolom 4: Email */}
          <div>
            <h3 className="font-bartle text-2xl text-myyellow mb-6 uppercase tracking-wider">
              Email
            </h3>
            <div className="font-titillium text-white/80">
              <a
                href="mailto:arcvelarmsweaponery@gmail.com"
                className="hover:text-myyellow transition border-b border-transparent hover:border-myyellow pb-1"
              >
                arcvelarmsweaponery@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* --- COPYRIGHT SECTION --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center justify-center text-center">
          <p className="font-titillium text-white/40 text-sm">
            © 2025 Arcvel Arms. All Rights Reserved.
          </p>
          <p className="font-bartle text-myyellow/60 text-xs mt-2 tracking-[0.2em] uppercase">
            Precision Leads to Perfection.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
